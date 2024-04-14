import './styles.css';
import { useState, Fragment } from 'react';

const MAX_LENGTH = 10;

const Lesson8Solution = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleClear = () => {
    setPassword('');
  };

  return (
    <Fragment>
      <div className="flex-container">
        <input
          type={isVisible ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          maxLength={MAX_LENGTH}
          placeholder="enter password"
        />
        <button onClick={toggleVisibility}>
          {isVisible ? 'HIDE' : 'SHOW'}
        </button>
        <button disabled={password.length === 0} onClick={handleClear}>
          CLEAR
        </button>
      </div>
      {password.length >= MAX_LENGTH && (
        <p className="warning">🚨 Must be no more than 10 characters!</p>
      )}
    </Fragment>
  );
};

export default Lesson8Solution;
