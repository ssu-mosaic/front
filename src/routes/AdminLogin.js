import backgroundImg from "../image/login.jpg";
import logo from "../image/logo.JPG";
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let USER_ID = "";

function Login() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

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
        alert(`환영해요 ${userId}`);
        //test
        //window.location.href = "/admin/inquiry";
        //when real
        window.location.href =
          "https://ssu-mosaic.github.io/front/admin/inquiry";
        // should put real https addr
      } else {
        alert("잘못된 아이디 또는 비밀번호입니다");
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
              placeholder="관리자 아이디 입력"
              onChange={onIdChange}
              required="required"
            />
            <input
              name="password"
              type="password"
              placeholder="관리자 비밀번호 입력"
              onChange={onPwChange}
              required="required"
            />
          </div>
          <div className={styles.loginBox__loginOption}>
            <div className={styles.loginBox__loginOption_auto}>
              <Link to={"/login"}>
                <div className={styles.loginBox__lostIDPW}>
                  {">> 유저모드로 돌아가기"}
                </div>
              </Link>

              {/* <input type="checkbox" name="auto-login" checked/>
                            <label for="auto-login">자동 로그인</label>   */}
            </div>
            <input type="submit" value="로그인" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
