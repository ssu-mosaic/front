import backgroundImg from "../image/login.jpg";
import logo from "../image/logo.JPG";
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let USER_ID = "";

function Login() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  let newLoginData = {
    userId: "",
    userPwd: "",
  };
  const resetLoginData = {
    userId: "",
    userPwd: "",
  };

  const [userId, setUserId] = useState("");
  const [userPwd, setUserPw] = useState("");

  const onIdChange = (event) => {
    setUserId(event.target.value);
  };
  const onPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newLoginData.userId = userId;
    newLoginData.userPwd = userPwd;

    axios.post(`${baseURL}/admin/login`, newLoginData).then((response) => {
      if (response.data === true) {
        USER_ID = userId;
        localStorage.setItem("USER_ID", USER_ID);
        alert(`welcome ${userId}`);
        //test
        window.location.href = "/admin/inquiry";
        //when real
        // window.location.href =
        //   "https://ssu-mosaic.github.io/front/admin/inquiry";
        // should put real https addr
      } else {
        alert("wrong ID or Password");
      }
      //setData(response.data);
      //console.log(`서버로 보낸 데이터 : ${data}`);
    });

    //reset
    newLoginData = resetLoginData;
  };

  return (
    <div>
      <img src={backgroundImg} className={styles.bgImg} alt="background" />

      <div className={styles.loginBox}>
        <img src={logo} className={styles.login__logo} alt="logo" />
        <form className={styles.loginBox__loginForm} onSubmit={onSubmit}>
          <div className={styles.loginBox__IDPW}>
            <input
              name="username"
              type="text"
              placeholder="Admin ID"
              onChange={onIdChange}
              required="required"
            />
            <input
              name="password"
              type="password"
              placeholder="Admin PW"
              onChange={onPwChange}
              required="required"
            />
          </div>
          <div className={styles.loginBox__loginOption}>
            <div className={styles.loginBox__loginOption_auto}>
              <Link to={"/login"}>
                <div className={styles.loginBox__lostIDPW}>
                  {">> user mode"}
                </div>
              </Link>

              {/* <input type="checkbox" name="auto-login" checked/>
                            <label for="auto-login">자동 로그인</label>   */}
            </div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
