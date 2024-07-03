import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { TextField } from "@mui/material";

export default function CustomDateTimePicker(props) {
  return (
    <div className="datetimePicker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            "DateTimePicker",
            "MobileDateTimePicker",
            "DesktopDateTimePicker",
            "StaticDateTimePicker",
          ]}
        >
          <DemoItem>
            <DesktopDateTimePicker
              defaultValue={props.defaultValue}
              disabled={props.isDisabled}
              label={props.label}
              value={props.val}
              onChange={(e) => {
                props.value(e);
              }}
              slotProps={{ textField: { size: "small" } }}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
