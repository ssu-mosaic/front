import backgroundImg from "../image/login.jpg";
import logo from "../image/logo.JPG";
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let USER_ID = "";

function Login() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
  const [data, setData] = useState("");

  let newLoginData = {
    userId: "",
    userPw: "",
  };
  const resetLoginData = {
    userId: "",
    userPw: "",
  };

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const onIdChange = (event) => {
    setUserId(event.target.value);
  };
  const onPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newLoginData.userId = userId;
    newLoginData.userPw = userPw;

    axios.put(`${baseURL}/register`, newLoginData).then((response) => {
      setData(response.data);
      console.log(`서버로 보낸 데이터 : ${data}`);
    });

    //reset
    newLoginData = resetLoginData;
    if (true) {
      USER_ID = userId;
      localStorage.setItem("USER_ID", USER_ID);
      alert(`환영해요 ${userId}`);
      window.location.href = "https://ssu-mosaic.github.io/front";
      // should put real https addr
    }
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
              placeholder="아이디 입력"
              onChange={onIdChange}
              required="required"
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호 입력"
              onChange={onPwChange}
              required="required"
            />
          </div>
          <div className={styles.loginBox__loginOption}>
            <div className={styles.loginBox__loginOption_auto}>
              {/* <input type="checkbox" name="auto-login" checked/>
                            <label for="auto-login">자동 로그인</label>   */}
            </div>
            <input type="submit" value="로그인" />
          </div>
          <Link to={`/makeaccount`} className={styles.loginBox__lostIDPW}>
            {" "}
            {">> 회원가입을 하고 싶어요"}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
