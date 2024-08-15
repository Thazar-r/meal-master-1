import React from 'react';
import '../styles/RecipePage.css'; // Adjust the path as necessary

const RecipePage = ({ match }) => {
  // Sample data - replace with actual recipe fetching logic
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    // Fetch recipe details based on match.params.id
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${match.params.id}`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [match.params.id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
