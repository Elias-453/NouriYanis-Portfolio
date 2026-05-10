import { Mail } from "lucide-react";

const Home = () => {
  return (
    <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 px-10">
      
      <div className="flex flex-col max-w-2xl">
   
        <h1 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mt-4 md:mt-0 leading-tight">
          Bonjour, je suis <span className="text-accent">Nouri Yanis</span>
        </h1>

      
        <p className="my-6 text-lg md:text-xl text-center md:text-left leading-relaxed text-gray-200">
          Je suis étudiant chez <span className="font-bold text-white">IONIS SUPINFO</span> dans le domaine informatique. <br /><br />
          Mon expérience en informatique résulte d'un stage chez <span className="text-accent font-bold">ODIT GOUVERNANCE</span> dans le domaine de la cybersécurité ainsi que de développeur. <br /><br />
          Veuillez me contacter si vous êtes à la recherche d'un <span className="italic text-white">alternant en informatique</span>.
        </p>

        <a href="mailto:nouriyanispro77@gmail.com" className="btn btn-accent btn-md w-fit mx-auto md:mx-0 font-bold shadow-lg">
          <Mail className="w-5 h-5 mr-2" />
          Contactez-moi
        </a>
      </div>

      <div className="md:ml-20">
        <img 
          src="https://tse3.mm.bing.net/th/id/OIP.iDFnf0rKod9GMbotdJInwAHaHY?rs=1&pid=ImgDetMain&o=7&rm=3" 
          alt="image_profil" 
          className="w-64 h-64 md:w-80 md:h-80 object-cover border-8 border-accent shadow-2xl" 
          style={{
            borderRadius: "30% 70% 55% 45% / 83% 30% 70% 17%"
          }}
        />
      </div>

    </div>
  );
}

export default Home;