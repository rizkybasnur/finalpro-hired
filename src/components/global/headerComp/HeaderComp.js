import React from "react";
import "./HeaderComp.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ModalLogin from "../modalComp/modalLogin/ModalLogin";
import ModalRegister from "../modalComp/modalRegister/ModalRegister";
import { useSelector } from "react-redux";
// import { Dropdown } from "react-bootstrap";
import UserDropdownComp from "../userDropdownComp/UserDropdownComp";

function HeaderComp() {
  const { token } = useSelector((state) => state.loginred);
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);
  const history = useHistory();

  const clickHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const clickFindJob = (e) => {
    e.preventDefault();
    history.push("/findjobspage");
  };

  const clickCompanies = (e) => {
    e.preventDefault();
    history.push("/companysearchpage");
  };

  return (
    <div className="header-list">
      <div className="list-logo">
        <ul>
          <li>
            <img
              className="logo-hired-on-header"
              src="https://i.ibb.co/rybWczQ/Logo.png"
              alt="Logo"
              width="113px"
              onClick={clickHome}
            />
          </li>
          <li>
            <a href="home" onClick={clickHome}>
              Home
            </a>
          </li>
          <li>
            <a href="findJobs" onClick={clickFindJob}>
              Find Jobs
            </a>
          </li>
          <li>
            <a href="companies" onClick={clickCompanies}>
              Find Companies
            </a>
          </li>
        </ul>
      </div>
      <div className="list-button">
        {token === "" ? (
          <ul>
            <li>
              <button className="login" onClick={() => setLoginModal(true)}>
                Login/Register
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
              <li>
                <button className="post">Post Job</button>
              </li>
            </li>
          </ul>
        ) : (
          <UserDropdownComp />
        )}
      </div>
    </div>
  );
}

export default HeaderComp;
