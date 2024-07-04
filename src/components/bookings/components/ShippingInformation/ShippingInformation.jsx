import React, { useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import "./ShippingInformation.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ShippingInformation = ({
  arrivalDateInfo,
  updateFields,
  fetchedFormData,
  cargoType,shipmentType
}) => {
  // const { Cargotype } = fetchedFormData;
  const Cargotype = ["Air", "Ocean", "Truck"];

  //shipment process.
  const [shipmentProcess, setShipmentProcess] = useState(null);

  const firstDAta = arrivalDateInfo.find((item) => item.id === 1);

  // current tab contant id.
  const [currentId, setCurrentId] = useState(1);
  // current tab contant data.
  const [currentTabData, setcurrentTabData] = useState(firstDAta);
  // tab btn handle.
  const tabBtnHandle = (value) => {
    console.log(value);
    // setCurrentId(id)
    // const currentIdData = arrivalDateInfo.find(item => item.id === id)
    // setcurrentTabData(currentIdData)
  };
  console.log(arrivalDateInfo);

  return (
    <FormWrapper title={"Shipping Information"}>
      <div className="container">
        <div className="mb-16 mt-4 inline-block">
          <h1 className="text-3xl font-semibold">Shipment Process</h1>
          <div className=" min-h-4 mt-4 flex items-center justify-start gap-x-11">
            {Cargotype?.map((item, idx) => {
              return (
                <button
                  onClick={() => updateFields({ cargoType: item })}
                  type="button"
                  className={`${
                    cargoType === item
                      ? "text-white bg-[#E57C22]"
                      : "text-[#E57C22] bg-transparent"
                  } font-normal border rounded-lg text-2xl px-3 py-1 border-[#E57C22]`}
                  key={idx}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* <select value={cargoType}  onChange={(e) => updateFields({ cargoType: e.target.value })} className='py-2 px-4 outline-none rounded-lg'>
                        <option value="" disabled hidden selected>Select cargo type</option>
                        {
                            Cargotype?.map(item => <option value={item.cargoTypeName} key={item.id}>{item.cargoTypeName}</option>)
                        }
                    </select> */}
        </div>

        <div className="mt-4i">
          <h1 className="text-3xl font-semibold ">
            Select Shipment Arrival Date
          </h1>
          <div className="mt-4">
            <div className="flex justify-start items-center ">
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
                <DatePicker
                  onAccept={tabBtnHandle}
                  label={"day"}
                  views={["day"]}
                  sx={{ width: "100%",borderRadius:"0" }}
                />
              </LocalizationProvider>

              <button
                type="button"
                onClick={() => updateFields({ shipmentType: "Cheapest" })}
                className={`w-full shadow-xl h-[56px] ${
                  shipmentType === "Cheapest"
                    ? "bg-[#E57C22] text-white font-semibold"
                    : "bg-white"
                }`}
              >
                Cheapest
              </button>
              <button
                type="button"
                onClick={() => updateFields({ shipmentType: "Faster" })}
                className={`w-full shadow-xl h-[56px] ${
                  shipmentType === "Faster"
                    ? "bg-[#E57C22] text-white font-semibold"
                    : "bg-white"
                }`}
              >
                Faster
              </button>

              {/* end. */}
            </div>
            <div className="  grid-cols-1 gap-y-3 py-8 px-6 ">
                  <div className="flex justify-center gap-x-96 items-center px-4 py-2 rounded-lg bg-white border h-[282px] shadow-2xl relative">
                    <span className="absolute top-[20px] left-0 px-3 py-1 bg-[#1ABC9C] text-white rounded-r-md">Express</span>
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-normal text-[40px] ">{"May"}</span>
                      <span className="font-bold text-[55px]">{18}</span>
                      <span className="font-normal text-[32px]">{"Saturday"}</span>
                    </div>
                    {/* <span className='font-thin text-gray-400'>End of Day</span> */}
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-bold text-[28px]">Discount Rate</span>
                      <span className="font-normal text-gray-500 text-[28px]">
                        {"179.56"} $
                      </span>
                      <span className="font-bold text-[19px]">
                        Transportation Charge
                      </span>
                      <span className="font-normal text-gray-500 text-[19px]">
                        {"71.67"}$
                      </span>
                    </div>
                    {/* <button type='button' className='text-white p-2 rounded-lg bg-green-600 font-bold'>Select</button> */}
                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ShippingInformation;
