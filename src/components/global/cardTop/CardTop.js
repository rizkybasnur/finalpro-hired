import React from "react";
import "./CardTop.css";
function CardTop({ data }) {
  const e = data;
  return (
    <div className="top-global">
      <div className="top">
        <div className="box-top">
          <img src={e.company_id.company_logo} alt="Ellipse-1-5" />
        </div>
        <div className="text-top">
          <h6>{e.company_id.company_name}</h6>
        </div>
        <div className="top-gam">
          <img src="https://i.ibb.co/MM8QCLP/Vector-2.png" alt="Vector-2" />
          <p>Berlin</p>
        </div>
        <h5 className="btn-top">
          <b>15 open positions</b>
        </h5>
      </div>
    </div>
  );
}

export default CardTop;
