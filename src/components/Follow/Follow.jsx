import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaWordpress } from 'react-icons/fa';

const Follow = () => {
    return (
        <div className="bg-white p-10 rounded-sm">
            <div className="flex mb-5 gap-2">
                <div className="bg-[#FF7425] w-2  h-auto"></div>
                <h2 className="text-xl font-semibold text-[#232323] ">Follow Us</h2>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-4">
                <FaTwitter size={40} className="text-[#6E6E6E] bg-transparent border cursor-pointer transition-all border-gray-400 rounded-[50%] p-3 hover:bg-[#FF7425] hover:text-white hover:border-none" />
                <FaFacebookF size={40} className="text-[#6E6E6E] bg-transparent border cursor-pointer transition-all border-gray-400 rounded-[50%] p-3 hover:bg-[#FF7425] hover:text-white hover:border-none" />
                <FaPinterestP size={40} className="text-[#6E6E6E] bg-transparent border cursor-pointer transition-all border-gray-400 rounded-[50%] p-3 hover:bg-[#FF7425] hover:text-white hover:border-none" />
                <FaInstagram size={40} className="text-[#6E6E6E] bg-transparent border cursor-pointer transition-all border-gray-400 rounded-[50%] p-3 hover:bg-[#FF7425] hover:text-white hover:border-none" />
                <FaWordpress size={40} className="text-[#6E6E6E] bg-transparent border cursor-pointer transition-all border-gray-400 rounded-[50%] p-3 hover:bg-[#FF7425] hover:text-white hover:border-none" />
            </div>
        </div>
    );
};

export default Follow;