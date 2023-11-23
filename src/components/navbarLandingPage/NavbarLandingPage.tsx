import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './navbarlandingpage.css';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../../store/auth.store';

//Components

function NavbarLandingPage() {
  const setLanguage = useAuthStore((state) => state.setLanguage);
  const language = useAuthStore(state => state.language);

  const handleChangeLanguage = () => {
    setLanguage(!language)
  }

  return (
    <nav className='navbarLandingPageMainContainer'>
      <ul className='optionsNavbarContainer'>
        <li>
          <NavLink to='/' className={({isActive})=> isActive ? 'optionsNavbar activeLink' : 'optionsNavbar'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/skills' className={({isActive})=> isActive ? 'optionsNavbar activeLink' : 'optionsNavbar'}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' className={({isActive})=> isActive ? 'optionsNavbar activeLink' : 'optionsNavbar'}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/blog' className={({isActive})=> isActive ? 'optionsNavbar activeLink' : 'optionsNavbar'}>
            Blog
          </NavLink>
        </li>
      </ul>
      <ul className='socialMediaIconsContainer'>
        <span className="material-symbols-outlined" onClick={handleChangeLanguage}>
          {language === true ? "language_spanish" : "language_us"}
        </span>
        <li><a className='socialMediaIcon' href=""><GithubOutlined /></a></li>
        <li><a className='socialMediaIcon' href=""><LinkedinOutlined /></a></li>
      </ul>
    </nav>
  )
}

export default NavbarLandingPage