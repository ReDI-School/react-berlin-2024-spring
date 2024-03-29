import React from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FavMeal from "./components/FavMeal";

function App() {
  // JS SECTION
  console.log("how many are we?");
  function greet() {
    alert("hi there");
  }
  // greet();

  const courseName = "React Course";
  const prevCourse = "JS course";

  const dinnerPreference = "Bulgogi";
  let dinnerPlan;

  // if (dinnerPreference === "Gyros") {
  //   dinnerPlan = "Let's go to an Asian Rest.";
  // } else {
  //   dinnerPlan = "Let's go to a Greek";
  // }

  const favMeals = [
    "pasta alfredo",
    "sushi",
    "gyros",
    "seafood",
    "tacos",
    "sushi",
  ];

  // * to send props upstream (from children component to parent, in this case from FavMeal to App) we need to create a function in the parent component, and send it as props to the children
  const yummy = (text) => {
    alert(`${text}`);
  };
  //RETURN
  //JSX
  return (
    <div>
      <h1 className="red">Hello React World</h1>
      {/* <h2>We are at the {prevCourse}</h2> */}
      {/* //?Conditional rendering Using If/Else inside JSX */}
      {/* {(() => {
        if (dinnerPreference === "Asian") {
          return <h2> Lets go Asian</h2>;
        } else {
          return <h2> Lets go Greek</h2>;
        }
      })()} */}
      {/* //? same Logic as before, but using the ternary operator */}
      {/* {dinnerPreference === "Bulgogi" ? (
        <h2>Lets go Asian</h2>
      ) : (
        <h2>Lets go Greek</h2>
      )}*/}

      {/* //? Conditional rendering with &&  */}
      {/* {dinnerPreference !== "Greek" && <h2>Lets go out!!</h2>} */}

      {/* //? Rendering a list of elements dynamically  */}
      {favMeals.map((meal, id) => {
        return <FavMeal text="hi" meal={meal} yummy={yummy} key={id} />;
      })}
    </div>
  );
}

export default App;
