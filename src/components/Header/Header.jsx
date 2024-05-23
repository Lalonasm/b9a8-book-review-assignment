import { NavLink } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";


const Header = () => {

    const links = <>
        <li><NavLink className={"font-bold text-green-600 hover:text-white hover:bg-slate-500"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={"font-bold text-green-600  hover:text-white  hover:bg-slate-500"} to={'/listedbook'}>Listed Books</NavLink></li>
        <li><NavLink className={"font-bold text-green-600  hover:text-white  hover:bg-slate-500"} to={'/pagestoread'}>Pages to Read</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Vibes</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className=" hover:bg-green-600 pl-4 pr-4 pt-3 pb-2 rounded-xl font-semibold gap-2 bg-green-500 text-white">Sign In</a>
                <a className=" hover:bg-blue-400 pl-4 pr-4 pt-3 pb-2 m-2 rounded-xl font-semibold gap-2 bg-[#59C6D2] text-white">Sign Up</a>

            </div>

        </div>
    );
};

export default Header;