// app/contact/page.tsx
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-xl mx-auto shadow-lg">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Contato</h1>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Phone size={24} className="text-cyan-400" />
          <span className="text-lg text-gray-300">(47) 98890-8320</span>
        </div>
        <div className="flex items-center gap-4">
          <Mail size={24} className="text-cyan-400" />
          <a href="mailto:fernandonunes198326@gmail.com" className="text-lg text-gray-300 hover:text-cyan-400">
            fernandonunes198326@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Github size={24} className="text-cyan-400" />
          <a href="https://github.com/fernando-nunes-dev" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400">
            fernando-nunes-dev
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Linkedin size={24} className="text-cyan-400" />
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-300 hover:text-cyan-400">
            LinkedIn (em breve)
          </a>
        </div>
      </div>
    </div>
  );
}