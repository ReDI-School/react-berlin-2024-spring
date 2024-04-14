const MenuItem = ({ name, image, onClick, isSelected }) => {
  return (
    <li className="menuItem">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <button
        className={isSelected ? 'selected' : ''}
        onClick={() => onClick(name)}
      >
        {isSelected ? 'Remove From Cart' : 'Add To Cart'}
      </button>
    </li>
  );
};

export default MenuItem;
