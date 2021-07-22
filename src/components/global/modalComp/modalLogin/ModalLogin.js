import "../ModalComp.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginAsync } from "../../../../redux/actions/loginAct";
import { clear } from "../../../../redux/actions/regisAct";

function ModalLogin(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [eyes, setEyes] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const { loading, error } = useSelector((state) => state.loginred);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyes((prevCheck) => !prevCheck);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAsync(email, password));
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <img
          src="https://i.ibb.co/XVZB7Lb/close-icon.png"
          alt=""
          onClick={props.onHide}
          className="close-button-modal-logreg"
        />
        <h2>Login to Hired</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div>
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <img
            className="mata-password"
            value={eyes}
            src={
              eyes
                ? "https://i.ibb.co/p2nMKpC/mdi-eye.png"
                : "https://i.ibb.co/0h35thx/mdi-eye.png"
            }
            alt=""
            onClick={togglePasswordVisiblity}
          />
        </div>
        {loading && (
          // <div className="sr-only">
          //   <Spinner animation="border" role="status">
          //     <span></span>
          //   </Spinner>
          // </div>
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
          <Button variant="primary" onClick={loginHandler}>
            Sign in
          </Button>
        )}
        <h6>Forgot password?</h6>
      </Modal.Body>
      <Modal.Footer>
        <div className="alt-login">
          <Button variant="danger" onClick={props.onHide}>
            Google
          </Button>
          <Button onClick={props.onHide}>Facebook</Button>
        </div>
        <p>
          Don't have an account?<br></br>
          <a
            href="#signup"
            onClick={() => {
              props.onRegis();
              dispatch(clear());
            }}
          >
            <span>Sign up</span>
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;
