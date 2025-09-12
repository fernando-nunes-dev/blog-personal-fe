// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh]">
      {/* Coloque uma foto sua na pasta `public` e atualize o caminho abaixo */}
      <Image
        src="/sua-foto.jpg" // Ex: /fernando-nunes.jpg
        alt="Foto de Fernando Nunes"
        width={150}
        height={150}
        className="rounded-full border-4 border-cyan-400 shadow-lg"
        priority
      />
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          Fernando Nunes
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Desenvolvedor em formação, criativo por natureza e apaixonado por tecnologia.
        </p>
      </div>
      <Link
        href="/about"
        className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-cyan-600 transition-colors"
      >
        Conheça Minha História <ArrowRight size={20} />
      </Link>
    </div>
  );
}