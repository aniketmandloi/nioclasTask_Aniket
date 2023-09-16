// LandingPage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchQuestionDetails } from '../api';

function LandingPage() {
  const [userName, setUserName] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const history = useHistory();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleQuestionSelection = async (questionID) => {
    // Fetch question details for the selected question
    try {
      const questionData = await fetchQuestionDetails(questionID);
      setSelectedQuestions((prevSelectedQuestions) => [
        ...prevSelectedQuestions,
        { questionID, questionData },
      ]);
    } catch (error) {
      console.error('Error fetching question details:', error);
    }
  };

  const handleStartTest = () => {
    if (userName.trim() === '' || selectedQuestions.length === 0) {
      alert('Please enter your name and select at least one question to start the test.');
    } else {
      // Redirect to the TestPage with user name and selectedQuestions
      history.push('/test', { userName, selectedQuestions });
    }
  };

  return (
    <div>
      <h2>Welcome to the Mathematics Test!</h2>
      <div>
        <label htmlFor="userName">Your Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={handleUserNameChange}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <h3>Select Questions for the Test:</h3>
        {/* Replace with actual question options */}
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => handleQuestionSelection('AreaUnderTheCurve_21')}
            />
            Question 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => handleQuestionSelection('BinomialTheorem_13')}
            />
            Question 2
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => handleQuestionSelection('BinomialTheorem_24')}
            />
            Question 3
          </label>
        </div>
        {/* Add more question options as needed */}
      </div>
      <button onClick={handleStartTest}>Start Test</button>
    </div>
  );
}

export default LandingPage;
