import "./RestaurantView.css";

import { useState } from "react";
import Cart from "../components/Cart.jsx";
import MenuItem from "../components/MenuItem.jsx";
import dishes from "../mocks/dishes.json";

const RestaurantViewWithMock = () => {
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
      <h1 style={{ textAlign: "center" }}>ReDI React Restaurant</h1>
      <Cart
        selectedItems={selectedItems}
        onClear={() => setSelectedItems([])}
      />
      <div className="menu">
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
      {selectedItems.length === 3 && <h4>🎉 You unlocked a 10% discount!</h4>}
    </>
  );
};

export default RestaurantViewWithMock;
