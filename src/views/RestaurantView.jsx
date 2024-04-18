import { useState } from "react";
import Cart from "../components/Cart/Cart.jsx";
import MenuItem from "../components/MenuItem/MenuItem.jsx";
import dishes from "../mocks/dishes.json";

import styles from "./RestaurantView.module.css";
import NavBar from "../components/NavBar/NavBar.jsx";

const RestaurantView = () => {
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

  return (
    <>
      <NavBar>
        <h1>ReDI React Restaurant</h1>

        <Cart
          selectedItems={selectedItems}
          onClear={() => setSelectedItems([])}
        />
      </NavBar>

      <div className={styles.restaurantWrapper}>
        <div className={styles.menu}>
          {dishes.map((dish) => (
            <MenuItem
              key={dish.name}
              name={dish.name}
              image={dish.image}
              onClick={handleMenuClick}
              isSelected={selectedItems.includes(dish.name)}
            />
          ))}
        </div>
        {selectedItems.length >= 3 && <h4>🎉 You unlocked a 10% discount!</h4>}
      </div>
    </>
  );
};

export default RestaurantView;
