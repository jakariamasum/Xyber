import Banner from "../../components/Bannar/Banner";
import Service from "../../components/Service/Service"
import banner from '../../assets/banner-3.jpg'
const ServicePage = () => {
    return (
        <div>
            <Banner name={'Services'} first={'Home'} second={'About Us'} img={banner}/>
            <div>
                <Service/>
            </div>
        </div>
    );
};

export default ServicePage;