import React from "react";

import box from "../../../../assets/Icons/box.png";
import bundle from "../../../../assets/Icons/bundle.png";
import email from "../../../../assets/Icons/email.png";
import BookingRemaining from "../SharedComponents/BookingRemaining";
import OverviewCard from "../SharedComponents/OverviewCard";
import PieChartComponenet from "../SharedComponents/PieChartComponenet";
import BookingCard from "../SharedComponents/BookingCard";
import PaymentHistoryTable from "../SharedComponents/PaymentHistoryTable";

// import icon for heading.
import booking from "../../../../assets/images/dashboard/icon/booking.png";
import payment from "../../../../assets/images/dashboard/icon/paymentHistory.png";

const UserSubRoot = () => {
  // demo data.

  const overViewCard = [
    {
      name: "Shipped",
      value: "1,254",
    },
    {
      name: "Pending",
      value: "152",
    },
    {
      name: "Paid",
      value: "578 $",
    },
    {
      name: "Client",
      value: "8,965",
    },
  ];

  return (
    <div className=" w-full  px-[150px] pb-14">
      {/* top 3 cards. */}
      <div className="flex gap-x-[70px] justify-between  items-center">
        {/* single card. */}
        <BookingRemaining max={60} remaining={17} packageId={1} />
        <BookingRemaining max={40} remaining={37} packageId={2} />
        <BookingRemaining max={90} remaining={85} packageId={3} />
      </div>

      {/* secont top 2 boxes. */}
      <div className="flex justify-between gap-x-[100px] mt-16 items-center">
        <PieChartComponenet limit={100} remaining={20} />
        <OverviewCard data={overViewCard} />
      </div>

      {/* booking card. */}
       {/* payment history table */}
       <div className="font-bold text-[40px] mb-10 mt-16 flex items-center gap-x-3">
        {" "}
        <div className="w-[40px] bg-[#ff6f0c] h-[40px] rounded-[8px]">
          <img className="w-[90%] h-full object-contain" src={booking} alt="" />{" "}
        </div>{" "}
        Bookings
      </div>
      <div className=" grid grid-cols-3 gap-7">
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
        <BookingCard></BookingCard>
      </div>

      {/* payment history table */}
      <div className="font-bold text-[40px] mb-10 mt-16 flex items-center gap-x-3">
        {" "}
        <div className="w-[40px] bg-[#ff6f0c] h-[40px] rounded-[8px]">
          <img className="w-[90%] h-full object-contain" src={payment} alt="" />{" "}
        </div>{" "}
        Payment History
      </div>


      <PaymentHistoryTable></PaymentHistoryTable>
    </div>
  );
};

export default UserSubRoot;




