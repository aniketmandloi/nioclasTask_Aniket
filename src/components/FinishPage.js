import React from 'react';

function FinishPage({ userName, totalTestTime, questionDetails }) {
  // Render the Finish Page UI
  return (
    <div>
      <h1>Test Completed</h1>
      <div>
        <p>Name: {userName}</p>
        <p>Total Time Taken: {totalTestTime} minutes</p>
      </div>
      <div>
        <h2>Questions and Time Taken:</h2>
        <ul>
          {questionDetails.map((question, index) => (
            <li key={index}>
              QuestionID: {question.id} - Time Taken: {question.timeTaken} seconds
            </li>
          ))}
        </ul>
      </div>
      {/* You can add any additional information or a button to navigate elsewhere */}
    </div>
  );
}

export default FinishPage;
