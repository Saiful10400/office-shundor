import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import "./SenderForm.css";
import DropDown from "../../Shared_components/DropDown";
import Input from "../../Shared_components/TextArea";
import TextArea from "../../Shared_components/TextArea";
import InputField from "../../Shared_components/InputField";

const SenderForm = ({
  senderName,
  senderEmail,
  senderMobileNumber,
  senderCountry,
  senderLandmark,
  senderCity,
  senderAddress,
  updateFields,
  fetchedFormData,
}) => {
  const { country, city } = fetchedFormData;

  return (
    <FormWrapper title="Sender Details">
      <div className="flex w-full gap-x-8 sender-form-container my-10">
        {/* <div className="w-full relative">
          <input
            autoFocus
            required
            type="text"
            placeholder="Sender Name"
            value={senderName}
            onChange={(e) => updateFields({ senderName: e.target.value })}
            className=" w-full border-0 outline-none mr-4 rounded-lg"
          />
        </div> */}
        <InputField
          required={true}
          valueUpdate={(e) => updateFields({ senderName: e.target.value })}
          type={"text"}
          placeHolder={"Sender Name"}
          alltimeValue={senderName}
        />
        {/* <input
          required
          type="email"
          placeholder="Sender Email"
          value={senderEmail}
          onChange={(e) => updateFields({ senderEmail: e.target.value })}
          className="w-full border-0 outline-none ml-4 rounded-lg"
        /> */}
        <InputField
          required={true}
          valueUpdate={(e) => updateFields({ senderEmail: e.target.value })}
          type={"email"}
          placeHolder={"Sender Email"}
          alltimeValue={senderEmail}
        />
      </div>

      <div className="flex w-full gap-x-8 sender-form-container my-10">
        {/* <input
          autoFocus
          required
          type="number"
          placeholder="Sender Mobile Number"
          value={senderMobileNumber}
          onChange={(e) => updateFields({ senderMobileNumber: e.target.value })}
          className="w-full border-0 outline-none mr-4 rounded-lg"
        /> */}

        <InputField
          required={true}
          valueUpdate={(e) =>
            updateFields({ senderMobileNumber: e.target.value })
          }
          type={"number"}
          placeHolder={"Sender Mobile Number"}
          alltimeValue={senderMobileNumber}
        />

        {/* <select

                    value={senderCountry}
                    onChange={e => updateFields({ senderCountry: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                >
                    <option value={""} disabled selected hidden>Country</option>
                    {
                        country?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                    }
                </select> */}

        <DropDown
          required={true}
          alltimeValue={senderCountry}
          valueUpdate={(e) => updateFields({ senderCountry: e.target.value })}
          placeHolder={"Country"}
        >
          {country?.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </DropDown>
      </div>

      <div className="flex w-full gap-x-8 sender-form-container my-10">
        {/* <select

                    value={senderCity}
                    onChange={e => updateFields({ senderCity: e.target.value })}
                    className="w-full border-0 outline-none mr-4 rounded-lg"
                >
                    <option value={""} disabled selected hidden>City</option>
                    {
                        city?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
                    }
                </select> */}

        <DropDown
          required={true}
          alltimeValue={senderCity}
          valueUpdate={(e) => updateFields({ senderCity: e.target.value })}
          placeHolder={"City"}
        >
          {city?.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </DropDown>

        {/* <input
                    type="text"
                    placeholder='Nearest Landmark (Optional)'
                    value={senderLandmark}
                    onChange={e => updateFields({ senderLandmark: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                /> */}
        <InputField
          required={false}
          valueUpdate={(e) => updateFields({ senderLandmark: e.target.value })}
          type={"text"}
          placeHolder={"Nearest Landmark (Optional)"}
          alltimeValue={senderLandmark}
        />
      </div>

      <div className="sender-form-container mt-20 mb-16">
        {/* <textarea
          cols={4}
          row={4}
          placeholder="Sender Additional Address Information"
          value={senderAddress}
          onChange={(e) => updateFields({ senderAddress: e.target.value })}
          className="w-full border-0 outline-none rounded-lg"
        ></textarea> */}

        <TextArea
          required={true}
          valueUpdate={(e) =>
            updateFields({ senderAddress: e.target.value })
          }
          placeHolder={"Sender Additional Address Information"}
          alltimeValue={senderAddress}
        />
      </div>
    </FormWrapper>
  );
};

export default SenderForm;
