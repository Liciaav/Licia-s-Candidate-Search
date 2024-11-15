import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { GitHubUser } from '../interfaces/Candidate.interface';

const SavedCandidates: React.FC = () => {
  const [savedUsers, setSavedUsers] = useState<GitHubUser[]>([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedUsers(users);
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedUsers.length > 0 ? (
        savedUsers.map((user) => <UserCard key={user.id} user={user} onSave={() => {}} />)
      ) : (
        <p>No saved candidates.</p>
      )}
    </div>
  );
};

export default SavedCandidates;
