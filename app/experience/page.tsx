// app/experience/page.tsx
export default function ExperiencePage() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">Experiência</h1>
      <div className="space-y-8">
        
        <div>
          <h2 className="text-2xl font-semibold text-cyan-300">Comunicação Visual</h2>
          <p className="text-gray-400 text-sm mb-2">15 anos de experiência</p>
          <p className="text-gray-300">
            Atuação em diversas frentes, incluindo atendimento ao cliente, design, arte-finalização de projetos gráficos e operação de plotters de impressão e recorte.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-cyan-300">Uber</h2>
          <p className="text-gray-400 text-sm mb-2">2 anos de experiência</p>
          <p className="text-gray-300">
            Motorista com classificação Platinum e avaliação de 5 estrelas, focado em oferecer um serviço de excelência e segurança aos passageiros.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-cyan-300">Voluntariado - TDC Florianópolis 2025</h2>
          <p className="text-gray-400 text-sm mb-2">Apoio no evento</p>
          <p className="text-gray-300">
            Participei como voluntário, oferecendo apoio na organização do evento. A experiência me proporcionou um contato valioso com a comunidade de tecnologia e um grande aprendizado em networking.
          </p>
        </div>

      </div>
    </div>
  );
}