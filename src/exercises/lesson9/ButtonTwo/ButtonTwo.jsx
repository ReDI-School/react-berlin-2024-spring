import styles from "./ButtonTwo.module.css";

const ButtonTwo = ({ children, variant }) => {
  return (
    <button
      className={
        variant === "secondary" ? styles.button_secondary : styles.button
      }
    >
      {children}
    </button>
  );
};

export default ButtonTwo;
