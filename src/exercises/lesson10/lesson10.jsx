import styles from "./styles.module.css";

const lesson10 = () => {
  const handleOnChange = (event) => {
    console.log(event.target.className);
  };

  const handleOnFocus = () => {
    console.log("focused");
  };

  const handleOnBlur = ({ target }) => {
    console.log("Out of focus ->", target.value);

    if (target.value.toUpperCase() === "hallo".toUpperCase()) {
      alert("Hallo for you too!");
    }
  };

  const handleOnClick = () => {
    console.log("I got clicked");
  };

  const handleOnMouseEnter = () => {
    console.log("Mouse entered");
  };

  const handleOnMouseLeave = () => {
    console.log("Mouse left");
  };

  const handleOnChangeSelect = ({ target }) => {
    console.log(target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={styles.wrapper}>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          name="myInput"
          className={styles.input}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onClick={handleOnClick}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
          type="text"
        />

        <br />
        <br />

        <select onChange={handleOnChangeSelect}>
          <option value="hallo">Hallo</option>
          <option value="how_are_you">{"Wie geht's"}</option>
        </select>

        <br />
        <br />

        <button>Click me</button>
      </form>
    </div>
  );
};

export default lesson10;
