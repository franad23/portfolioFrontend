import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import './navbarlandingpage.css';
import { useState } from 'react';
import useAuthStore from '../../store/auth.store';

//Components

function NavbarLandingPage() {
  const language = useAuthStore(state => state.language)
  const setLanguage = useAuthStore((state) => state.setLanguage);
  const handleChangeLanguage = () => {
    setLanguage(!language)
  }
  return (
    <nav className='navbarLandingPageMainContainer'>
      <ul className='optionsNavbarContainer'>
        <li className='optionsNavbar'>Home</li>
        <li className='optionsNavbar'>Skills</li>
        <li className='optionsNavbar'>Projects</li>
        <li className='optionsNavbar'>Personal Blog</li>
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