import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FeedbackForm from './components/FeedbackForm';
import Calendar from './components/Calendar'; 
import PrivateRoute from './utils/PrivateRoute';

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
