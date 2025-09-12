import PostCard from './components/PostCard';

// Dados fictícios para os posts
const posts = [
  {
    slug: 'explorando-nextjs-15',
    title: 'Explorando as Novidades do Next.js 15',
    summary: 'Uma visão geral sobre as features mais recentes e poderosas do Next.js 15, incluindo o App Router e Server Components.',
    date: '08 de Setembro de 2025',
  },
  {
    slug: 'guia-de-tailwind-css',
    title: 'Guia Completo de Tailwind CSS para Iniciantes',
    summary: 'Aprenda como configurar e utilizar Tailwind CSS para criar designs modernos e responsivos de forma rápida e eficiente.',
    date: '05 de Setembro de 2025',
  },
  {
    slug: 'server-vs-client-components',
    title: 'Server vs. Client Components: Entendendo a Diferença',
    summary: 'Um mergulho profundo nas diferenças fundamentais entre Server e Client Components no ecossistema React e Next.js.',
    date: '02 de Setembro de 2025',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-cyan-400">
        Bem-vindo ao Meu Blog
      </h1>
      <p className="text-center text-gray-400 text-lg">
        Artigos sobre desenvolvimento, tecnologia e carreira.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            summary={post.summary}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};