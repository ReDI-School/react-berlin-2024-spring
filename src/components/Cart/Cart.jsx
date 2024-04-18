import styles from "./Cart.module.css";

const Cart = ({ selectedItems, onClear }) => {
  return (
    <div className={styles.cart}>
      <h3>Your Cart:</h3>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {selectedItems.length > 0 && <button onClick={onClear}>CLEAR</button>}
    </div>
  );
};

export default Cart;