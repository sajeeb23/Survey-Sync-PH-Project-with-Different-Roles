import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

const Banner = () => {

    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, []);
    return (
        
        <div data-aos="fade-up">
            <img src="https://i.ibb.co/r52vp3d/business-survey-research-concept.jpg" alt=""/>
        </div>
    );
};

export default Banner;