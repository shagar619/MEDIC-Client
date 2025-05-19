import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../SocialLogin/GoogleLogin";
import { useEffect, useState } from "react";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const SignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [disabled, setDisabled] = useState(true);
    const { signInUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location.state?.from?.pathname || "/";



    const onSubmit = data => {
        signInUser(data.email, data.password)
        .then(result => {
            Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Successfully Login",
            });
            navigate(from, { replace: true });
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong E-mail or Password!",
            });
        })
    }




    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])



    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    return (

        <div>

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-52">

            <div     
            className="bg-cover object-cover w-4/5 md:w-3/5 mx-auto"
            style={{backgroundImage: "url('https://i.ibb.co.com/YyF9VqN/v870-tang-38.jpg')", boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.25)'}}>

            <Helmet>
                <title>MEDIC | Sign In</title>
            </Helmet>

            <div 
            className="w-1/2 mx-auto py-24">

                <div>
                    <h3 className="text-[#07332F] text-xl font-medium text-center mb-4 underline">Welcome Back!</h3>
                    <h1 className="text-4xl font-bold my-6 text-center text-[#007f5f]">Member Login</h1>
                    <p className="text-lg text-[#007f5f] font-normal text-center mb-12">Access to all features. No credit card required.</p>

                    <form onSubmit={handleSubmit(onSubmit)}>

                    <label 
                    className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">E-mail *</span>
                        </div>
                        <input 
                        {...register("email", { required: true })}
                        type="email" name="email" placeholder="Enter Your E-mail" className="input input-bordered w-full border-none rounded-sm" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Password *</span>
                        </div>
                        <input 
                        {...register("password", { required: true })}
                        type="password" name="password" placeholder="Enter Your Password" className="input input-bordered w-full border-none rounded-sm" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </label>


                    {/* captcha */}

                    <label className="form-control w-full">
                        <div className="label">
                            <LoadCanvasTemplate />
                        </div>
                        <input 
                        onBlur={handleValidateCaptcha}
                        type="" name="captcha" placeholder="Type the captcha above" className="input input-bordered w-full border-none rounded-sm" />
                    </label>


                    <input 
                    disabled={disabled}
                    className="bg-[#07332F] btn text-xl font-bold text-white w-full py-2 mt-6 rounded-sm cursor-pointer" type="submit" value="Login" />

                    </form>

                    <p className="text-xl font-bold text-[#D1A054] text-center my-5">Don't have an account? <Link className="underline text-lg font-bold" to="/signup"><span className="hover:text-[#3a86ff]">Sign Up</span></Link></p>

                    <h3 className="text-center text-xl font-bold underline hover:text-[#D1A054]">Or Sign Up with</h3>

                    {/* google signin button */}

                    <GoogleLogin></GoogleLogin>

                </div>

            </div>


            </div>
            
        </div>

        </div>
    );
};

export default SignIn;