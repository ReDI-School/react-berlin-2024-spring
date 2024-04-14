import './RestaurantView.css';
import spaghettiImage from '../assets/spaghetti.jpg';
import lasagnaImage from '../assets/lasagna.jpg';
import risottoImage from '../assets/risotto.jpg';
import { useState } from 'react';
import Cart from '../components/Cart.jsx';
import MenuItem from '../components/MenuItem.jsx';

/**
 * INSTRUCTIONS:
 *
 * 1. Refactor the cart so that it can store multiple items.
 * 2. Add the ability to clear the entire cart.
 * 3. Add the ability to remove individual items from the cart. Refactor the
 * existing "Add To Cart" buttons for this purpose, do not add new buttons. The
 * buttons should change their label and background color based on whether the
 * menu is in the cart or not.
 * 4. Add a message that notifies the user about having unlocked a 10% discount
 * when the cart has 3 items. This message should only be visible when this
 * condition is met.
 */

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
      <h1 style={{ textAlign: 'center' }}>ReDI React Restaurant</h1>
      <Cart
        selectedItems={selectedItems}
        onClear={() => setSelectedItems([])}
      />
      <div className="menu">
        <MenuItem
          name="Spaghetti"
          image={spaghettiImage}
          onClick={handleMenuClick}
          isSelected={selectedItems.includes('Spaghetti')}
        />
        <MenuItem
          name="Lasagna"
          image={lasagnaImage}
          onClick={handleMenuClick}
          isSelected={selectedItems.includes('Lasagna')}
        />
        <MenuItem
          name="Risotto"
          image={risottoImage}
          onClick={handleMenuClick}
          isSelected={selectedItems.includes('Risotto')}
        />
      </div>
      {selectedItems.length === 3 && <h4>🎉 You unlocked a 10% discount!</h4>}
    </>
  );
};

export default RestaurantView;
