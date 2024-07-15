import {
    createBrowserRouter,
} from "react-router-dom";
import Root from '../Layout/Root'
import Banner from '../Components/Banner';

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
]);