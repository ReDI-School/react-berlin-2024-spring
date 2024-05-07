import React, { useEffect, useState } from "react";

const DataFetch = () => {
  console.log("%c component rendered", "color:green");
  const [photos, setPhotos] = useState([]);
  //FETCH

  //PROMISES

  //! fetch using fetch().then().catch()
  //   const fetchData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => {
  //         console.log("response :>> ", response);
  //         return response.json();
  //       })
  //       .then((result) => {
  //         console.log("result :>> ", result);
  //          setPhotos(data);
  //       })
  //       .catch((error) => {
  //         console.log("error :>> ", error.message);
  //       });
  //   };

  const fetchDataAsync = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      console.log("response :>> ", response);
      const data = await response.json();
      setPhotos(data);
      console.log("data :>> ", data);
    } catch (error) {
      console.log("error inside catch block :>> ", error.message);
    }
  };

  //? We don't call the functions directly in the component.
  //   fetchData();
  //   fetchDataAsync();

  useEffect(() => {
    console.log("%c useEffect run", "color:red");

    fetchDataAsync();
  }, []);

  return (
    <div>
      {console.log("%c JSX rendered", "color:orange")}
      <h1>Data Fetch</h1>
      <button onClick={fetchDataAsync}>Get Data</button>
      {console.log("photos array in JSX", photos)}

      {photos.map((photo) => {
        return (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        );
      })}
    </div>
  );
};

export default DataFetch;
