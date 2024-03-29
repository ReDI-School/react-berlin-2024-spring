import React from "react";
import Text from "./Text";

function FavMeal({ meal, text, yummy }) {
  // ? in previous line, we are descructuring the props coming from the parent component.

  //if we do not use destructuring, we can access the different props with dot-notation, as below.
  //   console.log("props :>> ", props.meal);
  //   console.log("props :>> ", props);

  // * to send the variable below to the parent , we need to receive the function as props , yummy, and then use it in this component.
  const yummyText = "yummy!!!";
  const lecker = () => {
    yummy(yummyText);
  };
  return (
    <div>
      <h2> {meal}</h2>
      <button onClick={lecker}>like it?</button>
      <Text text={text} />
    </div>
  );
}

export default FavMeal;
