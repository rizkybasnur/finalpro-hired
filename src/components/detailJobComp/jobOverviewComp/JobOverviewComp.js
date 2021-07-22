import "./JobOverviewComp.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ModalLogin from "../../global/modalComp/modalLogin/ModalLogin";
import ModalRegister from "../../global/modalComp/modalRegister/ModalRegister";
import ModalApply from "../../global/modalComp/modalApply/ModalApply";
import { useDispatch, useSelector } from "react-redux";
import {
  // getDataByIDSuccess,
  jobListAsync,
} from "../../../redux/actions/findJobAct";
import { useParams } from "react-router-dom";
import moment from "moment";

function JobOverviewComp({ getDataByID }) {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [saveJob, setSaveJob] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);
  const [applyModal, setApplyModal] = useState(false);
  const { token } = useSelector((state) => state.loginred);
  const { getDatabyID } = useSelector((state) => state.findjobred);

  const saveJobHandler = (e) => {
    e.preventDefault();
    setSaveJob(!saveJob);
  };

  const viewCompanyClick = (e) => {
    e.preventDefault();
    history.push("/companydetailpage");
  };

  useEffect(() => {
    // dispatch(getDataByIDSuccess(id));
    dispatch(jobListAsync());
  }, [dispatch, id]);

  return (
    <>
      {getDataByID && (
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
                    <h6>
                      {moment(getDataByID.date_Posted).startOf("day").fromNow()}{" "}
                    </h6>
                  </div>
                </div>
                <div className="job-overview-data2">
                  <img
                    src="https://i.ibb.co/1fDxHzF/Expirationdate.png"
                    alt="Expirationdate"
                  />
                  <div className="job-overview-string">
                    <h5>Expiration date</h5>
                    <h6>
                      {moment(getDataByID.expired_date).endOf("day").fromNow()}{" "}
                    </h6>
                  </div>
                </div>
                <div className="job-overview-data3">
                  <img
                    src="https://i.ibb.co/jv1cQGT/Location-blue.png"
                    alt="Location-blue"
                  />
                  <div className="job-overview-string">
                    <h5>Location</h5>
                    <h6>{getDataByID.company_id?.location}</h6>
                  </div>
                </div>
                <div className="job-overview-data4">
                  <img
                    src="https://i.ibb.co/H4rYM7N/Employement-Blue.png"
                    alt="Employement-Blue"
                  />
                  <div className="job-overview-string">
                    <h5>Employement</h5>
                    <h6>
                      {getDataByID.job_types &&
                        getDataByID.job_types[0].description}
                    </h6>
                  </div>
                </div>
                <div className="job-overview-data5">
                  <img
                    src="https://i.ibb.co/fksT436/Experience-Level.png"
                    alt="Experience-Level"
                  />
                  <div className="job-overview-string">
                    <h5>Experience Level</h5>
                    <h6>
                      {getDataByID.experience_levels &&
                        getDataByID.experience_levels[0].description}
                    </h6>
                  </div>
                </div>
                <div className="job-overview-data6">
                  <img
                    src="https://i.ibb.co/58VrbxB/Work-hour.png"
                    alt="Work-hour"
                  />
                  <div className="job-overview-string">
                    <h5>Work hour</h5>
                    <h6>{getDataByID.work_hour}</h6>
                  </div>
                </div>
                <div className="job-overview-data7">
                  <img src="https://i.ibb.co/yVsm9Pp/Salary.png" alt="Salary" />
                  <div className="job-overview-string">
                    <h5>Salary</h5>
                    <h6>{getDataByID.salary}</h6>
                  </div>
                </div>
              </div>
              <div className="containers-button-apply-and-save">
                <button
                  className="button-apply"
                  onClick={
                    token
                      ? () => setApplyModal(true)
                      : () => setLoginModal(true)
                  }
                >
                  Apply
                </button>
                <ModalApply
                  show={applyModal}
                  onHide={() => setApplyModal(false)}
                />
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
                {token ? (
                  <button className="button-save-job" onClick={saveJobHandler}>
                    {saveJob ? "Saved to List" : "Save Job"}
                  </button>
                ) : (
                  <button
                    className="button-save-job"
                    onClick={() => setLoginModal(true)}
                  >
                    Save Job
                  </button>
                )}
              </div>
            </Card.Body>
            <Card.Body className="body-card-for-view-company-profile">
              <div className="view-company-profile">
                <img
                  src={
                    getDataByID.company_id &&
                    getDataByID.company_id.company_logo
                  }
                  alt="tokped-logo"
                />
                <div className="view-company-string">
                  <h5>
                    {getDataByID.company_id &&
                      getDataByID.company_id.company_name}
                  </h5>
                  <a onClick={viewCompanyClick} href="#view">
                    View company profile
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default JobOverviewComp;
