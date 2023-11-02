import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ img, name, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='flex flex-col gap-4 relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt="" className='rounded' />
      {isHovered && (
        <div className='absolute bottom-1/3 left-1/3  flex gap-2 items-center'>
          <FaFacebookF fill='white' size={32} className='bg-[#ff7425] rounded-[50%] py-2 cursor-pointer hover:bg-[#242628]' />
          <FaTwitter fill='white' size={32} className='bg-[#ff7425] rounded-[50%] py-2 cursor-pointer hover:bg-[#242628]' />
          <FaInstagram fill='white' size={32} className='bg-[#ff7425] rounded-[50%] py-2 cursor-pointer hover:bg-[#242628]' />
        </div>
      )}
      <div>
        <Link to={`/details/${name}`}><h1 className='text-2xl'>{name}</h1></Link>
        <p className='text-[#ff7425] mb-7'>{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
