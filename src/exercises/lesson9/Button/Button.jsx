import styles from "./Button.module.css";
// import "./Button.css";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
