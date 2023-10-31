const Banner = ({ img, first, second, name }) => {
    return (
        <div className='relative'>
            <img src={img} alt="" className='bg-cover w-full' />
            <div className='absolute top-[60%] left-[40%] text-white'>
                <p className='text-6xl font-bold'>{name}</p>
                <div className='flex gap-4 justify-center text-xl mt-12'>
                    <p>{first}</p>
                    <p>|</p>
                    <p>{second}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;