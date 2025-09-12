// app/posts/[slug]/page.tsx
import LikeButton from '@/app/components/LikeButton';

// Função para buscar dados do post (simulação)
async function getPostData(slug: string) {
  // Em um projeto real, você buscaria isso de um CMS ou banco de dados
  const posts: { [key: string]: any } = {
    'explorando-nextjs-15': {
      title: 'Explorando as Novidades do Next.js 15',
      date: '08 de Setembro de 2025',
      author: 'Seu Nome',
      content: `
        <p>O Next.js 15 chegou com uma série de melhorias, consolidando o App Router como o futuro do desenvolvimento com React.</p>
        <p>Neste post, vamos mergulhar nas principais novidades, como a evolução dos Server Components, melhorias de performance no roteamento e as novas APIs disponíveis para desenvolvedores.</p>
        <h3 class="text-2xl font-bold mt-6 mb-3 text-cyan-400">Principais Destaques</h3>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>App Router Estabilizado:</strong> Mais robusto e com melhor performance.</li>
            <li><strong>Server Actions:</strong> Funções que rodam diretamente no servidor, simplificando mutações de dados.</li>
            <li><strong>Melhorias no Cache:</strong> Controle mais granular sobre o cache de dados.</li>
        </ul>
      `,
    },
    // Adicione os outros posts aqui
  };
  return posts[slug] || null;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    return <div className="text-center">Post não encontrado.</div>;
  }

  return (
    <article className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
      <header className="mb-6 border-b-2 border-cyan-500 pb-4">
        <h1 className="text-4xl font-extrabold text-cyan-400 mb-2">{post.title}</h1>
        <div className="text-gray-400 text-sm">
          <span>Publicado em {post.date} por {post.author}</span>
        </div>
      </header>
      
      <div 
        className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-8 pt-6 border-t border-gray-700 flex justify-end">
        <LikeButton />
      </div>
    </article>
  );
}