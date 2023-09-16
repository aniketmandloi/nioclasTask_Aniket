// TestPage.js
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import QuestionComponent from './QuestionComponent';

function TestPage() {
  const location = useLocation();
  const history = useHistory();
  const userName = location.state?.userName || 'User'; // Default to 'User' if userName is not provided
  const selectedQuestions = location.state?.selectedQuestions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Check if the user has completed all questions
    if (currentQuestionIndex >= selectedQuestions.length) {
      // Redirect to the FinishPage when all questions are completed
      history.push('/finish');
    }
  }, [currentQuestionIndex, selectedQuestions, history]);

  const handleNextQuestion = () => {
    // Increment the currentQuestionIndex to move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <h3>Question {currentQuestionIndex + 1}</h3>
      {selectedQuestions.length > 0 && currentQuestionIndex < selectedQuestions.length ? (
        <QuestionComponent
          questionData={selectedQuestions[currentQuestionIndex].questionData}
        />
      ) : (
        <p>No questions available.</p>
      )}
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}

export default TestPage;
