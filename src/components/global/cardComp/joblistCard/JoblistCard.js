import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import ModalLogin from "../../modalComp/modalLogin/ModalLogin";
import ModalRegister from "../../modalComp/modalRegister/ModalRegister";
import "./JoblistCard.css";
import { useDispatch, useSelector } from "react-redux";
import { jobListAsync } from "../../../../redux/actions/findJobAct";
import { activemodalAct } from "../../../../redux/actions/homePageAct";

function JoblistCard({ data }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState(false);
  const [IDBookmark, setIDBookmark] = useState([]);
  // const [loginModal, setLoginModal] = useState(false);
  // const [regisModal, setRegisModal] = useState(false);
  const { token } = useSelector((state) => state.loginred);
  const activemodal = useSelector((state) => state.homepagered.activemodal);

  const containerClick = (id) => {
    history.push(`/jobdetailpage/${id}`);
  };

  useEffect(() => {
    dispatch(jobListAsync());
  }, [dispatch]);

  const hanldeBookmarkClick = (id) => {
    if (IDBookmark.includes(id)) {
      setIDBookmark(IDBookmark.filter((item) => item !== id));
    } else {
      setIDBookmark([...IDBookmark, id]);
    }
  };

  // const handleLoginBookmark = () => {
  //   setLoginModal(true);
  // };

  return (
    <div className="container-for-joblist-card">
      {data &&
        data.map((e, index) => {
          return (
            <Card
              key={`${index}-${e.job_title}`}
              className="job-list-card"
              onClick={() => {
                containerClick(e._id);
                dispatch(jobListAsync(e._id));
              }}
            >
              <div className="content-for-job-list">
                <div className="joblist-no-bookmark">
                  <img
                    className="joblist-logo"
                    src={e.company_id.company_logo}
                    alt="tokped-logo"
                  />
                  <div className="container-for-h">
                    <h5>{e.job_title}</h5>
                    <div className="job-detail-joblist">
                      <img
                        className="company-logo"
                        src="https://i.ibb.co/hCCZXFc/bag-icon.png"
                        alt=""
                      />
                      <h6>{e.company_id.company_name}</h6>
                      <img
                        className="location-logo"
                        src="https://i.ibb.co/WV3zyZV/location-icon.png"
                        alt=""
                      />
                      <h6>{e.company_id.location}</h6>
                      <img
                        className="salary-logo"
                        src="https://i.ibb.co/0K9LCBG/money-icon.png"
                        alt=""
                      />
                      <h6>{e.salary}</h6>
                    </div>
                    <p>{e.job_types[0].description}</p>
                  </div>
                </div>

                <img
                  value={bookmark}
                  onClick={(eve) => {
                    eve.stopPropagation();
                    token
                      ? hanldeBookmarkClick(e._id)
                      : dispatch(activemodalAct("login"));
                  }}
                  src={
                    IDBookmark.includes(e._id)
                      ? "https://i.ibb.co/XLFB8WL/bookmark-black.png"
                      : "https://i.ibb.co/Phwh71z/bookmark-white-png.png"
                  }
                  alt=""
                />
              </div>
            </Card>
          );
        })}
      {/* <ModalLogin
        show={activemodal === "login"} 
        onHide={() => {
          setLoginModal(false);
        }}
        onRegis={() => {
          setLoginModal(false);
          setRegisModal(true);
        }}
      />
      <ModalRegister
        show={activemodal === "regis"}
        onHide={() => {
          setRegisModal(false);
        }}
        onSignIn={() => {
          setLoginModal(true);
          setRegisModal(false);
        }}
        onSignUp={() => {
          setLoginModal(true);
          setRegisModal(false);
        }}
      /> */}
    </div>
  );
}

export default JoblistCard;
