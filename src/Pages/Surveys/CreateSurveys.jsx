import { IoCreateOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const CreateSurveys = () => {
    const handleCreateSurvey = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const question = form.question.value;
        const option_1 = form.option_1.value;
        const option_2 = form.option_2.value;
        const option_3 = form.option_3.value;
        const description = form.description.value;

        const newSurvey = {title, question, option_1, option_2, option_3, description }
        console.log(newSurvey);

        fetch('https://assignment-12-server-efpbudk56-sjb.vercel.app/survey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSurvey)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Survey created successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                    })
                }
            })

    }
    return (
        <div>
            <div>
                <div>
                    <p className="font-semibold text-6xl text-center my-5">Create a New Survey</p>

                    <form onSubmit={handleCreateSurvey}>
                        <div className="mx-10 md:mx-14 lg:mx-14 px-8 lg:px-80 gap-12 items-center justify-center shadow-2xl p-20">


                            <div className="form-control">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">Title:</span> <br />
                                    <input type="text" required name="title" placeholder="Title of the survey:" className="w-full input input-bordered" />
                                </label>
                            </div>
                        
                            <div className="form-control mt-6">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">
                                        Question 1:
                                    </span> <br />
                                    <input
                                        type="text"
                                        required
                                        name="question"
                                        placeholder="Question"
                                        className="input input-bordered"
                                    />
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">
                                        Option 1:
                                    </span><br />
                                    <input
                                        type="text"
                                        required
                                        name="option_1"
                                        placeholder="Option 1"
                                        className="input input-bordered"
                                    />
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">
                                        Option 2:
                                    </span> <br />
                                    <input
                                        type="text"
                                        required
                                        name="option_2"
                                        placeholder="Option 2"
                                        className="input input-bordered"
                                    />
                                </label>
                            </div>

                            <div className="form-control mt-4">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">
                                        Option 3:
                                    </span> <br />
                                    <input
                                        type="text"
                                        required
                                        name="option_3"
                                        placeholder="Option 3"
                                        className="input input-bordered"
                                    />
                                </label>
                            </div>


                            <div className="form-control mt-4">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">Short Description:</span> <br />
                                    <input type="text" required placeholder="Description" name="description" className="input input-bordered" maxLength="42" />
                                </label>
                            </div>



                            <div className="form-control mt-4">


                                <button className="btn mt-4 text-white bg-blue-500 py-2 hover-text-white"><IoCreateOutline></IoCreateOutline>Create Survey</button>


                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CreateSurveys;