import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-[#242628] text-white p-4">
            <div className="mx-28 flex justify-between items-center">
                <Link to='/'><h1 className="text-[#FF7425] font-bold text-2xl md:text-4xl lg:text-4xl">Xyber</h1></Link>
                <nav className="flex gap-10">
                    <Link to='/' className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">Home</Link>
                    <Link to='/about' className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">About Us</Link>
                    <Link to='/services' className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">Services</Link>
                    <Link to='/blog' className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">Blog</Link>
                    <Link to='/contact' className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">Contact</Link>
                </nav>
                <Link to='/login'><Button /></Link>
            </div>
        </div>
    );
};

export default Navbar;
