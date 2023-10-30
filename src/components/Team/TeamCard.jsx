
const TeamCard = ({ img, name, position }) => {
    return (
        <div className='flex flex-col gap-4'>
            <img src={img} alt="" className='rounded' />
            <div>
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-[#ff7425] mb-7'>{position}</p>
            </div>
        </div>
    );
};

export default TeamCard;