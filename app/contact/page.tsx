import { Phone, Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-xl mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Vamos Conversar!</h1>
      <p className="text-center text-gray-400 text-lg mb-10">
        Estou sempre aberto a novas oportunidades e colaborações.
      </p>
      <div className="space-y-6">
        <a href="tel:47988908320" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
          <Phone size={24} className="text-cyan-400" />
          <span className="text-lg text-gray-300">(47) 98890-8320</span>
        </a>
        <a href="mailto:fernandonunes198326@gmail.com" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
          <Mail size={24} className="text-cyan-400" />
          <span className="text-lg text-gray-300">fernandonunes198326@gmail.com</span>
        </a>
        <a href="https://github.com/fernando-nunes-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
          <Github size={24} className="text-cyan-400" />
          <span className="text-lg text-gray-300">github.com/fernando-nunes-dev</span>
        </a>
        <a href="https://www.linkedin.com/in/fernando-nunes-dev30/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
          <Linkedin size={24} className="text-cyan-400" />
          <span className="text-lg text-gray-300">linkedin.com/in/fernando-nunes-dev30</span>
        </a>
      </div>
    </div>
  );
}