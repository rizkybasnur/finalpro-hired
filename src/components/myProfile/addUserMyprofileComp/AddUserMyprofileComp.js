import React from "react";
import "./AddUserMyprofileComp.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import UserMpCompChild from "./userMpCompChild/UserMpCompChild";
import { useSelector } from "react-redux";

function AddUserMyprofileComp() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  const { fullname, profile_pic, email } = useSelector(
    (state) => state.loginred
  );
  return (
    <div className="container-myprofile">
      <h1>My Profile</h1>

      <Collapse in={close}>
        <div>
          <div className="profile-top">
            <div className="profile-left">
              <div className="profile-img">
                <img src={profile_pic} alt="myprofile-user" />
              </div>
              <div className="list-profile">
                <h2>{fullname}</h2>
                <div className="child-listprofile">
                  <div className="child2-listprofile">
                    <img
                      src={"https://i.ibb.co/KDZ0rjG/location.png"}
                      alt="location"
                    />{" "}
                    Jakarta, Indonesia
                  </div>
                  <div>
                    <img src="https://i.ibb.co/PNdHB4V/mail.png" alt="mail" />{" "}
                    {email}
                  </div>
                  <div>
                    <img
                      src="https://i.ibb.co/ChcH2MY/contact.png"
                      alt="contact"
                    />{" "}
                    +62 81224514271
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-profile">
              <button
                onClick={() => {
                  setOpen(!open);
                  setClose(!close);
                }}
              >
                Edit contact info
              </button>
            </div>
          </div>
        </div>
      </Collapse>
      <Collapse in={open}>
        <div>
          <UserMpCompChild />
          <div className="open-umcc">
            <button
              onClick={() => {
                setOpen(!open);
                setClose(!close);
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setOpen(!open);
                setClose(!close);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default AddUserMyprofileComp;
