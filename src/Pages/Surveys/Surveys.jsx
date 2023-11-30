import { useLoaderData } from "react-router-dom";
import SurveyCard from "./SurveyCard";
import Swal from "sweetalert2";
import { useState } from "react";

const Surveys = () => {
    const surveys = useLoaderData();
    const [survey, setSurvey] = useState([]);

    
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
                fetch(`https://assignment-12-server-efpbudk56-sjb.vercel.app/survey/${id}`, {
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
        <div className="pt-32">
            <div>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">All Surveys</h1>
                    <hr className='my-2 mx-40 opacity-50' />
                    <h1 className="text-2xl font-semibold mt-2">Total Surveys: {surveys.length}</h1>
                </div>
                <div className="grid grid-cols-3 gap-10 pt-16">
                    {
                        surveys.map(survey => <SurveyCard key={survey._id} survey={survey} handleDelete={handleDelete}></SurveyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Surveys;