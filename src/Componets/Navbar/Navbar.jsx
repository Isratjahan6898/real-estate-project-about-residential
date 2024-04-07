import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  


    return (
        <div className="mx-[100px] mt-[40px]">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 1</NavLink></li>
      <li><NavLink className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 1</NavLink></li>
      <li><NavLink className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 3</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1">
      <li className="mr-[15px]"><NavLink  className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 1</NavLink></li>
      <li className="mr-[15px]"><NavLink className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 1</NavLink></li>
      <li ><NavLink className={(isActive)=>isActive? 'bg-blue-400':'bg-red-400'}>Item 3</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn mr-[15px] bg-lime-500 text-white font-bold">Button</Link>
    <div className="w-10 rounded-full">
          <img className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;