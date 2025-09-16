'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`
        relative text-lg font-medium transition-colors hover:text-cyan-400
        ${isActive ? 'text-cyan-400' : 'text-gray-300'}
      `}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 -bottom-2 block h-0.5 w-full bg-cyan-400" />
      )}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="bg-gray-800/80 p-4 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-500 transition-colors">
          Fernando Nunes
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projetos</NavLink>
          <NavLink href="/contact">Contato</NavLink>
        </div>
      </nav>
    </header>
  );
}