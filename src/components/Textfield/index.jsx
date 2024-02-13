import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const InputField = ({
  label,
  handleChange,
  name,
  defaultValue,
  style,
  labelStyles,
  value,
  id,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        marginTop: 3,
        marginBottom: 3,
        ...style,
      }}
    >
      <label
        htmlFor="input"
        style={{
          marginRight: 5,
          fontWeight: "normal",
          color: "black",
          marginBottom: 10,
          ...labelStyles,
        }}
      >
        {label}
      </label>
      <TextField
        id="input"
        {...props}
        fullWidth
        variant="outlined"
        defaultValue={defaultValue}
        autoComplete="off"
        size="small"
        onChange={handleChange}
        value={value}
        name={name}
        style={{ minWidth: 50 }}
        data-testid={id}
      />
    </div>
  );
};

InputField.propTypes = {
  handleChange: PropTypes?.func,
  label: PropTypes?.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes?.string,
  defaultValue: PropTypes?.string,
  style: PropTypes?.func,
  labelStyles: PropTypes?.func,
  value: PropTypes?.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  id: PropTypes.string,
};

export default InputField;
