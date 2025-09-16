import LikeButton from '@/app/components/LikeButton';
import { getProjectData } from '@/lib/projects';

export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug);

  if (!project) {
    return <div className="text-center">Projeto não encontrado.</div>;
  }

  return (
    <article className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
      <header className="mb-6 border-b-2 border-cyan-500 pb-4">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-2">{project.title}</h1>
        <div className="text-gray-400 text-sm">
          <span>{project.date}</span>
        </div>
      </header>
      
      <div 
        className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
      
      <div className="mt-8 pt-6 border-t border-gray-700 flex justify-end">
        <LikeButton />
      </div>
    </article>
  );
}