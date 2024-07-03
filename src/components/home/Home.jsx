import Banner from "./components/banner/Banner";
import Benefits from "./components/benefits/Benefits";
import Contact from "./components/contact/Contact";
import Message from "./components/message/Message";
import Newsfeed from "./components/newsfeed/Newsfeed";
import Partners from "./components/partners/Partners";
import Services from "./components/services/Services";
import Testimonial from "./components/testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner />
            <Benefits />
            <Services />
            <Testimonial />
            <Message />
            <Newsfeed />
            <Partners />
            {/* <Enquiry /> */}
            <Contact />
        </div>
    );
};

export default Home;