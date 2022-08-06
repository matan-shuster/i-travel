import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import apiService from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import {GoogleOAuthProvider, GoogleLogin, useGoogleOneTapLogin} from "@react-oauth/google";
import Cookies from "js-cookie";
import styles from "./LoginComponent.module.css"
import logo from "../../assets/logo.png";

function LoginComponent({ setUserID }) {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  function handleCallbackResponse(response) {
    const decodedToken = jwtDecode(response.credential);
    setUser(decodedToken);
    checkIfUserExists(decodedToken);
  }

  // useEffect(() => {
  //   if(Cookies.get("userID")){
  //       setUserID(Cookies.get("userID"));
  //       navigate("/trips/list");
  //   }
  //
  // },[]);

  function setCookie(userID) {
    Cookies.set("userID", userID, { expires: 1 });
  }
  async function checkIfUserExists(user) {
    const allUsers = await apiService.getAllUsers();
    const userExists = allUsers.filter((dbUser) => dbUser.sub === user.sub);
    if (userExists.length !== 0) {
      setUserID(userExists[0].id);
      setCookie(userExists[0].id);
    } else {
      await createUser(user);
    }
    navigate("/trips/list");
  }
  async function createUser(user) {
    const newUser = await apiService.createUser(user);
    setUserID(newUser.id);
    setCookie("userID", newUser.id, { expires: 1 });
  }

  return (
    <div className={styles.loginPage}>
      <img src={logo} className={styles.logo}/>
          <div className={styles.loginText}>
            I Travel
        </div>
      <div className={styles.googleLogin}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_AUTH_KEY}>
        <GoogleLogin
            onSuccess={credentialResponse => {
                handleCallbackResponse(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            useOneTap
        />
      </GoogleOAuthProvider>
      </div>
    </div>
  );
}
export default LoginComponent;
