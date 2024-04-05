import React from "react";
import Text from "./Text";

function FavMeal({ myMeal, yummy, randomThing }) {
  // console.log("props inside FavMeal", props);
  const yummyText = "yummy!!!";
  const lecker = () => {
    yummy(yummyText);

    // console.log("button clicked!!!");
  };
  return (
    <div>
      <h2>
        {" "}
        {myMeal} and random thing: {randomThing}
      </h2>

      <button onClick={lecker}>like it?</button>
      <Text myMeal={myMeal} />
    </div>
  );
}

export default FavMeal;
