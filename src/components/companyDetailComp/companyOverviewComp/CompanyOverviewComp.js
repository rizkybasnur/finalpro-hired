import "./CompanyOverviewComp.css";
// import React, { useState } from "react";
import Card from "react-bootstrap/Card";
// import { useHistory } from "react-router-dom";

function CompanyOverviewComp({ getCompanyByID }) {
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
      <>
        {getCompanyByID && (
          <Card className="card-for-job-overview">
            <Card.Body className="body-card-for-overview-job">
              <div className="container-for-job-overview">
                <div className="title-head-overview">
                  <div>
                    <img src={getCompanyByID.company_logo} alt="Momo-Wallet" />
                  </div>
                  <div>
                    <h4>{getCompanyByID.company_name}</h4>
                    <h5>Open jobs: 3</h5>
                  </div>
                </div>
                {/* <div className="title-overview">
              <h5>Job Overview</h5>
            </div> */}
                <div className="data">
                  <div>
                    <img
                      src="https://i.ibb.co/pjTLN3D/Industry.png"
                      alt="Industry"
                    />
                  </div>
                  <div className="job-overview-string">
                    <h5>Industry</h5>
                    <h6>
                      {getCompanyByID.industry_categories &&
                        getCompanyByID.industry_categories[0].description}
                    </h6>
                  </div>
                </div>
                <div className="data2">
                  <div>
                    <img
                      src="https://i.ibb.co/jv1cQGT/Location-blue.png"
                      alt="Location-blue"
                    />
                  </div>
                  <div className="job-overview-string">
                    <h5>Location</h5>
                    <h6>{getCompanyByID.location}</h6>
                  </div>
                </div>
                <div className="data3">
                  <div>
                    <img
                      src="https://i.ibb.co/gMGwBwK/Company-size.png"
                      alt="Company-size"
                    />
                  </div>
                  <div className="job-overview-string">
                    <h5>Company size</h5>
                    <h6>
                      {getCompanyByID.company_size &&
                        getCompanyByID.company_size[0].description}
                    </h6>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        )}
      </>
    </div>
  );
}

export default CompanyOverviewComp;
