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
                element: <ServiceDetails />
            },
            {
                path: "/add-new-service",
                element: <AddNewService />
            },
            {
                path: "/update-service/:serviceId",
                element: <AddNewService />
            },
            {
                path: "/manage-service",
                element: <MyServices />
            },
            {
                path: "/booked-service",
                element: <BookedServices />
            },
            {
                path: "/service-to-do",
                element: <ServiceTodo />
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />
            },
        ]
    },
]);

export default router;