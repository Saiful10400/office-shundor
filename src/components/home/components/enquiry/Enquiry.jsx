import msg from '../../../../assets/images/enquiry.jpg'

const Enquiry = () => {
    return (
        <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url(${msg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className='py-10 w-full px-48'>
                <h2 className="text-center text-5xl text-white font-bold mb-4">Make an Enquiry</h2>
                <hr className="w-36 border-2 border-orange-600 mx-auto mb-8" />
                <form className="card-body">
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <div className="form-control lg:w-1/2">
                            <input type="text" placeholder="Name" className="input bg-white" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <input type="email" placeholder="Email" className="input bg-white" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mb-4">
                        <div className="form-control lg:w-1/2">
                            <input type="text" placeholder="Phone Number" className="input bg-white" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <input type="text" placeholder="Collection Post Code" className="input bg-white" required />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="form-control lg:w-1/2">
                            <input type="text" placeholder="Delivery Post Code" className="input bg-white" required />
                        </div>
                        <div className="form-control lg:w-1/2">
                            <input type="text" placeholder="Additional Details" className="input bg-white" required />
                        </div>
                    </div>
                    <div className="form-control mt-8">
                        <button className="btn bg-orange-400 hover:bg-orange-300 hover:text-black text-white border-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Enquiry;