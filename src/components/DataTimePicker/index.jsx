import React from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";
const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const config = {
    ...otherProps,
    ...field,
    type: "date",
    fullWidth: true,
    variant: "outlined",
    InputLabelProps: {
      shrink: true,
    },
  };
  if (meta && meta.error && meta.touched) {
    config.error = true;
    config.helperText = meta.error;
  }
  return <TextField {...config} />;
};
export default DateTimePicker;
