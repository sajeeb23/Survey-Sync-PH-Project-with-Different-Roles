import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
}, []);
  return (
    <div>
      <div className="pt-20">
        {/* <div id="slide1" className="carousel-item relative w-full">
          <img data-aos="fade-up" data-aos-delay="400" src="https://i.ibb.co/LdkvrzF/Green-Photographic-Environment-Charity-Bio-Link-Website-2.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle opacity-75">❮</a>
            <a href="#slide2" className="btn btn-circle opacity-75">❯</a>
          </div>
        </div> */}
        <div>
          <video autoPlay loop muted className="w-full">
            <source src="/mpi656775.mp4" className="w-full" type="video/mp4" />
          
            Your browser does not support the video tag.
          </video>
          
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/xf2Czf0/af66b30d-606c-49b9-b7c0-890d248eef03.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle opacity-75">❮</a>
            <a href="#slide3" className="btn btn-circle opacity-75">❯</a>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Banner;