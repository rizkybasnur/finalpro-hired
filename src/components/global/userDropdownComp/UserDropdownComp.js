import React from "react";
import { Dropdown } from "react-bootstrap";
// import logo from "./imageHeader/Logo.png";
import "./UserDropdownComp.css";
import { useSelector } from "react-redux";

function UserDropdownComp() {
  const { fullname, profile_pic } = useSelector((state) => state.loginred);
  return (
    <div className="list-button2">
      <ul>
        <li>
          <img className="photo-profile" src={profile_pic} alt="Ellipse-user" />
        </li>
        <li>
          {/* <img src="Vector-dropdown.svg" alt="" /> */}
          <Dropdown>
            <a href=" ">{fullname}</a>

            <Dropdown.Toggle split variant="none" id="dropdown-split-user" />

            <Dropdown.Menu className="menu-dropdown">
              <Dropdown.Item href="#/action-1">
                <img
                  src="https://i.ibb.co/HHyL61k/Vector-setting.png"
                  alt="Vector-setting"
                />{" "}
                Change password
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <img
                  src="https://i.ibb.co/Bw8F2Pn/Vector-signout.png"
                  alt="Vector-signout"
                />{" "}
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdownComp;
