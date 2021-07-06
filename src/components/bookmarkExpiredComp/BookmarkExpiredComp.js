import React from "react";
import "./BookmarkExpiredComp.css";
import { useHistory } from "react-router-dom";

function BookmarkExpiredComp() {
  const history = useHistory();
  const findjobHandler = (e) => {
    e.preventDefault();
    history.push("/findjobspage");
  };
  return (
    <div className="parent-container-for-bookmard-expired">
      <div className="container-for-bookmard-expired">
        <img src="https://i.ibb.co/g6M88Wb/Attention.png" alt="Attention" />
        <h4>Whoops, the job is no longer existed</h4>
        <h5>Explore new opportunities, maybe?</h5>
        <button onClick={findjobHandler}>Find jobs</button>
      </div>
    </div>
  );
}

export default BookmarkExpiredComp;
