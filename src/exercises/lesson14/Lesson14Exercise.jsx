import styles from "../../examples/lesson14/Lesson14Example.module.css";
import { useState } from "react";

/**
 * Lesson 14 Exercise: API Query integration
 * 
 * 1. Create a useEffect that fires every time the search input changes
 * 2. Make a fetch call to the meal API to get results
 * 3. Display the results
 * 4. BONUS: Handle the case where the input changes quickly and we only want the latest results
 * 5. EXTRA BONUS (Advanced): Debounce the function so it doesn't fire when typing quickly: https://www.developerway.com/posts/debouncing-in-react
 *
 * Example fetch:
 * const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
 */

/**
 * 
 * Lesson 14 Homework:
 * 1. Refactor RestaurantView.jsx to turn the Filter into a Search component using API data fetches
 * 2. Note all the possible URLs to use as a fetch https://www.themealdb.com/api.php
 */

export const Lesson14Exercise = () => {
  const [searchInput, setSearchInput] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className={styles["lesson14-bg"]}>
      <label>Search Input:</label>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <p>Results: ({results?.length ?? 0} total)</p>
    <ul>
        {/**
         * Results go here
         */}
    </ul>
    </div>
  );
};

export default Lesson14Exercise;
