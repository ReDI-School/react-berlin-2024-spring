/**
 *  INSTRUCTIONS:
 *  Build a small app that renders the information coming from the API https://restcountries.com/v3.1/all.
 * Build a component in which you should make a request to the API and render a list of elements.
 *  Each element should represent every single country , in the shape of a card (you can reuse the style used for <MenuItem/>)
 * Every Card should contain an <h3/> with the name of the country, and an <img/> with the flag. See example in the file inside this folder.
 * OPTONALLY: under the Flag, render the follwing information: Symbol of the currency (or currencies) of that country, and the capital (or capitals)
 * */

import { useEffect } from "react";
import { useState } from "react";
import styles from "./Lesson13Exercise.module.css";
import CountryCard from "./CountryCard";

const Lesson13Exercise = () => {
  const URL = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        setIsLoading(false);
        setErrorMessage("something went wrong");
        throw new Error("something went wrong");
      }
      const result = await response.json();
      setCountries(result);
      setIsLoading(false);
      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
      setIsLoading(false);
      setErrorMessage("Problems with the server...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        {countries &&
          countries.map((country, i) => {
            return <CountryCard country={country} key={i} />;
          })}
      </div>
      {isLoading && <h1>....LOADING...</h1>}
      {errorMessage && <h2>{errorMessage}</h2>}
    </div>
  );
};

export default Lesson13Exercise;
