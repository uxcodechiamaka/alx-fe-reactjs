import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter GitHub username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <button type="submit">Search</button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {Loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
