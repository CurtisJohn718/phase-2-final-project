import React, { useEffect, useState } from 'react';

import Header from '../Components/Header';
import AnimalCard from '../Components/AnimalCard';

import '../css/Home.css';

const Home = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        const shuffledData = shuffleArray(data.animals);
        
        const fiveRandomItems = shuffledData.slice(0, 5);
        setJsonData(fiveRandomItems);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fecthing data:", error);
      });
  }, []);

  
  const shuffleArray = (array) => {
    let shuffledArray = [...array]; 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
    }
    return shuffledArray;
  };

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!jsonData) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <br />
      <div className="calendar-month">
      <h2> What's Happening</h2>
      <p>Wildlife can be found at every turn, and the Chicago Zoo & Aquarium is no exception. Come experience all our wildlife has to offer!</p>
      <br />
        <h1> March here at the Zoo</h1>
        <main>
        </main>
      </div>
      <div className="cardAnimalsContainer">
        {jsonData && jsonData.map((animal) => (
          <AnimalCard showdetails={false} key={animal.ID} animal={animal} />
        ))}
      </div>
      </>
  );
};

export default Home;