import './RestaruantView.css'
import spaghettiImage from "../assets/spaghetti.jpg"
import lasagnaImage from "../assets/lasagna.jpg"
import risottoImage from "../assets/risotto.jpg"

const RestaurantView = () => {
  const selectedMenuItem = "empty"

  return (
    <>
      <h1>
        REDI React Restaurant
      </h1>
      <div className="cart">
        Your Cart: {selectedMenuItem}
      </div>
      <div className="menu">
        <li className="menuItem">
          <h3>Spaghetti</h3>
          <img src={spaghettiImage} alt="Spaghetti"/>
          <button>Add To Cart</button>
        </li>
        <li className="menuItem">
          <h3>Lasagna</h3>
          <img src={lasagnaImage} alt="Lasagna"/>
          <button>Add To Cart</button>
        </li>
        <li className="menuItem">
          <h3>Risotto</h3>
          <img src={risottoImage} alt="Risotto"/>
          <button>Add To Cart</button>
        </li>
      </div>
    </>
  )
}

export default RestaurantView
