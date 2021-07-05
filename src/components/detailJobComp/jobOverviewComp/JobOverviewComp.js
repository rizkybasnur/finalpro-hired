import "./JobOverviewComp.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import ModalLogin from "../../global/modalComp/modalLogin/ModalLogin";
import ModalRegister from "../../global/modalComp/modalRegister/ModalRegister";

function JobOverviewComp() {
  const history = useHistory();
  const [saveJob, setSaveJob] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);

  const saveJobHandler = (e) => {
    e.preventDefault();
    setSaveJob(!saveJob);
  };

  const viewCompanyClick = (e) => {
    e.preventDefault();
    history.push("/companydetailpage");
  };

  // const handlerDdCheckBox = (e) => {
  //   if (e.target.checked) {
  //     setSelectedItems([...selectedItems, e.target.value]);
  //   } else {
  //     setSelectedItems(selectedItems.filter((item) => item !== e.target.value));
  //   }
  // };
  return (
    <div>
      <Card className="card-for-job-overview">
        <Card.Body className="body-card-for-overview-job">
          <div className="container-for-job-overview">
            <div className="title-overview">
              <h5>Job Overview</h5>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Date posted</h5>
                <h6>Posted 1 hour ago</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Expiration date</h5>
                <h6>August 17, 2021</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Location</h5>
                <h6>Ho Chi Minh City, Vietnam</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Employement</h5>
                <h6>Full Time</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Experience Level</h5>
                <h6>Mid-Senior Level/Manager</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Work hour</h5>
                <h6>50h/week</h6>
              </div>
            </div>
            <div className="job-overview-data">
              <img
                src="https://i.ibb.co/hK9Zjgr/calendar-blue-icon.png"
                alt=""
              />
              <div className="job-overview-string">
                <h5>Salary</h5>
                <h6>Rp7.500.000 - Rp15.000.000</h6>
              </div>
            </div>
          </div>
          <div className="containers-button-apply-and-save">
            <button
              className="button-apply"
              onClick={() => setLoginModal(true)}
            >
              Apply
            </button>
            <ModalLogin
              show={loginModal}
              onHide={() => setLoginModal(false)}
              onRegis={() => {
                setLoginModal(false);
                setRegisModal(true);
              }}
            />
            <ModalRegister
              show={regisModal}
              onHide={() => setRegisModal(false)}
              onSignIn={() => {
                setLoginModal(true);
                setRegisModal(false);
              }}
            />
            <button className="button-save-job" onClick={saveJobHandler}>
              {saveJob ? "Saved to List" : "Save Job"}
            </button>
          </div>
        </Card.Body>
        <Card.Body className="body-card-for-view-company-profile">
          <div className="view-company-profile">
            <img
              src="https://i.ibb.co/0GZbf24/tokped-logo.png"
              alt="tokped-logo"
            />
            <div className="view-company-string">
              <h5>Momo Wallet</h5>
              <a onClick={viewCompanyClick} href="#view">
                View company profile
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default JobOverviewComp;
