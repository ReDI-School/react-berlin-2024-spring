import styles from "./Lesson14Example.module.css";
import { useState } from "react";

export const Lesson14Example = () => {
  const [textInputValue, setTextInputValue] = useState("Lesson14");
  const [numericInputValue, setNumericInputValue] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const [incrementedNumber, setIncrementedNumber] = useState(0);
  
  // Example no dependencies -- Fires every time the component is rendered
  // useEffect(() => {});

  // Example empty dependency array -- Fires only once the first time the component is rendered
  // useEffect...

  // Example dependency array with values -- Fires only when the dependencies change
  // useEffect..

  // Example with cleanup function
  // useEffect..

  return (
    <div className={styles["lesson14-bg"]}>
      <h2>
        React.useEffect - The side effect hook
        <a href="https://react.dev/reference/react/useEffect" target="_blank">
          (Documentation)
        </a>
      </h2>
      <p>useEffect is a hook (function) provided by React. It can be used to connect React state/props to non-React systems.</p>
      <p>The hook is composed of three separate parts:</p>
      <ul>
        <li>Function body (cannot be async!)</li>
        <li>Cleanup function from return (Optional)</li>
        <li>Dependency array (Optional)</li>
      </ul>
      <pre>{`
  useEffect(() => {
      // Code here is run when var1, var2, etc. changes
      return () => {
          // Cleanup function, run the next time the useEffect is fired
      };
  }, [var1, var2, ...]); // Dependencies - React prop or state value
    
    `}</pre>

      <label>Text Input:</label>
      <input
        type="text"
        value={textInputValue}
        onChange={(e) => setTextInputValue(e.target.value)}
      />

      <label>Numeric Input:</label>
      <input
        type="number"
        value={numericInputValue}
        onChange={(e) => setNumericInputValue(+e.target.value)}
      />
      <p>Change count: {changeCount}</p>
      <p>Incremented number: {incrementedNumber}</p>
    </div>
  );
};

export default Lesson14Example;
