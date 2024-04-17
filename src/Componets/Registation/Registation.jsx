import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {  useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";





const Registation = () => {
  const {createUser, updateUserProfile }= useContext(AuthContext)

  const location= useLocation();
  console.log('location in the login page',location)
  const navigate = useNavigate();
  //console.log(createUser)
  const form = "/";

  const handleRegister = e =>{
    e.preventDefault ();
    const form = new FormData(e.currentTarget);
    const name = form.get ('name');
    const email = form.get ('email');
    const photo = form.get ('photo');
    const password = form.get ('password');

    console.log(name, email, photo, password)

    createUser(email,password, name, photo)
   .then(() =>{
    updateUserProfile (name,photo)
    .then(()=>{
      navigate(form);
    })



    // console.log(result.user)
    // navigate(location?.state? location.state: '/');

   })

   .catch(error =>{
    console.error(error)
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

         
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
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