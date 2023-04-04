import React from "react";
import { useField } from "formik";
// import { styled } from "@mui/material";
import { TextField } from "@material-ui/core";

const Textfieldwraper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  console.log("ssssss", field.onBlur);
  console.log("eeeeee", meta.initialTouched);

  const config = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
  };
  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }

  return <TextField {...config} />;
};
export default Textfieldwraper;
