'use client'; 

import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const repoNamesToShow = [
  'gerador-curriculo',
  'jogo-do-numero-secreto',
  'to-do-list',
  'Vanilla-AI-Assistant',
  'consultor-de-cep',
  'projeto-eco-ong',
  'programa-desenvolve-meu-diario',
  'front-end-mentor-projects.github.io',
  'recycle-map-2025',
  'mini-projeto-senai_01',
];

export default function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/fernando-nunes-dev/repos?per_page=100');
        const data = await response.json();
        
        if (!response.ok || !Array.isArray(data)) {
          console.error('Falha ao buscar dados ou formato inesperado:', data);
          setRepos([]);
          return;
        }
        
        const filteredRepos = data.filter((repo: Repo) => repoNamesToShow.includes(repo.name));
        
        const sortedRepos = filteredRepos.sort((a, b) => {
          return repoNamesToShow.indexOf(a.name) - repoNamesToShow.indexOf(b.name);
        });

        setRepos(sortedRepos);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Meus Projetos no GitHub
      </h1>
      <p className="text-center text-gray-400 text-lg">
        Projetos que refletem minha jornada de aprendizado e paixão por desenvolvimento.
      </p>

      {loading ? (
        <p className="text-center text-gray-400">Carregando projetos do GitHub...</p>
      ) : repos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {repos.map((repo) => (
            <PostCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              language={repo.language}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">Nenhum projeto encontrado. Verifique os nomes no código ou no GitHub.</p>
      )}
    </div>
  );
}