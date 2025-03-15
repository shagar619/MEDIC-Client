import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";




const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const { createUser } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            const userInfo = {
                displayName: data.name,
                email: data.email
            }
            
            // create user entry in the database
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'middle',
                        icon: 'success',
                        title: 'Congratulations!',
                        text: "User Created Successfully",
                        showConfirmButton: true,
                    });
                    navigate('/');
                }
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

    <div className="bg-gray-100 py-12">

    <div 
    className="bg-cover  w-2/3 mx-auto my-32"
    style={{backgroundImage: "url('https://i.ibb.co.com/YyF9VqN/v870-tang-38.jpg')", boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.25)'}}>

            <Helmet>
                <title>MEDIC | Sign Up</title>
            </Helmet>

            <div className="w-1/2 mx-auto py-12 lg:py-[300px]">

            <div>

            <h3 className="text-center text-5xl underline font-bold text-[#007f5f] uppercase">Sign Up</h3>
            <h1 className="text-4xl font-bold my-8 text-center text-[#4361ee]">Start for free Today</h1>
            <p className="text-base text-[#007f5f] font-normal text-center mb-12">Access to all features. No credit card required.</p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Name *</span>
                        </div>
                        <input 
                        {...register("name", { required: true })}
                        type="text" name="name" placeholder="Enter Your Name" className="input input-bordered w-full" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </label>   

                    <label 
                    {...register("email", { required: true })}
                    className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">E-mail *</span>
                        </div>
                        <input type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </label>

                    <label 
                    className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Password *</span>
                        </div>
                        <input 
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                        type="password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full" />

                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                    </label>


                    <input 
                    className="bg-[#3a86ff] btn text-xl font-bold text-white w-full py-2 mt-6 rounded cursor-pointer" type="submit" value="Sign Up" />

                    </form>

                    <p className="text-xl font-bold text-[#D1A054] text-center my-5">Already have an account? <Link className="underline text-lg font-bold" to="/signin"><span className="hover:text-[#3a86ff]">Sign In</span></Link></p>

                    <h3 className="text-center text-xl font-bold underline hover:text-[#D1A054]">Or Sign Up with</h3>
                    
                    {/* google sign in button */}

                    <GoogleLogin></GoogleLogin>

                </div>

            </div>

        </div>

    </div>

    );
};

export default SignUp;