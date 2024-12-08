import React from "react";

const Test = ({aptitudeQuestions, selectedAnswers, setSelectedAnswers, displayResult}) => {


  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option, // Update the selected option for the specific question
    }));
  };

  return (
    <div className="test-screen">
      <form onSubmit={(e) => e.preventDefault()} className="test-form">
        <h1 className="text-center m-bottom-2">Aptitude Test</h1>
        {aptitudeQuestions.map((question) => (
          <section key={question.id} className="m-top">
            <div>
              <strong>
                {question.id}. {question.question}
              </strong>
            </div>
            <div className="m-top-2">
              <ol type="a" className="ans-options">
                {Object.entries(question.options).map(([key, value]) => (
                  <li key={key}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${question.id}`} // Grouping the options for each question
                        value={key}
                        checked={selectedAnswers[question.id] === key}
                        onChange={() => handleOptionChange(question.id, key)}
                      />
                      {value}
                    </label>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
        <section className="flex centre-horizontal m-top">
          <button onClick={displayResult} className="btn-submit" >
            Finish Test
          </button>
        </section>
      </form>
    </div>
  );
};

export default Test;
