import React, { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import "./TextAreaComponents.css";

import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { InputAdornment } from "@mui/material";
function TextAreaComponents(props) {
  const handlecontactNumberChange = (event) => {
    try {
      const newValue = event.target.value;

      if (isNaN(newValue)) {
        var empty = newValue.slice(0, -1);
        props.value(empty);
      } else {
        if (newValue.length != 11) {
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        props.value(newValue);
      }
    } catch {
      console.log("Error");
    }
  };

  const [phonerror, setPhoneError] = useState(false);
  const handlePhoneNumberChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length != 11) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }

    props.value(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 189) {
      event.preventDefault();
    }
  };
  const handlePaste = (event) => {
    event.preventDefault();
  };
  const [textError, setTextError] = useState(false);
  const handletextChange = (event) => {
    const newValue = event.target.value;

    if (newValue.trim() === "") {
      setTextError(true);
    } else {
      setTextError(false);
    }

    props.value(newValue);
  };

  if (props.id === 1) {
    return (
      <>
        <TextField
          id="outlined-multiline-static"
          placeholder={props.label}
          multiline
          rows={3}
          fullWidth
          onChange={(event) => {
            props.value(event.target.value);
          }}
          value={props.val}
        />
      </>
    );
  } else if (props.id === 2) {
    return (
      <TextField
        id="outlined-basic"
        placeholder={props.label}
        label={props.label}
        type="number"
        fullWidth
        disabled={props.isactive}
        value={props.val}
        defaultValue={props.defaultValue}
        onChange={(event) => {
          props.value(event.target.value);
        }}
        onKeyDown={handleKeyDown}
        size="small"
      />
    );
  } else if (props.id === 3) {
    return (
      <TextField
        id="outlined-number"
        placeholder={props.label}
        type="number"
        fullWidth
        disabled={props.isactive}
        value={props.val}
        onChange={(event) => {
          props.value(event.target.value);
        }}
        InputProps={{ inputProps: { min: props.min, max: props.max } }}
      />
    );
  } else if (props.id == 5) {
    return (
      <>
        <TextField
          id="outlined-basic"
          value={props.val}
          placeholder={props.label}
          label={props.label}
          variant="outlined"
          fullWidth
          size="small"
          disabled={props.isactive}
          onChange={handletextChange}
          error={
            props.error ? props.error : props.isValid ? props.isValid : false
          }
          helperText={
            props.error
              ? "This field is required"
              : props.isValid
              ? "Email is not valid"
              : ""
          }
          InputLabelProps={{ shrink: true }}
        />
      </>
    );
  } else if (props.id === 6) {
    return (
      <>
        <TextField
          id="outlined-multiline-static"
          placeholder={props.label}
          fullWidth
          onChange={(event) => {
            props.value(event.target.value);
          }}
          value={props.val}
          label={props.label}
          size="small"
          defaultValue={props.val}
        />
      </>
    );
  } else if (props.id === 7) {
    return (
      <>
        <TextField
          id="outlined-multiline-static"
          placeholder={props.label}
          fullWidth
          onChange={(event) => {
            props.value(event.target.value);
          }}
          value={props.val}
          label={props.label}
          size="small"
          type="password"
        />
      </>
    );
  }
}

export default TextAreaComponents;
