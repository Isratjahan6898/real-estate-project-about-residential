import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* <Home></Home> */}
           <Outlet></Outlet>

           <Footer></Footer>
        </div>
    );
};

export default Root;