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

  const handleOnChange = (event) => {
    // call the filterDishes function from the parent component
    filterDishes(event.target.value);
  };

  const toggleMouseEnter = () => {
    // check if the class is already in the array
    if (searchClasses.includes(styles.mouseEnterBorder)) {
      // remove the class from the array if it is already there
      setSearchClasses(
        searchClasses.filter((c) => c !== styles.mouseEnterBorder)
      );

      return; // exit the function
    } else {
      // add the class to the array if it is not there
      setSearchClasses([...searchClasses, styles.mouseEnterBorder]);
    }
  };

  const toggleFocus = () => {
    // check if the class is already in the array
    if (searchClasses.includes(styles.focusedBorder)) {
      // remove the class from the array if it is already there
      setSearchClasses(searchClasses.filter((c) => c !== styles.focusedBorder));

      return; // exit the function
    } else {
      // add the class to the array if it is not there
      setSearchClasses([...searchClasses, styles.focusedBorder]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={searchClasses.join(" ")}
        placeholder="Filter dishes..."
        type="text"
        onChange={handleOnChange}
        onMouseEnter={toggleMouseEnter}
        onMouseLeave={toggleMouseEnter}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </div>
  );
};

export default SearchField;
