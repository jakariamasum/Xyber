import { Link } from 'react-router-dom';
import bg from '../../assets/bg1.png';
import play from '../../assets/play-button.png';
import Button from '../Button/Button';

const Watch = () => {
    return (
        <div className='mx-1 my-10 md:my-20 relative'>
            <img src={bg} alt="" className="w-full h-[300px] lg:h-full bg-cover" />
            <div className='md:pl-28 absolute top-4 lg:top-1/4 flex flex-col gap-2 md:gap-2 text-center md:text-left'>
                <p className='text-[#FF7425] font-bold text-xl md:text-2xl'>Watch Us</p>
                <h1 className='text-xl md:text-6xl text-white font-bold'>
                    We Provide Truly <br /> Prominent IT Solutions.
                </h1>
                <p className='text-white md:w-1/2'>
                    Nunc pellentesque eros ac augue tempus, vitae convallis lorem consectetur. Nulla maximus at nisl eu malesuada. Nullam quis blandit lacus. Fusce tincidunt tellus turpis, quis fermentum justo tempus eget.
                </p>
                <Link to='/login' className='mx-auto md:ml-0'>
                    <Button />
                </Link>
            </div>
            <img src={play} alt="" className='absolute right-4 lg:right-1/3 md:right-1/3 top-8 md:top-44 cursor-pointer w-12 md:w-16' />
        </div>
    );
};

export default Watch;
