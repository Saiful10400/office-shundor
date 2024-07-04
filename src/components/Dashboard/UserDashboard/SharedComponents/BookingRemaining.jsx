import React from 'react';

import box from "../../../../assets/Icons/box.png";
import bundle from "../../../../assets/Icons/bundle.png";
import email from "../../../../assets/Icons/email.png";
const BookingRemaining = ({max,remaining,packageId}) => {

const packageDetails=[
  {
    id:1,
    img:box,
    name:"A4 Envelope",
    size:"12 x 9 x 1 in"
  },
  {
    id:2,
    img:bundle,
    name:"Small Children Applience",
    size:"18 x 15 x 13 in"
  },
  {
    id:3,
    img:email,
    name:"Moving Box",
    size:"30 x 18 x 18 in"
  }
]

const packageDataProvider=()=>{
  const data=packageDetails.find(item=>item.id===packageId)
  return data
}

const {img,name,size}=packageDataProvider()


    return (
      <div className="rounded-[23px] h-[210px] pl-[24px] pr-[47px] py-[26px] w-full border-[4px] border-[#FE7F29] bg-gradient-to-tr from-[#E6F7F3] to-[#FAEBE9]">
          {/* img and parcel info(name and size.) */}
          <div className="flex justify-evenly h-[100px] items-start  gap-x-8">
            <img
              className="w-[92px] h-full  object-contain"
              src={img}
              alt="packageimage"
            />
            <div className=''>
              <h1 className="text-lg font-semibold w-[150px]">{name}</h1>
              <h1 className="text-base font-normal">{size}</h1>
            </div>
          </div>
          <h1 className="text-center font-bold text-3xl mt-4">{remaining}/{max}</h1>
        </div>
    );
};

export default BookingRemaining;