import './homepage.css';

//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';

function HomePage() {
  return (
    <div className='homePageMainContainer'>
      <NavbarLandingPage/>
      <main className='firstSectionHomePage'>
        <div className='titleFullStackContainer'>
          <h1 className='hiTitle'>Hi! 👋 I'm Franco</h1>
          <h1 className='titleFullStack'>FULLSTACK</h1>
          <h1 className='titleFullStack'>DEVELOPER</h1>
        </div>
        <div>
          <div className='fotoContainer'>

          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage