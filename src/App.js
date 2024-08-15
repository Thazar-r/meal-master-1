import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Ensure this path is correct
import SignupPage from './pages/SignupPage'; // Ensure this path is correct
import HomePage from './pages/HomePage'; // Ensure this path is correct
import RecipeList from './components/RecipeList'; // Ensure this path is correct
import RecipeDetail from './components/RecipeDetail'; // Ensure this path is correct
import FeedbackForm from './components/FeedbackForm'; // Ensure this path is correct
import Calendar from './components/Calendar'; // Ensure this path is correct
import PrivateRoute from './utils/PrivateRoute'; // Ensure this path is correct

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
      <Route path="/recipes" element={<PrivateRoute element={<RecipeList />} />} />
      <Route path="/recipe/:id" element={<PrivateRoute element={<RecipeDetail />} />} />
      <Route path="/feedback" element={<PrivateRoute element={<FeedbackForm />} />} />
      <Route path="/calendar" element={<PrivateRoute element={<Calendar />} />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

export default App;
