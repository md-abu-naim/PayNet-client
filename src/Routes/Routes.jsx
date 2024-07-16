import {
    createBrowserRouter,
} from "react-router-dom";
import Root from '../Layout/Root'
import Banner from '../Components/Banner';
import AllUsers from "../Dashboard/AllUsers";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Banner />
            }
        ]
    },
    // {
    //     path: '/dashboard',
    //     element: <Dashboard /> ,
    //     children: [
    //         {
    //             path:'all-users',
    //             element: <div>hlw</div>
    //         },
    //     ]
    // }

    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [

            // Admin Routes
            {
                path:'all-users',
                element: <AllUsers />
            },
            
        ]
    },
]);