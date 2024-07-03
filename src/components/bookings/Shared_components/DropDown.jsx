import React from "react";

const DropDown = ({placeHolder,children,alltimeValue,valueUpdate}) => {
    
  return (
    <div className="border w-full min-h-20 border-black">
        <select
    //   value={alltimeValue}
      onChange={valueUpdate}
      className="w-full border-2 outline-none rounded-lg"
    >
      <option value={""} disabled selected hidden>
        {placeHolder}
      </option>
      {
        // country?.map(item => <option value={item.name} key={item.id}>{item.name}</option>)
        children
      }
    </select>
    </div>
  );
};

export default DropDown;
