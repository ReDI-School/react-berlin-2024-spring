import { useState } from "react";
import styles from "./SearchField.module.css";

/**
 * Exercise together
 * Set the class .mouseEnterBorder with onMouseEnter
 * Remove the class .mouseEnterBorder with onMouseLeave
 * Set the class .focusedBorder with onFocus
 * Remove the class .focusedBorder with onBlur
 * Filter the list in the RestaurantView with onChange
 */

const SearchField = ({ filterDishes }) => {
  const [searchClasses, setSearchClasses] = useState([styles.search]);

  // USE ME IN THE INPUT FILED
  const handleOnChange = (event) => {
    filterDishes(event.target.value);
  };

  return (
    <div>
      <input
        className={searchClasses.join(" ")}
        placeholder="Filter dishes..."
        type="text"
      />
    </div>
  );
};

export default SearchField;
