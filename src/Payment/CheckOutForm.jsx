import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useParticipantCamp from "../hooks/useParticipantCamp";

const CheckOutForm = () => {

    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [participantCamp, refetch] = useParticipantCamp();
    const navigate = useNavigate();
    const totalPrice = participantCamp.reduce((total, item) => total + item.campFees, 0);


    useEffect(() => {

    if(totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res => {
            setClientSecret(res.data.clientSecret);
        })
    }

    }, [axiosSecure, totalPrice])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error) {
            console.log('Payment Error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }


        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if(confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);


                // now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),  // utc date convert. use moment js to
                    cartIds: participantCamp.map(item => item._id),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                refetch();
                if(res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Payment Successfully Completed!",
                        icon: "success",
                        draggable: true
                    });
                    navigate('/dashboard/payment-history');
                }
            }
        }




    }

    return (
        <div className="w-8/12 mx-auto py-36 mb-32">

            <form onSubmit={handleSubmit}>

                <CardElement className="border p-6">
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
                </CardElement>

                <button 
                disabled={!stripe || !clientSecret}
                className="btn bg-blue-600 text-white text-xl font-bold my-8" type="submit">
                Pay
            </button>

            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600 text-lg font-medium"> Your transaction id : <span className="text-xl font-bold">{transactionId}</span> </p>}

            </form>
            
        </div>
    );
};

export default CheckOutForm;