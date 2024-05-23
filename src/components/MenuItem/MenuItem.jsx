import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./MenuItem.module.css";

const MenuItem = ({ onClick, isSelected, dish }) => {
  const { strMeal: name, strMealThumb: image } = dish;
  const navigate = useNavigate();
  return (
    <div className={styles.menuItem}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className={styles.menuItemBtnContainer}>
        <Button onClick={onClick} isSelected={isSelected} name={name}>
          {isSelected ? "Remove From Cart" : "Add To Cart"}
        </Button>
        <Button onClick={() => navigate(`/meals/${dish.idMeal}`)}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
