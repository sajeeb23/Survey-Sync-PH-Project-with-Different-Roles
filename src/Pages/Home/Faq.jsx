import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaComputer } from 'react-icons/fa6';
import { GiElectricalResistance } from 'react-icons/gi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { MdFastfood } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faq = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const [date, setDate] = useState(new Date());

    return (
        <div className='mt-40 mx-6'>
            <div className="text-center mb-12 lg:mb-24" data-aos="fade">
                <h1 className="text-2xl lg:text-4xl font-semibold">Empower through <span className='text-green-600'>Engineering</span></h1>
                <hr className='my-2 mx-40 opacity-50' />
                <h1 className="text-lg lg:text-2xl font-semibold mt-2"> Navigate Our Departments for Success.</h1>
            </div>
            <div className="lg:flex justify-between">
                <div className="pt-10 text-lg lg:text-2xl">
                    <h1 className='text-2xl lg:text-4xl mb-6 text-center font-semibold' data-aos="flip-right">Departments</h1>
                    <p className="flex gap-2 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
                        <FaComputer className='text-orange-600' />
                        Computer Science & Technology(CST)
                    </p>
                    <br />
                    <p className="flex gap-2 lg:justify-center md:justify-center items-center" data-aos="fade-up" data-aos-delay="400">
                        <GiElectricalResistance className='text-orange-600' />
                        Electronics Technology(ENT)
                    </p>
                    <br />
                    <p className="flex gap-2 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
                        <CgSmartHomeRefrigerator className='text-orange-600' />
                        Refrigeration & Air Conditioning (RAC)
                    </p>
                    <br />
                    <p className="flex gap-2 lg:justify-center md:justify-center items-center" data-aos="fade-up" data-aos-delay="800">
                        <MdFastfood className='text-orange-600' />
                        Food Technology(FT)
                    </p>
                </div>


                {/* Calendar section */}
                <div className="mt-10 md:mt-4 lg:mt-4" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-xl font-semibold mb-2">Today's Date</h2>
                    <Calendar onChange={setDate} value={date} className="shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Faq;
