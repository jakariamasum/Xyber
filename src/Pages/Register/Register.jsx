import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import register from '../../assets/register.jpg'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='mx-3 lg:mt-24 pt-8 pb-12 flex flex-col-reverse md:flex-row gap-2 lg:mx-28 bg-white items-center'>
            <div className='flex-1'>
                <img src={register} alt="" />
            </div>
            <div className='flex-1 text-center md:text-left'>
                <h1 className='text-3xl font-semibold'>Sign Up</h1>
                <p className='text-[#777] mt-2'>Already have an account? <Link to='/login'><span className='underline text-[#FF7425]'>Sign In</span></Link></p>
                <form className='flex flex-col mt-7 gap-2'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-xl text-[#232323] font-semibold'>First Name</label>
                            <input type="text" name="" id="" placeholder="John" className="py-3  md:py-4 px-2 rounded-sm border border-black" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-xl text-[#232323] font-semibold'>Last Name</label>
                            <input type="text" name="" id="" placeholder="Doe" className="py-3 md:py-4 px-2 rounded-sm border border-black" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>Email</label>
                        <input type="email" name="" id="" placeholder="you@example.com" className="py-3 md:py-4 px-2 md:w-1/2 rounded-sm border border-black" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>Password</label>
                        <input type="password" name="" id="" placeholder="Password" className="py-3 md:py-4 px-2 md:w-1/2 rounded-sm border border-black" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-xl text-[#232323] font-semibold'>Confirm Password</label>
                        <input type="password" name="" id="" placeholder="Confirm Password" className="py-3 md:py-4 px-2 md:w-1/2 rounded-sm border border-black" />
                    </div>
                    <div className=" my-4">
                        <input type="submit" value="Sign Up" className="bg-[#FF7425] px-4 md:px-8 rounded-lg text-white cursor-pointer py-3 md:py-4" />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className="bg-gray-500 text-gray-500 w-1/3 h-[2px]"></div>
                        <p className='text-[#777] '>or sign-up with</p>
                        <div className="bg-gray-500 text-gray-500 w-1/3 h-[2px]"></div>
                    </div>
                    <div className='flex mx-auto flex-col md:flex-row gap-2 md:ml-20 mt-5'>
                        <div className='flex gap-2 items-center border border-red-500 rounded-lg w-fit py-3 px-6 cursor-pointer text-red-500 hover:bg-[#FF7425] hover:text-white hover:border-none'>
                            <FaGoogle /> <span >Google</span>
                        </div>
                        <div className='flex gap-2 items-center border border-[#1877F2] rounded-lg w-fit py-3 px-6 cursor-pointer hover:bg-[#FF7425] hover:text-white text-[#1877F2] hover:border-none'>
                            <FaFacebookF /> <span>Facebook</span>
                        </div>
                        <div className='flex gap-2 items-center border border-[black] rounded-lg w-fit py-3 px-6 cursor-pointer hover:bg-[#FF7425] hover:text-white text-[black] hover:border-none'>
                            <FaGithub /> <span>Github</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;