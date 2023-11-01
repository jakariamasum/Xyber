const Tags = ({ name }) => {
    return (
        <div className="text-[#9d9d9d] cursor-pointer border border-[#9d9d9d] p-2 w-fit hover:border-[#FF7425]">
            <p>{name}</p>
        </div>
    );
};

export default Tags;