import React from 'react';
import confirmed from "../../../../assets/images/confirmation.png"
import pickup from "../../../../assets/images/pickup.png"
import intransit from "../../../../assets/images/intrunsit.png"
import delivery from "../../../../assets/images/delivery.png"
import delivered from "../../../../assets/images/delivered.png"
import { FaCheck } from "react-icons/fa6";

const ProgressBar = () => {
    return (
        <div className='flex items-center relative justify-between'>
            <div className='absolute border-b-[4px] border-dashed w-[95%]  h-4 border-gray-400 top-[51%] left-7'></div>
            <div className='flex  relative z-10 flex-col items-center justify-center gap-11'>
                <img className='w-[60px] h-[60px] object-contain' src={confirmed} alt="" />
                <div className='w-[40px] flex justify-center items-center bg-green-600 h-[40px] rounded-full'><FaCheck className='w-[30px] text-white h-[30px] object-contain' /></div>
                <h1 className='font-bold text-lg'>Confirmed</h1>
            </div>
            <div className='flex relative z-10 flex-col items-center justify-center gap-11'>
                <img className='w-[60px] h-[60px] object-contain' src={pickup} alt="" />
                <div className='w-[40px] flex justify-center items-center bg-green-600 h-[40px] rounded-full'><FaCheck className='w-[30px] text-white h-[30px] object-contain' /></div>
                <h1 className='font-bold text-lg'>Picked-up</h1>
            </div>
            <div className='flex relative z-10 flex-col items-center justify-center gap-11'>
                <img className='w-[60px] h-[60px] object-contain' src={intransit} alt="" />
                <div className='w-[40px] flex justify-center items-center bg-green-600 h-[40px] rounded-full'><FaCheck className='w-[30px] text-white h-[30px] object-contain' /></div>
                <h1 className='font-bold text-lg'>In Transit</h1>
            </div>
            <div className='flex relative z-10 flex-col items-center justify-center gap-11'>
                <img className='w-[60px] h-[60px] object-contain' src={delivery} alt="" />
                <div className='w-[40px] flex justify-center items-center bg-green-600 h-[40px] rounded-full'><FaCheck className='w-[30px] text-white h-[30px] object-contain' /></div>
                <h1 className='font-bold text-lg text-center'>Out for Delivery</h1>
            </div>
            <div className='flex relative z-10 flex-col items-center justify-center gap-11'>
                <img className='w-[60px] h-[60px] object-contain' src={delivered} alt="" />
                <div className='w-[40px] flex justify-center items-center bg-green-600 h-[40px] rounded-full'><FaCheck className='w-[30px] text-white h-[30px] object-contain' /></div>
                <h1 className='font-bold text-lg'>Delivered</h1>
            </div>
        </div>
    );
};

export default ProgressBar;