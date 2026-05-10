import { Cuboid } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-6">
      <a href="#Home" className="flex items-center font-bold text-4xl">
        <Cuboid className="mr-3 w-10 h-10" />
        YANIS
        <span className="text-accent">DEV</span>
      </a>
      
      <ul className="hidden md:flex space-x-6">
        <li><a href="#Home" className="btn btn-md btn-ghost text-lg">Accueil</a></li>
        <li><a href="#About" className="btn btn-md btn-ghost text-lg">À propos</a></li>
        <li><a href="#Experience" className="btn btn-md btn-ghost text-lg">Mes expériences</a></li>
        <li><a href="#Projects" className="btn btn-md btn-ghost text-lg">Mes projets</a></li>
      </ul>
      
     
      <a href="#Contact" className="btn btn-accent btn-outline hidden md:flex">
        Contact
      </a>
    </div>
  );
};

export default Navbar;