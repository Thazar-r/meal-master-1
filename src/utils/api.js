const API_URL = 'http://localhost:3000';

const fetchFromApi = async (endpoint, options = {}) => {
  const response = await fetch(`${API_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getRecipes = async () => {
  return fetchFromApi('recipes');
};

export const getRecipeById = async (id) => {
  return fetchFromApi(`recipes/${id}`);
};

export const getCategories = async () => {
  return fetchFromApi('categories');
};

export const createRecipe = async (recipe) => {
  return fetchFromApi('recipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe),
  });
};

export const updateRecipe = async (id, updates) => {
  return fetchFromApi(`recipes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
};

export const deleteRecipe = async (id) => {
  return fetchFromApi(`recipes/${id}`, { method: 'DELETE' });
};

export const getFeedback = async () => {
  return fetchFromApi('feedback');
};

export const submitFeedback = async (feedback) => {
  return fetchFromApi('feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(feedback),
  });
};
