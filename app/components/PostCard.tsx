import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
}

export default function PostCard({ slug, title, summary, date }: PostCardProps) {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 h-full flex flex-col">
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{summary}</p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">{date}</span>
            <span className="text-cyan-400 font-semibold">Ler mais →</span>
        </div>
      </div>
    </Link>
  );
}