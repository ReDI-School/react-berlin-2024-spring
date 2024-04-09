/**
 *  SOLUTION:
 *  We have created new components "SolutionSquare" and "SolutionButton", in the lesson7/components folder.
 *  These components have params accepting the parts of them that vary (the background color and the button name)
 * */

import SolutionSquare from "./components/SolutionSquare.jsx"
import SolutionButton from "./components/SolutionButton.jsx"

const Lesson7Exercise2 = () => {

  return (
    <>
      <h3>Lesson 7 Exercise 2 (Solution)</h3>

      <SolutionSquare color="red"/>
      <SolutionSquare color="green"/>
      <SolutionSquare color="blue"/>

      <SolutionButton name="Button One"/>
      <SolutionButton name="Button Two"/>
      <SolutionButton name="Button Three"/>
    </>
  )
}


export default Lesson7Exercise2
