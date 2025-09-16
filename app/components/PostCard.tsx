// app/components/PostCard.tsx
import Link from 'next/link';
import { Star, GitFork } from 'lucide-react';

interface PostCardProps {
  name?: string; // Adicionado '?' para permitir que seja opcional
  description?: string; // Adicionado '?'
  html_url: string;
  language?: string; // Adicionado '?'
  stargazers_count?: number; // Adicionado '?'
  forks_count?: number; // Adicionado '?'
}

const formatRepoName = (name: string = '') => { // Adicionado valor padrão
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

export default function PostCard({ name, description, html_url, language, stargazers_count = 0, forks_count = 0 }: PostCardProps) {
  return (
    <Link href={html_url} target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">{formatRepoName(name)}</h2>
          <p className="text-gray-400 mb-4">{description || 'Sem descrição.'}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span className="text-sm font-semibold text-white px-3 py-1 bg-cyan-600/50 rounded-full">{language || 'N/A'}</span>
            <div className="flex gap-4 text-gray-400">
                <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{forks_count}</span>
                </div>
            </div>
        </div>
      </div>
    </Link>
  );
}