import bg from '../../assets/bg1.png'
import play from '../../assets/play-button.png'
import Button from '../Button/Button';
const Watch = () => {
    return (
        <div className='my-20'>
            <img src={bg} alt="" className='relative'/>
            <div className='pl-28 absolute top-44 flex flex-col gap-2'>
                <p className='text-[#FF7425] font-bold'>Watch Us</p>
                <h1 className='text-6xl text-white font-bold'>We Provide Truly <br /> Prominent IT Solutions.</h1>
                <p className='w-1/2 text-white'>Nunc pellentesque eros ac augue tempus, vitae convallis lorem consectetur. Nulla maximus at nisl eu malesuada. Nullam quis blandit lacus. Fusce tincidunt tellus turpis, quis fermentum justo tempus eget.</p>
                <Button/>
            </div>
            <img src={play} alt="" className='absolute right-1/3 top-44 cursor-pointer'/>
        </div>
    );
};

export default Watch;