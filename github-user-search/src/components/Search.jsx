import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const users = await fetchUserData(formData);
      setResults(users);
      if (users.length === 0) {
        setError("Looks like we can't find the user.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="GitHub username"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location (e.g., Lagos)"
          onChange={handleChange}
        />
        <input
          name="repos"
          type="number"
          placeholder="Min repos (e.g., 10)"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p>{error}</p>}

      {results.map((user) => (
        <div key={user.id} style={{ marginTop: "20px" }}>
          <img src={user.avatar_url} alt={user.login} width="50" />
          <p>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      ))}
    </div>
  );
};

export default Search;
