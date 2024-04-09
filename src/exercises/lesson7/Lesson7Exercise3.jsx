/**
 *  INSTRUCTIONS:
 *  It's back to the buttons again. We have our button using a state, but it's all in one component.
 *  We want to make use of reusable components, so extract a "Counter" component, and a "CounterButton" component.
 * */
import {useState} from "react"

const Lesson7Exercise3 = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 2)
  }

  return (
    <>
      <h3>Lesson 7 Exercise 3</h3>
      <h1>
        Counter: {count}
      </h1>
      <button onClick={incrementCount}>Increase Count by two</button>
    </>
  )
}

export default Lesson7Exercise3
