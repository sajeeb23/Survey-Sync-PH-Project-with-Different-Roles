import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import LoadingAnimation from "../Shared/LoadingAnimation";

const NoticeDescription = () => {
    const [notice, setNotice] = useState(null);
    const { _id } = useParams();
    const surveys = useLoaderData();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const findNotice = surveys?.find((survey) => survey._id === _id);


        const fetchData = async () => {
            try {
                const response = await fetch(`https://test-build-blond.vercel.app/survey/${_id}`);
                const data = await response.json();

                setNotice(data);
            } catch (error) {
                console.error("Error fetching survey data:", error);
            }
        };

        if (!findNotice) {
            fetchData();
        } else {
            setNotice(findNotice);
        }
    }, [_id, surveys]);
    useEffect(() => {
        
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        
        return () => clearTimeout(timeout);
    }, []);



    return (
        <div>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <div>

                    <div className="pt-44 pb-10 w-11/12 lg:w-1/2 mx-auto text-center">
                        <div className="bg-yellow-200 px-20 py-5 bg-opacity-20">
                            <p className="font-semibold text-lg lg:text-2xl underline">{notice.date}</p>
                            <h2 className="pt-4 font-bold text-xl lg:text-5xl">{notice.title}</h2>
                            <p className="py-4 text-base">{notice.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoticeDescription;
