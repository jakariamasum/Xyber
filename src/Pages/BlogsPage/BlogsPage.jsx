import Banner from "../../components/Bannar/Banner";
import Card from "./Card";
import banner from '../../assets/banner-2.jpg'
import Search from "../../components/Search/Search";
import Follow from "../../components/Follow/Follow";
import Categories from "../../components/Categories/Categories";
import RecentPost from "../../components/RecentPost/RecentPost";
import Tag from "../../components/Tag/Tag";

const BlogsPage = () => {
    return (
        <div className="mb-12">
            <Banner img={banner} name={'Blogs'} first={'Home'} second={'Contact Us'} />
            <div className="mx-1 flex flex-col md:flex-row gap-6 lg:mx-28">
                <div className="md:w-[70%] mt-20 flex flex-col gap-6">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="mt-20 flex flex-col gap-8">
                    <Search/>
                    <Follow/>
                    <Categories/>
                    <RecentPost/>
                    <Tag/>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;