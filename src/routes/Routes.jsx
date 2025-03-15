import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../main_layout_pages/Home";
import SignUp from "../main_layout_pages/SignUp";
import SignIn from "../main_layout_pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import AddCamp from "../Dashboard_Admin_pages/AddCamp";
import ManageCamp from "../Dashboard_Admin_pages/ManageCamp";
import AllParticipant from "../Dashboard_Admin_pages/AllParticipant";
import Analytics from "../Dashboard_User_pages/Analytics";
import ParticipantProfile from "../Dashboard_User_pages/ParticipantProfile";
import PaymentHistory from "../Dashboard_User_pages/PaymentHistory";
import AddReview from "../Dashboard_User_pages/AddReview";
import AvailableCamp from "../main_layout_pages/AvailableCamp";
import CampDetails from "../main_layout_pages/CampDetails";
import JoinCamp from "../main_layout_pages/JoinCamp";
import ManageRegisteredCamp from "../Dashboard_Admin_pages/ManageRegisteredCamp";
import RegisteredCamp from "../Dashboard_User_pages/RegisteredCamp";
import Payment from "../Dashboard_User_pages/Payment";
import UpdateCamp from "../Dashboard_Admin_pages/UpdateCamp";
import AdminRoute from "./AdminRoute";
import UpdateUser from "../Dashboard_User_pages/UpdateUser";
import OrganizerProfile from "../Dashboard_Admin_pages/OrganizerProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>ERROR PAGE</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: "availableCamp",
                element: <AvailableCamp></AvailableCamp>
            },

            {
                path: "camps/:id",
                element: <CampDetails></CampDetails>,
                loader: ({ params }) => fetch(`https://medic-server-ten.vercel.app/camps/${params.id}`)
            },

            {
                path: "joinCamp/:id",
                element: <PrivateRoute><JoinCamp></JoinCamp></PrivateRoute>,
                loader: ({ params }) => fetch(`https://medic-server-ten.vercel.app/camps/${params.id}`)
            },

            {
                path: "signup",
                element: <SignUp></SignUp>
            },

            {
                path: "signin",
                element: <SignIn></SignIn>
            }
        ]
    },







    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // Admin routes

            {
                path: "organizerProfile",
                element: <AdminRoute><OrganizerProfile></OrganizerProfile></AdminRoute>
            },

            {
                path: "users",
                element: <AdminRoute><AllParticipant></AllParticipant></AdminRoute>
            },

            {
                path: "addCamp",
                element: <AdminRoute><AddCamp></AddCamp></AdminRoute>
            },

            {
                path: "manageCamp",
                element: <AdminRoute><ManageCamp></ManageCamp></AdminRoute>
            },

            {
                path: 'updateCamp/:id',
                element: <AdminRoute><UpdateCamp></UpdateCamp></AdminRoute>,
                loader: ({params}) => fetch(`https://medic-server-ten.vercel.app/camps/${params.id}`)
            },

            {
                path: "manageRegisteredCamp",
                element: <AdminRoute><ManageRegisteredCamp></ManageRegisteredCamp></AdminRoute>
            },



            // User route

            {
                path: 'analytics',
                element: <Analytics></Analytics>
            },

            {
                path: "userProfile",
                element: <ParticipantProfile></ParticipantProfile>

            },

            {
                path: 'updateUser',
                element: <UpdateUser></UpdateUser>
            },

            {
                path: "registeredCamp",
                element: <RegisteredCamp></RegisteredCamp>
            },

            {
                path: "payment",
                element: <Payment></Payment>
            },

            {
                path: "payment-history",
                element: <PaymentHistory></PaymentHistory>
            },

            {
                path: '/dashboard/feedback/:id',
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`https://medic-server-ten.vercel.app/register/${params.id}`)
            }
        ]
    }


    ]);

export default router;    