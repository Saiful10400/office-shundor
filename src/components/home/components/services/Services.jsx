import delivery from '../../../../assets/videos/delivery.mp4'
import fragile from '../../../../assets/videos/fragile.mp4'
import scheduled from '../../../../assets/videos/scheduled.mp4'
import tracking from '../../../../assets/videos/tracking.mp4'
import offsore from '../../../../assets/videos/offsore.mp4'
import customized from '../../../../assets/videos/customized.mp4'
import Title from '../../../sharedComponents/title/Title'

const Services = () => {

    return (
        <div className=' py-20 bg-white'>
            <Title heading={'Our Services'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-10 mx-6'>

                <div className='w-[100%] relative rounded-[10px]'
                    onMouseEnter={() => { document.querySelector('.video-background').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background').pause(); }}>
                    <video
                        src={delivery}
                        // autoPlay
                        loop
                        muted
                        className='video-background shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">Same Day Service</h2>
                            <p>If your consignment must arrive at the destination the same day, Sundarban Couriers can be trusted to make sure that happens.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] relative rounded-[10px]'
                    onMouseEnter={() => { document.querySelector('.video-background2').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background2').pause(); }}>
                    <video
                        src={fragile}
                        // autoPlay
                        loop
                        muted
                        className='video-background2 shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">Fragile or Expensive Items</h2>
                            <p>Are you concerned about security or breakages? Send your fragile or expensive items with complete peace of mind with Redhead Couriers.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] relative rounded-[10px]'
                    onMouseEnter={() => { document.querySelector('.video-background3').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background3').pause(); }}>
                    <video
                        src={scheduled}
                        // autoPlay
                        loop
                        muted
                        className='video-background3 shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">Scheduled Delivery</h2>
                            <p>If your shipped items need to arrive at a certain time, that is no problem with Redhead Couriers. We can provide you a scheduled delivery.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] relative rounded-[10px] lg:mt-8'
                    onMouseEnter={() => { document.querySelector('.video-background4').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background4').pause(); }}>
                    <video
                        src={tracking}
                        // autoPlay
                        loop
                        muted
                        className='video-background4 shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">Real Time Tracking</h2>
                            <p>As you would expect, we use state of the art, real time tracking so we can advise you exactly where your vehicle is at any given time.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] relative rounded-[10px] lg:mt-8'
                    onMouseEnter={() => { document.querySelector('.video-background5').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background5').pause(); }}>
                    <video
                        src={offsore}
                        // autoPlay
                        loop
                        muted
                        className='video-background5 shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">International Shipping</h2>
                            <p>Reliable global package and document delivery, handling customs clearance and ensuring timely arrival.</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] relative rounded-[10px] lg:mt-8'
                    onMouseEnter={() => { document.querySelector('.video-background6').play(); }}
                    onMouseLeave={() => { document.querySelector('.video-background6').pause(); }}>
                    <video
                        src={customized}
                        // autoPlay
                        loop
                        muted
                        className='video-background6 shadow-xl rounded-lg'
                    >
                    </video>
                    <div
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #000 96%)',
                            borderRadius: '10px',
                            bottom: '0',
                            height: '100%',
                            overflow: 'hidden',
                            position: 'absolute',
                            width: '100%'
                        }}
                        className='px-4 text-white z-20 w-full'
                    >
                        <div className='flex flex-col justify-end h-full pb-3'>
                            <h2 className="text-2xl font-bold z-40">Customized Solution</h2>
                            <p>Tailored shipping services based on specific needs, including scheduled pickups, dedicated routes, and specialized delivery options.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;