import React from "react";

const OverviewCard = ({ data }) => {
  return (
    <div className="h-[450px] w-full border-[4px] border-[#FE7F29] bg-gradient-to-tr from-[#E6F7F3] to-[#FAEBE9] rounded-[23px]">
      <h1 className="text-[24px] font-normal m-[21px]">Overview</h1>
      <div className="flex justify-center  items-center mt-10">
        <div className="grid grid-cols-2 gap-[55px] content-center ">
          {data?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="rounded-[23px] h-[107px] w-[146px] shadow-2xl flex justify-center items-center gap-x-4 flex-col text-black bg-[#ea965c]"
              >
                <span className="text-[36px] font-bold">{item.value}</span>
                <span className="text-[16px] font-bold">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
