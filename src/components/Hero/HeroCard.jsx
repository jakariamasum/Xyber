const HeroCard = ({ firstText, lastText, bg }) => {
    return (
        <div className='relative text-white'>
            <img src={bg} alt="" />
            <div className='absolute text-center top-0 lg:top-1/4 w-full'>
                <div className='flex flex-col text-center gap-4 md:gap-8'>
                    <div>
                        <h1 className='text-2xl md:text-7xl font-bold'>
                            We Are Smart {firstText} <br /> {lastText} <span className='text-[#FF7425]'>Agency</span>
                        </h1>
                    </div>
                    <p className='text-sm md:text-xl leading-6 md:leading-7 w-[80%] mx-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in tenetur deleniti quae laborum quo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis eum officia, voluptates deserunt eaque accusamus obcaecati, sint odit eveniet praesentium eligendi adipisci earum amet!
                    </p>
                    <div className='flex flex-col gap-4 md:flex-row md:gap-7 justify-center'>
                        <div className='bg-[#FF7425] px-4 rounded-lg py-3 text-white text-center md:text-left'>
                            Discover More
                        </div>
                        <div className='border border-white bg-transparent px-4 rounded-lg py-3 text-white text-center md:text-left'>
                            See Project
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
