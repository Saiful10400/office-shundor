import React, { useState } from 'react';
import FormWrapper from '../FormWrapper/FormWrapper';
import "./ShippingInformation.css"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ShippingInformation = ({ arrivalDateInfo, updateFields, fetchedFormData,cargoType }) => {

    const { Cargotype } = fetchedFormData

    //shipment process.
    const [shipmentProcess, setShipmentProcess] = useState(null)

    const firstDAta = arrivalDateInfo.find(item => item.id === 1)


    // current tab contant id.
    const [currentId, setCurrentId] = useState(1)
    // current tab contant data.
    const [currentTabData, setcurrentTabData] = useState(firstDAta)
    // tab btn handle.
    const tabBtnHandle = (value) => {
        console.log(value)
        // setCurrentId(id)
        // const currentIdData = arrivalDateInfo.find(item => item.id === id)
        // setcurrentTabData(currentIdData)
    }
    console.log(arrivalDateInfo)

    return (
        <FormWrapper title={"Shipping Information"}>
            <div className='container'>
                <div className='glass-morphism p-4 inline-block'>

                    <select value={cargoType}  onChange={(e) => updateFields({ cargoType: e.target.value })} className='py-2 px-4 outline-none rounded-lg'>
                        <option value="" disabled hidden selected>Select cargo type</option>
                        {
                            Cargotype?.map(item => <option value={item.cargoTypeName} key={item.id}>{item.cargoTypeName}</option>)
                        }
                    </select>

                </div>

                <div className='mt-8 glass-morphism py-4 '>
                    <h1 className='text-md font-bold pl-4'>Select Shipment Arrival Date</h1>
                    <div className='mt-4'>
                        <div className='flex justify-start items-center gap-x-2 pl-5'>
                            {/* start. */}

                            {/* {
                                arrivalDateInfo?.map(item => {
                                    return (
                                        <button type='button' onClick={() => {
                                            tabBtnHandle(item.id)
                                        }} className={` border border-primary text-xs flex justify-center items-center flex-col-reverse p-1 ${currentId === item.id ? "active" : ""}`} key={item.id}><span className='font-bold'>{item.date.day}</span><span >{item.date.month}</span></button>
                                    )
                                })
                            } */}

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker onAccept={tabBtnHandle} label={"day"} views={["day"]} />
                            </LocalizationProvider>

                            <button type='button' className='btn btn-primary'>Search</button>





                            {/* end. */}
                        </div>
                        <div className='  grid-cols-1 gap-y-3 py-8 px-6 hidden'>
                            {
                                currentTabData?.data?.map((item, idx) => {
                                    return (
                                        <div className='flex justify-between items-center px-4 py-2 rounded-lg bg-white' key={idx}>
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='font-bold'>{item?.date?.month}</span>
                                                <span className='font-bold'>{item?.date?.day}</span>
                                                <span className='font-normal'>{item?.date?.dayName}</span>

                                            </div>
                                            {/* <span className='font-thin text-gray-400'>End of Day</span> */}
                                            <div className='flex flex-col justify-center items-center'>
                                                <span className='font-bold text-sm'>Discount Rate</span>
                                                <span className='font-bold text-gray-500 text-xs'>{item?.discountRate} $</span>
                                                <span className='font-bold text-sm'>Transportation Charge</span>
                                                <span className='font-bold text-gray-500 text-xs'>{item?.transportationCharge}$</span>

                                            </div>
                                            {/* <button type='button' className='text-white p-2 rounded-lg bg-green-600 font-bold'>Select</button> */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        </FormWrapper>
    );
};

export default ShippingInformation;