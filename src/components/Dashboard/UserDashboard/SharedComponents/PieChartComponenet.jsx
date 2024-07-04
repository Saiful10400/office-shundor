import React from "react";
import { PieChart , Pie, Sector, Cell } from "recharts";

const PieChartComponenet = ({limit,remaining}) => {
  const data = [
    { name: "Limit", value: limit },
    { name: "Remaining", value: remaining },
  ];
  const COLORS = ["#FFA76A", "#CE8552"];
  return (
    <div className="h-[450px]   p-[20px] pb-0  w-full border-[4px] border-[#FE7F29] bg-gradient-to-tr from-[#E6F7F3] to-[#FAEBE9] rounded-[23px]">
      <h1  className="text-[24px] font-normal ">Monthly Booking Limit</h1>
      <div className="flex justify-center items-center flex-col">
      <PieChart  width={300} height={300}>
        <Pie
          data={data}
          innerRadius={85}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className=" min-h-16 w-full">
        <div className="gap-x-5 flex items-center justify-start"><span className="w-[20px] h-[20px] bg-[#FFA76A] rounded-full inline-block"></span><span className="text-base font-bold">Completed</span></div>
        <div className="gap-x-5 flex items-center justify-start mt-5"><span className="w-[20px] h-[20px] bg-[#CE8552] rounded-full inline-block"></span><span className="text-base font-bold">Remaining</span></div>
      </div>
      </div>
    </div>
  );
};

export default PieChartComponenet;
