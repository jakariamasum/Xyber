import { FaBezierCurve, FaBookMedical, FaBullseye, FaClock, FaDraftingCompass, FaMoneyCheckAlt, FaTasks, FaUserAlt } from 'react-icons/fa'

import Title from "../Title/Title";
import ServiceCard from "./ServiceCard";

const Success = () => {
    return (
        <div className="bg-white py-28">
            <Title subtitle={'Our Service'} title={'That Wow Your Success'} />
            <div className="grid grid-cols-4 gap-6 mx-28 mt-10">
                <ServiceCard serviceName={'IT Design'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaDraftingCompass fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'IT Management'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaTasks fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'Data Security'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaClock fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'Business Reform'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaMoneyCheckAlt fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'SEO & Content'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaBullseye fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'Illustration'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaBezierCurve fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'Firewall Advance'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaBookMedical fill='#FF7425' size={40} />} />
                <ServiceCard serviceName={'24 X 7 Support'} serviceDesc={'Nulla a mauris feugiat bib sapi pretium, dictum nisl. Inter frila varius nisl vitae ornare.'} icon={<FaUserAlt fill='#FF7425' size={40} />} />
            </div>
        </div>
    );
};

export default Success;