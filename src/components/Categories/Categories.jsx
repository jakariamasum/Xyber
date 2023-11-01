const Categories = () => {
    return (
        <div className="bg-white p-10 rounded-sm">
            <div className="flex mb-5 gap-2">
                <div className="bg-[#FF7425] w-2  h-auto"></div>
                <h2 className="text-xl font-semibold text-[#232323] ">Categories</h2>
            </div>
            <div className="text-[#777] flex flex-col gap-3">
                <div className="cursor-pointer flex justify-between hover:text-[#FF7425]">
                    <p>Branding</p> <p className="">(5)</p>
                </div>
                <div className="cursor-pointer flex justify-between hover:text-[#FF7425]">
                    <p>Corporate</p> <p className="">(5)</p>
                </div>
                <div className="cursor-pointer flex justify-between hover:text-[#FF7425]">
                    <p>Design</p> <p className="">(5)</p>
                </div>
                <div className="cursor-pointer flex justify-between hover:text-[#FF7425]">
                    <p>Gallary</p> <p className="">(5)</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;