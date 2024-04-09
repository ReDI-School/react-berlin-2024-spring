/**
 *  SOLUTION:
 *  This looks like it should be incrementing the counter every time we click the button, but it isn't.
 *  Fix the bug so that when you click the "Increase Count" button, the counter increases by one.
 * */
import {useState} from "react"

const Lesson7Exercise1Solution = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)

    // setCount((prevState) => prevState + 1)
    // This would actually be a more accurate solution when dealing with more complex  situations.
    // Read more about it here: https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
  }

  return (
    <>
      <h3>Lesson 7 Exercise 1 (Solution)</h3>
      <h1>
        Counter: {count}
      </h1>
      <button onClick={incrementCount}>Increase Count</button>
    </>
  )
}

export default Lesson7Exercise1Solution
