import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './navbarlandingpage.css';

//Components

function NavbarLandingPage() {
  return (
    <nav className='navbarLandingPageMainContainer'>
      <ul className='optionsNavbarContainer'>
        <li className='optionsNavbar'>Inicio</li>
        <li className='optionsNavbar'>Habilidades</li>
        <li className='optionsNavbar'>Proyectos</li>
        <li className='optionsNavbar'>Blog</li>
      </ul>
      <ul className='socialMediaIconsContainer'>
        <li><a className='socialMediaIcon' href=""><GithubOutlined /></a></li>
        <li><a className='socialMediaIcon' href=""><LinkedinOutlined /></a></li>
      </ul>
    </nav>
  )
}

export default NavbarLandingPage