import axios from "axios";

export const fetchUserData = async ({ username, location, repos }) => {
  const query = [
    username && `${username} in:login`,
    location && `location:${location}`,
    repos && `repos:>=${repos}`,
  ]
    .filter(Boolean)
    .join(" ");

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}`;

  const response = await axios.get(url);
  return response.data.items;
};
