import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";


const GoogleLogin = () => {

    const { signInWithGoogle } = useAuth();

    const axiosPublic = useAxiosPublic();

    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || "/";


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }

            // sent user info in database
            axiosPublic.post('/users', userInfo)
            .then(res => {
                Swal.fire({
                    icon: "success",
                    title: "Congratulation!",
                    text: "Successfully Login With Google",
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })

        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <button 
                onClick={handleSignInWithGoogle}
                className="flex justify-center btn text-white items-center gap-4 border-none bg-[#3a86ff] w-full py-2 font-bold text-xl rounded-md mt-8 hover:text-blue-600"><FaGoogle className="text-orange-500"></FaGoogle>Sign Up With Google</button>
        </div>
    );
};

export default GoogleLogin;