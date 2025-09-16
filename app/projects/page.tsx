import PostCard from '../components/PostCard';
import { projects } from '../../lib/projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Meus Projetos
      </h1>
      <p className="text-center text-gray-400 text-lg">
        Uma seleção de projetos que demonstram minha jornada e habilidades em desenvolvimento.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <PostCard
            key={project.slug}
            slug={`/projects-details/${project.slug}`}
            title={project.title}
            summary={project.summary}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
}