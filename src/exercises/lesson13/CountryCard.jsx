import styles from "./Lesson13Exercise.module.css";

function CountryCard({ country }) {
  // const styles = {
  //   card: "noCard",
  //   cardImage: "noImage",
  //   content: "noContent",
  // };
  return (
    <div className={styles.card}>
      <img
        src={country.flags.png}
        alt={`flag from ${country.name.common}`}
        className={styles.cardImage}
      />
      <div className={styles.content}>
        <h4>
          <b>{country.name.common}</b>
        </h4>
        <h4>
          <b>
            {/* // A bit of error handling below. "capital" is an array, but there are some countries without the property "capital", so our code below do not break neither if capital property doesn't exist, nor if, by any chance,  there is no value for that property */}
            {country.capital?.map((capitalName) =>
              capitalName ? capitalName : "no capital name"
            )}
          </b>
        </h4>
        <h4>
          <b>
            {/* // In this case, currencies property is an object. There are several methods to loop over an object, but not all of them we can use them easily in JSX. We loop through currencies, creating and array with the key and the value (entry). 
                      Since , again, there are some countries without the property "currencies", we need to do conditional rendering so our code doesn't break*/}
            {country.currencies &&
              Object.entries(country.currencies).map((entry) => {
                let key = entry[0];
                let value = entry[1];
                return `currency symbol: ${value.symbol}`;
              })}
          </b>
        </h4>
      </div>
    </div>
  );
}

export default CountryCard;
