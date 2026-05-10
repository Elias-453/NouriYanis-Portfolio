import React from 'react';
import Title from "./Title";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technos: string[];
  github: string;
}

export const projects = [
 {id: 1,
    title: "SupTaskFlow (Kanban)",
    description: "App de gestion de tâches type Trello : API Strapi + frontend React/Vue. Boards, colonnes, cartes avec drag & drop.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=400",
    technos: ["React", "Strapi", "JWT"],

    github: "https://github.com/Elias-453/SupTaskFlow-Kanban-Collaboratif-_Projet-semestriel2",
  },
  {
    id: 2,
    title: "PHP Movie Website",
    description: "Site de films complet (HTML/PHP/SQL) avec recherche, gestion de panier, profils utilisateurs et historique d'achats.(branche master pour voir le code)",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
    technos: ["PHP", "SQL", "HTML/CSS"],
    github: "https://github.com/Elias-453/PHP_PROJECT",
  },
  {
    id: 3,
    title: "Linux System Report",
    description: "Script Python (stdlib) générant un rapport HTML5 sur l'état du système (CPU, RAM, Processus) avec interface Tkinter en temps réel.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
    technos: ["Python", "Linux", "Tkinter"],
    github: "https://github.com/Elias-453/Projet-Semestriel-Linux-Python-",
  },
  {
    id: 4,
    title: "Yearbook Python",
    description: "Générateur de PDF avec Pillow : création de grilles de photos, gestion de filtres (box blur) et mise en page automatisée.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
    technos: ["Python", "Pillow", "PDF"],
    github: "https://github.com/Elias-453/Yearbook-Python",
  },
  {
    id: 5,
    title: "Projet MySQL World",
    description: "Migration et refonte de la base de données 'World' via scripts SQL. Modélisation complète (MCD/MLD/MPD) avec Merise.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400",
    technos: ["MySQL", "SQL", "Merise"],
    github: "https://github.com/Elias-453/PROJET-MYSQL",
  },
  {
    id: 6,
    title: "E-commerce Animalier",
    description: "Mon premier Projet informatique donc le niveau est faible mais c est largement amélioré par la suite,Site vitrine et boutique pour une association. Conforme aux normes RGAA/WCAG et totalement responsive (Mobile/Tablette).",
    image: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?w=400",
    technos: ["HTML", "CSS", "Accessibilité"],
    github: "https://github.com/Elias-453/Projet-Site-e-commerce-animalier-mon-premier-projet-",
  },
  {
    id: 7,
    title: "Cinema.JS",
    description: "Mini-projet de gestion d'affichage de films pour un cinéma local, développé pour attirer un public jeune.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    technos: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/Elias-453/cinema.JS_projet",
  },
  {
    id: 8,
    title: "Elias-Portfolio",
    description: "Mon portfolio personnel (celui-ci) présentant mes compétences en Cybersécurité et Développement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    technos: ["React", "Tailwind", "Lucide"],
    github: "https://github.com/Elias-453/Elias-Portfolio",
  },
];

const Project: React.FC = () => {
  return (
    <div id="Projects" className="mt-20 mb-20 px-4">
      <Title title="Mes 8 Projets GitHub" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col h-full rounded-3xl border border-white/5 shadow-2xl transition-all hover:border-[#50fa7b]/30"
            style={{ backgroundColor: '#21222c' }}
          >
            <div className="relative h-44 overflow-hidden rounded-t-3xl bg-black/20">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-[#50fa7b] font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technos.map((tech, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-[#282a36] text-[#8be9fd] px-2 py-1 rounded-md border border-[#8be9fd]/20">
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl bg-[#44475a] text-white font-bold hover:bg-[#50fa7b] hover:text-[#282a36] transition-all"
              >
                Accéder au code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;