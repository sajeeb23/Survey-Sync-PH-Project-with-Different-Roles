// useProUser.js
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProUser = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: proUserData, isPending: isProUserLoading } = useQuery({
        queryKey: [user?.email, 'isProUser'], // Update the key to 'proUser'
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking proUser role', user);
            const res = await axiosSecure.get(`/users/pro/${user.email}`);
            console.log(res.data);
            return res.data?.proUser;
        }
    });

    return [proUserData, isProUserLoading];
};

export default useProUser;
