import {FaCalendarAlt} from 'react-icons/fa'
const BlogCard = ({img,title,desc,date}) => {
    return (
        <div className='flex flex-col gap-4 relative shadow-2xl rounded-lg'>
            <img src={img} alt="" className='w-[400px]  hover:scale-105 rounded-sm' />
            <div className='flex gap-1 items-center absolute bottom-60 left-12 bg-[#FF7425] px-2 py-1 rounded-lg text-white'> <FaCalendarAlt/> {date}</div>
            <div className='flex flex-col gap-4 px-5'>
                <h2 className='text-2xl text-[#232323] font-bold cursor-pointer hover:text-[#FF7425]'>{title}</h2>
                <p className='w-[350px]'>{desc}</p>
                <p className='cursor-pointer font-bold text-[#FF7425] pb-8'>Read More</p>
            </div>
        </div>
    );
};

export default BlogCard;