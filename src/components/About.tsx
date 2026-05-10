import React from 'react';
import { 
  Code2, 
  Terminal, 
  Globe, 
  ShieldCheck 
} from "lucide-react";
import Title from "./Title";


const About: React.FC = () => {
  const skills = [
    {
      icon: <Globe className="text-[#50fa7b] w-8 h-8" />, 
      title: "Développement Web",
      desc: "Fullstack (PHP/MySQL) et Front-end (HTML/CSS/JS) avec focus accessibilité.",
    },
    {
      icon: <Terminal className="text-[#50fa7b] w-8 h-8" />,
      title: "Python & Automation",
      desc: "Scripts système, monitoring Linux (/proc) et traitement de données CSV.",
    },
    {
      icon: <ShieldCheck className="text-[#50fa7b] w-8 h-8" />,
      title: "Cybersécurité",
      desc: "Sécurisation réseau (Cisco), protocoles TCP/IP et entraînement TryHackMe.",
    },
    {
      icon: <Code2 className="text-[#50fa7b] w-8 h-8" />,
      title: "Langages & Outils",
      desc: "Maîtrise de Git/GitHub et apprentissage autonome du C++ et C#.",
    },
  ];

  return (
    <section 
      id="About" 
      className="p-10 mb-10 md:mb-32 rounded-3xl shadow-2xl border border-white/10"
      style={{ backgroundColor: '#21222c' }} 
    >
      <Title title="À propos" />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
        <div className="hidden md:block shrink-0">
          <img 
            src="https://tse3.mm.bing.net/th/id/OIP.iDFnf0rKod9GMbotdJInwAHaHY?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Yanis Nouri" 
            className="w-80 h-96 object-cover rounded-2xl border-2 border-[#50fa7b]/20 shadow-2xl" 
          />
        </div>

        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-[#50fa7b]/30 transition-all duration-300"
              style={{ backgroundColor: '#282a36' }} 
            >
              <div className="p-2 rounded-lg shadow-inner" style={{ backgroundColor: '#44475a' }}>
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#50fa7b] text-lg">{skill.title}</h3>
                <p className="text-sm font-medium max-w-md text-white">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;