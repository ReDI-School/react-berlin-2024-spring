import './RestaruantView.css'
import spaghettiImage from "../assets/spaghetti.jpg"
import lasagnaImage from "../assets/lasagna.jpg"
import risottoImage from "../assets/risotto.jpg"
import {useState} from "react";
import Cart from "../components/Cart.jsx";
import MenuItem from "../components/MenuItem.jsx";

const RestaurantView = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("empty")

  const onMenuItemClicked = (name) => {
    setSelectedMenuItem(name)
  }

  return (
    <>
      <h1>
        REDI React Restaurant
      </h1>
      <Cart selectedMenuItem={selectedMenuItem}/>
      <div className="menu">
        <MenuItem name="Spaghetti" image={spaghettiImage} onClick={onMenuItemClicked}/>
        <MenuItem name="Lasagna" image={lasagnaImage} onClick={onMenuItemClicked}/>
        <MenuItem name="Risotto" image={risottoImage} onClick={onMenuItemClicked}/>
      </div>
    </>
  )
}

export default RestaurantView
