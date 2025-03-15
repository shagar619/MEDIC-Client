import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useParticipantCamp = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const { refetch, data: participantCamp = [] } = useQuery({
        queryKey: ['register', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/register?email=${user.email}`);
            return res.data
        }
    })

    return [ participantCamp, refetch ]
};

export default useParticipantCamp;