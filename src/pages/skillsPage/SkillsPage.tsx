import './skillspage.css';
import useAuthStore from '../../store/auth.store';
import JSLogo from "../../assets/techsLogo/logo-javascript.svg";
import TSLogo from "../../assets/techsLogo/typescript.svg";


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
      </div>
    </div>
  )
}

export default SkillsPage