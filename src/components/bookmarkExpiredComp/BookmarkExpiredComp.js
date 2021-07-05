import React from "react";
import "./BookmarkExpiredComp.css";

function BookmarkExpiredComp() {
  return (
    <div className="parent-container-for-bookmard-expired">
      <div className="container-for-bookmard-expired">
        <img src="https://i.ibb.co/g6M88Wb/Attention.png" alt="Attention" />
        <h4>Whoops, the job is no longer existed</h4>
        <h5>Explore new opportunities, maybe?</h5>
        <button>Find jobs</button>
      </div>
    </div>
  );
}

export default BookmarkExpiredComp;
