
import Title from '../../../sharedComponents/title/Title';
import news2 from '../../../../assets/images/news2.webp'
import news3 from '../../../../assets/images/news3.jpg'

const Newsfeed = () => {
    return (
        <div className='mt-10'>
            <Title heading={'Newsfeed'} />

            <div className='flex flex-col lg:flex-row gap-8 justify-center items-center'>
                
                {/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={news1} alt="News" className='h-[200px] w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sundarban Courier Service Goes Green with Electric Delivery Vehicles</h2>
                        <span>15th March, 2024</span>
                        <p>Sundarban Courier Service takes a step towards sustainability by introducing electric delivery vehicles, reducing carbon emissions and promoting eco-friendly logistics.</p>
                        
                    </div>
                </div> */}
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={news2} alt="News" className='h-[200px] w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sundarban Courier Service Expands Coverage with New Delivery Hub</h2>
                        <span>16th February, 2024</span>
                        <p>With the opening of a new delivery hub, Sundarban Courier Service extends its reach, ensuring faster and more efficient service to customers across the region.</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={news3} alt="News" className='h-[200px] w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sundarban Courier Service Enhances Customer Support with 24/7 Helpline</h2>
                        <span>7th April, 2024</span>
                        <p>Sundarban Courier Service introduces a round-the-clock helpline, providing customers with immediate assistance and support for all their delivery queries and concerns.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsfeed;