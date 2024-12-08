import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import clg1 from "../../../assets/clg1.jpg";
import clg1cover from "../../../assets/clg1cover.jpg";
import clg2 from "../../../assets/clg2.jpg";
import clg2cover from "../../../assets/clg2cover.jpg";
import Catalog from "../../../components/Catalog/Catalog";
import CollegeProfile from "../../../components/CollegeProfile/CollegeProfile";
import ApplicationForm from "../../../components/ApplicationForm/ApplicationForm";
import Test from "../../../components/Test/Test";
import Result from "../../../components/Result/Result";
import Popup from "../../../components/PopUp/PopUp";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const [showCatalogs, setShowCatalogs] = useState(true);
  const [showCollegeProfile, setShowCollegeProfile] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const [correctAnswer, setCorrectAnswer] = useState(0);

  const [colleges, setColleges] = useState(null);
  const [college, setCollege] = useState(null);
  const [cover, setCover] = useState(null);

  const navigate = useNavigate();

  const clgImages = [
    { img: clg1, cover: clg1cover },
    { img: clg2, cover: clg2cover },
  ];

  const aptitudeQuestions = [
    {
      id: 1,
      question:
        "Which data structure follows the First In, First Out (FIFO) principle?",
      options: {
        a: "Stack",
        b: "Queue", // Correct answer
        c: "Linked List",
        d: "Heap",
      },
      correctAnswer: "b",
    },
    {
      id: 2,
      question:
        "What is the time complexity of binary search on a sorted array?",
      options: {
        a: "O(n)",
        b: "O(n log n)",
        c: "O(log n)", // Correct answer
        d: "O(1)",
      },
      correctAnswer: "c",
    },
    {
      id: 3,
      question:
        "Which of the following is NOT an example of an operating system?",
      options: {
        a: "Linux",
        b: "Windows",
        c: "Oracle", // Correct answer
        d: "MacOS",
      },
      correctAnswer: "c",
    },
    {
      id: 4,
      question:
        "Which sorting algorithm has the best average-case time complexity?",
      options: {
        a: "Bubble Sort",
        b: "Insertion Sort",
        c: "Merge Sort", // Correct answer
        d: "Selection Sort",
      },
      correctAnswer: "c",
    },
    {
      id: 5,
      question:
        "Which of the following is a primary key characteristic in a relational database?",
      options: {
        a: "Can contain duplicate values",
        b: "Can be NULL",
        c: "Uniquely identifies each record", // Correct answer
        d: "Can have multiple NULL values",
      },
      correctAnswer: "c",
    },
    {
      id: 6,
      question: "Which of the following is NOT a programming language?",
      options: {
        a: "Python",
        b: "JavaScript",
        c: "HTML", // Correct answer
        d: "Java",
      },
      correctAnswer: "c",
    },
    {
      id: 7,
      question: "What does SQL stand for?",
      options: {
        a: "Structured Query Language", // Correct answer
        b: "Simple Query Logic",
        c: "Sequential Query Language",
        d: "System Query Language",
      },
      correctAnswer: "a",
    },
    {
      id: 8,
      question: "Which logic gate returns TRUE only if both inputs are TRUE?",
      options: {
        a: "OR",
        b: "AND", // Correct answer
        c: "XOR",
        d: "NOR",
      },
      correctAnswer: "b",
    },
    {
      id: 9,
      question:
        "Which of the following best describes polymorphism in Object-Oriented Programming?",
      options: {
        a: "The ability to create multiple objects of a class",
        b: "The ability of a function to take multiple forms", // Correct answer
        c: "The ability to inherit from multiple classes",
        d: "The process of breaking down a problem into smaller parts",
      },
      correctAnswer: "b",
    },
    {
      id: 10,
      question: "Which of the following is an example of a NoSQL database?",
      options: {
        a: "MySQL",
        b: "MongoDB", // Correct answer
        c: "PostgreSQL",
        d: "SQL Server",
      },
      correctAnswer: "b",
    },
  ];

  const getCollegeList = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/college-list");
      if (response.ok) {
        setColleges(await response.json());
      } else {
        alert("Server disconnected!");
      }
    } catch (error) {
      console.log(error);
      alert("Server not responding");
    }
  };

  useEffect(() => {
    getCollegeList();
  }, []);

  const toggleApplicationForm = ()=> {
    setShowCollegeProfile(false);
    setShowApplicationForm(true);
  }

  const takeTest = () => {
    setShowTest(true)
    setShowApplicationForm(false);
  }

  const displayResult = () => {
    console.log(selectedAnswers)

    aptitudeQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        setCorrectAnswer(pre=>++pre);
      }
    })

    setShowTest(false);
    setShowResult(true)
  }

  return (
    <div className="screen careers-page">
      {showApplicationForm ? <ApplicationForm college={college} toggleApplicationForm={toggleApplicationForm} takeTest={takeTest} /> : null}
      {showCollegeProfile ? <CollegeProfile college={college} cover={cover} toggleApplicationForm={toggleApplicationForm} /> : null}
      {showTest ? <Test aptitudeQuestions={aptitudeQuestions} displayResult={displayResult} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers}/> : null}
      {showResult ? <Result totalQuestions={aptitudeQuestions.length} correctAnswers={correctAnswer} showPopup={()=>setShowPopup(true)} /> : null}
      {showPopup && (
        <Popup
          message="Submitted Successfully!"
          duration={3000}
          onClose={() => {
            setShowPopup(false);
            setShowCatalogs(true);
            setShowApplicationForm(false);
            setShowCollegeProfile(false);
            setShowTest(false);
            setShowResult(false);
            navigate('/');
          }}
        />
      )}
      {showCatalogs ? (
        <>
          <section>
            <div className="search-bar-container">
              <form onSubmit={(e) => e.preventDefault()} className="search-bar">
                <span>
                  <input
                    type="text"
                    placeholder="search course"
                    className="search-input-box"
                  />
                </span>
                <span className="search-icon">
                  <CiSearch />
                </span>
              </form>
            </div>
          </section>

          <section className="careers-main-section">
            <section className="link-section">
              <h4>Import links</h4>
              <ul>
                <li>Newly Added</li>
                <li>Announcement</li>
                <li>Notification</li>
              </ul>
            </section>

            <section className="catalog-section">
              {colleges
                ? colleges.map((college, index) => (
                    <div onClick={()=>{
                      setCollege(college);
                      setCover(clgImages[index].cover)
                      setShowCollegeProfile(true);
                      setShowCatalogs(false);
                    }}>
                      <Catalog
                        college={college}
                        image={clgImages[index].img}
                        coverImage={clgImages[index].cover}
                      />
                    </div>
                  ))
                : null}
            </section>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Careers;
