import { createBrowserRouter } from "react-router-dom";
import Root from "./Layouts/Root/Root";
import Home from "./Layouts/Home/Home";
import Login from "./Layouts/LoginOrRegister/Login";
import Register from "./Layouts/LoginOrRegister/Register";
import AllService from "./Layouts/Services/AllService";
import ServiceDetails from "./Layouts/Services/ServiceDetails";
import AddNewService from "./Layouts/Services/AddNewService";
import MyServices from "./Layouts/Services/MyServices";
import BookedServices from "./Layouts/Services/BookedServices";
import ServiceTodo from "./Layouts/Services/ServiceTodo";
import UpdateProfile from "./Layouts/UpdateProfile/UpdateProfile";
import PrivateRoute from "./Layouts/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/service/all",
                element: <AllService />
            },
            {
                path: "/service/:serviceId",
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>
            },
            {
                path: "/add-new-service",
                element: <PrivateRoute><AddNewService /></PrivateRoute>
            },
            {
                path: "/update-service/:serviceId",
                element: <PrivateRoute><AddNewService /></PrivateRoute>
            },
            {
                path: "/manage-service",
                element: <PrivateRoute><MyServices /></PrivateRoute>
            },
            {
                path: "/booked-service",
                element: <PrivateRoute> <BookedServices /></PrivateRoute>
            },
            {
                path: "/service-to-do",
                element: <PrivateRoute><ServiceTodo /></PrivateRoute>
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
        ]
    },
]);

export default router;