import React from "react";
import "./AboutEdu.css";

const educationData = [
  {
    exam: "Junior School Certificate (JSC)",
    institution: "Al Amin Academy School & College",
    gpa: "5.00",
    year: "2013",
    description:
      "Completed Junior School Certificate (JSC) with an outstanding GPA.",
    image: "link_to_jsc_image",
  },
  {
    exam: "Secondary School Certificate (SSC)",
    institution: "Al Amin Academy School & College",
    gpa: "5.00",
    year: "2016",
    description:
      "Achieved an exceptional GPA in Secondary School Certificate (SSC) exams.",
    image: "link_to_ssc_image",
  },
  {
    exam: "Higher Secondary Certificate (HSC)",
    institution: "Birshreshtha Munshi Abdur Rouf Public College",
    gpa: "4.75",
    year: "2018",
    description:
      "Secured a high GPA in Higher Secondary Certificate (HSC) examinations.",
    image: "link_to_hsc_image",
  },
  {
    exam: "BSc in CSE",
    institution: "Daffodil International University",
    cgpa: "3.54", // Add your BSc CGPA here
    year: "2023",
    description:
      "Pursued a degree in Computer Science and Engineering with dedication.",
    image: "link_to_bsc_image",
  },
];

const AboutEdu = () => {
  return (
    <div className="edu_container">
      <div className="timeline">
        <ul>
          {educationData.map((data, index) => (
            <li key={index}>
              <div className="timeline-content">
                <div className="left-content"></div>
                <div className="right-content">
                  <h3 className="date">{data.year}</h3>
                  <h1>{data.exam}</h1>
                  <p>
                    {data.description}
                    <br />
                    Attended: {data.institution}
                    <br />
                    <b>
                      {data.gpa && (
                        <span>
                          GPA: {data.gpa}
                          <br />
                        </span>
                      )}
                    </b>
                    <b>{data.cgpa && <span>CGPA: {data.cgpa}</span>}</b>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutEdu;
