import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { loginSrvc } from "../../../../services/loginSrvc";
import "../ModalComp.css";
// import { useSelector } from "react-redux";
// import { loginAct } from "../../../../redux/actions/loginAct";

function ModalLogin(props) {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [status, setStatus] = useState(false);
  const [validate, setValidate] = useState(false);
  // const [picture, setPicture] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    setEyes((prevCheck) => !prevCheck);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const store = window.localStorage;
    loginSrvc(email, password)
      .then((response) => {
        console.log("response", response);
        store.setItem("fullname", response.data.data.fullname);
        store.setItem("profile_pic", response.data.data.profile_pic);
        store.setItem("token", response.data.token);
        store.setItem("email", response.data.data.email);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // dispatch(loginAct(null, null, null, error.message));
      });
  };

  // function for login
  // succes: close login modal
  // failed: give failed notice
  // useEffect(() => {
  //   if (status === 200) {
  //     props.onHide;
  //   } else
  useEffect(() => {
    if (status === null) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [status]);
  console.log(status, "status");

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
        <Button variant="primary" onClick={loginHandler}>
          Sign in
        </Button>
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
          <a href="#signup" onClick={props.onRegis}>
            <span>Sign up</span>
          </a>
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;
