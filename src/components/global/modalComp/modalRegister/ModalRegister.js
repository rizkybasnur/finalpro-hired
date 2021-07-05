import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { regisSrvc } from "../../../../services/regisSrvc";
import "../ModalComp.css";

function ModalRegister(props) {
  const [roles, setRoles] = useState("candidate");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [regVal, setRegVal] = useState(false);
  // const [logVal, setLogVal] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyes, setEyes] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyes((prevCheck) => !prevCheck);
  };
  console.log("eyes", eyes);

  const handleCandidate = (e) => {
    e.preventDefault();
    setRoles("candidate");
  };

  const handleEmployer = (e) => {
    e.preventDefault();
    setRoles("employer");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    regisSrvc(roles, firstName, lastName, email, password)
      .then((response) => {
        console.log(response);
        // const { status } = response.data;
        // dispatch(regisAct(roles, firstname, lastname, email, password));
      })
      .catch((error) => {
        console.log(error);
        // dispatch(regisAct(null, null, null, error.message));
      });
  };

  // useEffect(() => {
  //   if (status === 200) {
  //     setLoginmodal(true);
  //     setRegmodal(false);
  //   } else if (status === null) {
  //     setRegVal(false);
  //   } else {
  //     setRegVal(true);
  //   }
  // }, [status]);

  console.log("can", roles);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="body-register">
        <img
          className="close-button-x"
          src="https://i.ibb.co/XVZB7Lb/close-icon.png"
          alt=""
          onClick={props.onHide}
        />
        <h2>Create Hired Account</h2>
        <div className="alt-register">
          <button
            className={
              roles === "candidate" ? "button-active" : "button-non-active"
            }
            value={roles}
            onClick={handleCandidate}
          >
            <img
              className="alt-icon-person"
              src="https://i.ibb.co/SP8jdcK/person-white-icon.png"
              alt=""
            />
            as Candidate
          </button>
          <button
            className={
              roles === "employer" ? "button-active" : "button-non-active"
            }
            value={roles}
            onClick={handleEmployer}
          >
            <img
              className="alt-icon-bag"
              src="https://i.ibb.co/CwvNGrb/bag-green-icon.png"
              alt=""
            />
            as Employer
          </button>
        </div>
        <div className="register-username">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <view>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <img
            className="mata-password-register"
            value={eyes}
            src={
              eyes
                ? "https://i.ibb.co/p2nMKpC/mdi-eye.png"
                : "https://i.ibb.co/0h35thx/mdi-eye.png"
            }
            alt=""
            onClick={togglePasswordVisiblity}
          />
        </view>
        <div className="register-checkbox">
          <input type="checkbox" />
          <h6> I agree with Hired terms & conditions</h6>
        </div>
        <Button variant="primary" onClick={handleSignUp}>
          Sign up
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <div className="alt-login">
          <Button variant="danger" onClick={props.onHide}>
            Google
          </Button>
          <Button onClick={props.onHide}>Facebook</Button>
        </div>
        <p>
          Already have an account?<br></br>
          <a href="#signup" onClick={props.onSignIn}>
            <span>Sign in</span>
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalRegister;
