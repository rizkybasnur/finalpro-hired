import "../ModalComp.css";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { regisAsync } from "../../../../redux/actions/regisAct";
import { loginAsync } from "../../../../redux/actions/loginAct";

function ModalRegister(props) {
  const [eroles, setRoles] = useState("candidate");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyes, setEyes] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.regisred);
  const { roles } = useSelector((state) => state.regisred);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyes((prevCheck) => !prevCheck);
  };

  const handleCandidate = (e) => {
    e.preventDefault();
    setRoles("candidate");
  };

  const handleEmployer = (e) => {
    e.preventDefault();
    setRoles("employer");
  };

  const handleSignUp = () => {
    dispatch(regisAsync(firstName, lastName, email, password, eroles));
  };

  useEffect(() => {
    if (roles === "OK") {
      props.onSignUp();
    }
  }, [props, roles]);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="body-register">
        <img
          className="close-button-x"
          src="https://i.ibb.co/XVZB7Lb/close-icon.png"
          alt=""
          onClick={props.onHide}
          className="close-button-modal-logreg"
        />
        <h2>Create Hired Account</h2>
        <div className="alt-register">
          <button
            className={
              eroles === "candidate" ? "button-active" : "button-non-active"
            }
            value={eroles}
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
              eroles === "employer" ? "button-active" : "button-non-active"
            }
            value={eroles}
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
        {loading && (
          <div className="sr-only">
            <div class="loadingio-spinner-pulse-esho8tkkiyh">
              <div class="ldio-gkgrmmqd2nh">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        {error && <div className="eror-login">incorrect username/password</div>}
        {!loading && (
          <Button variant="primary" onClick={handleSignUp}>
            Sign up
          </Button>
        )}
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
