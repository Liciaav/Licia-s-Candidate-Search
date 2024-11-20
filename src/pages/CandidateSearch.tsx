import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchGithub, searchGithubUser } from '../api/API';
import UserCard from '../components/UserCard';
import { GitHubUser } from '../interfaces/Candidate.interface';

const CandidateSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [randomUsers, setRandomUsers] = useState<GitHubUser[]>([]);

  const navigate = useNavigate();

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

      <div className="search-section">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search User</button>
      </div>

      {userData && <UserCard user={userData} onSave={saveUser} />}

      <div className="actions">
        <button onClick={fetchRandomUsers}>Load Random Users</button>
        {/* <button onClick={() => navigate('/saved')}>Saved Candidates</button> */}
      </div>

      <div className="random-users">
        {randomUsers.map((user) => (
          <UserCard key={user.id} user={user} onSave={saveUser} />
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;
