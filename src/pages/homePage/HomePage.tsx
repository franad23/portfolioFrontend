import useAuthStore from '../../store/auth.store';
import { Toaster } from 'sonner'
import './homepage.css';

//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';
import FooterLandingPage from '../../components/footer/FooterLandingPage';
import LeaveAMessage from '../../components/projects/leaveAMessage/LeaveAMessage';

function HomePage() {
  const language = useAuthStore(state => state.language);
  return (
    <div className='homePageMainContainer'>
      <Toaster position="top-right" />
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
          <p className='textSectionsContainer'> <b>{language ? "Sobre Mi:" : "About Me:"}</b></p>
          <p className='textSectionsContainer'>{language ? "Poseo una base sólida en desarrollo Full Stack y encuentro satisfacción en la versatilidad que ofrece. Desde la creación de interfaces atractivas en el front-end hasta la implementación de lógicas sólidas en el back-end, disfruto abordar cada aspecto de un proyecto. Además de mi experiencia técnica, he desarrollado habilidades de comunicación, liderazgo y negociación que enriquecen mi enfoque técnico."
            :
            "I have a good grasp of Full Stack development and enjoy its adaptability. From creating appealing front-end interfaces to setting up strong back-end logic, I like dealing with all parts of a project. Alongside my technical experience, I've picked up communication, leadership, and negotiation skills that complement my tech skills."} </p>
        </div>
        <div className='leaveAMessageContainer'>
          <div>
            <p className='textSectionsContainer'><b>{language ? "Te muestro un poco de mis habilidades:" : "I'll demonstrate some of my skills:"}</b></p>
            <p className='textSectionsContainer'>{language ? "En este ejemplo la aplicacion esta desarrollada sobre typescript y utiliza el Stack PERN (PostgreSQL, Express, React, Node.js), se muestran solo los primeros diez mensajes, ademas hace consumo de una API 'Perspective Google API' para moderar el texto ingresado." 
              : "This app is built using TypeScript and the PERN Stack (PostgreSQL, Express, React, Node.js). Only the first ten messages are displayed. Additionally, it uses a 'Perspective Google API' to check and moderate entered text."
            }</p>
          </div>
          <div className='leaveAMessageProjectContainer'>
            <LeaveAMessage/>
          </div>
        </div>
      </main>
      <div className='footerHomePageContainer'>
        <FooterLandingPage />
      </div>
    </div>
  )
}

export default HomePage