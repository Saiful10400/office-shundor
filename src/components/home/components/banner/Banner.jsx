import React, { useEffect } from "react";
// import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import TextTransition, { presets } from "react-text-transition";
import img from '../../../../assets/images/bannerimg.jpg'

const Banner = () => {

    useEffect(() => {
        AOS.init({
            easing: "ease-in-sine",
        });
    }, []);

    const TEXTS = ['purpose', 'performance', 'service'];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="hero min-h-screen lg:h-[800px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
            <div className="absolute lg:left-36 left-5 text-left text-white">
                <div className="lg:max-w-md max-w-sm" data-aos="fade-right">
                    <h1 className="mb-2 text-xl font-bold uppercase text-orange-500 mt-10 lg:mt-0">
                        {/* <TypeAnimation
                            sequence={[
                                'purpose.',
                                1000, 
                                'performance.',
                                1000,
                                'service.',
                                1000
                            ]}
                            // wrapper="span"
                            cursor={false}
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        /> */}
                        <TextTransition
                            style={{ fontSize: '2.5rem' }}
                            direction="left"
                            springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}
                        </TextTransition>
                    </h1>
                    <i><h1 className="mb-5 text-4xl font-bold">DRIVEN.</h1></i>
                    <p className="mb-5">
                        Are you tired of unpredictability when it comes to shipping or hauling full truckload freight?
                    </p>
                    <p className="mb-5">Enter a world where modern technology meets high performance and deep industry insights. With Transfix you can turn logistical challenges into strategic opportunities, better decision-making, and more successful outcomes.</p>
                    <button className="btn bg-orange-500 hover:bg-orange-300 hover:text-black border-none rounded-none text-white mr-4">Ship With Us</button>
                    <button className="btn btn-outline border-orange-200 hover:bg-orange-300 text-white hover:text-black rounded-none">Haul With Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;