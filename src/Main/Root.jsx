import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>

            {/* <Home></Home> */}
            <ToastContainer />
           <Outlet></Outlet>

           <Footer></Footer>
        </div>
    );
};

export default Root;