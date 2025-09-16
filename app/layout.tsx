// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

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
    <html lang="pt-BR" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="container mx-auto p-4 pt-8 flex-grow">
            {children}
          </main>
          <footer className="bg-gray-800 p-4 text-center text-gray-400">
            <p>© 2025 Fernando Nunes. Todos os direitos reservados.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}