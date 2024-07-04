import React, { useState } from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import { FaCheck } from "react-icons/fa6";
import { BsFillTriangleFill } from "react-icons/bs";
import "./PickupForm.css";
import { Box, Slider, styled } from "@mui/material";
import Modal from "../Modal/Modal";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { toast } from "react-toastify";
import DropDown from "../../Shared_components/DropDown";
import Input from "../../Shared_components/TextArea";
import InputField from "../../Shared_components/InputField";

// Function to format the slider value as time
const formatTime = (value) => {
  const hours = Math.floor(value / 2) + 10;
  const minutes = (value % 2) * 30;
  const period = hours < 12 ? "AM" : "PM";
  const formattedHours = hours > 12 ? hours - 12 : hours;
  return `${formattedHours}:${minutes === 0 ? "00" : minutes} ${period}`;
};

// Function to convert time to slider value
const timeToValue = (time) => {
  const [hourStr, minuteStr] = time.split(":");
  const hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);
  return (hours - 10) * 2 + minutes / 30;
};

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: "rgb(52, 52, 223)",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 52,
    height: 52,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "rgb(52, 52, 223)",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
}));

const PickupForm = ({
  IsScheduled,
  pickupLocation,
  pickupWeight,
  pickupInstructions,
  pickupTimeFrom,
  pickupTimeTo,
  updateFields,
  fetchedFormData,
  senderCountry,
  senderLandmark,
  senderCity,
}) => {
  const { country, city, pickupCity, pickupCountry } = fetchedFormData;

  const [selectedSchedule, setSelectedSchedule] = useState("");

  const handleSelect = (schedule) => {
    setSelectedSchedule(schedule);
    if (schedule === "yes") updateFields({ IsScheduled: selectedSchedule });
    if (schedule === "no")
      updateFields({ IsScheduled: selectedSchedule, scheduledDate: {} });
  };

  const [value, setValue] = useState([
    timeToValue("10:00"),
    timeToValue("20:00"),
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log({
      pickupTimeFrom: formatTime(value[0]),
      pickupTimeTo: formatTime(value[1]),
    });
    updateFields({ pickupTimeFrom: formatTime(value[0]) });
    updateFields({ pickupTimeTo: formatTime(value[1]) });
  };

  // date edit button handle.
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };
  const [shipmentDate, setShipmentDate] = useState({
    weekday: "Thursday",
    year: "",
    month: "May",
    day: "16",
  });
  const datechange = (value, context) => {
    const dateString = value?.$d;
    let date = dateString?.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    date = date?.split(",");
    if (date) {
      const weekday = date[0];
      const year = date[2];
      const monthArray = date[1]?.split(" ");
      const day = monthArray[2];
      const month = monthArray[1];
      setShipmentDate({ weekday, year, month, day });
      updateFields({ scheduledDate: { day, month, weekday } });
    }
  };
  const openModal = () => {
    setModalOpen(true);
  };

  // const weightFieldValidation=(e)=>{
  //     const inputField=e.target

  //     if(inputField.value==="0"&&inputField.value!==""){
  //      inputField.value="1"
  //      updateFields({productWeight:inputField.value})
  //      toast.error("Weight Should be more than 0 !");
  //     }

  //  }

  // same as sender address.
  const [sameAsSender, setSameAsSender] = useState(false);

  return (
    <>
      <Modal show={isModalOpen} onClose={closeModal}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            onClose={closeModal}
            onAccept={datechange}
            orientation="landscape"
          />
        </LocalizationProvider>
      </Modal>

      <FormWrapper title="Pickup Details">
        <div className="font-medium my-4 mt-6 text-3xl">
          Would you like to schedule you courier pickup?
        </div>
        <div className="flex my-4">
          <label
            className={`preset-container relative flex items-center justify-center p-3 rounded-lg cursor-pointer border-2 w-48 h-20 mr-3 ${
              IsScheduled === "yes"
                ? "selected bg-gray-700 text-white"
                : "border-transparent bg-gray-300"
            }`}
            onClick={() => handleSelect("yes")}
          >
            <input
              type="radio"
              name="schedule"
              value="yes"
              className="hidden"
              checked={IsScheduled === "yes"}
              onChange={() => handleSelect("yes")}
              required
            />
            <div>
              <div className="font-normal text-[1.1rem]">
                Yes - Schedule Pickup
              </div>
            </div>

            {IsScheduled === "yes" && (
              <FaCheck className="absolute top-[70%] left-[85%]" />
            )}
          </label>

          <label
            className={`preset-container relative flex items-center justify-center p-3 rounded-lg cursor-pointer border-2 w-48 h-20 ml-3 ${
              IsScheduled === "no"
                ? "selected bg-gray-700 text-white"
                : "border-transparent bg-gray-300"
            }`}
            onClick={() => handleSelect("no")}
          >
            <input
              type="radio"
              name="schedule"
              value="no"
              className="hidden"
              checked={IsScheduled === "no"}
              onChange={() => handleSelect("no")}
              required
            />
            <div>
              <div className="font-normal text-[1.1rem]">No</div>
            </div>
            {IsScheduled === "no" && (
              <FaCheck className="absolute top-[70%] left-[85%]" />
            )}
          </label>
        </div>

        <div
          className={`${
            IsScheduled === "yes"
              ? "block"
              : IsScheduled === "no"
              ? " relative"
              : "hidden"
          }`}
        >
          <div
            className={`${
              IsScheduled === "no"
                ? "absolute w-full h-full glass-morphism-overlay z-10"
                : "hidden"
            }`}
          ></div>
          <div className="charge-warning flex items-center my-8 overflow-hidden rounded-lg">
            <div className="h-full bg-orange p-4">
              <BsFillTriangleFill className="text-white" />
            </div>
            <span className="px-2 font-semibold color-orange">
              Additional Charges may apply
            </span>
          </div>

          <div className="py-6 px-10 my-16 ">
            <div className="text-xl font-semibold mb-3 range-title">
              I am sending my shipment on
            </div>
            <div className="flex items-center justify-between range-container">
              <div className="flex flex-col items-center">
                <div className="font-medium">{shipmentDate.month}</div>
                <div className="text-3xl font-medium">{shipmentDate.day}</div>
                <div className="font-medium mb-3">{shipmentDate.weekday}</div>
                <button
                  onClick={openModal}
                  type="button"
                  className="  btn btn-primary"
                >
                  Edit
                </button>
              </div>

              <div className="range-wrapper w-full">
                <Box sx={{ width: "100%", maxWidth: 500, padding: "1rem" }}>
                  <CustomSlider
                    min={0}
                    max={20}
                    step={1}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={formatTime}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <span>10:00 AM</span>
                    <span>8:00 PM</span>
                  </div>
                </Box>
              </div>
            </div>
          </div>

          <div className=" mb-10 p-2">
            <div>
              {/* <div className="flex flex-col sender-form-container">
                        <label>Where Should the courier pick up the shipment?</label>
                        <input
                            required={IsScheduled==="yes"}
                            type="text"
                            value={pickupLocation}
                            onChange={e => updateFields({ pickupLocation: e.target.value })}
                            className="w-full border-0 outline-none mr-4 rounded-lg"
                        />
                    </div> */}

              {/* <div className="flex flex-col sender-form-container my-8">
                        <label>Total pick up weight (gm)</label>
                        <input
                            required={IsScheduled==="yes"}
                            type="number"
                            min={1}
                            onInput={weightFieldValidation}
                            value={pickupWeight}
                            onChange={e => updateFields({ pickupWeight: e.target.value })}
                            className="w-full border-0 outline-none mr-4 rounded-lg"
                        />
                    </div> */}

              <div className="grid grid-cols-2 gap-5">
                {/* <select
                                    disabled={sameAsSender}

                                    value={sameAsSender ? senderCountry : pickupCountry}
                                    onChange={e => updateFields({ pickupCountry: e.target.value })}
                                    className="w-full pl-2 py-2 border-1 outline-none rounded-lg"
                                >
                                    <option value={""} disabled selected hidden>Country</option>
                                    {
                                        country?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                                    }
                                </select> */}

                <DropDown
                  required={true}
                  disabled={sameAsSender}
                  alltimeValue={sameAsSender ? senderCountry : pickupCountry}
                  valueUpdate={(e) =>
                    updateFields({ pickupCountry: e.target.value })
                  }
                  placeHolder={"Country"}
                >
                  {country?.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </DropDown>

                {/* <select
                  disabled={sameAsSender}
                  value={sameAsSender ? senderCity : pickupCity}
                  onChange={(e) => updateFields({ pickupCity: e.target.value })}
                  className="w-full py-2 pl-2 border-1 outline-none  rounded-lg"
                >
                  <option value={""} disabled selected hidden>
                    City
                  </option>
                  {city?.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select> */}

                <DropDown
                  required={true}
                  disabled={sameAsSender}
                  alltimeValue={sameAsSender ? senderCity : pickupCity}
                  valueUpdate={(e) =>
                    updateFields({ pickupCity: e.target.value })
                  }
                  placeHolder={"City"}
                >
                  {city?.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </DropDown>

                {/* <input
                  disabled={sameAsSender}
                  type="text"
                  Value={sameAsSender ? senderLandmark : ""}
                  className='className="w-full py-2 pl-2 outline-none  rounded-lg'
                  placeholder="Nearest Landmark (optional)"
                /> */}

                <InputField
                  required={false}
                  disabled={sameAsSender}
                  valueUpdate={(e) =>
                    updateFields({ senderLandmark: e.target.value })
                  }
                  type={"text"}
                  placeHolder={"Nearest Landmark (optional)"}
                  alltimeValue={sameAsSender ? senderLandmark : ""}
                />
              </div>
              <label
                htmlFor="checkbox_same"
                className="flex items-center gap-x-2 mt-3"
              >
                <input
                  onChange={(e) => setSameAsSender(e.target.checked)}
                  type="checkbox"
                  id="checkbox_same"
                />
                <h1 className="font-semibold text-lg">
                  Select pickup address as sender address.
                </h1>
              </label>

              <div className="sender-form-container mt-5">
                <textarea
                  cols={4}
                  row={4}
                  placeholder="Instructions"
                  value={pickupInstructions}
                  onChange={(e) =>
                    updateFields({ pickupInstructions: e.target.value })
                  }
                  className="w-full border-none outline-none rounded-lg"
                ></textarea>
              </div>
            </div>

            {/* <div className="max-w-52 mt-4 md:mt-0">
                    <div className="text-xl font-semibold mb-2">Pickup Address</div>
                    <div className="break-words">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis molestiae neque suscipit nulla error id ratione! Est qui nam amet obcaecati corrupti reprehenderit sed, delectus laborum cumque laudantium consequuntur sequi.</div>
                </div> */}
          </div>
        </div>
      </FormWrapper>
    </>
  );
};

export default PickupForm;
