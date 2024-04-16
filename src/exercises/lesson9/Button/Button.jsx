const Button = ({ children, variant }) => {
  const backgroundColor = variant === "secondary" ? "#FF0000" : "#FFF000";

  const buttonStyles = {
    backgroundColor: backgroundColor,
    color: "white",
    borderRadius: "5px",
    padding: "20px",
  };

  return <button style={buttonStyles}>{children}</button>;
};

export default Button;
