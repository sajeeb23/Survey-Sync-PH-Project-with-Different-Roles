
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data, isPending } = useQuery({
        queryKey: [user?.email, 'isStudent'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking student role', user);
            const res = await axiosSecure.get(`/users/${user.email}`);
            console.log(res.data);

        
            const isAdmin = res.data?.admin;
            const isStudent = res.data?.user !== null;

            return { isAdmin, isStudent };
        }
    });

    return [data, isPending];
};

export default useStudent;
