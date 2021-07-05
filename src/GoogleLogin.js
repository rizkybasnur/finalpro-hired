import firebase from "firebase/app";
import "firebase/auth";
const googleProvider = new firebase.auth.GoogleAuthProvider();

const GoogleLogin = () => {
  const handleGoogleLoginPopUp = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleLoginPopUp}>login with google</button>
    </div>
  );
};

export default GoogleLogin;
