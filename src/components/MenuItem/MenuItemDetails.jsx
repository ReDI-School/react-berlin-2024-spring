import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./MenuItem.module.css";


const MenuItemDetails = () => {
  // Hold a temporary value for meal until we fetch the real data. Show a loading message while it's null
  const [meal, setMeal] = useState(null);
  // Hold a boolean value for error in case we run into an error while fetching to give the user feedback and redirect back home
  const [error, setError] = useState(false);

  // Hooks from react-router-dom
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    // Here is another API endpoint from themealdb.com where we can pass an individual ID
    // This is important to be able to load this route from a link by pasting in the direct URL
    // Rather than passing down props, so that someone can access our website directly, e.g. https://oursite.com/meals/52977
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => r.json())
      .then((response) => {
        if (response?.meals?.[0]) {
          setMeal(response.meals[0]);
        } else {
          throw new Error("No results");
        }
      })
      .catch((e) => {
        console.error(e);
        setError(true);
        // Show the error for 3 seconds and then redirect back home
        setTimeout(() => {
          navigate("/");
        }, 3000);
      });
  }, [navigate, id]);

  if (error) {
    return (
      <div className={styles.menuItemDetail}>
        <h2>
          An error occurred getting meal details. Redirecting to homepage.
        </h2>
      </div>
    );
  }

  if (meal === null) {
    return (
      <div className={styles.menuItemDetail}>
        <h2>Loading...</h2>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className={styles.menuItemDetail}>
      <Button onClick={() => navigate("/")}>return Home</Button>
      <h1>{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className={styles.image}
      />
      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Area:</strong> {meal.strArea}
      </p>
      <p>
        <strong>Tags:</strong> {meal.strTags}
      </p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{meal.strInstructions}</p>
      {meal.strYoutube && (
        <div>
          <h2>Video</h2>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </div>
      )}
      {meal.strSource && (
        <div>
          <h2>Source</h2>
          <a href={meal.strSource} target="_blank" rel="noopener noreferrer">
            Original Recipe
          </a>
        </div>
      )}
    </div>
  );
};

/**
 * Here is a sample API response from themealdb for meal details
 * 
 * {
    "idMeal": "52977",
    "strMeal": "Corba",
    "strDrinkAlternate": null,
    "strCategory": "Side",
    "strArea": "Turkish",
    "strInstructions": "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later\r\nIn a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
    "strTags": "Soup",
    "strYoutube": "https://www.youtube.com/watch?v=VVnZd8A84z4",
    "strIngredient1": "Lentils",
    "strIngredient2": "Onion",
    "strIngredient3": "Carrots",
    "strIngredient4": "Tomato Puree",
    "strIngredient5": "Cumin",
    "strIngredient6": "Paprika",
    "strIngredient7": "Mint",
    "strIngredient8": "Thyme",
    "strIngredient9": "Black Pepper",
    "strIngredient10": "Red Pepper Flakes",
    "strIngredient11": "Vegetable Stock",
    "strIngredient12": "Water",
    "strIngredient13": "Sea Salt",
    "strIngredient14": "",
    "strIngredient15": "",
    "strIngredient16": "",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "1 cup ",
    "strMeasure2": "1 large",
    "strMeasure3": "1 large",
    "strMeasure4": "1 tbs",
    "strMeasure5": "2 tsp",
    "strMeasure6": "1 tsp ",
    "strMeasure7": "1/2 tsp",
    "strMeasure8": "1/2 tsp",
    "strMeasure9": "1/4 tsp",
    "strMeasure10": "1/4 tsp",
    "strMeasure11": "4 cups ",
    "strMeasure12": "1 cup ",
    "strMeasure13": "Pinch",
    "strMeasure14": " ",
    "strMeasure15": " ",
    "strMeasure16": " ",
    "strMeasure17": " ",
    "strMeasure18": " ",
    "strMeasure19": " ",
    "strMeasure20": " ",
    "strSource": "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
    }
 */

export default MenuItemDetails;
