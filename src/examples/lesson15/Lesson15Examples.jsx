import styles from "./Lesson15Examples.module.css";

const Lesson15Examples = () => {
  const fullWidthStyles = [styles.inputWrapper, styles.fullWidth].join(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <h1>Contact form</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="name">Name:</label>

          <input type="text" id="name" name="name" />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email:</label>

          <input type="email" id="email" name="email" />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="country">Country:</label>

          <select id="country" name="country">
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <div />

        <div className={fullWidthStyles}>
          <label htmlFor="message">Message:</label>

          <textarea id="message" name="message" rows="4" />
        </div>

        <div className={fullWidthStyles}>
          <legend>Do you agree to the terms?</legend>
          <label>
            <input type="radio" name="terms" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="terms" value="no" /> No
          </label>
        </div>

        <div className={fullWidthStyles}>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Lesson15Examples;
