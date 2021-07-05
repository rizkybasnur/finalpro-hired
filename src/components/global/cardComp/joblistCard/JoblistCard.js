import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import "./JoblistCard.css";

function JoblistCard() {
  const [bookmark, setBookmark] = useState(false);
  const history = useHistory();

  const containerClick = (e) => {
    e.preventDefault();
    history.push("/jobdetailpage");
  };
  const hanldeBookmarkClick = (e) => {
    e.stopPropagation();
    setBookmark((prevCheck) => !prevCheck);
  };
  console.log(bookmark, "bookmark");

  return (
    <div className="container-for-joblist-card" onClick={containerClick}>
      <Card className="job-list-card">
        <div className="content-for-job-list">
          <img
            className="joblist-logo"
            src="https://i.ibb.co/0GZbf24/tokped-logo.png"
            alt="tokped-logo"
          />
          <div className="container-for-h">
            <h5>Senior Product Designer</h5>
            <div className="job-detail-joblist">
              <img src="https://i.ibb.co/hCCZXFc/bag-icon.png" alt="" />
              <h6>InVision</h6>
              <img src="https://i.ibb.co/WV3zyZV/location-icon.png" alt="" />
              <h6>London, UK</h6>
              <img src="https://i.ibb.co/0K9LCBG/money-icon.png" alt="" />
              <h6>Rp7.500.000 - Rp9.500.000</h6>
            </div>
            <p>Full Time</p>
          </div>

          <img
            value={bookmark}
            onClick={hanldeBookmarkClick}
            src={
              bookmark
                ? "https://i.ibb.co/XLFB8WL/bookmark-black.png"
                : "https://i.ibb.co/Phwh71z/bookmark-white-png.png"
            }
            alt=""
          />
        </div>
      </Card>
    </div>
  );
}

export default JoblistCard;
