import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg';
import { FaFacebook, FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='mt-24 flex gap-2 mx-28 bg-white items-center'>
            <div className='flex-1'>
                <img src={login} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-3xl font-semibold'>Login</h1>
                <p className='text-[#777] mt-2'>Doesn't have an account yet? <Link to='/register'><span className='underline text-[#FF7425]'>Sign Up</span></Link></p>
                <form className='flex flex-col mt-7 gap-2'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>Email</label>
                        <input type="email" name="" id="" placeholder="you@example.com" className="py-3 md:py-4 px-2 w-1/2 rounded-sm border border-black" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>Password</label>
                        <input type="password" name="" id="" placeholder="Password" className="py-3 md:py-4 px-2 w-1/2 rounded-sm border border-black" />

                    </div>
                    <div className=" my-4">
                        <input type="submit" value="Login" className="bg-[#FF7425] px-4 md:px-8 rounded-lg text-white cursor-pointer py-3 md:py-4" />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className="bg-gray-500 text-gray-500 w-1/3 h-[2px]"></div>
                        <p className='text-[#777] '>or login with</p>
                        <div className="bg-gray-500 text-gray-500 w-1/3 h-[2px]"></div>
                    </div>
                    <div className='flex gap-2 ml-32 mt-5'>
                        <div className='flex gap-2 items-center border border-red-500 rounded-lg w-fit py-3 px-6 cursor-pointer text-red-500 hover:bg-[#FF7425] hover:text-white hover:border-none'>
                            <FaGoogle /> <span >Google</span>
                        </div>
                        <div className='flex gap-2 items-center border border-[#1877F2] rounded-lg w-fit py-3 px-6 cursor-pointer hover:bg-[#FF7425] hover:text-white text-[#1877F2] hover:border-none'>
                            <FaFacebookF /> <span>Google</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;