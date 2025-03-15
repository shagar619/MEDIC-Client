import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateCamp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { _id ,campName, campFees, location, dateTime, description, image, healthcareProfessional } = useLoaderData();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
        

        // image upload to img bb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const updatedCamp = {
                campName: data.campName,
                campFees: data.campFees,
                dateTime: data.dateTime,
                location: data.location,
                healthcareProfessional: data.healthcareProfessional,
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const campRes = await axiosSecure.patch(`/camps/${_id}`, updatedCamp);

            if(campRes.data.modifiedCount > 0){
                // show success popup
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: `${data.campName} is updated to the camp.`,
                    showConfirmButton: true,
                });
            }
        }
    };

    return (
        <div className="pb-56 mt-24">

            <Helmet>
                <title>MEDIC | DASHBOARD | ADMIN | MANAGE CAMP | UPDATE CAMP</title>
            </Helmet>

            <h2 className="text-center text-5xl font-bold text-blue-600 my-12 uppercase">Update Camp Details</h2>
            <p className="text-center text-xl font-medium text-green-500 mb-24">Modify and refine the details of your medical camps with ease. Keep your listings accurate and <br /> up-to-date to provide the best experience for participants</p>

        <div className="bg-[#F3F3F3] p-12 mx-32">

        <form onSubmit={handleSubmit(onSubmit)}>


        <div className="flex justify-between items-center gap-6">

        {/* Camp name */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Camp Name *</span>
                </div>
                    <input 
                    {...register('campName', { required: true })}
                    defaultValue={campName}
                    type="text" name="campName" placeholder="Enter Camp Name" className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Camp Name is required</span>}
            </label>
            
        {/* Camp Fees */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Camp Fees *</span>
                </div>
                    <input 
                    {...register('campFees', { required: true })}
                    defaultValue={campFees}
                    type="number" name="campFees" placeholder="Enter Camp Fees" className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Camp Fees is required</span>}
            </label>

        </div>



    <div className="flex justify-between items-center gap-6">


        {/* Date & Time */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Date & Time *</span>
                </div>
                    <input 
                    {...register('dateTime', { required: true })}
                    defaultValue={dateTime}
                    type="datetime-local" name="dateTime" placeholder="Enter Date & Time" className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Date & Time is required</span>}
            </label>


            {/* Location */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Location *</span>
                </div>
                    <input 
                    {...register('location', { required: true })}
                    defaultValue={location}
                    type="text" name="location" placeholder="location" className="input input-bordered w-full" />
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
                    defaultValue={healthcareProfessional}
                    type="text" name="healthcareProfessional" placeholder="Healthcare Professional" className="input input-bordered w-full" />
                    {errors.name && <span className="text-red-600">Healthcare Professional Name is required</span>}
            </label>


            {/* Description */}
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-normal">Description *</span>
                </div>
                <textarea 
                {...register('description', { required: true })}
                defaultValue={description}
                name="description"
                className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                {errors.name && <span className="text-red-600">Description is required</span>}
            </label>

            <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <button className="btn bg-blue-700 text-xl font-semibold text-white">
                Update Camp <GrUpdate className="ml-4"></GrUpdate>
            </button>

            </form>

            </div>
            
        </div>
    );
};

export default UpdateCamp;