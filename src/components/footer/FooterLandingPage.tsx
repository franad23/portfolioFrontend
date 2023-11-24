import useAuthStore from '../../store/auth.store';
import './footerlandingpage.css';

function FooterLandingPage() {

  const language = useAuthStore(state => state.language);

  return (
    <footer className='footerMainContainer'>
      <h4 className='footerText'>{language ? "Hecho ❤️ amor por Franco" : "Made with ❤️ by Franco"}</h4>
    </footer>
  )
}

export default FooterLandingPage