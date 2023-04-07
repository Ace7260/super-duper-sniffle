import React from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evet) => {
    const { value } = evet.target;
    //  console.log("ddddd", name);
    setFieldValue(name, value);
  };

  const config = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    config.error = true;
    config.helperText = meta.error;
  }
  return (
    <TextField {...config}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

export default SelectWrapper;
