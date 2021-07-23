import React from "react";
import "./HeaderComp.css";
// import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import ModalLogin from "../modalComp/modalLogin/ModalLogin";
import ModalRegister from "../modalComp/modalRegister/ModalRegister";
import { useDispatch, useSelector } from "react-redux";
import UserDropdownComp from "../userDropdownComp/UserDropdownComp";
import { activemodalAct } from "../../../redux/actions/homePageAct";

function HeaderComp() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.loginred);
  // const [loginModal, setLoginModal] = useState(false);
  // const [regisModal, setRegisModal] = useState(false);
  const history = useHistory();
  const activemodal = useSelector((state) => state.homepagered.activemodal);
  console.log("activemodal", activemodal);
  const clickHome = (e) => {
    e.preventDefault();
    history.push("/");
  };

  // const clickFindJob = () => {
  //   history.push("/findjobspage");
  // };

  // const clickCompanies = (e) => {
  //   e.preventDefault();
  //   history.push("/companysearchpage");
  // };

  return (
    <div className="container-headerComp">
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
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/findjobspage"}>Find Jobs</Link>
            </li>
            <li>
              <Link to={"/companysearchpage"}>Find Companies</Link>
            </li>
          </ul>
        </div>
        <div className="list-button">
          {token === "" ? (
            <ul>
              <li>
                <button
                  className="login"
                  onClick={() => {
                    dispatch(activemodalAct("login"));
                  }}
                >
                  Login/Register
                </button>

                <button className="post">Post Job</button>
              </li>
            </ul>
          ) : (
            <UserDropdownComp />
          )}
        </div>
        <ModalLogin
          show={activemodal === "login"}
          // onHide={() => setLoginModal(false)}
          onRegis={() => {
            // setLoginModal(false);
            // setRegisModal(true);
          }}
        />
        <ModalRegister
          show={activemodal === "regis"}
          // onHide={() => setRegisModal(false)}
          onSignIn={() => {
            // setLoginModal(true);
            // setRegisModal(false);
          }}
          onSignUp={() => {
            // setLoginModal(true);
            // setRegisModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default HeaderComp;
