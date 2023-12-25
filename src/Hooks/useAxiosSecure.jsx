import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://test-build-blond.vercel.app'
})
const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure