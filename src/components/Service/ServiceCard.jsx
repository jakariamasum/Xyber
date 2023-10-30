import { FaArrowRight } from 'react-icons/fa'
const ServiceCard = ({ serviceName, serviceDesc, icon }) => {
    return (
        <div className='border border-[#b4b4b4] rounded-xl p-8 flex flex-col gap-5'>
            <div className='bg-[#FFF3ED] w-fit p-8 rounded-lg'>
                {icon}
            </div>
            <h1 className='font-bold text-2xl cursor-pointer hover:text-[#ff7425]'>{serviceName}</h1>
            <p className='text-[#b4b4b4]'>{serviceDesc}</p>
            <a href="#" className='flex items-center gap-2 hover:text-[#ff7425]'> <span>Read More</span> <FaArrowRight /> </a>
        </div>
    );
};

export default ServiceCard;