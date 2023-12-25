import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

const UsersCount = () => {
    const [surveyData, setSurveyData] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch data from the provided URL
        fetch('https://test-build-blond.vercel.app/survey')
            .then(response => response.json())
            .then(data => setSurveyData(data))
            .catch(error => console.error('Error fetching data:', error));

        fetch('https://test-build-blond.vercel.app/users')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    const totalStudents = userData.filter(user => user.role === 'student').length;
    const totalTeachers = userData.filter(user => user.role === 'admin').length;

    return (
        <div className='grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 my-24 mx-6'>
            <Link to={'/surveys'} className='hover:-translate-y-2 hover:duration-300'>
                <div className="card lg:w-4/5 h-full w-full bg-green-600 bg-opacity-30 text-black">
                    <div className="card-body">
                        <div className="items-center justify-center text-center">
                            <div>
                                <img
                                    className="w-3/6 opacity-50 mx-auto"
                                    src="https://i.ibb.co/x6DjPmP/pngwing-com-46.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="w-full text-2xl font-semibold">Total <br /> Notice</p>
                                <p className='text-5xl font-bold'>0
                                    <CountUp end={surveyData.length} duration={1} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
           
            <Link className='hover:-translate-y-2 hover:duration-300'>
                <div className="card lg:w-4/5 h-full w-full bg-orange-600 bg-opacity-30 text-black">
                    <div className="card-body">
                        <div className="items-center justify-center text-center">
                            <div>
                                <img
                                    className="w-3/6 opacity-50 mx-auto"
                                    src="https://i.ibb.co/WKR6Tdd/pngwing-com-47.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="w-full text-2xl font-semibold">Total Students</p>
                                <p className='text-5xl font-bold'>00
                                    <CountUp end={totalStudents} duration={1} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='hover:-translate-y-2 hover:duration-300'>
                <div className="card lg:w-4/5 h-full w-full bg-blue-500 bg-opacity-30 text-black">
                    <div className="card-body">
                        <div className="items-center justify-center text-center">
                            <div>
                                <img
                                    className="w-3/6 opacity-50 mx-auto"
                                    src="https://i.ibb.co/nPhxFh3/pngwing-com-48.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p className="w-full text-2xl font-semibold">Total Teachers</p>
                                <p className='text-5xl font-bold'>00
                                    <CountUp end={totalTeachers} duration={1} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default UsersCount;
