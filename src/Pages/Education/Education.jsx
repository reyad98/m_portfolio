import React from "react";
import aka2 from "../images/aca2.jpg";
import "./Education.css";

const educationData = [
  {
    exam: "JSC",
    institution: "Al Amin Academy School & College",
    gpa: "5.00",
    year: "2013",
  },
  {
    exam: "SSC",
    institution: "Al Amin Academy School & College",
    gpa: "5.00",
    year: "2016",
  },
  {
    exam: "HSC",
    institution: "Birshreshtha Munshi Abdur Rouf Public College",
    gpa: "4.75",
    year: "2018",
  },
  {
    exam: "BSc in CSE",
    institution: "Daffodil International University",
    gpa: "3.60",
    year: "2023",
  },
  // Add more education data as needed
];

const Education = () => {
  return (
    <div className="education">
      <div className="education-left">
        <h2 className="h2e">ACADEMIC QUALIFICATION</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Exam</th>
              <th>Institution</th>
              <th>CGPA</th>
              <th>Passing Year</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((data, index) => (
              <tr key={index}>
                <td>{data.exam}</td>
                <td>{data.institution}</td>
                <td>{data.gpa}</td>
                <td>{data.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="education-right">
        <h2 className="h2e">ACHIEVEMENTS</h2>
        <div className="imgcls">
          <img src={aka2} alt="" />
          <div className="overlay">
            <div className="achievement-text">
              <h3>
                <i className="fas fa-trophy"></i>
              </h3>
              <p>Got Precident Scout award 2015</p>
              <p>Blackbelt Web developer Programming Hero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
