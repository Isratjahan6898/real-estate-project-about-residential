import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then ()
    .catch()
  }


  


    return (
        <div className="lg:mx-[100px] mt-[40px]">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to="/" className={({isActive})=>isActive? 'font-bold text-lime-800 border border-lime-700 ':'font-bold'}>Home</NavLink></li>
      <li><NavLink to='/updateProfile' className={({isActive})=>isActive? 'font-bold border text-lime-800 border-lime-700 ':'font-bold'}>Update Profile</NavLink></li>
      <li><NavLink to='/contact' className={({isActive})=>isActive? 'font-bold text-lime-800k; border border-lime-700 ':'font-bold'}>Contact</NavLink></li>
      <li><NavLink to='/blog' className={({isActive})=>isActive? 'font-bold text-lime-800k; border border-lime-700 ':'font-bold'}>Blog</NavLink></li>
      
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold text-lime-600/70">ResidenceRealm</a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal">
      <li className="mr-[15px]"><NavLink to='/' className={({isActive})=>isActive? 'font-bold text-lime-800 border border-lime-700 ':'font-bold'}>Home</NavLink></li>
      <li className="mr-[15px]"><NavLink to='/updateProfile' className={({isActive})=>isActive? 'font-bold text-lime-800 border border-lime-700 ':'font-bold'}>Update Profile</NavLink></li>
      <li ><NavLink  to='/contact' className={({isActive})=>isActive? 'font-bold text-lime-800 border border-lime-700 ':'font-bold'}>Contact</NavLink></li>

      <li><NavLink to='/blog' className={({isActive})=>isActive? 'font-bold text-lime-800k; border border-lime-700 ':'font-bold'}>Blog</NavLink></li>
      
    </ul>
  </div>
  <div className=" mt-[100px] md:mt-[30px] lg:navbar-end">





        {
          user?.email?

         
          <div className="flex">

<div className="w-10 rounded-full tooltip" data-tip={user.displayName}>
          <img className="rounded-full " data-tip="hello" alt="Tailwind CSS Navbar component" src={user ?.photoURL ||"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" } />
        </div>
           <button onClick={handleLogOut} className="btn mr-[15px] bg-lime-500 text-white font-bold">LogOut</button>
          </div>
         
         : <Link to='/login' className="btn mr-[15px] bg-lime-500 text-white font-bold">Login</Link>
        }
   
   
  </div>
</div>
        </div>
    );
};

export default Navbar;