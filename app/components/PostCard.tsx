'use client';

import Link from 'next/link';
import { Star, GitFork } from 'lucide-react';
import LikeButton from './LikeButton';
interface PostCardProps {
  name?: string;
  description?: string;
  html_url: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

const formatRepoName = (name: string = '') => {
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
};

export default function PostCard({ name, description, html_url, language, stargazers_count = 0, forks_count = 0 }: PostCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 h-full flex flex-col justify-between">
      <Link href={html_url} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">{formatRepoName(name)}</h2>
          <p className="text-gray-400 mb-4 flex-grow">{description || 'Sem descrição.'}</p>
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
      </Link>

      <div className="pt-4 mt-4 border-t border-gray-700 flex justify-end">
        <LikeButton />
      </div>
    </div>
  );
}