import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import ModalLogin from "../../modalComp/modalLogin/ModalLogin";
import ModalRegister from "../../modalComp/modalRegister/ModalRegister";
import "./JoblistCard.css";
import { useSelector } from "react-redux";

function JoblistCard() {
  const [bookmark, setBookmark] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);
  const history = useHistory();
  const { token } = useSelector((state) => state.loginred);

  const containerClick = () => {
    console.log("container click");
    history.push("/jobdetailpage");
  };

  const hanldeBookmarkClick = (e) => {
    e.stopPropagation();
    setBookmark((prevCheck) => !prevCheck);
  };
  console.log(bookmark, "bookmark");

  return (
    <div className="container-for-joblist-card">
      <Card className="job-list-card" onClick={containerClick}>
        <div className="content-for-job-list">
          <div className="joblist-no-bookmark">
            <img
              className="joblist-logo"
              src="https://i.ibb.co/0GZbf24/tokped-logo.png"
              alt="tokped-logo"
            />
            <div className="container-for-h">
              <h5>Senior Product Designer</h5>
              <div className="job-detail-joblist">
                <img
                  className="company-logo"
                  src="https://i.ibb.co/hCCZXFc/bag-icon.png"
                  alt=""
                />
                <h6>InVision</h6>
                <img
                  className="location-logo"
                  src="https://i.ibb.co/WV3zyZV/location-icon.png"
                  alt=""
                />
                <h6>London, UK</h6>
                <img
                  className="salary-logo"
                  src="https://i.ibb.co/0K9LCBG/money-icon.png"
                  alt=""
                />
                <h6>Rp7.500.000 - Rp9.500.000</h6>
              </div>
              <p>Full Time</p>
            </div>
          </div>
          {token ? (
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
          ) : (
            <img
              onClick={(e) => {
                e.stopPropagation();
                setLoginModal(true);
              }}
              src="https://i.ibb.co/Phwh71z/bookmark-white-png.png"
              alt=""
            />
          )}
          <ModalLogin
            show={loginModal}
            onHide={(e) => {
              e.stopPropagation();
              setLoginModal(false);
            }}
            onRegis={(e) => {
              setLoginModal(false);
              setRegisModal(true);
              e.stopPropagation();
              console.log("regis click");
            }}
          />
          <ModalRegister
            show={regisModal}
            onHide={(e) => {
              e.stopPropagation();
              setRegisModal(false);
            }}
            onSignIn={(e) => {
              e.stopPropagation();
              setLoginModal(true);
              setRegisModal(false);
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default JoblistCard;
