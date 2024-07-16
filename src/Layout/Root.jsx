import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import AllUsers from "../Dashboard/AllUsers";

const Root = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            < AllUsers />
        </div>
    );
};

export default Root;