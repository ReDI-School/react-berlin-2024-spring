import styles from "./NavBar.module.css";

const NavBar = ({ children }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContentWrapper}>{children}</div>
    </div>
  );
};

export default NavBar;
