import React from "react";
import "./SearchComp.css";

function SearchComp() {
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
          <button>Find job</button>
        </div>
        <div className="bot-title-search">
          <p>Popular searches: Designer, Web, iOS, PHP, Senior Engineer</p>
          <h5>Advance Search</h5>
        </div>
      </div>
    </div>
  );
}

export default SearchComp;
