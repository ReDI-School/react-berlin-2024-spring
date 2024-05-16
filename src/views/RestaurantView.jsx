import { useEffect, useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import Cart from "../components/Cart/Cart.jsx";
import MenuItem from "../components/MenuItem/MenuItem.jsx";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchField from "../components/SearchField/SearchField.jsx";
import DiscountPopUp from "../components/DiscountPopUp/DiscountPopUp.jsx";

const RestaurantView = () => {
  // const [dishes, setDishes] = useState(rawDishes);
  const [dishes, setDishes] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [search, setSearch] = useState("a");

  const handleMenuClick = (name) => {
    let nextItems;

    if (selectedItems.includes(name)) {
      nextItems = selectedItems.filter((item) => item !== name);
    } else {
      nextItems = [...selectedItems, name];
    }

    setSelectedItems(nextItems);
  };

  const handleDishesFilter = (searchQuery) => {
    setSearch(searchQuery);
  };

  // useDebouncedCallback takes a function as a parameter and as the second parameter
  // the number of milliseconds it should wait until it is actually called so a user
  // can type freely and as long as they are typing a letter quicker than 500ms, the function won't fire yet.
  // This is to optimize user experience and communication with the server
  const debouncedEffectHook = useDebouncedCallback(() => {
    let currentEffect = true;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    ).then(res => {
      if (!res.ok) {
        return { meals: null };
      }
      return res.json();
    }).then(result => {
      if (!currentEffect) {
        return;
      }
      // The ?? operator turns 'undefined' or 'null' values into a preferred default value on the right side
      // We know that result.meals can be null if there are no results, so in that case, we provide an empty array for safety
      setDishes(result.meals ?? []);
    }).catch(() => {
      if (!currentEffect) {
        return;
      }
      setDishes([]);
    })

    // This cleanup function is to prevent multiple API calls coming back out of sequence and setting the value of our dishes list.
    // Example:
    // 1. First search query is pizza -> Network request takes 5 seconds to fetch data
    // 2. In the meantime, the user types burger instead -> Network request takes 1 second and shows burgers in the list
    // 3. Then, finally, the first data fetch comes back and overwrites the results, so the search box shows 'burger'
    //    but the results show pizzas. This is called "stale data"
    return () => {
      currentEffect = false;
    }
  }, 500);

  // useEffect can take a variable that is a function and does not need to be defined as an anonymous () => {} arrow function
  // This is especially important when using more controlled techniques like debouncing
  useEffect(debouncedEffectHook, [debouncedEffectHook, search]);

  return (
    <>
      <NavBar>
        <h1>ReDI React Restaurant</h1>

        <SearchField filterDishes={handleDishesFilter} />

        <Cart
          selectedItems={selectedItems}
          onClear={() => setSelectedItems([])}
        />
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {dishes.length > 0 ? (
            dishes.map((dish) => (
              <MenuItem
                key={dish.idMeal}
                name={dish.strMeal}
                image={dish.strMealThumb}
                onClick={handleMenuClick}
                isSelected={selectedItems.includes(dish.name)}
              />
            ))
          ) : (
            <p>No dishes found :(</p>
          )}
        </div>
      </div>
      {selectedItems.length >= 3 && (
        <DiscountPopUp>
          <strong>🎉 You unlocked a 10% discount!</strong>
        </DiscountPopUp>
      )}
    </>
  );
};

export default RestaurantView;
