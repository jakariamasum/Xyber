const Posts = ({ img, heading, date }) => {
    return (
        <div className='flex gap-3 items-center'>
            <img src={img} alt="" />
            <div>
                <p className='w-[200px] cursor-pointer'>{heading}</p>
                <p className='text-[#ff7425]'>{date}</p>
            </div>
        </div>
    );
};

export default Posts;