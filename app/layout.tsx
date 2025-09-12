// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { User, Briefcase, FolderGit2, Mail } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Pessoal – Fernando Nunes',
  description: 'Desenvolvedor em formação, criativo por natureza e apaixonado por tecnologia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <header className="bg-gray-800 p-4 shadow-md sticky top-0 z-10">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition-colors">
              Fernando Nunes
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <User size={18} /> Sobre Mim
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <FolderGit2 size={18} /> Projetos
              </Link>
              <Link href="/experience" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Briefcase size={18} /> Experiência
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={18} /> Contato
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 p-4 text-center text-gray-400 mt-8">
          <p>© 2025 Fernando Nunes. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}