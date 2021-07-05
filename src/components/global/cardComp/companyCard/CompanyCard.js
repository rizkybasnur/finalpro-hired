import React from "react";
import "./CompanyCard.css";
import { useHistory } from "react-router-dom";

function CompanyCard() {
  const history = useHistory();
  const containerClick = (e) => {
    e.preventDefault();
    history.push("/companydetailpage");
  };

  return (
    <div className="parent-container-for-company-card">
      <div className="container-for-company-card" onClick={containerClick}>
        <div className="company-list-card">
          <div className="content-company-card">
            <img src="https://i.ibb.co/Nszfsys/spotify-icon.png" alt="" />
            <h5>spotify</h5>
            <h6> berlin</h6>
            <h4>4 open position</h4>
          </div>
        </div>
      </div>

      <div className="container-for-company-card" onClick={containerClick}>
        <div className="company-list-card">
          <div className="content-company-card">
            <img src="https://i.ibb.co/Nszfsys/spotify-icon.png" alt="" />
            <h5>spotify</h5>
            <h6> berlin</h6>
            <h4>4 open position</h4>
          </div>
        </div>
      </div>

      <div className="container-for-company-card" onClick={containerClick}>
        <div className="company-list-card">
          <div className="content-company-card">
            <img src="https://i.ibb.co/Nszfsys/spotify-icon.png" alt="" />
            <h5>spotify</h5>
            <h6> berlin</h6>
            <h4>4 open position</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
