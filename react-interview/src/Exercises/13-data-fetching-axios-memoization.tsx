import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

interface Repo {
  name: string;
}

interface Error {
  message: string;
}

const App: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch GitHub repositories for the provided username
  const fetchData = () => {
    axios
      .get<Repo[]>(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  // Memoize the list of repository names
  const repoNames = useMemo(() => {
    return repos.map((repo) => repo.name);
  }, [repos]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>GitHub Repositories for {username}</h2>
      <ul>
        {repoNames.map((repoName) => (
          <li key={repoName}>{repoName}</li>
        ))}
      </ul>
    </div>
  );
};

function Exercise13() {
  return <App username="filipeesf19"></App>;
}

export default Exercise13;
