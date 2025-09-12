// app/projects/page.tsx
import PostCard from '../components/PostCard';

const projects = [
  {
    slug: 'pagina-diario',
    title: 'Página de Diário Interativa',
    summary: 'Projeto front-end em HTML semântico e CSS, com layout responsivo utilizando Flexbox/Grid para registrar pensamentos e experiências.',
    date: 'Entrega: Julho/2025',
  },
  {
    slug: 'exercicios-nodejs',
    title: 'Exercícios de Node.js',
    summary: 'Repositório com exercícios de lógica divididos por temas (strings, matemática, condicionais, loops) e organizados com Gitflow.',
    date: 'Em Andamento',
  },
  {
    slug: 'outros-projetos',
    title: 'Outros Projetos em Desenvolvimento',
    summary: 'Protótipos em React com foco em UI/UX e estudos de Cloud para o desenvolvimento de aplicações escaláveis.',
    date: 'Contínuo',
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Meus Projetos
      </h1>
      <p className="text-center text-gray-400 text-lg">
        Aqui estão alguns dos projetos que desenvolvi durante minha jornada de aprendizado.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <PostCard
            key={project.slug}
            slug={project.slug}
            title={project.title}
            summary={project.summary}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
}