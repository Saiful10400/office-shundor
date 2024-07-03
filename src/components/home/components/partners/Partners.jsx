// import Marquee from "react-fast-marquee";
import apex from '../../../../assets/images/apex.png'
import bata from '../../../../assets/images/bata.png'
import Title from "../../../sharedComponents/title/Title";

const Partners = () => {
    return (
        <div className="mb-16 mt-20">
            <Title heading={'Our Partners'} />
            {/* <Marquee> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
                <div className="mx-8">
                    <img src={apex} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={bata} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={apex} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={bata} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={apex} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={bata} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={apex} alt="" className="w-[250px] h-[100px]" />
                </div>
                <div className="mx-8">
                    <img src={bata} alt="" className="w-[250px] h-[100px]" />
                </div>
            </div>
            {/* </Marquee> */}
        </div>
    );
};

export default Partners;