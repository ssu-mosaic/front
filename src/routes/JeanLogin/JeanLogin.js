import jeanStyles from "./jeanStyle.module.css";
import logo from '../../image/jeanLogo.JPG';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import axios from "axios";

let USER_ID ="";

function JeanLogin(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    const [data, setData] = useState("");
    const [data2, setData2] = useState(99999999);
    
    const TestApiCall = async () => {
        const response = await axios.get(`${baseURL}/register`)
        setData(response.data);
        console.log(data);
    }
    
    useEffect(() => {
        TestApiCall();
    }, []);

    const resetLoginData = {
        name: "",
        password: "",
    }

    let newLoginData = {
        name: "",
        password: "",
    }

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");

    const onIdChange= (event) => {
        setUserId(event.target.value);
    }
    const onPwChange= (event) => {
        setUserPw(event.target.value);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        newLoginData.userId = userId;
        newLoginData.userPw = userPw;

        if(true){
            USER_ID=userId;
            localStorage.setItem('USER_ID',USER_ID);
            alert(`환영해요 ${userId}`);
            newLoginData = resetLoginData;
            window.location.href = "/"

        }
        
    }

    return(
        <div className={jeanStyles.jeanBody}>
            <img src={logo} className={jeanStyles.logo_Img} alt="logo_Img"/>
            <section className={jeanStyles.join_form}>
                <form onSubmit={onSubmit}>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="userId" id="userId" onChange={onIdChange}  required/>
                        <label for="userId">ID</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="password" name="pw" id="pw" onChange={onPwChange} required/>
                        <label for="pw">PASSWORD</label>
                    </div>
                    <div className={jeanStyles.btn_area}>
                        <button type = "submit" onclick="location.href=''">LOGIN</button>
                    </div>
                </form>
                <div className={jeanStyles.caption}>
                    <Link to ={"/login/makeaccount"}> 회원가입</Link>
                    {/* <a href="join.html">Join</a> */}
                </div>
                <div className={jeanStyles.caption}>
                    <Link to ={"/login/makeaccount"}> ID/PW 찾기</Link>
                    {/* <a href="forgetPass.html">Forgot Password?</a> */}
                </div>
            </section>
        </div>

    );

}

export default JeanLogin;