import { useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import UserCard from '../components/UserCard';
import { GitHubUser } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [randomUsers, setRandomUsers] = useState<GitHubUser[]>([]);

  const fetchRandomUsers = async () => {
    const users = await searchGithub();
    setRandomUsers(users);
  };

  const handleSearch = async () => {
    const data = await searchGithubUser(searchTerm);
    setUserData(data);
  };

  const saveUser = (user: GitHubUser) => {
    const savedUsers = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    localStorage.setItem('savedCandidates', JSON.stringify([...savedUsers, user]));
    alert('User saved successfully!');
  };

  return (
    <div className="candidate-search">
      <h1>GitHub Candidate Search</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search User</button>
      </div>

      {userData && (
        <UserCard user={userData} onSave={saveUser} />
      )}

      <button onClick={fetchRandomUsers}>Load Random Users</button>

      <div className="random-users">
        <h2>Random GitHub Users</h2>
        {randomUsers.map((user) => (
          <UserCard key={user.id} user={user} onSave={saveUser} />
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;
