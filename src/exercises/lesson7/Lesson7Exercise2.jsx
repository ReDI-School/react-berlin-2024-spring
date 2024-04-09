/**
 *  INSTRUCTIONS:
 *  We have some elements here that are repeated a lot. This is bad practice, one of the primary benefits of React
 *  are the _reusable_ components.
 *
 *  Please get rid of the code duplication by creating reusable components for the squares and buttons.
 * */

const Lesson7Exercise2 = () => {

  return (
    <>
      <h3>Lesson 7 Exercise 2</h3>

      {/* Squares with hardcoded colors */}
      <div style={{width: '100px', height: '100px', backgroundColor: 'red', margin: '10px'}}/>
      <div style={{width: '100px', height: '100px', backgroundColor: 'green', margin: '10px'}}/>
      <div style={{width: '100px', height: '100px', backgroundColor: 'blue', margin: '10px'}}/>

      {/* Buttons with hardcoded alert messages */}
      <button onClick={() => alert('Button One clicked!')}>Button One</button>
      <button onClick={() => alert('Button Two clicked!')}>Button Two</button>
      <button onClick={() => alert('Button Three clicked!')}>Button Three</button>
    </>
  )
}

export default Lesson7Exercise2
