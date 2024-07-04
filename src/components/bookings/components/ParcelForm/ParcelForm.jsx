import CustomDateTimePicker from "../../../sharedComponents/datetimePicker/CustomDateTimePicker";
import FormWrapper from "../FormWrapper/FormWrapper";
import "./ParcelForm.css";
import Box from "../../../../assets/Icons/box.png";
import Bundle from "../../../../assets/Icons/bundle.png";
import Email from "../../../../assets/Icons/email.png";
import { useState } from "react";
import { IoIosWarning } from "react-icons/io";
import Modal from "../Modal/Modal";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import DropDown from "../../Shared_components/DropDown";
import Input from "../../Shared_components/TextArea";
import TextArea from "../../Shared_components/TextArea";

const ParcelForm = ({
  productType,
  numberOfItems,
  parcelContent,
  shipmentTime,
  itemDescription,
  productValue,
  packaging,
  fragileItems,
  preset,
  additionalInfo,
  productWeight,
  productLength,
  productWidth,
  productHeight,
  updateFields,
  fetchedFormData,
}) => {
  const { ProductType, Prohibiteditem, itemType, productGroup } =
    fetchedFormData;

  const handleDateTimeChange = (newValue) => {
    updateFields({ shipmentTime: newValue });
  };

  const [selectedPreset, setSelectedPreset] = useState("");

  const handleSelect = (preset) => {
    setSelectedPreset(preset);
    //  /     /
    if (preset === "A4 Envelope") {
      updateFields({
        preset: selectedPreset,
        productHeight: "1",
        productWidth: "9",
        productLength: "12",
      });
    } else if (preset === "Small children Appliance") {
      updateFields({
        preset: selectedPreset,
        productHeight: "13",
        productWidth: "15",
        productLength: "18",
      });
    } else if (preset === "Moving Box") {
      updateFields({
        preset: selectedPreset,
        productHeight: "18",
        productWidth: "18",
        productLength: "30",
      });
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // weight input field validation.

  const weightFieldValidation = (e) => {
    let inputField = e.target;
    const inputFieldValue = parseFloat(inputField.value);
    if (0 >= inputFieldValue) {
      inputField.value = "1";
      updateFields({ productWeight: inputField.value });
      toast.error("Weight Should be more than 0 !");
    }
  };

  return (
    <>
      <div>
        <Modal show={isModalOpen} onClose={handleCloseModal}>
          <div className="w-full flex justify-end">
            <button
              onClick={handleCloseModal}
              className="text-right"
              title="close"
            >
              <IoClose className="text-2xl" />
            </button>
          </div>
          <div>
            <div className="text-2xl font-semibold mb-3">
              Prohibited Items list
            </div>
            {Prohibiteditem?.map((item) => (
              <div key={item.id} className="my-1">
                {item.id}. {item.itemName}
              </div>
            ))}
          </div>
        </Modal>
      </div>

      <FormWrapper title="Parcel Details">
        <div className="flex w-full gap-x-8 sender-form-container my-10 ">
          <div className="flex flex-col  justify-center w-full ">
            {/* <select
                            value={productGroup}
                            onChange={e => updateFields({ productGroup: e.target.value })}
                            className="w-full border-0 outline-none rounded-lg"

                        >
                            <option value={""} disabled selected hidden>Select item group</option>
                            {
                                ProductType?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                            }
                        </select> */}

            <DropDown
              required={true}
              alltimeValue={productGroup}
              valueUpdate={(e) =>
                updateFields({ productGroup: e.target.value })
              }
              placeHolder={"Select item group"}
            >
              {ProductType?.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </DropDown>

            <button
              type="button"
              onClick={handleOpenModal}
              className="prohibited-btn self-start items-center mt-3 text-[1rem] underline font-semibold flex"
            >
              <IoIosWarning className="mr-1" /> Prohibited item list
            </button>
          </div>

          {/* <select
                        value={numberOfItems}
                        onChange={e => updateFields({ numberOfItems: e.target.value })}
                        className="w-full border-0 outline-none ml-4 rounded-lg"
                        required
                    >
                        <option value="" selected disabled hidden>Number of items</option>
                        <option>2</option>
                        <option>3</option>
                    </select> */}

          {/* <select
            value={productType}
            onChange={(e) => updateFields({ productType: e.target.value })}
            className="w-full border-0 outline-none ml-4 rounded-lg"
          >
            <option value={""} disabled selected hidden>
              Select item types
            </option>
            {itemType?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </select> */}

          <DropDown
            required={true}
            alltimeValue={productType}
            valueUpdate={(e) => updateFields({ productType: e.target.value })}
            placeHolder={"Select item types"}
          >
            {itemType?.map((item) => (
              <option value={item.name} key={item.id}>
                {item.name}
              </option>
            ))}
          </DropDown>
        </div>

        {/* <div className="flex w-full sender-form-container my-10 items-end">
                    <select

                        value={parcelContent}
                        onChange={e => updateFields({ parcelContent: e.target.value })}
                        className="w-full border-0 outline-none mr-4 rounded-lg"
                    >
                        <option value={""}  selected >Parcel content</option>
                        {
                            ParcelContent?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                        }
                    </select>

                    <div className="ml-4 w-full">
                        <CustomDateTimePicker
                            val={shipmentTime}
                            value={handleDateTimeChange}
                            label="Shipment Time"
                            isDisabled={false}
                        />
                    </div>
                </div> */}

        <div className="flex w-full gap-x-8 sender-form-container my-10">
          {/* <input
            autoFocus
            required
            type="text"
            placeholder="Unique Item description"
            value={itemDescription}
            onChange={(e) => updateFields({ itemDescription: e.target.value })}
            className="w-full border-0 outline-none mr-4 rounded-lg"
          /> */}
          <inputField
            required={true}
            valueUpdate={(e) =>
              updateFields({ itemDescription: e.target.value })
            }
            type={"text"}
            placeHolder={"Unique Item description"}
            alltimeValue={itemDescription}
          />
          {/* <input
            required
            type="text"
            placeholder="Product Value"
            value={productValue}
            onChange={(e) => updateFields({ productValue: e.target.value })}
            className="w-full border-0 outline-none ml-4 rounded-lg"
          /> */}

          <inputField
            required={true}
            valueUpdate={(e) => updateFields({ productValue: e.target.value })}
            type={"text"}
            placeHolder={"Product Value"}
            alltimeValue={productValue}
          />
        </div>

        <div className="radio-container flex-col md:flex-row flex w-full sender-form-container my-10">
          <div className="w-full mb-4 mb:mb-0 border-0 outline-none mr-4 flex items-center">
            <div className="mr-5">Extra Packaging: </div>
            <div className="mr-4">
              <input
                type="radio"
                id="package1"
                name="package"
                value="Yes"
                onChange={(e) => updateFields({ packaging: e.target.value })}
                checked={packaging === "Yes"}
                required
              />
              <label htmlFor="package1" className="ml-2">
                Yes
              </label>
            </div>
            <div className="ml-4 flex items-center">
              <input
                type="radio"
                id="package2"
                name="package"
                value="No"
                onChange={(e) => updateFields({ packaging: e.target.value })}
                checked={packaging === "No"}
                required
              />
              <label htmlFor="package2" className="ml-2">
                No
              </label>
            </div>
          </div>
          {/* 
                    <div className="w-full  mr-6">
                        <div className="mr-5">Fragile Items (Liquid or Glass): </div>
                        <div className="mr-2">
                            <input
                                type="radio"
                                id="fragile1"
                                name="fragile"
                                value="Yes"
                                onChange={e => updateFields({ fragileItems: e.target.value })}
                                checked={fragileItems === "Yes"}
                                required
                            />
                            <label htmlFor="fragile1" className="ml-2">Yes</label>
                        </div>
                        <div className="ml-4 flex items-center">
                            <input
                                type="radio"
                                id="fragile2"
                                name="fragile"
                                value="No"
                                onChange={e => updateFields({ fragileItems: e.target.value })}
                                checked={fragileItems === "No"}
                                required
                            />
                            <label htmlFor="fragile2" className="ml-2">No</label>
                        </div>









                    </div> */}
        </div>

        <div className="mt-16">
          <div className="font-semibold text-3xl mb-4">Presets</div>

          <div className="preset-wrapper">
            <label
              className={`preset-container flex items-center justify-around p-3 rounded-lg cursor-pointer border-2 ${
                preset === "A4 Envelope" ? "selected" : "border-transparent"
              }`}
              onClick={() => handleSelect("A4 Envelope")}
            >
              <input
                type="radio"
                name="preset"
                value="A4 Envelope"
                className="hidden"
                checked={preset === "A4 Envelope"}
              />
              <div className="w-12 h-12 overflow-hidden">
                <img src={Email} alt="mail" className="w-full" />
              </div>
              <div>
                <div className="font-semibold">A4 Envelope</div>
                <div className="font-semibold">12 X 9 X 1 in</div>
              </div>
            </label>

            <label
              className={`preset-container flex items-center justify-around p-3 rounded-lg cursor-pointer border-2 ${
                preset === "Small children Appliance"
                  ? "selected"
                  : "border-transparent"
              }`}
              onClick={() => handleSelect("Small children Appliance")}
            >
              <input
                type="radio"
                name="preset"
                value="Small children Appliance"
                className="hidden"
                checked={preset === "Small children Appliance"}
              />
              <div className="w-12 h-12 overflow-hidden">
                <img src={Bundle} alt="Bundle" className="w-full" />
              </div>
              <div>
                <div className="font-semibold">Small children Appliance</div>
                <div className="font-semibold">18 X 15 X 13 in</div>
              </div>
            </label>

            <label
              className={`preset-container flex items-center justify-around p-3 rounded-lg cursor-pointer border-2 ${
                preset === "Moving Box" ? "selected" : "border-transparent"
              }`}
              onClick={() => handleSelect("Moving Box")}
            >
              <input
                type="radio"
                name="preset"
                value="Moving Box"
                className="hidden"
                checked={preset === "Moving Box"}
              />
              <div className="w-12 h-12">
                <img src={Box} alt="Box" className="w-full" />
              </div>
              <div>
                <div className="font-semibold">Moving Box</div>
                <div className="font-semibold">30 X 18 X 18 in</div>
              </div>
            </label>
          </div>
        </div>

        <div className="dimension-wrapper flex items-center w-full mt-16">
          <div className="w-full md:mr-4">
            <div className="text-3xl font-semibold mb-3">Weight *</div>
            <div className="input-border rounded-xl">
              <div>weight(kg)</div>
              <input
                min={1}
                onBlur={weightFieldValidation}
                type="number"
                name="weight"
                value={productWeight}
                onChange={(e) =>
                  updateFields({ productWeight: e.target.value })
                }
                className="border-0 outline-none w-full text-2xl font-semibold"
              />
            </div>
          </div>

          <div className="w-full md:ml-4">
            <div className="text-3xl font-semibold mt-8 md:mt-0 mb-3">
              Dimensions
            </div>
            <div className="sm:flex md:justify-center items-center">
              <div className="input-border rounded-xl">
                <div>Length(in)</div>
                {/* <input
                                    type="number"
                                    name="length"
                                    value={productLength}
                                    onChange={e => updateFields({ productLength: e.target.value })}
                                    className="border-0 outline-none w-full text-2xl font-semibold" /> */}
                <div className="border-0 outline-none text-2xl font-semibold bg-white min-h-9">
                  {productLength}
                </div>
              </div>

              <div className="font-semibold text-center my-3 sm:mx-2">X</div>

              <div className="input-border rounded-xl">
                <div>Width(in)</div>
                {/* <input
                                    type="number"
                                    name="width"
                                    value={productWidth}
                                    onChange={e => updateFields({ productWidth: e.target.value })}
                                    className="border-0 outline-none w-full text-2xl font-semibold" /> */}
                <div className="border-0 outline-none text-2xl font-semibold bg-white min-h-9">
                  {productWidth}
                </div>
              </div>

              <div className="font-semibold text-center my-3 sm:mx-2">X</div>

              <div className="input-border rounded-xl">
                <div>Height(in)</div>
                {/* <input
                                    type="number"
                                    name="height"
                                    value={productHeight}
                                    onChange={e => updateFields({ productHeight: e.target.value })}
                                    className="border-0 outline-none w-full text-2xl font-semibold" /> */}
                <div className="border-0 outline-none text-2xl font-semibold bg-white min-h-9">
                  {productHeight}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-2 mb-10 text-red-500 text-base">
          <span className="text-red-700 font-bold text-lg">Please note:</span>{" "}
          Less than 1 kg, you can use decimals (e.g., 0.5 kg)
        </h1>

        <div className="sender-form-container mt-18 mb-10">
          {/* <textarea
            cols={4}
            row={4}
            placeholder="Additional information about product"
            value={additionalInfo}
            onChange={(e) => updateFields({ additionalInfo: e.target.value })}
            className="w-full border-0 outline-none rounded-lg"
          ></textarea> */}

          <TextArea
            required={true}
            valueUpdate={(e) => updateFields({ additionalInfo: e.target.value })}
            placeHolder={"Additional information about product"}
            alltimeValue={additionalInfo}
          />
        </div>
      </FormWrapper>
    </>
  );
};

export default ParcelForm;
