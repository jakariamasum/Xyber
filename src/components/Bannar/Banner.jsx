const Banner = ({ img, first, second, name }) => {
    return (
        <div className='relative'>
            <img src={img} alt="" className='w-full h-auto object-cover' />
            <div className='absolute top-[40%] left-[40%] text-white text-center'>
                <p className='text-2xl md:text-4xl lg:text-6xl font-bold'>{name}</p>
                <div className='flex flex-col items-center md:flex-row md:gap-4 text-lg mt-4 md:mt-12'>
                    <p>{first}</p>
                    <p>|</p>
                    <p>{second}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
