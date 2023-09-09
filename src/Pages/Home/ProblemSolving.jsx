import React from "react";
import "./ProblemSolving.css";

const ProblemSolving = () => {
  return (
    <div className="maincontainer">
      <div className="twocontainer">
        <div className="problem_container">
          <div className="right-container">
            <div className="box-2 problemsolving b1">
              <p>PROBLEM SOLVING COUNTS</p>
            </div>
            <div className="box-2 problemsolving b2">
              <p>1500++</p>
            </div>
          </div>
          <div className="left-container">
            <div className="box-4 b3">
              <p>Codeforces</p>
              <p>840</p>
            </div>
            <div className="box-4 b4">
              <p>CodeChef</p>
              <p>217</p>
            </div>
            <div className="box-4 b5">
              <p>Vjudge</p>
              <p>195</p>
            </div>
            <div className="box-4 b6">
              <p>Beecrowd</p>
              <p>157</p>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="box-2 b7">
            <div className="icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="30" fill="#34495E" />
                <path
                  d="M43 40V33.0001C43 30.2386 40.7614 28 38 28H26C23.2386 28 21 30.2386 21 33.0001V40"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 46C35.3137 46 38 43.3137 38 40"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 21H25.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39 21H39.01"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 21C19 14.3726 24.3726 9 31 9H33C39.6274 9 45 14.3726 45 21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Competitive Programming</h3>
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <p>
                Solve Problems
                <br />
                Perticipate contests
                <br />
                Increament Accuracy is (-_-)
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolving;
