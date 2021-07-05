import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { loginSrvc } from "../../../../services/loginSrvc";
import "../ModalComp.css";

function ModalLogin(props) {
  //   const applyHandler = (e) => {
  //     e.preventDefault();
  //     applySrvc(email, password)
  //       .then((response) => {
  //         dispatch(loginAct(username, token, logstatus));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         dispatch(handleLogin(null, null, null, error.message));
  //       });
  //   };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <div>
          <h4>Submit Application</h4>
          <img src="https://i.ibb.co/XVZB7Lb/close-icon.png" alt="" onClick={props.onHide} />
        </div>
        <div>
          <h5>
            Are you sure to submit your application for Product Designer at Momo
            Wallet?
          </h5>
        </div>
        <div>
          <Button className="cancel-apply-button" onClick={props.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={}>Apply</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
