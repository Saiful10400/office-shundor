import React from "react";

import box from "../../../../assets/Icons/box.png";
import bundle from "../../../../assets/Icons/bundle.png";
import email from "../../../../assets/Icons/email.png";
import BookingRemaining from "../SharedComponents/BookingRemaining";
import OverviewCard from "./OverviewCard";
import PieChartComponenet from "./PieChartComponenet";

const Subroot = () => {
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
    <div className=" w-full  px-[150px]">
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
      <div>

      </div>





    </div>
  );
};

export default Subroot;
