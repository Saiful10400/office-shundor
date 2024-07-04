import React from "react";

const InputField = ({
  placeHolder,
  alltimeValue,
  valueUpdate,
  required,
  disabled,
  type,
}) => {
  return (
    <div className=" w-full min-h-20 border-black">
      <label className=" font-semibold" htmlFor={placeHolder}>
        {placeHolder}{" "}
        <span className={required ? "text-red-600" : "hidden"}>*</span>
      </label>

      <input
        // required={required}
        required={false}
        disabled={disabled ? true : false}
        type={type}
        id={placeHolder}
        value={alltimeValue}
        onChange={valueUpdate}
        className="w-full border mt-3 border-gray-400 h-12 outline-none rounded-lg"
      />
    </div>
  );
};

export default InputField;
