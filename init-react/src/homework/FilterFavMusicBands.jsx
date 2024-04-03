//TODO Build a Search Filter.

//Build a component that renders a list of your favorite music bands. Build a search filter. When the user types some characters in it, only the music bands containing those characters should be displayed.

//? WHat we need?
//An input to type the search
// list of ul elements to display the bands names

//? How to build it?
//A variable (state variable? regular variable?) that stores our favorite bands.
//A handler function that captures what the user types
//Our logic to filter the array of bands using the user input (think about the .filter() method), and re-render the component so we update the list of rendered bands

//! Bonus Point:
// build a button that changes the theme of the app (changing the color of the background is enough) to a lighter color when we click, and comes back to the actual color when we click again

function FilterFavMusicBands() {
  return (
    <div>
      <h1>My Favorite Music Bands</h1>
    </div>
  );
}

export default FilterFavMusicBands;
