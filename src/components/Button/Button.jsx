import styles from "./Button.module.css";

const Button = ({ isSelected, name, onClick, children }) => {
  const buttonStyles = `${styles.button} ${isSelected ? styles.selected : ""}`;

  return (
    <button className={buttonStyles} onClick={() => onClick(name)}>
      {children}
    </button>
  );
};

export default Button;
