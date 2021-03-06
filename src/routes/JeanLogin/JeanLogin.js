import jeanStyles from "./jeanStyle.module.css";
import logo from "../../image/jeanLogo.JPG";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const baseURL =
  "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

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

    axios.post(`${baseURL}/login`, newLoginData).then((response) => {
      console.log(response.data);
      //setLoginValid(response.data);
      //console.log(newLoginData);
      if (response.data === true) {
        USER_ID = userId;
        localStorage.setItem("USER_ID", USER_ID);
        alert(`welcome ${userId}`);
        newLoginData = resetLoginData;
        //when publish
        //window.location.href = "https://ssu-mosaic.github.io/front";
        //when test
        window.location.href = "/";
      } else {
        alert("wrong password or non existing ID");
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
            <button type="submit">LOGIN</button>
          </div>
        </form>
        <div className={jeanStyles.caption}>
          <Link to={"/login/makeaccount"}> Register</Link>
        </div>
        {/* <div className={jeanStyles.caption}>
          <Link to={"/login/findid"}> ID ??????</Link>
        </div>
        <div className={jeanStyles.caption}>
          <Link to={"/login/findpwd"}> PW ??????</Link>
        </div> */}
        <div className={jeanStyles.caption}>
          <Link to={"/admin/login"}> Administer</Link>
        </div>
      </section>
    </div>
  );
}

export default JeanLogin;
