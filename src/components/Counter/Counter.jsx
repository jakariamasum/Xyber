import bg from '../../assets/counter-bg.png';
import NumberCounter from 'number-counter'

const Counter = () => {
    return (
        <div className='relative text-white mb-16'>
            <img src={bg} alt="" className='h-[400px] md:h-[250px] w-full' />
            <div className='w-full gap-4 md:px-28 absolute top-[50px] md:top-1/3 grid grid-cols-1 md:grid-cols-4'>
                <div className='flex gap-6 items-center justify-center'>
                    <p className='text-5xl font-bold'> <NumberCounter end={50} start={1} delay='4'/>  </p>
                    <p className='font-bold text-2xl'>Project <br />Completed</p>
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <p className='text-5xl font-bold'><NumberCounter end={33} start={1} delay='4'/></p>
                    <p className='font-bold text-2xl'>Our Happy <br />Clients</p>
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <p className='text-5xl font-bold'><NumberCounter end={24} start={1} delay='4'/></p>
                    <p className='font-bold text-2xl'>Cup of <br /> Coffee</p>
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <p className='text-5xl font-bold'><NumberCounter end={24} start={1} delay='4'/></p>
                    <p className='font-bold text-2xl'> Win <br /> Awards</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;