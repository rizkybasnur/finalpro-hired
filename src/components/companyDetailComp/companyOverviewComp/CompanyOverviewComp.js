import "./CompanyOverviewComp.css";
// import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";

function CompanyOverviewComp() {
  // const history = useHistory();
  // const [selectedItems, setSelectedItems] = useState([]);

  // const viewCompanyClick = (e) => {
  //   e.preventDefault();
  //   history.push("/companydetailpage");
  // };

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
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CompanyOverviewComp;
