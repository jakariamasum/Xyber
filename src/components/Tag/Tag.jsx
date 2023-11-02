import Tags from "../Tags/Tags";

const Tag = () => {
    return (
        <div className="bg-white p-10 rounded-sm">
            <div className="flex mb-5 gap-2">
                <div className="bg-[#FF7425] w-2  h-auto"></div>
                <h2 className="text-xl font-semibold text-[#232323] ">Tag</h2>
            </div>
            <div className="text-[#777] flex flex-col gap-3">
                <div className="flex flex-wrap gap-2 md:gap-4">
                    <Tags name={'App'} />
                    <Tags name={'Branding'} />
                    <Tags name={'Corporate'} />
                    <Tags name={'Design'} />
                    <Tags name={'Gallery'} />
                    <Tags name={'Vedio'} />
                    <Tags name={'Web Design'} />
                </div>
            </div>
        </div>
    );
};

export default Tag;