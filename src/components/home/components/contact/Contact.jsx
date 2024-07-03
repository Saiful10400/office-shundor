// import img from '../../../assets/contact.jpg'

import Title from "../../../sharedComponents/title/Title";

const Contact = () => {
    return (
        <div className="py-16 w-full ">
            <Title heading={'Contact Us'} />
            <div className='flex flex-col lg:flex-row gap-6 px-10 items-center'>
                <div className='flex-1 w-full'>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        </div>
                        <div className="form-control mt-8 flex items-end">
                            <button className="btn w-32 bg-orange-400 hover:bg-orange-300 rounded-none hover:text-black text-white border-none">Send</button>
                        </div>
                    </form>
                </div>
                <div className='flex-1' style={{ height: '60vh', width: '100%' }}>


                    <div id='embed-map-canvas' className='h-full w-full max-w-full'>
                        <iframe
                            title='Map of Dhaka'
                            loading='lazy'
                            className='w-full h-full border-0'
                            allowFullScreen
                            src="https://www.google.com/maps/embed/v1/place?q=London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;