import React from "react";
import "./NotifEmptyComp.css";

function NotifEmptyComp() {
  return (
    <div className="container-NotifEmptyComp">
      <h3>Notifications</h3>
      <div className="child-NotifEmptyComp">
        <img src="https://i.ibb.co/cYnzZyY/New-letter.png" alt="New-letter" />
        <h4>See all your notifications here</h4>
        <h5>You will get the latest info and updates from us.</h5>
      </div>
    </div>
  );
}

export default NotifEmptyComp;
