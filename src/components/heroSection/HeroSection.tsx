import { useEffect, useState } from 'react';
import './herosection.css';
import nodeLogo from "../../assets/techsLogo/nodejs-icon.svg";
import reactLogo from "../../assets/techsLogo/react-2.svg";
import expressLogo from "../../assets/techsLogo/expressjs-icon.svg";
import mongoLogo from "../../assets/techsLogo/mongodb-icon.svg";
import postgreeLogo from "../../assets/techsLogo/postgresql-icon.svg";

//API 
import { getPexelsPhotos } from '../../api/services.api';

function HeroSection() {
  const [photoToHero, setPhotoToHero] = useState("");
  const [showMongo, setShowMongo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMongo((prevShowMongo) => !prevShowMongo);
    }, 5000); // Cambiar cada 10 segundos (10000 milisegundos)

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const apiResponse = await getPexelsPhotos("html");
        const randomNum = Math.round(Math.random() * apiResponse.data.length);
        setPhotoToHero(apiResponse.data[randomNum].src.landscape);
      } catch (error) {
        console.log(error);
      }
    }
    getPhotos();
  }, [])
  
  // console.log(photosToHero);
  

  return (
    <div className='heroSectionMainContainer' style={{ backgroundImage: `url(${photoToHero})` }}>
      <div className="backgroundFilter">
        <div className='logosContainer'>
          <img
            className="iconsHerosLogo"
            src={showMongo ? mongoLogo : postgreeLogo}
            alt={showMongo ? 'MongoDBLogo' : 'PostgresLogo'}
          />

          <img className='iconsHerosLogo' src={expressLogo} alt="expressLogo" />
          <img className='iconsHerosLogo' src={reactLogo} alt="ReactJsLogo" />
          <img className='iconsHerosLogo' src={nodeLogo} alt="nodeJsLogo" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection