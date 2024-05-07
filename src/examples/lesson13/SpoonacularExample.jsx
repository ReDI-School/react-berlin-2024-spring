import { useEffect } from "react";

function SpoonacularExample() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
          import.meta.env.VITE_API_KEY
        }&ingredients=flower,+flour,+sugar&number=10`
      );
      if (!response.ok) {
        throw new Error("something went really wrong!!");
      }
      const result = await response.json();

      console.log("result :>> ", result);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>SpoonacularExample</div>;
}

export default SpoonacularExample;
