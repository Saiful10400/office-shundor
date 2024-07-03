import msg from '../../../../assets/images/message.jpg'
import mdsir from '../../../../assets/images/ManagingDirectorSir.jpg'

const Message = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${msg})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className=" py-10">
                <h2 className="text-center text-5xl text-white font-bold mb-4">Our Message</h2>
                <hr className="w-36 border-2 border-orange-600 mx-auto mb-8" />

                <div className='flex flex-col lg:flex-row items-center justify-around px-20 lg:gap-20'>

                    <div className='flex-shrink-0'>
                        <img src={mdsir} alt="" className='lg:h-[400px] lg:w-[350px] lg:pl-10' />
                    </div>
                    <div className='flex-auto'>
                        <p className='text-white lg:pr-10 mt-4 lg:mt-0'>
                            Sundarban Cargo Services UK Ltd. is a Company established by Engr. Shaikh Tanvir Ahmed (Rony)
                            the Managing Director (and an Owner Director) of the renowned Company Sundarban Courier Service (Pvt.) Ltd in Bangladesh. He brings with him experience of 27 years of Services in the field of Logistics Management Operations and Delivery service and is credited with the establishment of the largest logistics management company in Bangladesh under the kind supervision of his Mentor the renowned Late Imamul Kabir Shanto a pioneer in Courier Parcel & Logistics service in Bangladesh, and the Founder of Sundarban Courier Service (Pvt.) Ltd. Mr. Shaikh Tanvir Ahmed (Rony) brings with him years of experience, innovation, team building as well as implementation of infrastructure building. With this he is extending his boundaries beyond the domain of Bangladesh to the United Kingdom by providing and facilitating in similar services to and from Bangladesh for the overall expatriate community of Bangladesh for starters and to others who wish to extend their arms into Bangladesh by sending cargo to and from Bangladesh. We are catering to meet all cargo and logistics requirements (including small and big) for all and this is being given at very competitive rates. In so doing we also wish to stipulate the confidence in our name and we will thus assure that last mile coverage (end to end) will be provided to all availing our service. With the flourishing of opportunities bilaterally between UK and Bangladesh as well as other requirements, we wish to extend our service to all the Bangladesh Community as a family member in the making. Sundarban is always there for you in full and we welcome all to avail our service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;