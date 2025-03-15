import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "../Payment/CheckOutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>

            <Helmet>
                <title>MEDIC | DASHBOARD | USER | PAYMENT</title>
            </Helmet>

            <h2 className="text-center text-5xl font-bold text-blue-600 mt-24 mb-12 uppercase">Secure Your Spot with Easy Payments</h2>
            <p className="text-center text-xl font-semibold text-green-500">Complete your registration by making a secure payment for your chosen medical camp. We ensure <br /> a seamless and safe transaction experience for your convenience</p>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;