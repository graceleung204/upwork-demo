"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string;
};

export default function ProjectList() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/graceleung204/repos")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: Repo) =>
          !repo.name.startsWith("test")
        );
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {repos.map(repo => (
        <a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          className="block border p-4 rounded-xl hover:shadow-md bg-white"
        >
          <h2 className="text-xl font-semibold">{repo.name}</h2>
          <p className="text-gray-600">{repo.description}</p>
        </a>
      ))}
    </div>
  );
}
