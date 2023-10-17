import post1 from '../../assets/post1.png'
import post2 from '../../assets/post2.png'
import Posts from "../Posts/Posts";
import { FiSend } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="bg-[#1D2022] flex justify-between gap-3 px-32 text-white">
            <div className="flex flex-col gap-4">
                <h1 className="font-bold text-4xl">Xyber</h1>
                <p className="w-[350px]">Suspendisse non sem ante. Cras pretium gravida leo a convallis. Nam malesuada interdum metus, sit amet dictum ante congue eu. Maecenas ut maximus enim.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Our Links</h1>
                <ul className="flex flex-col gap-3 text-center cursor-pointer">
                    <li className="hover:text-[#FF7425]">Home </li>
                    <li className="hover:text-[#FF7425]">About Us </li>
                    <li className="hover:text-[#FF7425]">Service </li>
                    <li className="hover:text-[#FF7425]">Contact Us </li>
                    <li className="hover:text-[#FF7425]">Blog</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Latest Blogs</h1>
                <div className="flex flex-col gap-4">
                    <Posts img={post1} heading={'Nothing impossble to need hard work'} date={'7 March, 2023'} />
                    <Posts img={post2} heading={'Nothing impossble to need hard work'} date={'7 March, 2023'} />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl">Subscribe Now</h1>
                <div className='flex items-center gap-2'>
                    <input type="email" name="email" placeholder="Your Email..." className='text-black h-[50px] placeholder:pl-3 rounded-lg' />
                    <FiSend size={35} fill='white' className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Footer;