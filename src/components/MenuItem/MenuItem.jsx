import Button from "../Button/Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ name, image, onClick, isSelected }) => {
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <Button onClick={onClick} isSelected={isSelected} name={name}>
        {isSelected ? "Remove From Cart" : "Add To Cart"}
      </Button>
    </div>
  );
};

export default MenuItem;
