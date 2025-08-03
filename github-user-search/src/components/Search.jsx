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
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">GitHub User Search</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <input
          name="username"
          placeholder="GitHub username"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="location"
          placeholder="Location (e.g., Lagos)"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="repos"
          type="number"
          placeholder="Min repos (e.g., 10)"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-3 border rounded shadow-sm"
          >
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
