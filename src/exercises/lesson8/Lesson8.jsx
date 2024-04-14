import './styles.css';
import { Fragment } from 'react';

/**
 * INSTRUCTIONS:
 *
 * 1. Turn the input into a controlled component by adding a related component
 * state. [DOCS: https://bit.ly/3VXcaNI]
 * 2. Clicking the "SHOW" button should toggle the input text visibility, and
 * the button label should toggle between "SHOW" and "HIDE".
 * [DOCS: https://mzl.la/3Ue6HRy]
 * 3. Clicking the "CLEAR" button should clear the input. If the input is empty,
 * this button should be disabled.
 * 4. The warning message should only be displayed when the password is longer
 * than 10 characters.
 */

const Lesson8 = () => {
  return (
    <Fragment>
      <div className="flex-container">
        <input type="password" />
        <button>SHOW</button>
        <button>CLEAR</button>
      </div>
      <p className="warning">🚨 Must be no more than 10 characters!</p>
    </Fragment>
  );
};

export default Lesson8;
