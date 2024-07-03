import moment from "moment";
import React from "react";

const DateFormater = (props) => {
  const parsedDate = moment(props, "YYYY-MM-DDTHH:mm:ss");

  if (parsedDate.isValid()) {
    const formattedDate = parsedDate.format("MMMM Do, YYYY");
    return <>{formattedDate}</>;
  } else {
    return "Invalid Date";
  }
};

export default DateFormater;
