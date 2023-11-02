import ControlledAccordions from "../Accordian/Accordion";
import img from '../../assets/ask.png'
const Questions = () => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mx-4 lg:px-32 items-center bg-[#EDF0F3] py-16">
            <div>
                <h1 className="text-5xl font-bold mb-8">Frequently Asked Question</h1>
                <ControlledAccordions />
            </div>
            <img src={img} alt="" className="w-full rounded-lg h-[80%]"/>
        </div>
    );
};

export default Questions;