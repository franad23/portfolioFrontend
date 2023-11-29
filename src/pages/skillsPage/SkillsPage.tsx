import './skillspage.css';
import useAuthStore from '../../store/auth.store';
import JSLogo from "../../assets/techsLogo/logo-javascript.svg";
import TSLogo from "../../assets/techsLogo/typescript.svg";
import reactLogo from "../../assets/techsLogo/react-2.svg";
import expressLogo from "../../assets/techsLogo/expressjs-icon.svg";
import nodeLogo from "../../assets/techsLogo/nodejs-icon.svg";
import mongoDBLogo from "../../assets/techsLogo/mongodb-icon.svg";
import postgreeLogo from "../../assets/techsLogo/postgresql-icon.svg";


//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';
import HeroSection from '../../components/heroSection/HeroSection';

function SkillsPage() {
  const language = useAuthStore((state) => state.language);
  return (
    <div className='skillsPageMainContainer'>
      <NavbarLandingPage/>
      <HeroSection/>
      <div className='firstSectionHomePage'>
        <div className='languagesSectionContainer'>
          <div className='projectLeaveAMessageTextContainer'>
            <p><b>{language ? "Lenguajes de programacion" : "Programming Languages"}</b>:</p>
            <p className='textLanguages'>{language ? "Utilizo JavaScript (JS) y TypeScript (TS) como mis principales herramientas de desarrollo por su versatilidad y potencia. JavaScript, siendo el lenguaje fundamental en la web, me brinda la flexibilidad necesaria para crear aplicaciones dinámicas e interactivas. Su capacidad para ejecutarse en el lado del cliente y del servidor me permite construir soluciones completas." :
            "I use JavaScript (JS) and TypeScript (TS) as my main development tools due to their versatility and power. JavaScript, being the fundamental language of the web, provides the necessary flexibility to create dynamic and interactive applications. Its ability to run on both the client and server sides enables me to build complete solutions. and maintainability."}</p>
            <p className='textLanguages'>{language ? "Además, TypeScript, al ser una extensión tipada de JavaScript, mejora significativamente la calidad y mantenibilidad del código. Gracias a su sistema de tipos estáticos, obtengo un código más robusto y reduzco errores. Ambos lenguajes me permiten construir aplicaciones escalables, modernas y eficientes, lo que resulta fundamental en la creación de soluciones tecnológicas sólidas y de alto rendimiento." :
            "Additionally, TypeScript, as a typed extension of JavaScript, significantly enhances code quality and maintainability. With its static typing system, I achieve more robust code and fewer errors. Both languages allow me to develop scalable, modern, and efficient applications, which are crucial in crafting robust and high-performance technological solutions."}</p>
          </div>
          <div className='iconsLanguageContainer'>
            <img className='iconsTechLogo' src={JSLogo} alt="JavascriptLogo" />
            <img className='iconsTechLogo' src={TSLogo} alt="TypescriptLogo" />
          </div>
        </div>
        <div className='languagesSectionContainer'>
          <div className='projectLeaveAMessageTextContainer'>
            <p><b>{language ? "Bases de datos" : "Data bases"}:</b></p>
            <p className='textLanguages'>{language ? "Utilizo React debido a su capacidad para crear interfaces de usuario dinámicas y eficientes. Node.js junto con Express son fundamentales, ya que permiten construir aplicaciones robustas y escalables en el lado del servidor, ofreciendo flexibilidad y rendimiento en el desarrollo de soluciones completas." :
            "I use React for its ability to create dynamic and efficient user interfaces. Node.js paired with Express is essential as it enables building robust and scalable server-side applications, offering flexibility and performance in developing complete solutions."}</p>
          </div>
          <div className='iconsLanguageContainer'>
            <img className='iconsTechLogo' src={reactLogo} alt="reactLogo" />
            <img className='iconsTechLogo' src={expressLogo} alt="expressLogo" />
            <img className='iconsTechLogo' src={nodeLogo} alt="nodeLogo" />
          </div>
        </div>
        <div className='languagesSectionContainer'>
          <div className='projectLeaveAMessageTextContainer'>
            <p><b>{language ? "Bases de datos" : "Data bases"}:</b></p>
            <p className='textLanguages'>{language ? "En mi desarrollo, empleo MongoDB y PostgreSQL como sistemas de gestión de bases de datos. MongoDB, una base de datos NoSQL, ofrece flexibilidad al almacenar datos en documentos flexibles, facilitando la escalabilidad y el manejo de información no estructurada. Por otro lado, PostgreSQL, una base de datos relacional, provee solidez en la integridad de los datos y la consistencia, ideal para aplicaciones que requieren transacciones complejas y relaciones claras entre los datos. Ambas bases de datos son fundamentales en la creación de soluciones robustas y escalables, adaptándose a diferentes necesidades y contextos." :
            "In my development, I utilize MongoDB and PostgreSQL as database management systems. MongoDB, a NoSQL database, offers flexibility by storing data in flexible documents, making it easier to scale and handle unstructured information. On the other hand, PostgreSQL, a relational database, provides solidity in data integrity and consistency, ideal for applications requiring complex transactions and clear data relationships. Both databases are essential in creating robust and scalable solutions, adapting to various needs and contexts."}</p>
          </div>
          <div className='iconsLanguageContainer'>
            <img className='iconsTechLogo' src={postgreeLogo} alt="Postgree logo" />
            <img className='iconsTechLogo' src={mongoDBLogo} alt="MongoDB Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage