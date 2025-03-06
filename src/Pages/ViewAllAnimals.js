import React, { useEffect, useState } from 'react';

import Header from '../Components/Header';
import AnimalCard from '../Components/AnimalCard';

import '../App.css';

const ViewAllAnimals = () => {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter animals based on search query (case insensitive)
  const filteredAnimals = jsonData?.filter((animal) =>
    animal.Name.toLowerCase().includes(searchQuery.toLowerCase()) // Assuming each animal has a 'name' property
  );


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
      <p className='emoji-animals'>🦒 🐘 🦁 🐧 🐸 🐙 🐳 🐯 🦋 🐅</p>
      <input 
        type="text"
        placeholder='Search Animals...'
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
        />
      <div className="cardAnimalsContainer">
        {filteredAnimals && filteredAnimals.map((animal) => (
          <AnimalCard showdetails key={animal.ID} animal={animal} />
        ))}
      </div>
    </>
  );
};

export default ViewAllAnimals;