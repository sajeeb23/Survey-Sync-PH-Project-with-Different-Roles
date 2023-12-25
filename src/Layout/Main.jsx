import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import { useEffect, useState } from "react";
import LoadingAnimation from "../Pages/Shared/LoadingAnimation";

const Main = () => {
    const [loading, setLoading] = useState(true);
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

                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            )}
        </div>
    );
};

export default Main;