import React from "react";

const TextArea = ({ placeHolder, alltimeValue, valueUpdate, required,disabled }) => {
  return (
    <div className=" w-full min-h-20 border-black">
      <label className=" font-semibold" htmlFor={placeHolder}>
        {placeHolder}{" "}
        <span className={required ? "text-red-600" : "hidden"}>*</span>
      </label>
      <textarea
       // required={required}
       required={false}
       disabled={disabled?true:false}
      id={placeHolder}
          cols={4}
          row={4}
          value={alltimeValue}
          onChange={valueUpdate}
           className="w-full border mt-3 border-gray-400 h-12 outline-none rounded-lg"
        ></textarea>
    </div>
  );
};

export default TextArea;

