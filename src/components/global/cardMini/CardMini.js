import React from "react";
import "./CardMini.css";
function CardMini({ data }) {
  console.log("data", data);
  const e = data;
  return (
    <div>
      <div className="featur-img">
        <div className="imgsrc" style={{ marginBottom: "54px" }}>
          <img src={e.company_id.company_logo} alt="Ellipse-1-8" />
        </div>
        <div className="textditail">
          <h5>
            <b>{e.job_title}</b>
          </h5>
          <div className="nama" style={{ marginBottom: "18.5px" }}>
            <img src="https://i.ibb.co/hLrtpzD/Vector-4.png" alt="Vector-4" />
            <p>{e.company_id.company_name}</p>
            <img src="https://i.ibb.co/ncFZfgF/Vector-5.png" alt="Vector-5" />
            <p>Berlin</p>
          </div>
          <div className="container-featur" style={{ marginBottom: "22px" }}>
            <h6 className="full">{e.job_types[0].description}</h6>
            <h6 className="urgen">Urgent </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMini;
