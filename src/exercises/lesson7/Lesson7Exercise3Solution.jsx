/**
 *  SOLUTION:
 *
 *  We've created two new components. We included them in this file for simplicity, but if they were larger components
 *  or used elsewhere you could put them in their own file in the /components folder.
 *
 *  The Counter component receives a parameter "count" to display the current count value.
 *  The CounterButton component receives a function which it calls when the button is clicked.
 *
 *  By passing these functions (which we often call "callbacks") as props, we can have children components like
 *  the CounterButton, impact the state of parent objects (the Lesson7Exercise3Solution component).
 *
 *  Check out https://react.dev/learn/passing-props-to-a-component for more info.
 * */
import {useState} from "react"

const Counter = ({count}) => {
  return <h1>Counter: {count} </h1>
}

const CounterButton = ({onButtonClick}) => {
  return <button onClick={onButtonClick}>Increase Count by two</button>
}

const Lesson7Exercise3Solution = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 2)
  }

  return (
    <>
      <h3>Lesson 7 Exercise 3 (Solution)</h3>
      <Counter count={count}/>
      <CounterButton onButtonClick={incrementCount}/>
    </>
  )
}

export default Lesson7Exercise3Solution
