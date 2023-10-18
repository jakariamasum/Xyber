const TestimonialCard = ({ img, name, position, review }) => {
    return (
        <div className='p-4 bg-white rounded-lg'>
            <p className='w-[350px] text-[#7F7F7F]'>"{review}"</p>
            <div className='flex gap-2 items-center mt-5'>
                <img src={img} alt="" />
                <div>
                    <h2 className='text-2xl font-bold mt-4'>{name}</h2>
                    <p className="text-[#FF7425]"><i>{position}</i></p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;