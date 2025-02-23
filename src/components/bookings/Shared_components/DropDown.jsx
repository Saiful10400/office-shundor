import React from "react";

const DropDown = ({
  placeHolder,
  children,
  alltimeValue,
  valueUpdate,
  required,
  disabled
}) => {
  return (
    <div className=" w-full min-h-20 border-black">
      <label className=" font-semibold" htmlFor={placeHolder}>
        {placeHolder}{" "}
        <span className={required ? "text-red-600" : "hidden"}>*</span>
      </label>
      <select
        // required={required}
        disabled={disabled?true:false}
        id={placeHolder}
          value={alltimeValue}
        onChange={valueUpdate}
        className="w-full border mt-3 border-gray-400 h-12 outline-none rounded-lg"
      >
        <option value={""} disabled selected hidden>
          Select one
        </option>
        {children}
      </select>
    </div>
  );
};

export default DropDown;
