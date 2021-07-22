import React from "react";
import { Dropdown } from "react-bootstrap";
import "./UserDropdownComp.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserDropdownComp() {
  const { firstname } = useSelector((state) => state.loginred);
  const history = useHistory();
  console.log("firstname", firstname);
  const handleUser = () => {
    history.push("/myprofilepage");
  };

  const handleLogout = () => {
    history.push("/");
    const store = window.localStorage;
    store.clear();
    window.location.reload();
  };

  return (
    <div className="list-button2">
      <ul>
        <li>
          <img
            className="photo-profile"
            src="https://i.ibb.co/tmwPPy6/myprofile-user.png"
            alt="Ellipse-user"
          />
        </li>
        <li>
          {/* <img src="Vector-dropdown.svg" alt="" /> */}
          <Dropdown>
            <a href=" " onClick={handleUser}>
              {firstname}
            </a>

            <Dropdown.Toggle split variant="none" id="dropdown-split-user" />

            <Dropdown.Menu className="menu-dropdown">
              <Dropdown.Item href="#/action-1">
                <img
                  src="https://i.ibb.co/HHyL61k/Vector-setting.png"
                  alt="Vector-setting"
                />{" "}
                Change password
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={handleLogout}>
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
