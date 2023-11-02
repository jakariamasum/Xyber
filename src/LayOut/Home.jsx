import About from '../components/About/About';
import Blogs from '../components/Blogs/Blogs';
import Counter from '../components/Counter/Counter';
import Hero from '../components/Hero/Hero';
import Plans from '../components/Plans/Plans';
import Questions from '../components/Questions/Questions';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import Watch from '../components/Watch/Watch';
import Service from "../components/Service/Service"

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Service />
            <Counter />
            <Team />
            <Watch />
            <Questions />
            <Plans />
            <Testimonials />
            <Blogs />
        </div>
    );
};

export default Home;