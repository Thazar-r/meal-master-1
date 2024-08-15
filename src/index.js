import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Import global styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import React Router

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with Router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
