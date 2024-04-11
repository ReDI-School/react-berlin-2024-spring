import './RestaurantView.css';
import spaghettiImage from '../assets/spaghetti.jpg';
import lasagnaImage from '../assets/lasagna.jpg';
import risottoImage from '../assets/risotto.jpg';
import { useState } from 'react';
import Cart from '../components/Cart.jsx';
import MenuItem from '../components/MenuItem.jsx';
import Lesson8Solution from '../exercises/lesson8/Lesson8Solution';

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
  const [selectedMenuItem, setSelectedMenuItem] = useState('empty');

  const onMenuItemClicked = (name) => {
    setSelectedMenuItem(name);
  };

  return (
    <>
      <h1>ReDI React Restaurant</h1>
      <Cart selectedMenuItem={selectedMenuItem} />
      <div className="menu">
        <MenuItem
          name="Spaghetti"
          image={spaghettiImage}
          onClick={onMenuItemClicked}
        />
        <MenuItem
          name="Lasagna"
          image={lasagnaImage}
          onClick={onMenuItemClicked}
        />
        <MenuItem
          name="Risotto"
          image={risottoImage}
          onClick={onMenuItemClicked}
        />
      </div>
      <Lesson8Solution />
    </>
  );
};

export default RestaurantView;
