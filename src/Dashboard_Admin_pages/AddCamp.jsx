import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddCamp = () => {

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        console.log(data);

        // image upload to img bb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success) {
            // now send the camp data to the database with the img url
            const addedCamp = {
                campName: data.campName,
                campFees: data.campFees,
                dateTime: data.dateTime,
                location: data.location,
                healthcareProfessional: data.healthcareProfessional,
                description: data.description,
                image: res.data.data.display_url
            }
            const campRes = await axiosSecure.post('/camps', addedCamp)
            if(campRes.data.insertedId) {
                // now success popup
                reset();
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${data.campName} is added to the menu.`,
                    showConfirmButton: true,
                });
                navigate('availableCamp')
            }
        }

    }

    return (
        <div className="bg-white bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] pb-56 pt-12">

            <Helmet>
                <title>MEDIC | DASHBOARD | ADMIN | ADD CAMP</title>
            </Helmet>

            <h2 className="text-center text-5xl font-bold text-[#07332F] my-12 uppercase">Add a New Medical Camp</h2>
            <p className="text-center text-xl font-medium text-gray-500 mb-24">Create and manage new medical camps effortlessly. Provide essential details like name, date, location, <br /> and healthcare professionals to help participants discover and join your camp</p>

            <div className="bg-white p-12 mx-12 md:24 lg:mx-56 rounded-sm shadow-xl">

        <form onSubmit={handleSubmit(onSubmit)}>


        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Camp name */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Camp Name *</span>
                </div>
                    <input 
                    {...register('campName', { required: true })}
                    type="text" name="campName" placeholder="Enter Camp Name" className="input input-bordered w-full rounded-sm" />
                    {errors.name && <span className="text-red-600">Camp Name is required</span>}
            </label>
            
        {/* Camp Fees */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Camp Fees *</span>
                </div>
                    <input 
                    {...register('campFees', { required: true })}
                    type="number" name="campFees" placeholder="Enter Camp Fees" className="input input-bordered w-full rounded-sm" />
                    {errors.name && <span className="text-red-600">Camp Fees is required</span>}
            </label>

        </div>



    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">


        {/* Date & Time */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Date & Time *</span>
                </div>
                    <input 
                    {...register('dateTime', { required: true })}
                    type="datetime-local" name="dateTime" placeholder="Enter Date & Time" className="input input-bordered w-full rounded-sm" />
                    {errors.name && <span className="text-red-600">Date & Time is required</span>}
            </label>


            {/* Location */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Location *</span>
                </div>
                    <input 
                    {...register('location', { required: true })}
                    type="text" name="location" placeholder="location" className="input input-bordered w-full rounded-sm" />
                    {errors.name && <span className="text-red-600">Location is required</span>}
            </label>

            </div>


        {/* Healthcare Professional */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Healthcare Professional *</span>
                </div>
                    <input 
                    {...register('healthcareProfessional', { required: true })}
                    type="text" name="healthcareProfessional" placeholder="Healthcare Professional" className="input input-bordered w-full rounded-sm" />
                    {errors.name && <span className="text-red-600">Healthcare Professional Name is required</span>}
            </label>


            {/* Description */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Description *</span>
                </div>
                <textarea 
                {...register('description', { required: true })}
                name="description"
                className="textarea textarea-bordered h-24 rounded-sm" placeholder="Description"></textarea>
                {errors.name && <span className="text-red-600">Description is required</span>}
            </label>

            <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs rounded-sm" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <button className="btn bg-[#07332F] text-lg font-semibold text-white uppercase rounded-sm">
                Add Camp <FaUtensils className="ml-4"></FaUtensils>
            </button>

            </form>

            </div>
            
        </div>
    );
};

export default AddCamp;