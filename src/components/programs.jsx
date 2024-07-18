import React from "react";

const Programs = (props) => {
  return (
    <div id="programs" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Programs</h2>
          <p>
          Explore interactive modules, personalized learning paths, AI integration, and teacher engagement opportunities. Empowering students and educators for academic success.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="program-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Programs;