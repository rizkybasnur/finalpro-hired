import React from "react";
import "./FooterDarkComp.css";

function FooterDarkComp() {
  return (
    <div className="footer-contain2">
      <div className="footer-light2">
        <div className="footer-logo2">
          <img src="https://i.ibb.co/HqNq04p/LogoDark.png" alt="LogoDark" />
          <h6>Call us</h6>
          <h6>(62) 2534 7763</h6>
          <p>Ciputra World 2, Jl. Prof. DR. Satrio 12950, Jakarta Selatan</p>
          <p>support@hired.com</p>
        </div>
        <div className="footer-list2">
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
            <div className="input-foot2">
              <input type="text" placeholder="Your e-mail" />
              <img
                src="https://i.ibb.co/KLFgd8L/Vektor-footer.png"
                alt="Vektor-footer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lightboot2">
        <p>© Copyright 2021. All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterDarkComp;
