import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className="my-24 items-center bg-red-400 bg-opacity-10 p-12">
                <h2 className="text-3xl font-bold text-center" data-aos="fade">Contact Us</h2>
                <hr className='my-2 mx-40 opacity-50 mb-16' />

                <div data-aos="fade-up" data-aos-delay="200" className="w-full lg:flex mx-auto gap-10 max-w-5xl mb-16">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Admissions Office:</h3>
                        <p>Email: <a href="mailto:admissions@examplecollege.edu" className="text-blue-500">admissions@mpi.edu</a></p>
                        <p>Phone: 0123456789</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">General Inquiries:</h3>
                        <p>Email: <a href="mailto:info@examplecollege.edu" className="text-blue-500">mpi@bteb.edu</a></p>
                        <p>Phone: 030090902248</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Address:</h3>
                        <p>Moulvibazar Polytechnic Institute</p>
                        <p>Moulvibazar, Sylhet</p>
                        <p>Bangladesh</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">Visit Us:</h3>
                        <p>We welcome you to visit our campus during office hours. Please schedule an appointment in advance.</p>
                    </div>
                </div>



                <div data-aos="fade-up" data-aos-delay="400">
                    <div className="mb-2 text-center">
                        <h3 className="text-xl font-semibold mb-2">Social Media:</h3>
                        <p>Stay connected with us on <a href="https://www.facebook.com/examplecollege" className="text-blue-500" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://twitter.com/examplecollege" className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a> for the latest updates and news.</p>
                    </div>

                    <p className="text-center">We look forward to assisting you and welcoming you to our vibrant academic community!</p>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;