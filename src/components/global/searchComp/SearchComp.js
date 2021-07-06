import React from "react";
import "./SearchComp.css";
import { useHistory } from "react-router-dom";

function SearchComp() {
  const history = useHistory();
  const jobHandler = (e) => {
    e.preventDefault();
    history.push("/findjobspage");
  };
  const companyHandler = (e) => {
    e.preventDefault();
    history.push("/companysearchpage");
  };
  return (
    <div className="parent-search-container">
      <div className="search-container">
        <div className="title-search">
          <h2>
            There are <spam>93,178</spam> job postings here for you!
          </h2>
          <h6>Find jobs, employement & career opportunities</h6>
        </div>
        <div className="input-search">
          <img
            src="https://i.ibb.co/QfjmkYc/Loop-search-Comp.png"
            alt="Loop-search-Comp"
          />
          <input placeholder="Job title, keywords, or company" />
          <button onClick={jobHandler}>Find job</button>
        </div>
        <div className="bot-title-search" onClick={companyHandler}>
          <p>Popular searches: Designer, Web, iOS, PHP, Senior Engineer</p>
          <h5>Find Company</h5>
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
