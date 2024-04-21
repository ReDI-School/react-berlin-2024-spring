import { useState } from "react";
import Cart from "../components/Cart/Cart.jsx";
import MenuItem from "../components/MenuItem/MenuItem.jsx";
import rawDishes from "../mocks/dishes.json";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";
import SearchField from "../components/SearchField/SearchField.jsx";
import DiscountPopUp from "../components/DiscountPopUp/DiscountPopUp.jsx";

const RestaurantView = () => {
  const [dishes, setDishes] = useState(rawDishes);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleMenuClick = (name) => {
    let nextItems;

    if (selectedItems.includes(name)) {
      nextItems = selectedItems.filter((item) => item !== name);
    } else {
      nextItems = [...selectedItems, name];
    }

    setSelectedItems(nextItems);
  };

  const handleDishesFilter = (query) => {
    const filteredDishes = rawDishes.filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    );

    setDishes(filteredDishes);
  };

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
                key={dish.name}
                name={dish.name}
                image={dish.image}
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
