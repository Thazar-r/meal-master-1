import React from 'react';
import '../styles/HomePage.css'; // Adjust the path as necessary
import RecipeList from '../components/RecipeList'; // Adjust the path as necessary
import RecipeSearch from '../components/RecipeSearch'; // Adjust the path as necessary

const HomePage = () => {
  // Sample state for recipes - replace with actual data fetching logic
  const [recipes, setRecipes] = React.useState([]);

  const handleSearch = (query) => {
    // Logic for searching recipes
    console.log('Searching for:', query);
  };

  return (
    <div className="home-page">
      <h1>Meal-Master</h1>
      <RecipeSearch onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
