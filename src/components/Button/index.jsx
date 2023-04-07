import React from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => {
    submitForm();
  };
  const config = {
    onClick: handleSubmit,
    variant: "contained",
    color: "primary",
    fullWidth: true,
  };
  return <Button {...config}>{children}</Button>;
};

export default ButtonWrapper;
