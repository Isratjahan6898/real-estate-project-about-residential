import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {  useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";





const Registation = () => {

  const [registerError, setRegistError]= useState('');
  // const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword]= useState (false)
  const {createUser, updateUserProfile }= useContext(AuthContext)

  const location= useLocation();
  console.log('location in the login page',location)
  const navigate = useNavigate();
  //console.log(createUser)
  const from = "/";

  const handleRegister = e =>{
    e.preventDefault ();
    const form = new FormData(e.currentTarget);
    const name = form.get ('name');
    const email = form.get ('email');
    const photo = form.get ('photo');
    const password = form.get ('password');
    setRegistError('');
    console.log(name, email, photo, password)

    if(password.length <6){
      setRegistError ('password should be 6 character');
      return;
    }
    else if(!/A-Z/.test(password)){
          
      setRegistError('At least one upperCase letter need');
      return;
    }

    else if (!/[a-z]/.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      return;
    }
     
   
    createUser(email,password, name, photo)
   .then(() =>{
    updateUserProfile (name,photo)
    .then(()=>{
      // setSuccess('user Successfuly')
      toast.success("user Create Successfully")
      navigate(from);
    })



    // console.log(result.user)
    // navigate(location?.state? location.state: '/');

   })

   .catch(error =>{
    console.error(error);
    setRegistError(error.message)
   })



  }
    return (
        <div>
            <div className="mt-[40px]">
            <div className="  bg-base-200">

               <p className="font-bold pt-[20px] text-5xl text-center  text-blue-800">Please Register</p>
  <div className="mx-[20px]  lg:w-1/2 lg:mx-[290px] py-[30px] ">
  
    <div className=" shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body ">

       

      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name="name" placeholder="name" className="input input-bordered" required />
        </div>





        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>

         
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
     

          <input 
          type={showPassword?"text" : "password" }
          name="password" 
          placeholder="password" 
          className="input input-bordered" 
          required />
          
          <span className= "ml-[250px] md:ml-[400px] mt-[-35px] lg:ml-[520px]" onClick={()=> setShowPassword(!showPassword)}>

            {
              showPassword ? <IoMdEyeOff  className="text-3xl"/> : <IoEye  className="text-3xl"/>
            }
          </span>
        </div>
        {
          registerError&& <p className="text-red-600">{registerError}</p>
        }

        {/* {
          success && toast("Wow so easy!")
        } */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>


        <div>
        <p>Already you have an account??</p>

<Link to='/login'><button className="text-2xl font-bold text-blue-600">Login</button></Link>

        </div>
      

        

       
        
        

      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registation;