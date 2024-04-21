import styles from "./Button.module.css";

const Button = ({ isSelected, name, onClick, children }) => {
  const buttonStyles = [styles.button];

  if (isSelected) {
    buttonStyles.push(styles.selected);
  }

  return (
    <button className={buttonStyles.join(" ")} onClick={() => onClick(name)}>
      {children}
    </button>
  );
};

export default Button;
