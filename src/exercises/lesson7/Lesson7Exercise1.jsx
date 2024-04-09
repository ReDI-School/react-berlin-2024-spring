/**
 *  INSTRUCTIONS:
 *  This looks like it should be incrementing the counter every time we click the button, but it isn't.
 *  Fix the bug so that when you click the "Increase Count" button, the counter increases by one.
 * */

const Lesson7Exercise1 = () => {
  let count = 0
  const incrementCount = () => {
    count++
  }

  return (
    <>
      <h3>Lesson 7 Exercise 1</h3>
      <h1>
        Counter: {count}
      </h1>
      <button onClick={incrementCount}>Increase Count</button>
    </>
  )
}

export default Lesson7Exercise1
