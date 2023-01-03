/* eslint-disable react/button-has-type */
import PropTypes from "prop-types";
import { BiLoaderCircle } from "react-icons/bi";

const Button = ({
  label,
  disabled,
  type,
  display,
  prefix,
  suffix,
  loading,
  onClick,
  variant,
  size,
}) => {
  let textColor;
  let bgColor;
  let textColorHover;
  let bgColorHover;
  let padding;
  let fontSize;

  switch (variant) {
    case "primary":
      textColor = "text-white";
      textColorHover = "hover:text-white";
      bgColor = "bg-orange-400";
      bgColorHover = "hover:bg-orange-500";
      break;

    case "secondary":
      textColor = "text-primary-10";
      textColorHover = "hover:text-primary-10";
      bgColor = "bg-gray-1";
      bgColorHover = "hover:bg-gray-2";
      break;
    case "tertiary-1":
      textColor = "text-white";
      textColorHover = "hover:text-white";
      bgColor = "bg-primary-7";
      bgColorHover = "hover:bg-primary-8";
      break;

    case "alt":
      textColor = "text-white";
      textColorHover = "hover:text-white";
      bgColor = "bg-[#00ADEE]";
      bgColorHover = "hover:bg-primary-8";
      break;
    default:
  }

  switch (size) {
    case "sm":
      padding = "px-4 py-3 min-h-[49.14px]";
      fontSize = "text-base";
      break;
    case "md":
      padding = "px-5 py-5 min-h-[65.14px]";
      fontSize = "text-sm";
      break;
    default:
  }

  const baseStyle = `${fontSize} ${padding} ${bgColor} ${textColor} ${bgColorHover} ${textColorHover} text-[18px] cursor-pointer font-Karla font-bold rounded-lg flex justify-center items-center transition duration-300`;

  const style = `
   ${baseStyle}
   ${display === "inline" ? "inline" : "w-full"}
   ${disabled || loading ? `opacity-50` : null}`;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${style}`}
    >
      {/* If lodaing is true, hide all icons & display loading icon only */}
      {loading ? (
        <span className="animate-spin">
          <BiLoaderCircle className={`${textColor}`} />
        </span>
      ) : (
        <div className="flex items-center">
          {prefix ? <span className="mr-3">{prefix}</span> : null}
          <span>{label}</span>
          {suffix ? <span className="ml-3">{suffix}</span> : null}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string, // the button text
  disabled: PropTypes.bool, // true || false
  type: PropTypes.string, // button || submit || reset
  display: PropTypes.oneOf(["inline", "block"]),
  prefix: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.element]),
  suffix: PropTypes.oneOfType([PropTypes.oneOf([false]), PropTypes.element]),
  loading: PropTypes.bool, // true || false (if true, button automatically goes to disabled state)
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary-1"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

// TODO: add onClick function
Button.defaultProps = {
  label: "Button",
  disabled: false,
  type: "button",
  display: "block",
  prefix: false,
  suffix: false,
  loading: false,
  variant: "primary",
  size: "md",
  onClick: () => {},
};

export default Button;
