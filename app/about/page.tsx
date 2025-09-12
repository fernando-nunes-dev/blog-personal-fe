import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">Sobre Mim</h1>
      <p className="text-lg text-gray-300 mb-4">
        Olá! Eu sou um desenvolvedor de software apaixonado por criar aplicações web modernas e eficientes. 
        Este blog é um espaço onde compartilho meus aprendizados, projetos e pensamentos sobre o mundo da tecnologia.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        Atualmente, estou focado em aprofundar meus conhecimentos em Next.js, TypeScript e Tailwind CSS.
      </p>

      <h2 className="text-2xl font-bold text-cyan-400 mb-3">Contato e Redes Sociais</h2>
      <ul className="list-none space-y-2">
        <li>
          <Link href="https://github.com" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors">
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
}