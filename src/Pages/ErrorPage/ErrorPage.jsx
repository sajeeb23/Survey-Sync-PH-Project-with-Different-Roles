import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex gap-4 flex-col items-center justify-center text-center">
            <div>
                <img src="https://i.ibb.co/K5Dv8nD/pngwing-com-27.png" alt="" />
            </div>
            <div>
                <h2 className="text-cyan-500 text-2xl font-bold ">
                    Sorry! Page not found. Back to <Link to={"/"} className="btn text-cyan-500">Home</Link>
                </h2>
            </div>
        </div>
    );
};

export default ErrorPage;
