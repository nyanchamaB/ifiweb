import React from "react";

const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Dedicated individuals and founders of this platform who have worked to make it a success.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img  src={`${process.env.PUBLIC_URL}/images/team/${d.img}`} alt={d.name} className="team-img"  onError={(e) => {
console.error(`Error loading image for ${d.name}:`, e);
    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.jpg`; // Fallback image
  }} />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Team;