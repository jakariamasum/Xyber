import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Button from '../Button/Button';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="lg:fixed top-0 left-0 right-0 z-10 bg-[#242628] text-white p-4">
            <div className="mx-28 flex justify-between items-center relative">
                <Link to="/">
                    <h1 className="text-[#FF7425] font-bold text-2xl md:text-4xl lg:text-4xl">Xyber</h1>
                </Link>
                <div className="fixed ml-28 text-[#FF7425]   lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars />
                </div>
                <nav className="hidden lg:flex gap-10">
                    <Link to="/" className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer">
                        Home
                    </Link>
                    <Link to="/about" className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer" onClick={closeMenu}>
                        About Us
                    </Link>
                    <Link to="/services" className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link to="/blogs" className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer" onClick={closeMenu}>
                        Blog
                    </Link>
                    <Link to="/contact" className="text-white text-lg text-decoration-none hover:text-[#ff7425] cursor-pointer" onClick={closeMenu}>
                        Contact
                    </Link>
                </nav>
                <Link to="/login" className='hidden md:block'>
                    <Button />
                </Link>
            </div>
            {menuOpen && (
                <div className="lg:hidden absolute top-0 left-0 right-0 h-screen bg-[#242628] text-white flex flex-col items-center z-20">
                    <Link to="/" className="text-white text-lg my-4" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="text-white text-lg my-4" onClick={closeMenu}>
                        About Us
                    </Link>
                    <Link to="/services" className="text-white text-lg my-4" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link to="/blogs" className="text-white text-lg my-4" onClick={closeMenu}>
                        Blog
                    </Link>
                    <Link to="/contact" className="text-white text-lg my-4" onClick={closeMenu}>
                        Contact
                    </Link>
                    <Link to="/login">
                        <Button />
                    </Link>

                </div>
            )}
        </div>
    );
};

export default Navbar;
