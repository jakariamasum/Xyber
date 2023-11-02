import Banner from "../../components/Bannar/Banner";
import Tags from "../../components/Tags/Tags";
import banner from '../../assets/banner-2.jpg'
import img1 from '../../assets/b_details01.jpg'
import img2 from '../../assets/b_details02.jpg'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import user from '../../assets/user2.png'

import { FaCalendarAlt, FaComments, FaEye, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogCard from "../../components/Blogs/BlogCard";
import Search from "../../components/Search/Search";
import Follow from "../../components/Follow/Follow";
import Categories from "../../components/Categories/Categories";
import Tag from "../../components/Tag/Tag";
import RecentPost from "../../components/RecentPost/RecentPost";
const BlogDetails = () => {
    return (
        <div>
            <Banner name={'Blog Details'} first={'Home'} second={'Contact Us'} img={banner} />
            <div className="flex my-12 flex-col lg:flex-row gap-8 lg:mx-28 lg:my-28">
                <div className="lg:w-[70%] px-2">
                    <h1 className="text-[#232323] text-xl font-semibold lg:text-3xl">With Our Vastly Improved Notifications System, Users Have More Control.</h1>
                    <div className="border border-gray-300 my-6"></div>
                    <div className="flex gap-6 mb-5">
                        <div className="flex gap-2 items-center">
                            <FaEye fill="#FF7425" size={20} />
                            <p className="text-[#777782]">100 views</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaComments fill="#FF7425" size={20} />
                            <p className="text-[#777782]">20 comments</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaCalendarAlt fill="#FF7425" size={20} />
                            <p className="text-[#777782]">25 December 2023</p>
                        </div>
                    </div>
                    <div className="text-[#777] leading-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit maiores blanditiis nostrum earum ipsum corrupti, alias aperiam optio, praesentium sequi veritatis maxime quod labore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sunt incidunt dicta beatae saepe necessitatibus.</p> <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis adipisci harum facilis non, voluptatem blanditiis? Ipsa sint vero officia possimus nostrum impedit tempora neque esse porro saepe itaque error fugiat aliquam fugit, nam in voluptatem, eum assumenda distinctio reprehenderit. Labore libero similique eaque, magni, aut harum iure officia officiis alias totam non ea quos eius corporis impedit blanditiis eum at, a ducimus dolorem voluptas? Fugiat distinctio similique excepturi facilis iusto aperiam. Fugit laudantium quas quae totam itaque at ipsum quia magni in asperiores nostrum, atque esse repudiandae soluta, harum error ullam minima laborum. Porro voluptatibus, quisquam pariatur perspiciatis quibusdam accusantium?</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#232323] p-10 rounded-lg mt-8 text-center">
                        <p className="text-[#FF7425]">By Rosalina Pong</p>
                        <h3 className="text-3xl text-white">Viral Dreamcatcher Keytar Typewriter, Aest Hetic Offal Umami. Aesthetic Polaroid Pug Pitchfork Post-Ironic.</h3>
                    </div>
                    <p className="text-[#777] my-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sit, ullam soluta autem officia dicta quam earum similique harum accusamus distinctio debitis quaerat quisquam provident dolorem laudantium hic voluptatum nobis maiores minus labore fugit optio ducimus libero. Suscipit, minus aperiam!</p>
                    <img src={img1} alt="" className="w-full" />
                    <p className="text-[#777] my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deser unt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi tecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asperna tur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non num quam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod incididunt.</p>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <img src={img2} alt="" />
                        <p className="text-[#777] my-8 leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                    </div>
                    <div className="border border-gray-300 my-10"></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#232323] text-xl font-semibold">Related Tags</h3>
                        <div className="flex gap-4">
                            <Tags name={'Organic'} />
                            <Tags name={'Foods'} />
                            <Tags name={'Tasty'} />
                        </div>
                    </div>
                    <div className="border border-gray-300 my-10"></div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#9d9d9d]">Prev Post</p>
                            <Link to='/blogs'><h3 className="text-xl font-semibold cursor-pointer hover:text-[#FF7425]">Tips Minimalist</h3></Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[#9d9d9d]">Next Post</p>
                            <Link to='/blogs'><h3 className="text-xl font-semibold cursor-pointer hover:text-[#FF7425]">Less Is More</h3></Link>
                        </div>
                    </div>
                    <div className="border border-gray-300 my-10"></div>
                    <div>
                        <h3 className="font-semibold text-xl text-[#232323]">Related Posts</h3>
                        <div className="flex flex-col lg:flex-row gap-6 my-5">
                            <BlogCard title={'Auis Nostrud Exercita Ullamco Laboris Nisi Ut'} desc={'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.'} img={blog1} date={'01 November 2023'} />
                            <BlogCard title={'Excepteur Sint Occaecat Cupida Tat Non Proident'} desc={'Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore.'} img={blog2} date={'25 April 2024'} />
                        </div>
                    </div>
                    <div className="bg-[#F9F9F9]  text-center my-20 py-10 rounded-lg">
                        <img src={user} alt="" className="mx-auto" />
                        <div className="flex justify-center gap-2 mt-2">
                            <FaFacebookF fill="#FF7425" /> <FaInstagram fill="#FF7425" /> <FaTwitter fill="#FF7425" /> <FaLinkedin fill="#FF7425" />
                        </div>
                        <p className="mt-5 w-[70%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa aute irure dolor.</p>
                    </div>
                    <div className="border border-gray-300 my-10"></div>
                    <div>
                        <h3 className="font-semibold text-xl text-[#232323]">Leave A Reply</h3>
                        <form>
                            <div className="flex flex-col gap-4 px-5 mt-6  bg-[#F9F9F9] py-5 rounded-lg ">
                                <input type="text" name="" id="" placeholder="Your Name" className="py-3 md:py-4 px-2  rounded-sm border border-black w-full" />
                                <input type="email" name="" id="" placeholder="info@example.com" className="py-3 md:py-4 px-2 rounded-sm border border-black w-full" />
                                <input type="email" name="" id="" placeholder="web.example.com" className="py-3 md:py-4 px-2 rounded-sm border border-black w-full" />
                                <div className="my-4">
                                    <textarea name="" id="" cols="5" rows="5" placeholder="Write comments" className="w-full rounded-sm py-3 md:py-6 px-2 md:px-4 border border-black"></textarea>
                                </div>
                                <div className="text-center my-4">
                                    <input type="submit" value="Post Comment" className="bg-[#FF7425] px-4 md:px-8 rounded-lg text-white cursor-pointer py-3 md:py-4" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mx-2 flex flex-col gap-8">
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

export default BlogDetails;