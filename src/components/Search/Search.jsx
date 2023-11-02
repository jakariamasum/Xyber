const Search = () => {
    return (
        <div className="bg-white p-2 md:p-10 rounded-sm">
            <div className="flex mb-5 gap-2">
                <div className="bg-[#FF7425] w-2  h-auto"></div>
                <h2 className="text-xl font-semibold text-[#232323] ">Search</h2>
            </div>
            <input type="search" name="" id="" className="p-3 bg-[#F5F5F5] placeholder:pl-5" placeholder="Search" />
            <span className="p-4 bg-[#FF7425] text-white">Search</span>
        </div>
    );
};

export default Search;