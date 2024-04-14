import { Link } from "react-router-dom";


const Registation = () => {
    return (
        <div>
            <div className="mt-[40px]">
            <div className="  bg-base-200">
  <div className="mx-[20px]  lg:w-1/2 lg:mx-[290px] py-[30px] ">
  
    <div className=" shadow-2xl bg-base-100">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
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

        <p>If you not register yet Plz</p>

        <Link to='/register'><button className="text-2xl font-bold text-blue-600">Registation</button></Link>
        
        

      </form>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Registation;