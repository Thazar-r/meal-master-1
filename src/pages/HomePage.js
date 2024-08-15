import React from 'react';
import RecipeList from '../components/RecipeList'; // Ensure this path is correct
import RecipeSearch from '../components/RecipeSearch'; // Ensure this path is correct

const HomePage = () => {
  const [recipes] = React.useState([]); // Removed setRecipes as it's not used

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
