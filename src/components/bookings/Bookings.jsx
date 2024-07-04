import { useEffect, useState } from "react";
import "./Bookings.css";
import { useMultistepForm } from "../../hooks/MultiStepForm/useMultiStepForm";
import SenderForm from "./components/SenderForm/SenderForm";
import ReceiverForm from "./components/ReceiverForm/ReceiverForm";
import ParcelForm from "./components/ParcelForm/ParcelForm";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import PickupForm from "./components/PickupForm/PickupForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingInformation from "./components/ShippingInformation/ShippingInformation";
import axios from "axios";
import Finalize from "./components/Finalize/Finalize";
import WhereToGo from "./components/WhereToGo/WhereToGo";

const apiAddress = process.env.REACT_APP_API_URL;

const Bookings = () => {
  const INITIAL_DATA = {
    route: "",
    senderName: "",
    senderEmail: "",
    senderMobileNumber: "",
    senderCountry: "",
    senderLandmark: "",
    senderCity: "",
    pickupCity: "",
    pickupCountry: "",
    senderAddress: "",
    receiverName: "",
    receiverEmail: "",
    receiverMobileNumber: "",
    receiverDistrict: "",
    receiverLandmark: "",
    receiverCity: "",
    receiverAddress: "",
    productType: "",
    numberOfItems: "",
    parcelContent: "",
    shipmentTime: "",
    itemDescription: "",
    productValue: "",
    packaging: "",
    fragileItems: "",
    preset: "",
    additionalInfo: "",
    productWeight: "",
    productLength: "",
    productWidth: "",
    productHeight: "",
    paymentType: "",
    productGroup: "",
    shipmentType: "",
    IsScheduled: "",
    scheduledDate: {},
    pickupLocation: "",
    pickupWeight: "",
    pickupInstructions: "",
    pickupTimeFrom: "",
    pickupTimeTo: "",
    cargoType: "",
  };

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  console.log(data);

  // fetching booking form data.
  const [arrivalDateInfo, setArivalDateInfo] = useState([]);

  const [fetchedFormData, setfetchedFormData] = useState({});
  const formKeys = fetchedFormData;

  useEffect(() => {
    /// fetching arrival date info.
    axios.get("./dummyData.json").then((res) => setArivalDateInfo(res.data));

    // api get request url and state seter functions and ulrs.
    const getFormDAta = [
      {
        url: "/api/District",
        key: "country",
      },
      {
        url: "/api/city",
        key: "city",
      },
      {
        url: "/api/ProductType",
        key: "ProductType",
      },
      {
        url: "/api/ParcelContent",
        key: "ParcelContent",
      },
      {
        url: "/api/Prohibiteditem",
        key: "Prohibiteditem",
      },
      {
        url: "/api/Cargotype",
        key: "Cargotype",
      },
      {
        url: "/api/Route",
        key: "Route",
      },
      {
        url: "/api/itemType",
        key: "itemType",
      },
    ];

    // Fetched form data and set to state.

    getFormDAta?.forEach(({ url, key }) => {
      axios
        .get(apiAddress + url)
        .then((res) => {
          formKeys[key] = res.data;
          return setfetchedFormData({ ...formKeys });
        })
        .catch((err) => {
          console.log(err.message);
        });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <WhereToGo
        {...data}
        updateFields={updateFields}
        fetchedFormData={fetchedFormData}
      />,
      <SenderForm
        {...data}
        fetchedFormData={fetchedFormData}
        updateFields={updateFields}
      />,
      <ReceiverForm
        {...data}
        fetchedFormData={fetchedFormData}
        updateFields={updateFields}
      />,
      <ParcelForm
        {...data}
        fetchedFormData={fetchedFormData}
        updateFields={updateFields}
      />,
      <PickupForm
        {...data}
        fetchedFormData={fetchedFormData}
        updateFields={updateFields}
      />,
      <ShippingInformation
        {...data}
        fetchedFormData={fetchedFormData}
        updateFields={updateFields}
        arrivalDateInfo={arrivalDateInfo}
      />,
      <PaymentForm {...data} updateFields={updateFields} />,
      <Finalize {...data} updateFields={updateFields} />,
    ]);

  const validateFields = () => {
    const isManualFilled =
      data.productWeight &&
      data.productLength &&
      data.productWidth &&
      data.productHeight;
    if (!data.preset && !isManualFilled) {
      toast.error("Please select a preset or fill in all the fields.");
      return false;
    }
    // if (isManualFilled) {
    //     updateFields({ preset: '' }); // Reset preset if manual fields are filled
    // }
    const { scheduledDate, IsScheduled } = data;
    if (
      Object.keys(scheduledDate).length <= 0 &&
      currentStepIndex === 4 &&
      IsScheduled === "yes"
    ) {
      toast.error("Please select scheduled date.");
      return false;
    }
    return true;
  };

  function onSubmit(e) {
    e.preventDefault();
    if (currentStepIndex === 3 || currentStepIndex === 4)
      if (!validateFields()) return;

    if (!isLastStep) return next();

    console.log("data: ", data);
    alert("Successful Account Creation");
  }

  const stepNames = [
    "Route",
    "Sender",
    "Receiver",
    "Parcel",
    "Pickup",
    "Shipment",
    "Payment",
    "Review",
  ];

  return (
    <div className="py-[70px] bookingContainer min-h-screen flex flex-col gap-11 justify-center items-center">
      <ToastContainer />
      <h1 className="text-[36px] font-semibold pageTittle px-4">Booking</h1>
      <div className="multiform-container px-9 bg-white shadow-2xl  rounded-xl">
        <form onSubmit={onSubmit} className="pt-[200px] pb-[50px]  relative">
          <div className="absolute top-[90px]  left-0 w-full">
            <ProgressBar
              data={data}
              currentStepIndex={currentStepIndex}
              steps={steps}
              stepNames={stepNames}
            />
          </div>
          {/* step page container part. */}

          <div className=" lg:min-h-[300px]  flex justify-center items-center">
            {step}
          </div>

          {/* button part. */}
          <div className="flex justify-between items-center mt-6">
            {!isFirstStep && (
              <button
                type="button"
                onClick={back}
                className="bg-transparent border border-[#E57C22] font-bold text-[#E57C22] py-2 pl-2 pr-7 w-[8rem] rounded-lg flex items-center justify-between flex-row-reverse"
              >
                Back <BsArrowLeft className="text-2xl" />
              </button>
            )}
            <button
              type="submit"
              className="bg-transparent border border-[#E57C22] font-bold text-[#E57C22] py-2 pr-2 pl-7 w-[8rem] rounded-lg flex items-center justify-between"
            >
              {isLastStep ? "Finish" : "Next"}{" "}
              <BsArrowRight className="text-2xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
