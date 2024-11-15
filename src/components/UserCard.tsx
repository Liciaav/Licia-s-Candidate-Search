import React from 'react';
import { GitHubUser } from '../interfaces/Candidate.interface';

interface UserCardProps {
  user: GitHubUser;
  onSave: (user: GitHubUser) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onSave }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
      <h3>{user.login}</h3>
      <p>ID: {user.id}</p>
      <button onClick={() => onSave(user)}>Save User</button>
    </div>
  );
};

export default UserCard;
