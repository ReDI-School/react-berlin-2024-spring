import React from "react";
import "./App.css";

import FavMeals from "./pages/FavMeals";
import Counter from "./pages/Counter";
import CharacterCounter from "./homework/CharacterCounter";
import FilterFavMusicBands from "./homework/FilterFavMusicBands";

function App() {
  return (
    <div>
      <h1 className="blue">React Basics</h1>
      {/* <FavMeals /> */}
      <Counter />

      {/* //+ Homework  - Uncomment the component below to see it in your screen*/}
      {/* <CharacterCounter /> */}

      {/* //? try this one below only if you are looking for a challenge */}
      {/* <FilterFavMusicBands /> */}
    </div>
  );
}

export default App;
