import React from 'react';
import ship from "../../../../assets/images/dashboard/icon/ship.png"
import air from "../../../../assets/images/dashboard/icon/air.png"
import truck from "../../../../assets/images/dashboard/icon/truck.png"

const BookingCard = () => {
    return (
        <div className='w-full  overflow-hidden px-[13px] pt-[23px] pb-[27px] h-[260px] rounded-[10px] bg-gradient-to-t from-[#FAEBE9] to-[#E6F7F3]'>

            {/*section-1 */}
            <div className='flex justify-between'>
{/* left */}
<div className='flex justify-start items-start gap-x-2'>
<div className={`w-[40px] h-[40px] rounded-full bg-[#725cfc]`}>
<img className='w-full h-full object-contain' src={ship} alt="" />
</div>
<div>
    <h1 className='text-xs font-bold text-[#A3A3A3]'>Order No</h1>
    <h1 className='text-sm font-bold '>#5875149</h1>
</div>
</div>

{/* right */}
<div className='text-end'>
    <h1 className='text-xs font-bold text-[#A3A3A3]'>Quoted Price</h1>
    <h1 className='text-base font-bold text-[#2867F5]'>521$</h1>
</div>

            </div>

            {/* section-2 */}
            <div className='flex justify-between items-center mt-5'>

{/* left */}
<div className='text-start'>
    <h1 className='text-base font-bold text-[#FF744D] font-mono'>2 Mar 2021</h1>
    <h1 className='text-sm font-medium text-[#8E8E8E] '>Loading</h1>
    
</div>

{/* right */}
<div className='text-end'>
    <h1 className='text-base font-bold text-[#FF744D] font-mono'>10 Mar 2021</h1>
    <h1 className='text-sm font-medium text-[#8E8E8E] '>Destination</h1>
    
</div>

             

            </div>

             {/* section-3 */}

             <div className='mt-[10px]'>
                {/* circular  div */}
                <div className='flex justify-between items-center relative top-[7px] gap-x-1'>
                    <div className='w-[15px] h-[15px] bg-[#D9D9D9] rounded-full'></div>
                    <div className='w-[15px] h-[15px] bg-[#D9D9D9] rounded-full'></div>
                    <div className='w-[15px] h-[15px] bg-[#D9D9D9] rounded-full'></div>
                    <div className='w-[15px] h-[15px] bg-[#D9D9D9] rounded-full'></div>
                </div>
                {/* dotted div */}
                <div className='border-b-[3px] w-[98%] mx-auto border-dashed border-black'></div>
              </div>

              {/* section-4 */}

              <div className='flex justify-between items-center mt-7'>

{/* left */}
<div className='text-start'>
    <h1 className='text-lg font-bold '>Dhaka</h1>
    <h1 className='text-sm font-medium  '>Bangladesh</h1>
    
</div>

{/* right */}
<div className='text-end'>
    <h1 className='text-lg font-bold '>Shanghai</h1>
    <h1 className='text-sm font-medium  '>China</h1>
    
</div>

             

            </div>

            
        </div>
    );
};

export default BookingCard;