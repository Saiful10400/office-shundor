import img1 from '../../../../assets/images/charmansir.png'
import img2 from '../../../../assets/images/mdsir.png'
import Title from '../../../sharedComponents/title/Title';

const Testimonial = () => {
    return (
        <div className='bg-[#eef3ff] py-12'>
            <Title heading={'Testimonial'} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-[90%] mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-white p-8 rounded-lg  shadow-lg flex flex-col items-center h-[545px]'>
                        <img src={img1} alt="" className='w-[250px] h-[250px] mb-4' />
                        <div>
                            <h2 className='text-center text-xl font-semibold'>IMAMUL KABIR SHANTO</h2>
                            <div className="rating flex justify-center items-center my-4">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                            </div>
                            <p className='text-center text-xs mb-5'>CHAIRMAN</p>
                            <p className='max-w-md text-center'>The Founder, Chairman Imamul Kabir Shanto, has led the effective development and establishment of courier service in Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='bg-white p-8 rounded-lg shadow-lg flex flex-col items-center'>
                        <img src={img2} alt="" className='w-[250px] h-[250px] mb-4' />
                        <div>
                            <h2 className='text-center text-xl font-semibold'>ENGR. SHEKH TANVIR AHMED (RONY)</h2>
                            <div className="rating flex justify-center items-center my-4">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
                            </div>
                            <p className='text-center text-xs mb-5'>MANAGING DIRECTOR</p>
                            <p className='max-w-md text-center'>Sundarban Cargo Services UK Ltd. is a Company established by Engr. Shaikh Tanvir Ahmed (Rony) the Managing Director (and an Owner Director) of the renowned Company Sundarban Courier Service (Pvt.) Ltd in Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;