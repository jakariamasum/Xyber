import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import HeroCard from './HeroCard';
const Hero = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <HeroCard firstText={'Web'} lastText={'Design'} bg={banner1} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCard firstText={'SEO'} lastText={'Marketing'} bg={banner2} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeroCard firstText={'Web'} lastText={'Developer'} bg={banner3} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;