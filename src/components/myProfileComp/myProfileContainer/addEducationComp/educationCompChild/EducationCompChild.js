import React from "react";
import "./EducationCompChild.css";

function EducationCompChild() {
  return (
    <div className="container-childEdu">
      <h6>Education</h6>
      <p>
        Your most recent and relevant educational attainmenbt should come first.
      </p>
      <div className="cedu-1">
        <div>
          <input name="Educational attainment*" placeholder="e.g Diploma" />
          <label for="textcreator">Educational attainment*</label>
        </div>
        <div>
          <input
            name="School/University*"
            placeholder="Choose your school/university"
          />
          <label for="textcreator">School/University*</label>
        </div>
      </div>
      <div className="cedu-2">
        <div>
          <select id="From* " name="From* ">
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
          </select>
          <label for="textcreator">From*</label>
        </div>
        -
        <div>
          <select id="To* " name="To* ">
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
          </select>
          <label for="textcreator">To* </label>
        </div>
      </div>

      <div className="cedu-3">
        <div>
          <textarea
            name="Accomplishments or descriptions (optional)"
            placeholder="e.g. Valedictoria, Honorable Mentions, etc."
          />
          <label for="textcreator">
            Accomplishments or descriptions (optional)
          </label>
        </div>
      </div>
    </div>
  );
}

export default EducationCompChild;
