import backgroundImg from '../image/login.jpg';
import logo from '../image/logo.JPG';
import styles from "./css/Login.module.css";
import React, { useState } from 'react';
import axios from "axios";
//import { Navigate } from "react-router-dom";

function MakeAccount(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    const [data, setData] = useState("");

    let newAccountData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
    }
    const resetAccountData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
    }

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [businessNo, setBusinessNo] = useState("");

    const onEmailChange= (event) => {
        setUserEmail(event.target.value);
        console.log(userEmail);
    }
    const onBusinessChange= (event) => {
        setBusinessNo(event.target.value);
    }
    const onIdChange= (event) => {
        setUserId(event.target.value);
    }
    const onPwChange= (event) => {
        setUserPw(event.target.value);
    }

    const TestApiCall = async () => {
        const response = await axios.post(`${baseURL}/register`,newAccountData)
        setData(response.data);
        console.log(data);
        return await response.data;
    }

    const onSubmit= (event) => {
        event.preventDefault();
        newAccountData.email = userEmail;
        newAccountData.name = userId;
        newAccountData.businessNo= businessNo;
        newAccountData.password = userPw;
        //send data to server
        console.log(newAccountData);
        
        if(true){
            console.log("로그인 화면으로 이동합니다");
            //window.location.href = "/login"
        }
        
        // axios
        // .post(`${baseURL}/register`,newAccountData)
        // .then((response) => {
        //     const test_data = response.data;
        //     setData(test_data);
        //     console.log(data);
        // });
        
        setData(TestApiCall());
        console.log(data);
        //reset 
        newAccountData = resetAccountData;
    }


    return(
        <div>
            <img src={backgroundImg} className={styles.bgImg} alt="background"/>

            <div className={styles.loginBox}>
                <img src={logo} className={styles.login__logo} alt="logo"/>
                <form className={styles.loginBox__loginForm} onSubmit={onSubmit}>
                    <div className={styles.loginBox__IDPW}>
                        <input name="email" type="email" placeholder="이메일 입력" onChange={onEmailChange} required='required'/>
                        <input name="businessNo" type="text" placeholder="사업자번호 입력" onChange={onBusinessChange} required='required'/>
                        <input name="name" type="text" placeholder="아이디 입력" onChange={onIdChange} required='required'/>
                        <input name="password" type="password" placeholder="비밀번호 입력" onChange={onPwChange} required='required'/>
                    </div>
                    <div className={styles.loginBox__loginOption}>
                        <div className={styles.loginBox__loginOption_auto}>
                        </div>          
                        <input  type="submit" value="제출" />
                    </div>

                </form>
            </div>

        </div>
    );

}

export default MakeAccount;