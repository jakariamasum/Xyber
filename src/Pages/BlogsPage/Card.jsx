import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import img from '../../assets/blog1.jpg'
const Card = () => {
    return (
        <div>
            <img src={img} alt="" className='h-full lg:h-[450px] w-full'/>
            <div className='bg-white px-4 py-8'>
                <div className='flex gap-10 py-4'>
                    <div className='flex gap-2 items-center'>
                        <FaUser fill='#FF7425'/> <span className='text-[#777]'>By John</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaCalendarAlt fill='#FF7425'/> <span className='text-[#777]'>24 March 2023</span>
                    </div>
                </div>
                    <h1 className="text-3xl font-semibold text-[#232323] cursor-pointer hover:text-[#FF7425]">There Are Many Variations Passages Of Like Consectetur Lorem Ipsum Available.</h1>
                    <p className='text-[#777] my-8 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                    <button className='py-3 px-8 bg-[#FF7425] text-white rounded-sm'>Read More</button>
            </div>
        </div>
    );
};

export default Card;