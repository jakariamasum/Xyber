import Banner from "../../components/Bannar/Banner";
import banner from '../../assets/banner-3.jpg'
import img1 from '../../assets/protfolio-img04.png'
import img2 from '../../assets/protfolio-img06.png'
import img3 from '../../assets/protfolio-img02.png'
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
const ServiceDetails = () => {
    return (
        <div>
            <Banner img={banner} name={'Service Details'} first={'Home'} second={'Services'} />
            <div className="flex flex-col md:flex-row mx-3 gap-6 my-12 lg:mx-28">
                <div className="w-full">
                    <div className="bg-[#F3F4F8] p-6">
                        <div className="flex mb-5 gap-2">
                            <div className="bg-[#FF7425] w-2  h-auto"></div>
                            <h2 className="text-xl font-semibold text-[#232323] ">Service List</h2>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className=" bg-white items-center flex justify-between"><span className="p-3 font-bold text-[16px]">IT Design</span><FaArrowRight size={40} className="bg-[#E8EAEC] p-3 " /> </div>
                            <div className=" bg-white items-center flex justify-between"><span className="p-3 font-bold text-[16px]">IT Management</span><FaArrowRight size={40} className="bg-[#E8EAEC] p-3 " /> </div>
                            <div className=" bg-white items-center flex justify-between"><span className="p-3 font-bold text-[16px]">Data Security</span><FaArrowRight size={40} className="bg-[#E8EAEC] p-3 " /> </div>
                            <div className=" bg-white items-center flex justify-between"><span className="p-3 font-bold text-[16px]">SEO & Content</span><FaArrowRight size={40} className="bg-[#E8EAEC] p-3 " /> </div>
                            <div className=" bg-white items-center flex justify-between"><span className="p-3 font-bold text-[16px]">Business Reform</span><FaArrowRight size={40} className="bg-[#E8EAEC] p-3 " /> </div>
                        </div>
                    </div>
                    <div className=" text-center mt-20 bg-[#F3F4F8] p-6">
                        <h2 className="text-xl font-semibold text-[#232323]">If You Need Any Help Contact With Us</h2>
                        <p className="text-[#FF7425] font-bold mt-8 text-2xl">+880111455454</p>
                    </div>
                    <div className="bg-[#F3F4F8] p-6 mt-20">
                        <div className="flex mb-5 gap-2">
                            <div className="bg-[#FF7425] w-2  h-auto"></div>
                            <h2 className="text-[18px] font-semibold text-[#232323] ">Download Brochurs</h2>
                        </div>
                        <p className="text-[#777]">Pleasure and praising pain was born and I will give you a complete account.</p>
                        <div>
                            <div className="flex items-center">
                                <FaFilePdf size={60} fill="white" className="p-2 mt-8 bg-[#FF7425]"/> <span className="mt-8 font-bold p-4 bg-white">Info Company</span>
                            </div>
                            <div className="flex items-center">
                                <FaFilePdf size={60} fill="white" className="p-2 mt-8 bg-[#FF7425]"/> <span className="mt-8 font-bold p-4 bg-white">Info Company</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="capitalize text-[#232323] font-semibold text-xl">We give the best Service</h2>
                    <p className="text-[#777] leading-6 text-[16px]">Pleasure and praising pain was born and I will give you a complete account of the systems, and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally Nor who loves or pursues or desires to obtain pain of itself.</p>
                    <div className="flex gap-4 w-full">
                        <img src={img1} alt="" className="w-1/2 rounded-sm" />
                        <img src={img2} alt="" className="w-1/2 rounded-sm" />
                    </div>
                    <h2 className="capitalize text-[#232323] font-semibold text-xl">Why choose this service</h2>
                    <p className="text-[#777] leading-6 text-[16px]">Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely.</p>
                    <p className="text-[#777] leading-6 text-[16px]">Complete account of the systems and expound the actually teachings of the great explorer of the truth, the master-builder of human uts happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                    <h2 className="capitalize text-[#232323] font-semibold text-xl">Printing made easier</h2>
                    <p className="text-[#777] leading-6 text-[16px]">Quam parturient mi amet curae augue varius laoreet vehicula non sem aliquet lectus justo litora fames estab phasellus risus ad sollicitudin magna Viverra diam pretium cursus curabitur parturient convallis hymenaeos suspendisse nibh facilisi purus penatibus habitasse mus orcine muscle adipiscing sapien aliquam nulla. Erat parturient auctor facilisis. Nisi cum fringilla hymenaeos ridiculus habitasses augue nullam fringilla. Taciti convallis. Vitae sapien nisi enim vis metus cras fusce lectus sed luctus quis Clas nisl blandit parturient molestie praesent nec</p>
                    <img src={img3} alt="" className="w-full rounded-sm" />
                    <p className="text-[#777] leading-6 text-[16px]">Phasellus hac phasellus consequat malesuada veler aliquam dictumst amet a phasellus lacinia integer curabitur duis. Urna taciti nisl torquent varius libero dui. Tempus magnis libero pulvinar purus pharetra justo sem curae duis eget tempus erat ornare. Consequat litora a blandit fermentum. Quam taciti site nascetur nunc litora quis tempor metus adipiscing ac quis sodales ultrices cubilia. Arcu in penatibus vestibulum diam. Curabitur platea quam fusce molestie venenatis platea ligula in aenean gravida dolor aptent nostra luctus rutrum morbi porttitor cursus</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;