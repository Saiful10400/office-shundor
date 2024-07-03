import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";

import "./finalize.css"
import CreateShipment from './sub_componenets/CreateShipment';
import PaymentPage from './sub_componenets/PaymentPage';
const Finalize = ({ ...bookingInfo }) => {

    const [page, setPage] = useState("Create Shipment")
    let paramitre = { ...bookingInfo, setPage }


    const tabPageHandle = (param) => {
        setPage(param)
    }
    console.log(page)
    return (
        <div className='container my-[3em]'>

            <button onClick={() => tabPageHandle("Create Shipment")} type='button' className={` ${page === "Pay" ? "btn btn-primary rounded-full" : "hidden"}`}><FaArrowLeft /></button>
            <div className='my-2 pl-1 font-bold text-3xl'>{page}</div>



            {page === "Create Shipment" && <CreateShipment {...paramitre} />}
            {page === "Pay" && <PaymentPage {...paramitre} />}




            <div className='flex mt-4 items-center justify-start pl-1 gap-x-3'>
                {/* <button onClick={()=>tabPageHandle("Create Shipment")} className="btn btn-primary  btn-sm " type='button'>Create Shipment</button> */}
                <button onClick={() => tabPageHandle("Pay")} className="btn btn-primary bg-transparent  btn-sm text-black" type='button'>Pay</button>
                <button className="btn btn-primary bg-transparent  btn-sm text-black" type='button'>Print</button>
                <button className="btn btn-primary bg-transparent  btn-sm text-black" type='button'>Cancel</button>
            </div>


        </div>
    );
};

export default Finalize;