import jeanStyles from "./jeanStyle.module.css";
import logo from "../../image/jeanLogo.JPG";
import React, { useState } from "react";
import axios from "axios";

function JeanForgetPw() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  let newSearchData = {
    userEmail: "",
    userName: "",
    userId: "",
  };
  const resetSearchData = {
    userEmail: "",
    userName: "",
    userId: "",
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onIdChange = (event) => {
    setId(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newSearchData.userEmail = email;
    newSearchData.userName = name;
    newSearchData.userId = id;

    axios.post(`${baseURL}/findpwd`, newSearchData).then((response) => {
      console.log(response.data);
      //setLoginValid(response.data);
      //console.log(newLoginData);
      if (response.data === true) {
        alert(`입력하신 이메일로 비밀번호가 전송되었어요`);
        newSearchData = resetSearchData;
        window.location.href = "https://ssu-mosaic.github.io/login";
        //window.location.href = "/"
      } else {
        alert("없는 아이디 또는 이메일이 잘못 되었어요");
      }
    });
    //ApiCall();
  };

  return (
    <div className={jeanStyles.jeanBody}>
      <img src={logo} className={jeanStyles.logo_Img} alt="logo_Img" />
      <section className={jeanStyles.login_form}>
        <form onSubmit={onSubmit}>
          <div className={jeanStyles.int_area}>
            <input
              type="text"
              name="name"
              id="name"
              onChange={onNameChange}
              required
            />
            <label for="name">NAME</label>
          </div>
          <div className={jeanStyles.int_area}>
            <input
              type="text"
              name="id"
              id="id"
              onChange={onIdChange}
              required
            />
            <label for="email">Id</label>
          </div>
          <div className={jeanStyles.int_area}>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onEmailChange}
              required
            />
            <label for="email">E-mail</label>
          </div>
          <div className={jeanStyles.btn_area}>
            <button type="submit">OK</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default JeanForgetPw;
