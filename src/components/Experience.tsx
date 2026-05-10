import React from 'react';
import Title from "./Title";

export const skills = [
  {
    name: "PHP",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "HTML5",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Excel",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", 
  },
  {
    name: "C++",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Linux",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  }
];

const Experience: React.FC = () => {
  return (
    <section id="Experience" className="py-20">
      <Title title="Mes Expériences" />

      <div className="flex flex-col md:flex-row gap-12 mt-12">
        
        <div className="flex flex-wrap justify-center gap-5 md:w-1/3 h-fit p-6 bg-base-200/50 rounded-3xl border border-white/5">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 shadow-xl hover:scale-110 hover:border-[#50fa7b]/40 transition-all duration-300"
              style={{ backgroundColor: '#282a36' }}
            >
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="w-12 h-12 object-contain group-hover:brightness-125" 
              />
              <span className="text-white/60 group-hover:text-white font-mono text-[10px] mt-2 font-medium uppercase tracking-widest">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="md:w-2/3 flex flex-col gap-10 relative">
          <div className="absolute left-[-2px] top-6 bottom-6 w-0.5 bg-white/5 hidden md:block"></div>

          <div 
            className="relative flex flex-col gap-6 p-10 rounded-3xl border-2 border-[#50fa7b] shadow-[0_0_30px_rgba(80,250,123,0.2)] transition-all"
            style={{ backgroundColor: '#21222c' }}
          >
            <div className="absolute left-[-10px] top-10 w-4 h-4 bg-[#50fa7b] rounded-full border-2 border-[#282a36] hidden md:block"></div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="text-3xl font-extrabold text-[#50fa7b]">Cyber, Admin Système & Dev Web</h3>
                  <p className="text-white font-black text-xl uppercase mt-1">ODIT Gouvernance — Stage</p>
                </div>
                <span className="text-[#8be9fd] font-mono text-sm px-3 py-1 bg-[#8be9fd]/10 rounded-full">Mai 2026 — Présent</span>
              </div>
              
              <ul className="space-y-4 text-white/95 text-base font-medium">
                <li className="flex gap-3">
                  <span className="text-[#50fa7b]">▹</span>
                  <span><strong>Administration & Sécurité :</strong> Sécurisation de serveurs <span className="text-[#bd93f9]">Linux</span> et <span className="text-[#bd93f9]">Windows</span> (Pare-feu, SSL, certificats).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#50fa7b]">▹</span>
                  <span><strong>Développement Web :</strong> Applications sécurisées, authentification et protection des données.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#50fa7b]">▹</span>
                  <span><strong>Supervision :</strong> Analyse des logs réseaux, incidents et automation via <span className="text-[#f1fa8c]">scripts</span>.</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            className="relative flex flex-col gap-6 p-8 rounded-3xl border border-white/5 shadow-xl transition-all"
            style={{ backgroundColor: '#21222c' }}
          >
            <div className="absolute left-[-10px] top-8 w-4 h-4 bg-white/20 rounded-full border-2 border-[#282a36] hidden md:block"></div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-white/80">Community Associate</h3>
                <p className="text-[#bd93f9] font-mono text-sm">Mai 2024 — Août 2024</p>
              </div>
              <p className="text-white/60 font-semibold text-lg mb-3">IWG Regus — Paris</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Responsable administratif et commerciale et gestion logistique. Usage intensif d'<strong>Excel</strong> et <strong>Word</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;