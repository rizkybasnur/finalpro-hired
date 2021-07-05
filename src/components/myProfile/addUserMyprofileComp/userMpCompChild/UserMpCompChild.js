import React from "react";
import "./UserMpCompChild.css";

function UserMpCompChild() {
  return (
    <div className="container-childUserMp">
      <div className="cump-top">
        <div>
          <img
            src="https://i.ibb.co/tmwPPy6/myprofile-user.png"
            alt="myprofile-user"
          />
        </div>
        <div className="cump-topB">
          <button>Change Photo</button>
          <p>
            Max file size is <span>1 MB</span>. Minimum dimension is{" "}
            <span>300x300px</span> and suitable files are .<span>jpg</span> & .
            <span>png</span>
          </p>
        </div>
      </div>
      <div className="cump-main">
        <div>
          <input placeholder="Birthday*" />
          <label for="textcreator">Birthday*</label>
        </div>
        <div>
          <select id="gander" name="gander">
            <option value="australia">Male</option>
            <option value="canada">Female</option>
          </select>
          <label for="textcreator">Gender*</label>
        </div>
        <div>
          <input name="Email*" placeholder="Email*" />
          <label for="textcreator">Email*</label>
        </div>
        <div>
          <input name="Phone number*" placeholder="Phone number*" />
          <label for="textcreator">Phone number*</label>
        </div>
        <div>
          <input name="First Name*" placeholder="First Name*" />
          <label for="textcreator">First Name*</label>
        </div>
        <div>
          <input name="Last Name*" placeholder="Last Name*" />
          <label for="textcreator">Last Name*</label>
        </div>
      </div>
      <div className="cump-boot">
        <h2>Detail Address</h2>
        <div className="cump-bootB">
          <div>
            <input name="City*" placeholder="City*" />
            <label for="textcreator">City*</label>
          </div>
          <div>
            <input name="Street Address" placeholder="Street Address" />
            <label for="textcreator">Street Address</label>
          </div>
          <div>
            <input name="Country*" placeholder="Country*" />
            <label for="textcreator">Country*</label>
          </div>
          <div>
            <input
              name="Region /Province/State*"
              placeholder="Region /Province/State*"
            />
            <label for="textcreator">Region /Province/State*</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMpCompChild;
