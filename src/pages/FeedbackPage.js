import React from 'react';
import '../styles/FeedbackPage.css'; // Adjust the path as necessary
import FeedbackForm from '../components/FeedbackForm'; // Adjust the path as necessary

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackPage;
