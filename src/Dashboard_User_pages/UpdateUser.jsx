import { Helmet } from "react-helmet-async";
import useUser from "../hooks/useUser";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from "react-hook-form";
import { GrUpdate } from "react-icons/gr";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateUser = () => {

    const { user } = useAuth();
    const [participant] = useUser();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
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
                const updatedUser = {
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    contact: data.contact,
                    image: res.data.data.display_url
                }

                
                const userRes = await axiosSecure.patch(`/user/${user.email}`, updatedUser);
    
                if(userRes.data.modifiedCount > 0){
                    // show success popup
                    Swal.fire({
                        position: "middle",
                        icon: "success",
                        title: `${data.name}, Your profile is updated.`,
                        showConfirmButton: true,
                    });
                    reset();
                }
            }
        };

    return (
        <div className="bg-slate-100 pb-56">

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | UPDATE PROFILE</title>
            </Helmet>

            <SectionTitle
            heading={'Update Your Profile'}
            subHeading={'Keep your profile up to date by editing your name, email, and other details. Ensure accurate information for a seamless medical camp experience'}
            ></SectionTitle>

            <div className="bg-blue-100 p-12 mx-32">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* user name */}
                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">User Name *</span>
                        </div>
                            <input 
                            {...register('name')}
                            defaultValue={participant.displayName}
                            type="text" name="name"  className="input input-bordered w-full" />
                    </label>

                    {/* user email */}
                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">User E-mail *</span>
                        </div>
                            <input 
                            {...register('email')}
                            type="email" name="email" value={participant.email} className="input input-bordered w-full" />
                    </label>

                </div>

                <div>

                    {/* user phoneNumber */}
                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">User Phone Number *</span>
                        </div>
                            <input 
                            {...register('phoneNumber', { required: true })}
                            type="number" name="phoneNumber" placeholder="Enter Phone Number" className="input input-bordered w-full" />
                            {errors.name && <span className="text-red-600">Phone Number is required</span>}
                    </label>

                    {/* user contact details */}
                    <label className="form-control w-full">
                        <div className="label">
                           <span className="label-text text-lg font-normal">Contact Details *</span>
                        </div>
                        <textarea 
                            {...register('contact', { required: true })}
                            name="contact"
                            className="textarea textarea-bordered h-24" placeholder="Enter Contact Details"></textarea>
                            {errors.name && <span className="text-red-600">Contact Details is required</span>}
                    </label>

                </div>

                <div className="form-control w-full my-6">
                <input 
                {...register('image', { required: true })}
                type="file" className="file-input w-full max-w-xs" />
                {errors.name && <span className="text-red-600">Image is required</span>}
            </div>

            <button 
            style={{'background': 'linear-gradient(90.00deg, rgb(131, 93, 35),rgb(181, 129, 48) 100%)'}}
            className="btn text-xl font-semibold text-white">
                Update Camp <GrUpdate className="ml-4"></GrUpdate>
            </button>

            </form>

        </div>

        </div>
    );
};

export default UpdateUser;