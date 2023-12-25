import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://test-build-blond.vercel.app',
   
  });

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;