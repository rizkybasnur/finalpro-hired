import React from "react";
import "./WorkCompChild.css";

function WorkCompChild() {
  return (
    <div className="container-childWork">
      <h6>Work experience</h6>
      <p>
        Besides your last job title or company, employers want to know what you
        accomplished while there. Detail achievements and contributions made.
      </p>
      <div className="cwork-1">
        <div>
          <input name="Job Title*" placeholder="Your awesome job title here" />
          <label for="textcreator">Job Title*</label>
        </div>
        <div>
          <input name="Company*" placeholder="The company you worked with" />
          <label for="textcreator">Company*</label>
        </div>
      </div>
      <div className="cwork-2">
        <div>
          <select
            placeholder="e.g. Accounting and Finance"
            id="Job Function*"
            name="Job Function*"
          >
            <option value="">e.g. Accounting and Finance</option>
            <option value="">e.g. Accounting and Finance</option>
            <option value="">e.g. Accounting and Finance</option>
          </select>
          <label for="textcreator">Job Function*</label>
        </div>
        <div>
          <select id="Job level*" name="Job level*">
            <option value="">Entry level/Junior Apprentice</option>
            <option value="">Entry level/Junior Apprentice</option>
            <option value="">Entry level/Junior Apprentice</option>
          </select>
          <label for="textcreator">Job level*</label>
        </div>
      </div>
      <div className="cwork-3">
        <div className="cwork-3left">
          <select id="From*" name="From*">
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
          </select>
          <label for="textcreator">From*</label>
        </div>
        -
        <div className="cwork-3right">
          <select id="To* " name="To* ">
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
            <option value="">Month/Year</option>
          </select>
          <label for="textcreator">To* </label>
        </div>
        <h6>I currently work here</h6>
      </div>
      <div className="cwork-4">
        <div>
          <textarea
            name="Accomplishments or descriptions (optional)"
            placeholder="Tell us what you’re doing at this company"
          />
          <label for="textcreator">
            Accomplishments or descriptions (optional)
          </label>
        </div>
      </div>
    </div>
  );
}

export default WorkCompChild;
