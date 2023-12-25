import { useLoaderData } from "react-router-dom";
import NoticeCard from "./NoticeCard";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Shared/LoadingAnimation";

const Surveys = () => {
    const [loading, setLoading] = useState(true);
    const surveys = useLoaderData();
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        // Simulate loading delay (you can remove this in your actual implementation)
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the timeout as needed

        // Cleanup function
        return () => clearTimeout(timeout);
    }, []);


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this job!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FF6C22',
            cancelButtonColor: '#427D9D',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://test-build-blond.vercel.app/survey/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
                            const remaining = survey.filter((surveyy) => surveyy._id !== id);
                            setSurvey(remaining);
                        }

                    })
                    .catch((error) => {
                        console.error('Error deleting job:', error);
                    });
            }
        });
    };
    return (
        <div>
            {loading ? (
                <LoadingAnimation />
            ) : (
                <div>
                    <div className="pt-32">
                        <div>
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold">All Notices</h1>
                                <hr className='my-2 mx-40 opacity-50' />
                                <h1 className="text-2xl font-semibold mt-2">Total Notice: {surveys.length}</h1>
                            </div>
                            <div className="grid lg:grid-cols-3 md:gap-6 lg:gap-10 pt-16">
                                {
                                    surveys?.map(survey => <NoticeCard key={survey._id} survey={survey} handleDelete={handleDelete}></NoticeCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Surveys;