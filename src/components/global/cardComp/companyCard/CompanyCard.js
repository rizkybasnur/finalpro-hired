import "./CompanyCard.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { companyListAsync } from "../../../../redux/actions/companyListAct";

function CompanyCard({ data }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const containerClick = (id) => {
    history.push(`/companydetailpage/${id}`);
    dispatch(companyListAsync(id));
  };

  useEffect(() => {
    dispatch(companyListAsync());
  }, [dispatch]);

  return (
    <div className="parent-container-for-company-card">
      {data.map((e, index) => {
        return (
          <div
            key={`${index}-${e.company_name}`}
            className="container-for-company-card"
            onClick={() => {
              containerClick(e._id);
              dispatch(companyListAsync(e._id));
            }}
          >
            <div className="company-list-card">
              <div className="content-company-card">
                <img src={e.company_logo} alt="" />
                <h5>{e.company_name}</h5>
                <div className="location-company-card">
                  <img
                    src="https://i.ibb.co/WV3zyZV/location-icon.png"
                    alt=""
                  />
                  <h6>{e.location}</h6>
                </div>
                <h4>4 open position</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyCard;
