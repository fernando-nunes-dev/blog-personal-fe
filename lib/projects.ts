export const projects = [
  {
    slug: 'pagina-diario',
    title: 'Página de Diário',
    summary: 'Projeto front-end em HTML semântico e CSS, com layout responsivo utilizando Flexbox/Grid.',
    date: 'Entrega: Julho/2025',
    content: `
      <p>Este projeto foi focado na criação de uma interface limpa e funcional para um diário online.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3 text-cyan-400">Objetivos e Aprendizados:</h3>
      <ul class="list-disc list-inside space-y-2">
          <li>Estruturação com <strong>HTML semântico</strong> para acessibilidade e SEO.</li>
          <li>Uso avançado de <strong>Flexbox e Grid Layout</strong> para criar um design totalmente responsivo.</li>
          <li>Prática de manipulação do DOM para interatividade com o usuário.</li>
      </ul>
    `
  },
  {
    slug: 'exercicios-nodejs',
    title: 'Exercícios de Node.js',
    summary: 'Repositório com exercícios divididos por temas, focado em lógica e organização com Git.',
    date: 'Em Andamento',
    content: `
      <p>Este repositório serve como minha base de estudos e prática de lógica de programação com JavaScript no ambiente Node.js.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3 text-cyan-400">Principais Características:</h3>
      <ul class="list-disc list-inside space-y-2">
          <li>Exercícios categorizados por temas: strings, matemática, condicionais, loops.</li>
          <li>Aplicação do fluxo de trabalho com <strong>Git</strong>, usando branches para cada tema.</li>
          <li>Commits individuais para cada exercício resolvido, mantendo um histórico limpo e organizado.</li>
          <li>Abertura de Pull Requests para simular um ambiente de colaboração.</li>
      </ul>
    `
  },
  {
    slug: 'outros-projetos',
    title: 'Outros Projetos em Desenvolvimento',
    summary: 'Protótipos em React com foco em UI/UX e estudos de Cloud para aplicações escaláveis.',
    date: 'Estudo Contínuo',
    content: `
      <p>Além dos projetos principais, estou constantemente explorando novas tecnologias e conceitos através de pequenos protótipos e provas de conceito.</p>
      <h3 class="text-2xl font-bold mt-6 mb-3 text-cyan-400">Áreas de Foco:</h3>
      <ul class="list-disc list-inside space-y-2">
          <li><strong>React:</strong> Construção de interfaces de usuário (UI) reativas e componentizadas.</li>
          <li><strong>UI/UX Design:</strong> Estudos sobre experiência do usuário para criar aplicações mais intuitivas.</li>
          <li><strong>Cloud Computing:</strong> Aprendizado sobre serviços em nuvem para criar aplicações escaláveis e robustas.</li>
      </ul>
    `
  },
];

export function getProjectData(slug: string) {
  return projects.find((p) => p.slug === slug);
}