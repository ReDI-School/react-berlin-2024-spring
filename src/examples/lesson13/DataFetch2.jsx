import { useEffect, useState } from "react";

function DataFetch2() {
  //! 3rd) create a state variable to store the information from the API

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  //! 1) build a fetch function

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("response :>> ", response);

      if (!response.ok) {
        setIsError(true);
        throw new Error("...something very bad happened...");
      }
      const result = await response.json();
      console.log("result :>> ", result);

      //! 4rd) set the state variable with the information we get from the API
      setUsers(result);
      //   setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log("error :>> ", error);
    } finally {
      setIsLoading(false);
    }
  };

  //! 2nd) create a useEffect to call the function

  useEffect(() => {
    fetchUsers();
  }, []);

  //! 6th Error Handling
  // we use the conditional rendering of the variables isError and isLoading to show or hide an error message or a loader.
  return (
    <div>
      <h1>DataFetch2</h1>
      {/*   //! 5th) map over the state variable in jsx and return a HTML tag with a property (name, title, ...) */}
      {users &&
        users.map((user) => {
          return <h3 key={user.id}>{user.name}</h3>;
        })}
      {isLoading && <h1>...LOADING....</h1>}
      {isError && <h1>...SOMETHING WENT WRONG...</h1>}
    </div>
  );
}

export default DataFetch2;
