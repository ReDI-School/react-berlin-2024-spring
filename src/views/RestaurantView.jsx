import './RestaruantView.css'
import spaghettiImage from "../assets/spaghetti.jpg"
import lasagnaImage from "../assets/lasagna.jpg"
import risottoImage from "../assets/risotto.jpg"

function RestaurantView() {
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
          <img src={spaghettiImage} className="logo react" alt="React logo" />
          <button>Add To Cart</button>
        </li>
        <li className="menuItem">
          <h3>Lasagna</h3>
          <img src={lasagnaImage} className="logo react" alt="React logo" />
          <button>Add To Cart</button>
        </li>
        <li className="menuItem">
          <h3>Risotto</h3>
          <img src={risottoImage} className="logo react" alt="React logo" />
          <button>Add To Cart</button>
        </li>
      </div>
    </>
  )
}

export default RestaurantView
