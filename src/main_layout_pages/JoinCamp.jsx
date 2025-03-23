import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const JoinCamp = () => {

    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();


    const { campName, campFees, location, healthcareProfessional } = useLoaderData();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const participantInfo = {
            email: data.email,
            age: parseInt(data.age),
            gender: data.gender,
            campName: data.campName,
            campFees: parseFloat(data.campFees),
            healthcareProfessional: data.healthcareProfessional,
            location: data.location,
            phoneNumber: parseInt(data.phoneNumber),
            emergencyContact: data.emergencyContact

        }

        // create participant camp entry in the database
        axiosPublic.post('/register', participantInfo)
        .then(res => {
            if(res.data.insertedId) {
                reset();
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Congratulations!',
                    text: `Your Registration Successfully Completed!`,
                    showConfirmButton: true,
                });
                navigate('/');
            }
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (

        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] py-52">

        <div 
        className="w-8/12 mx-auto bg-cover"
        style={{backgroundImage: "url('https://i.ibb.co.com/W5NjL44/login3.jpg')", boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.25)'}}>

            <Helmet>
                <title>MEDIC | JOIN CAMP</title>
            </Helmet>

            <div className="backdrop-blur-md py-32">

            <div className="w-7/12 mx-auto">

            <h2 className="text-center text-4xl font-bold text-[#07332F] uppercase leading-[55px]">Join Our Medical Camps for Better Health Today!</h2>
            <p className="text-center text-lg font-medium text-gray-700 my-12">Register now to secure your spot at our specialized medical camps. From health check-ups to expert consultations, take the first step towards a healthier you. It's quick, easy, and your wellness journey starts here!</p>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Camp Name */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Camp Name *</span>
                    </div>
                    <input 
                    {...register("campName")}
                    type="text" name="campName" value={campName} className="input input-bordered w-full border-none rounded-sm" />
                </label>

                {/* Camp Fees */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Camp Fees *</span>
                    </div>
                    <input 
                    {...register("campFees")}
                    type="number" name="campFees" value={campFees} className="input input-bordered w-full border-none rounded-sm" />
                </label>

                {/* Location */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Location *</span>
                    </div>
                    <input 
                    {...register("location")}
                    type="text" name="location" value={location} className="input input-bordered w-full border-none rounded-sm" />
                </label>

                {/* Healthcare Professional */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Healthcare Professional *</span>
                    </div>
                    <input 
                    {...register("healthcareProfessional")}
                    type="text" name="healthcareProfessional" value={healthcareProfessional} className="input input-bordered w-full border-none rounded-sm" />
                </label>


                {/* Participant Email */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Participant Email *</span>
                    </div>
                    <input 
                    {...register("email")}
                    type="email" name="email" value={user.email} className="input input-bordered w-full border-none rounded-sm" />
                </label>

                {/* Participant Age */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Age *</span>
                    </div>
                    <input 
                    {...register("age", { required: true })}
                    type="number" name="age" placeholder="Enter Your Age" className="input input-bordered w-full border-none rounded-sm" />
                    {errors.email && <span className="text-red-600">Age is required</span>}
                </label>

                {/* Participant Phone Number */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Phone Number *</span>
                    </div>
                    <input 
                    {...register("phoneNumber", { required: true })}
                    type="number" name="phoneNumber" placeholder="Enter Phone Number" className="input input-bordered w-full border-none rounded-sm" />
                    {errors.email && <span className="text-red-600">Phone Number is required</span>}
                </label>

                {/* Gender */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Gender *</span>
                    </div>
                    <select 
                    {...register("gender", { required: true })}
                    defaultValue={'Select One'} name="gender" required className="select text-base font-normal text-gray-500 select-bordered w-full border-none rounded-sm">
                        <option disabled>Choose One</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                    {errors.email && <span className="text-red-600">Please choose a gender</span>}
                </label>

                {/* Participant Emergency Contact */}
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Emergency Contact *</span>
                    </div>
                    <input 
                    {...register("emergencyContact", { required: true })}
                    type="text" name="emergencyContact" placeholder="Enter Emergency Contact" className="input input-bordered w-full border-none rounded-sm" />
                    {errors.email && <span className="text-red-600">Emergency Contact is required</span>}
                </label>

                {/* Complete Registration */}
                <input 
                className="bg-[#07332F] btn border-none text-lg font-bold text-white w-full py-2 mt-6 cursor-pointer rounded-sm" type="submit" value="Complete Registration" />

            </form>

            </div>
            
        </div>
        </div>
        </div>
    );
};

export default JoinCamp;