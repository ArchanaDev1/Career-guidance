import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

const ResultPage = ({ totalQuestions, correctAnswers, showPopup }) => {
  // State variables
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);
  const percentage = (correctAnswers / totalQuestions) * 100;

  const navigate = useNavigate();

  useEffect(() => {
    // Count-up animation for score
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < correctAnswers) {
        setScore((prevScore) => prevScore + 1);
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);

    return () => clearInterval(interval);
  }, [correctAnswers]);

  const handleRetakeQuiz = () => {
    // Reset the score and refresh the page (simulating retake)
    setScore(0);
    window.location.reload();
  };

  const handleShareResult = () => {
    alert("Share functionality is coming soon!");
  };

  return (
    <div className="result-page">
      {showConfetti && <Confetti />}

      <div className="result-card">
        <h1>Result</h1>

        <div className="score-box">
          <h2 className="score-text">You Scored</h2>
          <div className="score">
            <span>{score}</span> / {totalQuestions}
          </div>
          <h3 className="percentage">Your Score: {percentage.toFixed(2)}%</h3>
        </div>

        {percentage >= 60 ? (
          <p className="message success">🎉 Congratulations! You Passed! 🎉</p>
        ) : (
          <p className="message fail">😞 Better Luck Next Time! 😞</p>
        )}

        {percentage >= 60 ? (
          <div className="buttons">
            <button className="btn" onClick={showPopup}>Submit Application</button>
          </div>
        ) : 
        <div className="buttons">
            <button className="btn" onClick={()=>navigate('/')}>Try Later</button>
          </div>
        }
      </div>
    </div>
  );
};

export default ResultPage;
