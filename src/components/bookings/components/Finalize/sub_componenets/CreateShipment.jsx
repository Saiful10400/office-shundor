import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { BsBox } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { GiMedicalPack } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { BiSolidInfoCircle } from "react-icons/bi";
import { IoMdWarning } from "react-icons/io";
import { RxTriangleLeft } from "react-icons/rx";

import visaimg from "../../../../../assets/images/booking/visa.png"
import masterimg from "../../../../../assets/images/booking/master.png"
import discoverimg from "../../../../../assets/images/booking/discover.png"
import ameximg from "../../../../../assets/images/booking/amex.png"

const CreateShipment = ({ ...bookingInfo }) => {
    const { scheduledDate, } = bookingInfo
    console.log(scheduledDate)
    return (
        <div>
            <div className='grid grid-cols-1 gap-y-[2px] glass-morphism pl-2 py-4   text-black' >




                <div className="flex justify-center items-center py-2 pl-2">
                    <div className="w-1/2 flex items-start justify-start gap-x-4">
                        <IoLocationSharp className='text-gray-400 text-lg' />
                        <div className="text-[10px] font-medium ">
                            {bookingInfo?.senderName} <br />
                            {bookingInfo?.senderAddress} <br />
                            {bookingInfo?.senderCity} <br />
                            {bookingInfo?.senderCountry}
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-between items-center'>
                        <div className=" flex items-start justify-start gap-x-4">
                            <div className=" w-1/5 "><IoLocationSharp className='text-gray-400 text-lg' /></div>
                            <div className="w-max text-[10px] font-medium ">
                                {bookingInfo?.receiverName} <br />
                                {bookingInfo?.receiverAddress} <br />
                                {bookingInfo?.receiverCity} <br />
                                {bookingInfo?.receiverDistrict}
                            </div>
                        </div>
                        {/* <div className=' bg-gray-500 p-2 rounded-lg'>
            <button type="button" className='border border-black rounded-md shadow-md font-semibold p-1 text-xs bg-white flex items-center gap-x-1 '>
                <MdCancel className='text-black text-xs' /> Cancel</button>
        </div> */}
                    </div>
                </div>


                {
                    //     <div className="flex justify-center items-center py-2 pl-2">
                    //     <div className="w-1/2 flex items-start justify-start gap-x-4">
                    //         <IoDocumentsOutline className='text-gray-400 text-lg' />
                    //         <div className="text-[10px] font-medium ">
                    //             <span className=" font-semibold text-xs">Documents</span> Documents - general business <br />
                    //             Declared Value {bookingInfo.productValue} BDT
                    //         </div>
                    //     </div>
                    //     <div className='w-1/2 flex justify-between items-center'>
                    //         <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                    //             <div className=" w-1/5"></div>
                    //             <div className="  w-full text-[10px] font-medium ">
                    //                 No Shipment Protection
                    //             </div>
                    //         </div>
                    //         <div className=" pr-2">
                    //             {/* <button type="button" className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                    //         </div>
                    //     </div>

                    // </div>
                }


                <div className="flex justify-center items-center py-2 pl-2">
                    <div className="w-1/2 flex items-start justify-start gap-x-4">
                        <BsBox className='text-gray-400 text-lg' />
                        <div className="text-[10px] font-medium ">
                            {`${bookingInfo?.preset} - (${bookingInfo?.productLength} x ${bookingInfo?.productWidth} x ${bookingInfo?.productHeight} in) - ${bookingInfo?.productWeight}kg `}
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-between items-center'>
                        <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                            <div className=" w-1/5"></div>
                            <div className="  w-full text-[10px] font-medium ">

                            </div>
                        </div>
                        <div className=" pr-2">
                            {/* <button type='button' className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                        </div>
                    </div>

                </div>


                <div className="flex justify-center items-center py-2 pl-2">
                    <div className="w-1/2 flex items-start justify-start gap-x-4">
                        <BsCreditCardFill className='text-gray-400 text-lg' />
                        <div className="text-[10px] font-medium ">
                            <span className='font-bold text-xs'>Transportation charges paid by</span> {bookingInfo?.paymentType}
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-between items-center'>
                        <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                            <div className=" w-1/5"></div>
                            <div className="  w-full text-[10px] font-medium ">

                            </div>
                        </div>
                        <div className=" pr-2">
                            {/* <button type="button" className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                        </div>
                    </div>

                </div>


                <div className="flex justify-center items-center py-2 pl-2">
                    <div className="w-1/2 flex items-start justify-start gap-x-4">
                        <RiCalendarEventFill className='text-gray-400 text-lg' />
                        <div className="text-[10px] font-medium ">
                            <span className='font-bold text-xs'>Shipment Date</span> {`${scheduledDate?.day},${scheduledDate?.month},${scheduledDate?.weekday}`} <br />
                            {/* <span className='font-bold text-xs'>Shipment Cost</span> 124.91 USD */}
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-between items-center'>
                        <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                            <div className=" w-1/5"></div>
                            {/* <div className="  w-full text-[10px] font-medium ">
                                <span className='font-bold text-xs'>Delivery Date</span> Mon, 20 May, 2024 <br />
                                <span className='font-bold text-xs'>Delivered By</span> End of Day
                            </div> */}
                        </div>
                        <div className=" pr-2">
                            {/* <button type='button' className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                        </div>
                    </div>

                </div>



                {
                    //     <div className="flex justify-center items-center py-2 pl-2">
                    //     <div className="w-1/2 flex items-start justify-start gap-x-4">
                    //         <GiMedicalPack className='text-gray-400 text-lg' />
                    //         <div className="text-[10px] font-medium ">
                    //             <span className='font-bold text-xs'>Optional Services</span> <br />
                    //             GoGreen Plus <br /> Direct Signature
                    //         </div>
                    //     </div>
                    //     <div className='w-1/2 flex justify-between items-center'>
                    //         <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                    //             <div className=" w-1/5"></div>
                    //             <div className="  w-full text-[10px] font-medium ">

                    //             </div>
                    //         </div>
                    //         <div className=" pr-2">
                    //             {/* <button type='button' className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                    //         </div>
                    //     </div>

                    // </div>
                }

                {
                    //      <div className="flex justify-center items-center py-2 pl-2">
                    //      <div className="w-1/2 flex items-start justify-start gap-x-4">
                    //          <FaTruckFast className='text-gray-400 text-lg' />
                    //          <div className="text-[10px] font-medium ">
                    //              <span className='font-bold text-xs'>No Pickup Requested</span>
                    //          </div>
                    //      </div>
                    //      <div className='w-1/2 flex justify-between items-center'>
                    //          <div className=" flex   w-3/5 items-start justify-start gap-x-1">
                    //              <div className=" w-1/5"></div>
                    //              <div className="  w-full text-[10px] font-medium text-gray-400">

                    //              </div>
                    //          </div>
                    //          <div className=" pr-2">
                    //              {/* <button type='button' className=' shadow-md font-medium px-2 py-1 text-xs bg-gray-500 text-gray-50 rounded-sm'>Edit</button> */}
                    //          </div>
                    //      </div>

                    //  </div>
                }





            </div>


            <div className='  glass-morphism p-4 mt-4'>
                <h1 className='font-bold py-3'>Shipment Cost Summary</h1>

                <div className='flex items-start'>
                    <div className='w-[40%]'>

                        <h1 className='font-bold text-xs'>EXPRESS WORLDWIDE</h1>
                        <h1 className='text-[11px] font-semibold'>Mon, 20May, 2024 - End of Day</h1>


                        <h1 className='flex mt-5 justify-start items-center gap-x-1 font-semibold text-[11px]'><span className='font-bold text-xs'>Volumetric Weight</span> <BiSolidInfoCircle className='text-blue-500 text-sm' /> 2.432 lb</h1>
                        <h1 className='text-[11px] font-semibold'><span className='font-bold'>Total Weight</span> 0.5 <span className='font-bold'>lb</span></h1>
                        <h1 className='font-normal text-[11px]'><span className='font-bold text-xs'>Chargeable Weight</span> 3 lb</h1>


                    </div>
                    <div className='w-[60%] flex justify-end items-start'>

                        <div className=' w-full'>
                            <table className='w-full text-xs'>
                                <tr className=' grid-cols-4  w-full '>
                                    <th className=' '></th>
                                    <th className=' '></th>
                                    <th className='text-end font-medium py-1'>Transportation <br /> Charges</th>
                                    <th className='text-end font-medium  py-1'>Discounted <br /> Rate</th>
                                </tr>
                                <tr className=' border-y-[1px] border-gray-500'>
                                    <td className='font-semibold py-1'>Fuel Surcharge</td>
                                    <td className=' py-1 font-semibold'>USD</td>
                                    <td className='text-end py-1'><del>28.18</del></td>
                                    <td className='text-end py-1'>19.27</td>
                                </tr>
                                <tr className=' border-y-[1px] border-gray-500'>
                                    <td className='font-semibold py-1'>GoGreen Plus</td>
                                    <td className=' py-1 font-semibold'>USD</td>
                                    <td className='text-end py-1'>0.84</td>
                                    <td className='text-end py-1'>0.84</td>
                                </tr>
                                <tr className=' border-t-[1px] border-gray-500'>
                                    <td className='font-semibold py-1'>Direct Signature</td>
                                    <td className=' py-1 font-semibold'>USD</td>
                                    <td className='text-end py-1'>6.75</td>
                                    <td className='text-end py-1'>6.75</td>
                                </tr>
                                <tr className='  '>
                                    <td className='font-bold py-1'>Total</td>
                                    <td className=' py-1 font-semibold'>USD</td>
                                    <td className='text-end py-1'>186.06</td>
                                    <td className='text-end py-1 font-bold'>132.50</td>
                                </tr>
                            </table>
                            {/* <div className='mt-3 flex items-center gap-x-2'>
                                        <input type="checkbox" id='promo' />
                                        <label htmlFor="promo" className='text-xs font-semibold '>I have a promo code</label>
                                    </div> */}
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateShipment;