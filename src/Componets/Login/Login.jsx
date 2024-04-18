import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import {  useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const location= useLocation();
  console.log('location in the login page',location)
  const navigate = useNavigate();
  
  const { signIn, googleLogin, githubLogin}= useContext(AuthContext);
  console.log(githubLogin)
  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
   console.log(email,password);
   signIn(email, password)
   .then(result=>{
    console.log(result.user);
    toast.success("user loging Create Successfully")
    navigate(location?.state? location.state: '/');
   })
   .catch(error=>{
    console.error(error);
    toast.error("please give currect information")
   })


 
  }

  const handleSocialLogin = socialProvider =>{
    socialProvider()
    .then(result =>{
      console.log(result.user);
      navigate(location?.state? location.state: '/');
    })
   }
    return (


    
        <div className="mt-[40px]">

<Helmet>
                <title>
                    Real Esate |Login
                </title>
            </Helmet>
            <div className="  bg-base-200">

            <p className="font-bold pt-[20px] text-5xl text-center text-blue-800">Please Login</p>
  <div className="mx-[30px] lg:w-1/2 lg:mx-[290px] py-[30px] ">
  
    <div className=" shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control  mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        

       
        
        

      </form>

  <div className="pb-[30px]">
  <div className="form-control mx-[30px] mt-6">
          <button  onClick={()=> handleSocialLogin(googleLogin)}
          className="btn btn-primary">Google-login</button>
        </div>

        <div className="form-control mx-[30px] mt-6">
          <button 
          onClick={()=> handleSocialLogin(githubLogin)}
          className="btn btn-primary">GitHub login</button>
        </div>
  </div>

<div className="mx-[40px] pb-[40px]">

<p>Do you have an account??? plz</p>

<Link to='/register'><button className="text-2xl font-bold text-blue-600">Registation</button></Link>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;