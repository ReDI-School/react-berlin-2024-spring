import styles from "./DiscountPopUp.module.css";

const DiscountPopUp = ({ children }) => {
  return <div className={styles.popUp}>{children}</div>;
};

export default DiscountPopUp;
