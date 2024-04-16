import { Link } from "react-router-dom";


const Login = () => {

  const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form)
  }
    return (
        <div className="mt-[40px]">
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Google-login</button>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">GitHub login</button>
        </div>

        <p>Do you have an account??? plz</p>

        <Link to='/register'><button className="text-2xl font-bold text-blue-600">Registation</button></Link>
        
        

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;