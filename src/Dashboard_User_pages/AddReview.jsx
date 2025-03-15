import { Helmet } from "react-helmet-async";
import SectionTitle from "../shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUser from "../hooks/useUser";
import { useState } from "react";
import ReactStars from "react-stars";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";






const AddReview = () => {

    const { campName } = useLoaderData();

    const [rating, setRating] = useState(0);

    const [participant] = useUser();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

        const res = await axiosPublic.post('/reviews', {
            campName: campName,
            name: participant.name || participant.displayName,
            participantEmail: participant.email,
            rating: rating,
            comments: data.comments
        })
        if(res.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "middle",
                icon: "success",
                title: `Your Comment is Successfully Added!`,
                showConfirmButton: true,});
        }
        
    }

    return (
        <div className="bg-slate-100 pb-56">

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | ADD REVIEW</title>
            </Helmet>

            <SectionTitle
            heading={'Share Your Experience'}
            subHeading={'Your feedback matters! Leave a review about your experience with our medical camps to help others make informed decisions and improve our services'}>
            </SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}
            className="w-8/12 mx-auto">

            <div className="lg:w-1/3 mx-auto">
                <h2 className="text-center text-2xl font-semibold text-orange-600">Rate this Camp : {campName}</h2>
                <ReactStars
                    count={5}
                    value={rating}
                    size={60}
                    color1={'#28affa'}
                    color2={"#ff7b00"}
                    onChange={(rate) => setRating(rate)}/>
                <p className="text-center text-xl font-semibold text-[#ff7b00]">Your Rating: {rating} stars</p>
            </div>

                {/* user contact details */}
                <label className="form-control w-full my-8">
                    <div className="label">
                        <span className="label-text text-lg font-normal">Your Review *</span>
                    </div>
                    <textarea 
                    {...register('comments', { required: true })}
                    name="comments"
                    className="textarea textarea-bordered h-32 text-lg" placeholder="Share Your Experience....."></textarea>
                    {errors.name && <span className="text-red-600">Contact Details is required</span>}
                </label>

                <p className="text-center my-12"><button className="btn bg-orange-700 text-white text-lg font-bold uppercase">Submit Review</button></p>

            </form>

        </div>
);
};

export default AddReview;