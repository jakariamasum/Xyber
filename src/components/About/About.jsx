import img1 from '../../assets/about_img_02.png';
import img2 from '../../assets/about_img_03.png';
import Button from '../Button/Button';

const About = () => {
    return (
        <div className='mx-28 relative flex justify-between gap-10 items-center py-40'>
            <div className='flex-1'>
                <img src={img1} alt="" />
                <img src={img2} alt="" className='absolute top-1/2 left-[20%]' />
                <div className='absolute top-[30%] left-[28%] border bg-white border-[#FF7425] flex justify-center items-center flex-col p-4 font-bold'>
                    <p className='text-4xl text-[#FF7425]'>25+</p>
                    <p className='text-[#303539]'>Years of Experience</p>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-4'>
                <p className='text-[#FF7425] font-bold'>Who We Are</p>
                <h1 className='font-bold text-5xl'>We Do Design & Develop <br /> Software Finally Launch.</h1>
                <p className='text-[#777777] leading-7 text-[17px]'>Nulla a mauris feugiat, bibendum sapien pretium, dictum nisl. Integer fringilla varius nisl vitae ornare. Praesent dictum sem nibh, vitae bibendum eros porta vel. In eget quam egestas, aliquam lectus sed, porta neque.</p> <br /> 
                <p className='text-[#777777] leading-7 text-[17px]'>
                Ut iaculis dignissim justo, ut scelerisque lacus gravida sit amet. Mauris at pharetra quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi accumsan hendrerit dapibus. Quisque auctor leo non nulla maximus, tincidunt lobortis diam dignissim.Teger eu venenatis tellus. Nullam vehicula magna id tellus accumsan blandit. Vivamus vehicula vel lorem vel purus sapien.
                </p>
                <Button />
            </div>
        </div>
    );
};

export default About;