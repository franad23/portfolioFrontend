import useAuthStore from '../../store/auth.store';
import { Toaster, toast } from 'sonner'
import { FormEvent, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import './homepage.css';

//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';
import FooterLandingPage from '../../components/footer/FooterLandingPage';
import LeaveAMessage from '../../components/projects/leaveAMessage/LeaveAMessage';

//API
import { getAllCountLinks, linkShortener } from '../../api/services.api';

function HomePage() {
  const language = useAuthStore(state => state.language);
  const [linkCount, setLinkCount] = useState(0);
  const [linkShortened, setLinkShortened] = useState("");

  const getCountLinks = async () => {
    try {
      const apiResponse = await getAllCountLinks();
      setLinkCount(apiResponse.data[0].count)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountLinks();
  }, [])

  const handleFormShortenerLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const linkToShort = ((e.currentTarget.elements[0] as HTMLInputElement).value);
    try {
      const apiResponse = await linkShortener(linkToShort);
      setLinkShortened(apiResponse.data.linkShortened);
      getCountLinks();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickCopyLink = () => {
    clipboardCopy(linkShortened);
    toast.success(language ? "Link Copiado" : "Link Copied")
  }
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
        <div className='projectsHomePage'>
          <div>
            <p className='textSectionsContainer'><b>{language ? "Te muestro un poco de mis habilidades:" : "I'll demonstrate some of my skills:"}</b></p>
            <p className='textSectionsContainer'>{language ? "En este ejemplo la aplicacion esta desarrollada sobre typescript y utiliza el Stack PERN (PostgreSQL, Express, React, Node.js), se muestran solo los primeros diez mensajes, ademas hace consumo de una API 'Perspective Google API' para moderar el texto ingresado. Ademas te pedimos nombre o pseudonimo para generar un token con JWT y asi hacer validaciones en el backend."
              : "This app is built using TypeScript and the PERN Stack (PostgreSQL, Express, React, Node.js). Only the first ten messages are displayed. Additionally, it uses a 'Perspective Google API' to check and moderate entered text. We also ask for your name or pseudonym to generate a token with JWT and perform validations in the backend."
            }</p>
          </div>
          <div className='leaveAMessageProjectContainer'>
            <LeaveAMessage />
          </div>
        </div>
        <div className='projectsHomePage'>
          <div>
            <p className='textSectionsContainer'><b>{language ? "Acortador de enlaces" : "Link Shortener"}</b></p>
            <p className='textSectionsContainer'>{language ? "Este proyecto tambien esta desarrollado con typescript y PERN, la finalidad es acortar los enlaces, verifica si la pagina web del enlace ingresado existe, verifica en la base de datos si ya se ingreso previamente para evitar duplicaciones"
              : "This project is also developed with TypeScript and PERN stack. Its purpose is to shorten links and verify if the website of the entered link exists. It checks the database to prevent duplicates if the link has been previously entered."}</p>
          </div>
          <form className='shortenerLinkContainer' onSubmit={handleFormShortenerLink}>
            <input type="text" placeholder={language ? "Solo links que inicien con 'http://' o 'https://'" : "Only links starting with 'http://' or 'https://'"} className='inputWithButton' required />
            <button className='buttonInputWithButton'>{language ? "Acortar" : "Short"}</button>
          </form>
          <div className='shortenedLinkCounterContainer'>
            <div className='shortLinkContainer'>
              <h3>{language ? "Tu link acortado" : "Your short link"}:</h3>
              <p className='linkShortToCopy' onClick={handleClickCopyLink}>{linkShortened ? linkShortened : language ? "Ningun link" : "No link yet"}</p>
            </div>
            <div>
              <h3><b>{language ? "Links Acortados" : "Shortened Links"}:</b></h3>
              <div className='shortenedLinkCounter'>
                <h3>{linkCount}</h3>
              </div>
            </div>
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