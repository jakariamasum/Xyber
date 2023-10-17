import Title from "../Title/Title";
import BlogCard from "./BlogCard";
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
const Blogs = () => {
    return (
        <div className="my-20 px-32">
            <Title subtitle={'Our Blog'} title={'Latest Blog & News'}/>
            <div className="flex gap-4 mt-11">
                <BlogCard img={blog1} title={'Cras Accumsan Nulla Nec Lacus Ultricies Placerat.'} desc={'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.'} date={' 24th March 2023'}/>
                <BlogCard img={blog2} title={'Dras Accumsan Nulla Nec Lacus Ultricies Placerat.'} desc={'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.'} date={' 25th March 2023'}/>
                <BlogCard img={blog3} title={'Seas Accumsan Nulla Nec Lacus Ultricies Placerat.'} desc={'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.'} date={' 25th March 2023'}/>
            </div>
        </div>
    );
};

export default Blogs;