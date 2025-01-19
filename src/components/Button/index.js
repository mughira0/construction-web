import classes from "./Button.module.css";
const Button = ({
  label,
  onClick,
  disabled,
  customStyle,
  className,
  variant = "cutHover", // Default variant is "cutHover"
  leftIcon,
}) => {
  const Icon = leftIcon;

  return (
    <>
      <button
        className={[classes.button, className && className].join(" ")}
        style={customStyle} // Inline styles for custom adjustments
        disabled={disabled} // Disables the button if true
        onClick={onClick} // Click event handler
        data-variant={variant} // Pass the variant as a data attribute
      >
        {Icon && <Icon size={25} color="green" />} {label}{" "}
        {/* Display the button label */}
      </button>
    </>
  );
};

export default Button;
