import React, { useEffect, useState } from 'react';

import Header from '../Components/Header';
import AnimalCard from '../Components/AnimalCard';

import '../App.css';

const ViewAllAnimals = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        return response.json();
      })
      .then((data) => {
        const dataAnimals = data.animals;
        setJsonData(dataAnimals);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <br />
      <p> View All Animals!</p>
      <br />
      <div className="cardAnimalsContainer">
        {jsonData && jsonData.map((animal) => (
          <AnimalCard showdetails key={animal.ID} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default ViewAllAnimals;