import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import FeedbackForm from './components/FeedbackForm';
import Calendar from './components/Calendar';
import PrivateRoute from './utils/PrivateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <PrivateRoute path="/home" exact component={Home} />
      <PrivateRoute path="/recipes" exact component={RecipeList} />
      <PrivateRoute path="/recipe/:id" exact component={RecipeDetail} />
      <PrivateRoute path="/feedback" exact component={FeedbackForm} />
      <PrivateRoute path="/calendar" exact component={Calendar} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Router>
);

export default App;
