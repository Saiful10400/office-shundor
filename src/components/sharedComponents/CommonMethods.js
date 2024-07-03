import axios from "axios";
import React from "react";

const apiAddress = process.env.REACT_APP_SECRET;

export const EntryNumberGenarator = (lastNumber, prefix) => {
  //prefix will be like "INV1-PA-"
  const myArray = lastNumber.split("-");
  let lastorderNumber = myArray[2];
  let num = parseInt(lastorderNumber) + 1;
  var newOrderNumberString = num.toString();
  while (newOrderNumberString.length < 11) {
    newOrderNumberString = "0" + newOrderNumberString;
  }
  var finalString = prefix + newOrderNumberString;

  return finalString;
};
