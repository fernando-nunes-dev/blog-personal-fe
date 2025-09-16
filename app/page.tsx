import Image from 'next/image';
import { Github, Linkedin, Mail, Phone, ArrowRight, Code, Palette, Users } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="text-center pt-24 pb-12 flex flex-col items-center">
        <Image
          src="/fernando.png"
          alt="Foto de Fernando Nunes"
          width={300}
          height={300}
          className="rounded-full border-4 border-cyan-400 shadow-lg mb-6"
          priority
        />
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-cyan-400">Olá, eu sou o Fernando Nunes</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
          Desenvolvedor em formação, criativo por natureza e apaixonado por tecnologia.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://github.com/fernando-nunes-dev" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400"><Github size={40} /></a>
          <a href="https://www.linkedin.com/in/fernando-nunes-dev30/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400"><Linkedin size={40} /></a>
        </div>
      </section>

      <section id="about mt-2">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Sobre Mim</h2>
        <div className="bg-gray-800 text-center rounded-lg p-8 max-w-3xl mx-auto shadow-lg text-lg text-gray-300 space-y-4">
          <p>Sou Fernando Nunes, profissional com mais de 20 anos de experiência, sendo 15 na área de <strong>Comunicação Visual</strong>, atuando com CorelDRAW, Adobe Illustrator, Photoshop e operação de plotters, além de técnicas de acabamento e produção de peças visuais personalizadas.</p>
          <br/>
          <p>Atualmente, estou em transição para a área de tecnologia, cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e me especializando em desenvolvimento web (HTML, CSS, JavaScript, React, UI/UX) e Inteligência Artificial.</p>
          <br />
          <p>Tenho paixão por criar soluções funcionais e intuitivas, unir design e tecnologia, e colaborar em equipes para transformar ideias em projetos de reais.</p>
        </div>
      </section>

      <section id="skills">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Code size={40} className="mx-auto text-cyan-400 mb-4"/>
                <h3 className="text-xl font-bold mb-2">Front-end</h3>
                <p className="text-gray-400">HTML, CSS, JavaScript, React, Git, GitHub.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Palette size={40} className="mx-auto text-cyan-400 mb-4"/>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-400">UI/UX, Prototipagem, Comunicação Visual.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
                <Users size={40} className="mx-auto text-cyan-400 mb-4"/>
                <h3 className="text-xl font-bold mb-2">Soft Skills</h3>
                <p className="text-gray-400">Proatividade, Criatividade, Resolução de Problemas.</p>
            </div>
        </div>
      </section>

      <section id="experience">
         <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">Experiência</h2>
         <div className="bg-gray-800 rounded-lg text-center p-8 max-w-4xl mx-auto shadow-lg space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300">Comunicação Visual</h3>
              <p className="text-gray-400 text-sm">15 anos de experiência</p>
               <p className="text-gray-300">
            Atuação em diversas frentes, incluindo atendimento ao cliente, design, arte-finalização de projetos gráficos e operação de plotters de impressão e recorte.
          </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300">Motorista de Aplicativo</h3>
              <p className="text-gray-400 text-sm">2 anos - Motorista Platinum 5 estrelas</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300">Voluntariado no TDC Florianópolis 2025</h3>
               <p className="text-gray-400 text-sm">Apoio no evento e networking com a comunidade tech.</p>
               <p className="text-gray-300">
            Participei como voluntário, oferecendo apoio na organização do evento. A experiência me proporcionou um contato valioso com a comunidade de tecnologia e um grande aprendizado em networking.
          </p>
            </div>
         </div>
      </section>
    </div>
  );
}