import { useEffect, useState } from 'react';
import './herosection.css';

//API 
import { getPexelsPhotos } from '../../api/services.api';

function HeroSection() {
  const [photoToHero, setPhotoToHero] = useState("");

  
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
        
      </div>
    </div>
  )
}

export default HeroSection