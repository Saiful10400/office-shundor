import React, { useEffect, useState } from "react";

import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import "./AutoCompleteMultiSelect.css";
import { option } from "yargs";
import { Box } from "@mui/material";

function AutoCompleteMultiSelect(props) {
  useEffect(() => {
    // console.log(props.datas);
  });

  const initialValue = [
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];

  const [value, setValue] = useState(initialValue);
  if (props.id === 1) {
    return (
      <div>
        {/* use string as output */}
        {/* <Autocomplete
          // id="tags-outlined"
          id="size-small-outlined"
          size="small"
          options={props.datas}
          getOptionLabel={(option) => option.title}
          // onChange={(value) => { props.value(value); console.log(value) }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          onInputChange={(event, newInputValue) => {
            props.value(newInputValue);
          }}
          defaultValue={props.defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              placeholder={props.placeholder}
            />
          )}
        /> */}
        {/* required props */}
        {/* getOptionLabel={(option) => option.title} */}
        <Autocomplete
          id="tags-outlined"
          options={props.datas}
          getOptionLabel={props.getOptionLabel}
          size="small"
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          onChange={(event, newValue) => {
            props.value(JSON.stringify(newValue, null, " "));
            props.value(newValue);
          }}
          defaultValue={props.defaultValue}
          value={props.val}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              placeholder={props.placeholder}
            />
          )}
          key={props.clear}
        />
      </div>
    );
  } else if (props.id == 33) {
    return (
      <div>
        <Autocomplete
          id="tags-outlined"
          options={props.datas}
          getOptionLabel={props.getOptionLabel}
          size="small"
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          onChange={(event, newValue) => {
            props.value(JSON.stringify(newValue, null, " "));
          }}
          defaultValue={props.defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              placeholder={props.placeholder}
            />
          )}
        />
      </div>
    );
  } else if (props.id === 88) {
    return (
      <div>
        {/* use string as output */}
        <Autocomplete
          id="tags-outlined"
          options={props.datas}
          getOptionLabel={(option) => option.title}
          // onChange={(value) => { props.value(value); console.log(value) }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          onInputChange={(event, newInputValue) => {
            props.value(newInputValue);
          }}
          defaultValue={props.defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              placeholder={props.placeholder}
            />
          )}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                src={option.img}
                // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
                style={{ width: "2rem" }}
              />
              <div className="d-flex " style={{ flexDirection: "column" }}>
                <div className="d-flex" style={{ gap: "10px" }}>
                  <h5 className="mb-0">{option.title}</h5>
                  {/* <div style={{ backgroundColor: "#fde6ea", padding: "5px", fontSize: ".8rem", borderRadius: "10px", color: "#847c7d" }}>
                                        General Manager
                                    </div> */}
                </div>

                <span
                  className="text-muted"
                  style={{ fontSize: "1rem", marginTop: "0" }}
                >
                  {" "}
                  {option.restaurantName}
                </span>
              </div>

              {/* ({option.code}) +{option.phone} */}
            </Box>
          )}
        />
      </div>
    );
  } else {
    return (
      <div>
        {/* use string Array as output */}
        <Autocomplete
          multiple
          id="tags-outlined"
          clearText="clear"
          options={props.datas}
          getOptionLabel={(option) => option.title}
          // onChange={(value) => { props.value(value); console.log(value) }}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          filterSelectedOptions
          onChange={(event, newInputValue) => {
            props.value(newInputValue);
          }}
          defaultValue={props.defaultValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label={props.label}
              placeholder={props.placeholder}
              required={true}
            />
          )}
          value={props.val}
        />
      </div>
    );
  }
}

export default AutoCompleteMultiSelect;
