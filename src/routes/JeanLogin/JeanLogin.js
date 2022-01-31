import jeanStyles from "./jeanStyle.module.css";
import logo from "../../image/jeanLogo.JPG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const baseURL =
  "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
let USER_ID = "";
//let loginValid = false;

function JeanLogin() {
  const resetLoginData = {
    userId: "",
    userPwd: "",
  };

  let newLoginData = {
    userId: "",
    userPwd: "",
  };

  //const [loginValid, setLoginValid] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  //const ApiCall = () => {
  //useEffect(() => {
  //    axios.post(`${baseURL}/login`,newLoginData)
  //        .then((response) => {
  //            console.log(response.data);
  //setLoginValid(response.data);
  //console.log(newLoginData);
  //       });
  //let validCheck = await response.data;
  //loginValid = await response.data;

  //console.log(validCheck);
  //console.log(loginValid);

  //return await response.data;
  //}, []);
  //}

  const onIdChange = (event) => {
    setUserId(event.target.value);
  };
  const onPwChange = (event) => {
    setUserPw(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newLoginData.userId = userId;
    newLoginData.userPwd = userPw;

    axios.post(`${baseURL.url}/login`, newLoginData).then((response) => {
      console.log(response.data);
      //setLoginValid(response.data);
      //console.log(newLoginData);
      if (response.data === true) {
        USER_ID = userId;
        localStorage.setItem("USER_ID", USER_ID);
        alert(`환영해요 ${userId}`);
        newLoginData = resetLoginData;
        window.location.href = "https://ssu-mosaic.github.io/front";
        //window.location.href = "/"
      } else {
        alert("없는 아이디거나 비밀번호가 틀렸어요");
      }
    });
    //ApiCall();
  };

  return (
    <div className={jeanStyles.jeanBody}>
      <img src={logo} className={jeanStyles.logo_Img} alt="logo_Img" />
      <section className={jeanStyles.join_form}>
        <form onSubmit={onSubmit}>
          <div className={jeanStyles.int_area}>
            <input
              type="text"
              name="userId"
              id="userId"
              onChange={onIdChange}
              required
            />
            <label for="userId">ID</label>
          </div>
          <div className={jeanStyles.int_area}>
            <input
              type="password"
              name="pw"
              id="pw"
              onChange={onPwChange}
              required
            />
            <label for="pw">PASSWORD</label>
          </div>
          <div className={jeanStyles.btn_area}>
            <button type="submit" onclick="location.href=''">
              LOGIN
            </button>
          </div>
        </form>
        <div className={jeanStyles.caption}>
          <Link to={"/login/makeaccount"}> 회원가입</Link>
        </div>
        <div className={jeanStyles.caption}>
          <Link to={"/login/findid"}> ID 찾기</Link>
        </div>
        <div className={jeanStyles.caption}>
          <Link to={"/login/findpwd"}> PW 찾기</Link>
        </div>
      </section>
    </div>
  );
}

export default JeanLogin;