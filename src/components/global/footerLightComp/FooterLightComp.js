import React from "react";
// import logo from "../header/imageHeader/Logo.png";
// import vector from "./imageFooter/Vector@3x.png";
import "./FooterLightComp.css";

function FooterLightComp() {
  return (
    <div className="footer-contain">
      <div className="footer-light">
        <div className="footer-logo">
          <img src="https://i.ibb.co/hM4zcWm/Logo-Light.png" alt="Logo-Light" />
          <h6>Call us</h6>
          <h6>(62) 2534 7763</h6>
          <p>Ciputra World 2, Jl. Prof. DR. Satrio 12950, Jakarta Selatan</p>
          <p>support@hired.com</p>
        </div>
        <div className="footer-list">
          <div>
            <h6>For Candidates</h6>
            <p>Browse jobs</p>
            <p>Candidate dashboard</p>
          </div>
          <div>
            <h6>For Employers</h6>
            <p>Post a job</p>
            <p>Employer dashboard</p>
          </div>
          <div>
            <h6>Join Us</h6>
            <p>We don’t send spam so don’t worry</p>
            <div className="input-foot">
              <input type="text" placeholder="Your e-mail" />
              <img
                src="https://i.ibb.co/KLFgd8L/Vektor-footer.png"
                alt="Vektor-footer"
              />
              {/* <i>{vector}</i> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lightboot">
        <p>© Copyright 2021. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterLightComp;
