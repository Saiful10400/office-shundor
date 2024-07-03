import React from 'react';
import visaimg from "../../../../../assets/images/booking/visa.png"
import masterimg from "../../../../../assets/images/booking/master.png"
import discoverimg from "../../../../../assets/images/booking/discover.png"
import ameximg from "../../../../../assets/images/booking/amex.png"

const PaymentPage = () => {
    return (
        <div>
            <div className='flex justify-center items-start'>


                <div className='w-1/2'>
                    <h1>Card Number</h1>
                    <h1>Enter the 16-digit card number on the card</h1>
                    <label htmlFor="cardNumber">
                        <img className='w-[50px] h-[50px]' src={visaimg} alt="" />
                    <input type="number" className='w-full border-0 outline-none py-2 pl-3 rounded-lg' id='cardNumber' />
                    </label>
                </div>




                <div className='w-1/2'></div>
                

               

            </div>
        </div>
    );
};

export default PaymentPage;