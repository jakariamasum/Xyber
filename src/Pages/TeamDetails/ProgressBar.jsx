const LinearProgressBar = ({ progress, name }) => {
    return (
        <div className="w-full bg-gray-500 mt-9">
            <div className='text-xl font-bold  bg-white'>{name}</div>
            <div
                className="bg-[#ff7325] text-xs leading-none py-1 text-center text-white"
                style={{ width: `${progress}%` }}
            >
                {`${progress}%`}
            </div>
        </div>
    );
};

export default LinearProgressBar;
