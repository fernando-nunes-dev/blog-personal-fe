// app/layout.tsx
import './globals.css'; // <-- ESSA LINHA É ESSENCIAL!
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog Pessoal Moderno',
  description: 'Um blog pessoal simples criado com Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen flex flex-col`}>
        <header className="bg-gray-800 p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition-colors">
              Meu Blog
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                Sobre
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 p-4 text-center text-gray-400 mt-8">
          <p>© 2025 Meu Blog Pessoal. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
};