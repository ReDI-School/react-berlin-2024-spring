/**
 * INSTRUCTIONS:
 *
 * 1. Extract the <button> element into its own component called `Button`.
 * 2. Move the `Button` component into a new file called `Button.jsx` in a new folder called `Button`.
 * 3. Import the `Button` component into this file.
 * 4. Get the styles from the button in the `RestaurantView.css` file and move them to
 * the `Button.module.css` file, inside the same folder as the `Button.jsx` file.
 * 5. implement the css module in the `Button` component.
 */

const MenuItem = ({ name, image, onClick, isSelected }) => {
  return (
    <div className="menuItem">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <button
        className={isSelected ? "selected" : ""}
        onClick={() => onClick(name)}
      >
        {isSelected ? "Remove From Cart" : "Add To Cart"}
      </button>
    </div>
  );
};

export default MenuItem;
