import "../App.css";
import FavMeal from "../components/FavMeal";

function FavMeals() {
  // JS SECTION

  const favMeals = [
    "pasta alfredo",
    "sushi",
    "gyros",
    "seafood",
    "tacos",
    "sushi",
  ];

  const yummy = (text) => {
    alert(`${text}`);
  };
  //RETURN
  //JSX
  return (
    <div>
      <h1 className="red">Hello React World</h1>

      {favMeals.map((meal, index) => {
        {
          /* return <FavMeal myFavMeal={meal} />; */
        }
        return (
          <div key={index}>
            <p>😋😋</p>
            <FavMeal myMeal={meal} randomThing="four" yummy={yummy} />;
          </div>
        );
      })}
    </div>
  );
}

export default FavMeals;
