import Banner from '../../components/Bannar/Banner';
import Location from './Location/Location';
import banner from '../../assets/banner-1.jpg'
import Address from './Address';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className=''>
            <Banner name={'Contact Us'} first={'Home'} second={'About us'} img={banner} />
            <Location />
            <Address />
            <ContactForm />
        </div>
    );
};

export default Contact;