import {
    createBrowserRouter,
} from "react-router-dom";
import Root from '../Layout/Root'
import Banner from '../Components/Banner';
import AllUsers from "../Dashboard/Admin/AllUsers";
import Dashboard from "../Layout/Dashboard";
import SendMoney from "../Dashboard/User/SendMoney";
import CashOut from "../Dashboard/User/CashOut";
import History from "../Dashboard/User/History";
import CashInManagement from "../Dashboard/Agent/CashInManagement";
import CashOutManagement from "../Dashboard/Agent/CashOutManagement";
import AllHIstory from "../Dashboard/Admin/AllHIstory";

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

            {
                path: 'history',
                element: <History />
            },

            // Users Routes
            {
                path: 'send-money',
                element: <SendMoney />
            },
            {
                path: 'cash-out',
                element: <CashOut />
            },

            // Agent Routes
            {
                path: 'cash-in-management',
                element: <CashInManagement />
            },
            {
                path: 'cash-out-management',
                element: <CashOutManagement />
            },

            
            // Admin Routes
            
            {
                path:'all-users',
                element: <AllUsers />
            },
            {
                path:'all-history',
                element: <AllHIstory />
            },
        ]
    },
]);