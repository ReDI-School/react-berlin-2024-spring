const MenuItem = ({name, image, onClick}) => {
  return (
    <li className="menuItem">
      <h3>{name}</h3>
      <img src={image} alt={name}/>
      <button onClick={() => {
        onClick(name)
      }}>Add To Cart
      </button>
    </li>
  )
}

export default MenuItem