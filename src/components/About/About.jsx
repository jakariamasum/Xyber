import { Link } from 'react-router-dom';
import img1 from '../../assets/about_img_02.png';
import img2 from '../../assets/about_img_03.png';
import Button from '../Button/Button';

const About = () => {
    return (
        <div className='px-4 md:px-10 lg:px-16 py-10 md:py-20 lg:py-40 relative flex flex-col md:flex-row justify-between gap-10 items-center'>
            <div className='md:w-1/2 relative'>
                <img src={img1} alt="" className='mx-auto md:mx-0' />
                <img src={img2} alt="" className='hidden md:block absolute mt-20 top-1/2 left-1/3 transform -translate-y-1/4' />
                <div className='absolute top-1/2 left-1/3 md:left-1/2 md:top-1/4 border bg-white border-[#FF7425] flex justify-center items-center flex-col p-4 font-bold'>
                    <p className='text-4xl text-[#FF7425]'>25+</p>
                    <p className='text-[#303539]'>Years of Experience</p>
                </div>
            </div>
            <div className='md:w-1/2 flex flex-col gap-4'>
                <p className='text-[#FF7425] font-bold text-center md:text-left'>Who We Are</p>
                <h1 className='font-bold text-4xl md:text-5xl lg:text-5xl text-center md:text-left'>We Do Design & Develop <br /> Software Finally Launch.</h1>
                <p className='text-[#777777] leading-7 text-[17px] text-center md:text-left'>
                    Nulla a mauris feugiat, bibendum sapien pretium, dictum nisl. Integer fringilla varius nisl vitae ornare. Praesent dictum sem nibh, vitae bibendum eros porta vel. In eget quam egestas, aliquam lectus sed, porta neque.
                </p>
                <p className='text-[#777777] leading-7 text-[17px] text-center md:text-left'>
                    Ut iaculis dignissim justo, ut scelerisque lacus gravida sit amet. Mauris at pharetra quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi accumsan hendrerit dapibus. Quisque auctor leo non nulla maximus, tincidunt lobortis diam dignissim.Teger eu venenatis tellus. Nullam vehicula magna id tellus accumsan blandit. Vivamus vehicula vel lorem vel purus sapien.
                </p>
                <Link to='/login' className='text-center md:text-left'><Button /></Link>
            </div>
        </div>
    );
};

export default About;
