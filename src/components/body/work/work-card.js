import React from "react";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <div className="project-links">
        {item.website && (
          <a className="project-link" href={item.website}>
            <div className="link-button">
              <i class="fi-rr-globe"></i>
              Website
            </div>
          </a>
        )}
      </div>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
