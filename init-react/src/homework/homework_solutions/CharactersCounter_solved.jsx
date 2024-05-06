//TODO Build a characters counter.

// Build a simple character counter that lets you know how many characters you have typed inside

//? WHat you need?
// An input of type text where the user can type text
// A span/p tag where to display the amount of characters inside the input. This number should update every time we type or delete a character.

//? How to build it?

//Create a state variable to store the text typed and initialise it
//Define Event Handler Function:. This function will update the text state with the value entered in the textarea.
//Display count: in JSX, create a tag which displays the number of characters of the string stored in the state variable

//! Bonus Point:
//your input accepts a character limit of 50. Display a message to the user when the limit is reached

import { useState } from "react";

function CharacterCounter_solved() {
  const [text, setText] = useState("");

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleTextareaChange} />
      <p>Character count: {text.length}</p>
      {text.length > 50 && (
        <p style={{ color: "red" }}>...character limit reached...</p>
      )}
    </div>
  );
}

export default CharacterCounter_solved;
