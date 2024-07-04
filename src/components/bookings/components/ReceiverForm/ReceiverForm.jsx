import React from "react";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../../Shared_components/TextArea";
import DropDown from "../../Shared_components/DropDown";
import InputField from "../../Shared_components/InputField";

const ReceiverForm = ({
  receiverName,
  receiverEmail,
  receiverMobileNumber,
  receiverDistrict,
  receiverLandmark,
  receiverCity,
  receiverAddress,
  updateFields,
  fetchedFormData,
}) => {
  const { country, city } = fetchedFormData;
  return (
    <FormWrapper title="Receiver Details">
      <div className="flex w-full gap-x-8 sender-form-container my-10">
        {/* <input
                    autoFocus
                    required
                    type="text"
                    placeholder='Receiver Name'
                    value={receiverName}
                    onChange={e => updateFields({ receiverName: e.target.value })}
                    className="w-full border-0 outline-none mr-4 rounded-lg"
                /> */}
        <InputField
          required={true}
          valueUpdate={(e) => updateFields({ receiverName: e.target.value })}
          type={"text"}
          placeHolder={"Receiver Name"}
          alltimeValue={receiverName}
        />
        {/* <input
                    required
                    type="email"
                    placeholder='Receiver Email'
                    value={receiverEmail}
                    onChange={e => updateFields({ receiverEmail: e.target.value })}
                    className="w-full border-0 outline-none ml-4 rounded-lg"
                /> */}
        <InputField
          required={true}
          valueUpdate={(e) => updateFields({ receiverEmail: e.target.value })}
          type={"email"}
          placeHolder={"Receiver Email"}
          alltimeValue={receiverEmail}
        />
      </div>

      <div className="flex w-full gap-x-8 sender-form-container my-10">
        {/* <input
          autoFocus
          required
          type="number"
          placeholder="Receiver Mobile Number"
          value={receiverMobileNumber}
          onChange={(e) =>
            updateFields({ receiverMobileNumber: e.target.value })
          }
          className="w-full border-0 outline-none mr-4 rounded-lg"
        /> */}

        <InputField
          required={true}
          valueUpdate={(e) =>
            updateFields({ receiverMobileNumber: e.target.value })
          }
          type={"number"}
          placeHolder={"Receiver Mobile Number"}
          alltimeValue={receiverMobileNumber}
        />

        {/* <select
          value={receiverDistrict}
          onChange={(e) => updateFields({ receiverDistrict: e.target.value })}
          className="w-full border-0 outline-none ml-4 rounded-lg"
        >
          <option value={""} disabled selected hidden>
            Country
          </option>
          {country?.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select> */}

        <DropDown
          required={true}
          alltimeValue={receiverDistrict}
          valueUpdate={(e) =>
            updateFields({ receiverDistrict: e.target.value })
          }
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
          value={receiverCity}
          onChange={(e) => updateFields({ receiverCity: e.target.value })}
          className="w-full border-0 outline-none mr-4 rounded-lg"
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
          alltimeValue={receiverCity}
          valueUpdate={(e) => updateFields({ receiverCity: e.target.value })}
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
          placeholder="Nearest Landmark (Optional)"
          value={receiverLandmark}
          onChange={(e) => updateFields({ receiverLandmark: e.target.value })}
          className="w-full border-0 outline-none ml-4 rounded-lg"
        /> */}
        <InputField
          required={false}
          valueUpdate={(e) => updateFields({ receiverLandmark: e.target.value })}
          type={"text"}
          placeHolder={"Nearest Landmark (Optional)"}
          alltimeValue={receiverLandmark}
        />
      </div>

      <div className="sender-form-container mt-20 mb-16">
        <textarea
          cols={10}
          row={4}
          placeholder="Receiver Additional Address Information"
          value={receiverAddress}
          onChange={(e) => updateFields({ receiverAddress: e.target.value })}
          className="w-full border-0 outline-none rounded-lg"
        ></textarea>
      </div>
    </FormWrapper>
  );
};

export default ReceiverForm;
