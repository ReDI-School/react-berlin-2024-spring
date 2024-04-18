import styles from "./Cart.module.css";
import shoppingCart from "./../../assets/shoppingCart.svg";

/**
 * EXERCISE
 * Make the drop-down show onClick of the Cart
 * Make the dropdown disappear onMouseLeave of the drop-down itself
 * Make the dropdown disappear when Clear the Cart
 * Show a message of "Empty Cart" when selectedItems.length === 0
 */

const Cart = ({ selectedItems, onClear }) => {
  return (
    <div className={styles.cart}>
      <img src={shoppingCart} alt="Shopping Cart" width={25} />
      <div className={styles.numberOfItems}>{selectedItems.length}</div>

      <div className={styles.dropDown}>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {selectedItems.length > 0 && <button onClick={onClear}>CLEAR</button>}
      </div>
    </div>
  );
};

export default Cart;
