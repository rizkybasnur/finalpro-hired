import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import "./ModalApply.css";

function ModalApply(props) {
  const history = useHistory();
  const applyHandler = (e) => {
    e.preventDefault();
    history.push("/jobdetailpage/submitted");
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="modal-apply">
        <div className="title-modal-apply">
          <h3>Submit Application</h3>
          <img
            className="close-apply-icon"
            src="https://i.ibb.co/1rWd0pV/close-icon-black.png"
            alt=""
            onClick={props.onHide}
          />
        </div>
        <div>
          <h5 className="detail-modal-apply">
            Are you sure to submit your application for Product Designer at Momo
            Wallet?
          </h5>
        </div>
        <div className="containers-button-apply">
          <button className="cancel-apply-button" onClick={props.onHide}>
            Cancel
          </button>
          <button className="apply-apply-button" onClick={applyHandler}>
            Apply
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalApply;
