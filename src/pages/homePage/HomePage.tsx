import useAuthStore from '../../store/auth.store';
import './homepage.css';

//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';
import FooterLandingPage from '../../components/footer/FooterLandingPage';

function HomePage() {
  const language = useAuthStore(state => state.language);
  return (
    <div className='homePageMainContainer'>
      <NavbarLandingPage />
      <main className='firstSectionHomePage'>
        <div className='fullStackTitle'>
          <div className='titleFullStackContainer'>
            <h1 className='hiTitle'>{language ? "Hola! 👋 Soy Franco" : "Hi! 👋 I'm Franco"}</h1>
            <h1 className='titleFullStack'>FULLSTACK</h1>
            <h1 className='titleFullStack'>DEVELOPER</h1>
          </div>
          <div>
            <div className='fotoContainer'>

            </div>
          </div>
        </div>
        <div className='aboutMeTextContainer'>
          <p className='aboutMeText'> <b>{language ? "Sobre Mi:" : "About Me:"}</b></p>
          <p className='aboutMeText'>{language ? "Poseo una base sólida en desarrollo Full Stack y encuentro satisfacción en la versatilidad que ofrece. Desde la creación de interfaces atractivas en el front-end hasta la implementación de lógicas sólidas en el back-end, disfruto abordar cada aspecto de un proyecto. Además de mi experiencia técnica, he desarrollado habilidades de comunicación, liderazgo y negociación que enriquecen mi enfoque técnico." 
          : 
          "I have a good grasp of Full Stack development and enjoy its adaptability. From creating appealing front-end interfaces to setting up strong back-end logic, I like dealing with all parts of a project. Alongside my technical experience, I've picked up communication, leadership, and negotiation skills that complement my tech skills."} </p>
        </div>
      </main>
      <div className='footerHomePageContainer'>
        <FooterLandingPage />
      </div>
    </div>
  )
}

export default HomePage