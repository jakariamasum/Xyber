import Banner from "../../components/Bannar/Banner";
import banner from '../../assets/banner-2.jpg'
import About from "../../components/About/About";
import Counter from "../../components/Counter/Counter";
import Watch from "../../components/Watch/Watch";
import Questions from "../../components/Questions/Questions";
import Blogs from "../../components/Blogs/Blogs";
const AboutPage = () => {
    return (
        <div>
            <Banner name={'About Us'} first={'Home'} second={'Contact Us'} img={banner}/>
            <div>
                <About/>
                <Counter/>
                <Watch/>
                <Questions/>
                <Blogs/>
            </div>
        </div>
    );
};

export default AboutPage;