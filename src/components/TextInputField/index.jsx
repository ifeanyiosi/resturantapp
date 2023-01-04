import PropTypes from "prop-types";
import { ErrorMessage } from "formik";
import { Input, FormItem, InputNumber } from "formik-antd";
import "./index.css";

const TextInputField = ({
  label,
  prefix,
  suffix,
  type,
  name,
  value,
  placeholder,
  required,
  passwordToggle,
  disabled,
  maxLength,
  onChange,
  validInput,
}) => {
  // TODO: Make it make sense

  switch (type) {
    case "text":
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={label}
          required={required}
          maxLength={maxLength}
        >
          <Input
            name={name}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            disabled={disabled}
            maxLength={maxLength}
            onChange={onChange}
            value={(validInput && validInput) || value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case "number":
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={label}
          required={required}
          maxLength={maxLength}
        >
          <InputNumber
            disabled={disabled}
            name={name}
            prefix={prefix}
            controls={false}
            maxLength={maxLength}
            onChange={onChange}
            value={(validInput && validInput) || value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case "password":
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={label}
          required={required}
          maxLength={maxLength}
        >
          <Input.Password
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            visibilityToggle={passwordToggle}
            prefix={prefix}
            suffix={suffix}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput && validInput}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    default:
      return (
        <FormItem
          disabled={disabled}
          name={name}
          label={label}
          maxLength={maxLength}
        >
          <Input
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            value={validInput || value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
  }
};

TextInputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool, // true || false
  placeholder: PropTypes.string,
  maxLength: PropTypes.string,

  type: PropTypes.string,
  prefix: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.element]),
  suffix: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.element]),
  required: PropTypes.bool, // true || false
  passwordToggle: PropTypes.bool, // true || false: Determines if the password toggle switch is shown
};

TextInputField.defaultProps = {
  label: "text",
  name: "inputField",
  placeholder: "",
  type: "input",
  disabled: false,
  prefix: <span />,
  suffix: <span />,
  required: false,
  passwordToggle: true,
  maxLength: "",
};

export default TextInputField;
