import { useEffect } from 'react';
import CountUp from 'react-countup';
import { FaBicycle, FaCar, FaTruck } from "react-icons/fa";
import AOS from "aos";

const Benefits = () => {
    useEffect(() => {
        AOS.init({
            easing: "ease-in-sine",
        });
    }, []);
    return (
        <div className='bg-gray-200 p-6'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-10 w-[90%] mx-auto  '>
                <div data-aos="fade-up" className='text-center hover:bg-gray-300 py-4 rounded-lg'
                    >
                    <h2 className="text-5xl font-semibold mb-3">
                        <CountUp
                            start={1}
                            end={500}
                            duration={2.75}
                            className="count-up" />+

                    </h2>
                    <p>Companies trust us</p>
                </div>
                <div data-aos="fade-up" className='text-center hover:bg-gray-300 py-4 rounded-lg'
                    >
                    <h2 className="text-5xl font-semibold mb-3">
                        <CountUp
                            start={1}
                            end={97.4}
                            duration={2.75}
                            className="count-up2" />%
                    </h2>
                    <p>First time right delivery</p>
                </div>
                <div data-aos="fade-up" className='text-center hover:bg-gray-300 py-4 rounded-lg'>
                    <h2 className="text-5xl font-semibold mb-3">
                        24/7
                    </h2>
                    <p>24h/7 support</p>
                </div>
                <div data-aos="fade-up" className='text-center hover:bg-gray-300 py-4 rounded-lg'>
                    <h2 className="text-5xl font-semibold flex justify-center gap-6 mb-3">
                        <FaBicycle />
                        <FaCar />
                        <FaTruck />
                    </h2>
                    <p>All vehicle types</p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;