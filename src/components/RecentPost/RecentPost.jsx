const RecentPost = () => {
    return (
        <div className="bg-white p-10 rounded-sm">
            <div className="flex mb-5 gap-2">
                <div className="bg-[#FF7425] w-2  h-auto"></div>
                <h2 className="text-xl font-semibold text-[#232323] ">Recent Posts</h2>
            </div>
            <div className="text-[#777] flex flex-col gap-4">
                <h2 className="cursor-pointer hover:text-[#FF7425] text-[16px] leading-7">User Experience Psychology And Performance Smshing August 19, 2020</h2>
                <h2 className="cursor-pointer hover:text-[#FF7425] text-[16px] leading-7">Monthly Web Development Up Cost Of JavaScript August 19, 2020</h2>
                <h2 className="cursor-pointer hover:text-[#FF7425] text-[16px] leading-7">There are many variation passages of like available. August 19, 2020</h2>
            </div>
        </div>
    );
};

export default RecentPost;