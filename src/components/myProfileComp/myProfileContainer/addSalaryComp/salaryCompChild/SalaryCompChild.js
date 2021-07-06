import React from "react";
import "./SalaryCompChild.css";

function SalaryCompChild() {
  return (
    <div className="container-childSalary">
      <h6>Salary expectation</h6>
      <p>Provide a salary range for better job matches</p>
      <div className="cs-main">
        <div>
          <select placeholder="IDR" id="currency" name="Currency">
            <option value="idr">IDR</option>
            <option value="idr">IDR</option>
            <option value="idr">IDR</option>
            <option value="idr">IDR</option>
          </select>
          <label for="textcreator">Currency*</label>
        </div>
        <div>
          <input placeholder="e.g. 7500000" name="Minimum" />
          <label for="textcreator">Minimum</label>
        </div>
        -
        <div>
          <input placeholder="e.g. 15000000" name="Maximum" />
          <label for="textcreator">Maximum</label>
        </div>
        <div>
          <select id="frequency" name="Frequency">
            <option value="australia">Per day</option>
            <option value="canada">Per week</option>
            <option value="canada">Per month</option>
            <option value="canada">Per year</option>
          </select>
          <label for="textcreator">Frequency</label>
        </div>
      </div>
    </div>
  );
}

export default SalaryCompChild;
