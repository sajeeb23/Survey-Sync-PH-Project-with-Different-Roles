import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="mt-40 mx-6 bg-green-400 bg-opacity-10 p-12">
            <h1 data-aos="fade" className="text-4xl font-semibold text-center">History</h1>
            <hr  className='my-2 mx-40 opacity-50'/>
            <div className="my-24 lg:flex gap-10 justify-center items-center">
                <div data-aos="fade" data-aos-delay="400" className="w-full lg:w-3/5">
                    <span className="font-semibold">Moulvibazar Polytechnic Institute</span> is located on four acres of land in Matarkapan of Moulvibazar district. The former Minister of Finance and Planning of the Government of the People's Republic of Bangladesh M. Saifur Rahman laid the foundation stone of Moulvibazar Polytechnic Institute on 6 Falgun 1412, corresponding to 18 February 2006. <br />
                    On 13th October 2010, formal administrative activities of the institution started by assigning 1 teacher as Acting Principal and later 1 teacher each in Computer and Electronics Technology was posted in the same process. Educational program and student statistics: From 23-10-2010 to the academic year 2010-2011, the journey of educational program started by enrolling a total of 186 students in 1st shift and 2nd shift (91+95) in Computer and Electronics Technology respectively. And later 2 more technologies were introduced.<br />

                    RAC Technology admits 96 students in 1st and 2nd shift (48+48). Hostel Facilities: There is a single building with 4 floors accommodating only 96 students. Hostel operation started from July 2012 by allotting seats to 96 students.
                </div>
                <div>
                    <img src="https://i.ibb.co/xf2Czf0/af66b30d-606c-49b9-b7c0-890d248eef03.jpg" className="w-60 h-60 mx-auto rounded-full" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
