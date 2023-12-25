import { IoCreateOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const CreateNotice = () => {
    const handleCreateNotice = event => {
        event.preventDefault();
        const form = event.target;

        const date = form.date.value;
        const title = form.title.value;
        const description = form.description.value;

        const newSurvey = {date, title, description}
        console.log(newSurvey);

        fetch('https://test-build-blond.vercel.app/survey', {
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
                    <p className="font-semibold text-6xl text-center pt-32 pb-8">Add a New Notice</p>

                    <form onSubmit={handleCreateNotice}>
                        <div className="mx-10 md:mx-14 lg:mx-14 px-8 lg:px-80 gap-12 items-center justify-center shadow-2xl p-20 mb-16">


                            <div className="form-control">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">Date:</span> <br />
                                    <input type="date" required name="date" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">Title:</span> <br />
                                    <input type="text" required name="title" placeholder="Title:" className="w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group input-group-vertical">
                                    <span className="font-bold">Description:</span> <br />
                                    <input type="text" required name="description" placeholder="Description of notice:" className="w-full h-48 input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control mt-4">


                                <button className="btn mt-4 text-white bg-green-600 py-2 hover-text-white"><IoCreateOutline></IoCreateOutline>Add Notice</button>


                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CreateNotice;