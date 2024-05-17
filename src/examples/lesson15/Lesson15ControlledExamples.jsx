import { useState } from "react";
import styles from "./Lesson15Examples.module.css";

const Lesson15ControlledExamples = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
    terms: "",
  });

  const fullWidthStyles = [styles.inputWrapper, styles.fullWidth].join(" ");

  const handleSubmit = (event) => {
    // This function is used to prevent the default form submission behavior
    event.preventDefault();

    const data = {
      ...formFields,
    };

    console.log(data);
  };

  const handleOnChange = (event) => {
    setFormFields((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Contact form</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Name:</label>

          <input
            type="text"
            id="name"
            name="name"
            value={formFields.name}
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            value={formFields.email}
            onChange={handleOnChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="country">Country:</label>

          <select
            id="country"
            name="country"
            value={formFields.country}
            onChange={handleOnChange}
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <div />

        <div className={fullWidthStyles}>
          <label htmlFor="message">Message:</label>

          <textarea
            id="message"
            name="message"
            rows="4"
            value={formFields.message}
            onChange={handleOnChange}
          />
        </div>

        <div className={fullWidthStyles}>
          <legend>Do you agree to the terms?</legend>
          <label>
            <input
              type="radio"
              name="terms"
              value="yes"
              checked={formFields.terms === "yes"}
              onChange={handleOnChange}
            />{" "}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="terms"
              value="no"
              checked={formFields.terms === "no"}
              onChange={handleOnChange}
            />{" "}
            No
          </label>
        </div>

        <div className={fullWidthStyles}>
          <button
            className={styles.button}
            type="submit"
            disabled={formFields.terms === "no" || formFields.terms === ""}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Lesson15ControlledExamples;
