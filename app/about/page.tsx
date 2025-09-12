// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Sobre Mim</h1>
      <div className="space-y-4 text-lg text-gray-300">
        <p>
          Tenho mais de 20 anos de experiência no mercado, sendo 15 deles na área de <strong>Comunicação Visual</strong>, onde trabalhei em atendimento, arte-finalização, acabamento e operação de plotters.
        </p>
        <p>
          Atualmente, sou estudante de <strong>Análise e Desenvolvimento de Sistemas na Gran Faculdade</strong>. Minha paixão por tecnologia me levou a focar em desenvolvimento web, aprofundando meus conhecimentos em HTML, CSS, JavaScript e React. Também estou explorando o vasto mundo de UI/UX Design e Cloud Computing.
        </p>
        <p>
          Gosto de gerar novas ideias, resolver problemas de forma criativa e colaborar em projetos inovadores que desafiam meu conhecimento e me permitem crescer profissionalmente.
        </p>
      </div>
    </div>
  );
}