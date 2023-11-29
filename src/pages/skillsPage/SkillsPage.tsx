import './skillspage.css';


//Components
import NavbarLandingPage from '../../components/navbarLandingPage/NavbarLandingPage';
import HeroSection from '../../components/heroSection/HeroSection';

function SkillsPage() {
  return (
    <div className='skillsPageMainContainer'>
      <NavbarLandingPage/>
      <HeroSection/>
    </div>
  )
}

export default SkillsPage