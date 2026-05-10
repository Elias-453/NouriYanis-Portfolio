import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";

export default function App(){

  return(

   <div>

      <div className="p-5 md:px-[15%]">
       <Navbar />
       <Home />
      </div>
      <About />

      <div className="p-5 md:px-[15%]">

     <Experience />
      </div>

      <div className="p-5 md:px-[15%]">

     <Project />
      </div>

    </div>
  )
}
