import backgroundImg from '../image/login.jpg';
import logo from '../image/logo.JPG';
import styles from "./css/Login.module.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
//import fs from 'fs';
import axios from "axios";

let USER_ID ="";

function Login(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    const [data, setData] = useState("");
    const [data2, setData2] = useState(99999999);
    
    const TestApiCall = async () => {
        const response = await axios.get(`${baseURL}/register`)
        setData(response.data);
        console.log(data);
    }
    
    // useEffect(() => {
    // // axios.get(`${baseURL}/register`).then((response) => {
    // //     setData(response.data);
    // // });
    //     TestApiCall();
    // }, []);

    let newLoginData = {
        userId: "",
        userPw: "",
    }
    const resetLoginData = {
        userId: "",
        userPw: "",
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

        axios
        .put(`${baseURL}/register`,newLoginData)
        .then((response) => {
            setData2(response.data);
        });
        console.log(data2);
        // send data to server
        console.log(newLoginData);
        
        // fs.readFile('./Data.json','utf8',(error, data) => {
        //     if(error){
        //         alert(error);
        //     }
        // console.log(data);
        //});
            //data = JSON.parse(data.toString());
        //     data = userId.toString();
        //     fs.writeFile('./Data.json',JSON.stringify(data), error => {
        //         if(error){
        //             alert(error);
        //         }
        //     });
        // });
        
        //reset 
        newLoginData = resetLoginData;
        if(true){
            USER_ID=userId;
            localStorage.setItem('USER_ID',USER_ID);
            alert(`환영해요 ${userId}`);
            window.location.href = "/"
        }
        
    }

    return(
        <div>
            <img src={backgroundImg} className={styles.bgImg} alt="background"/>

            <div className={styles.loginBox}>
                <img src={logo} className={styles.login__logo} alt="logo"/>
                <form className={styles.loginBox__loginForm} onSubmit={onSubmit}>
                    <div className={styles.loginBox__IDPW}>
                        <input name="username" type="text" placeholder="아이디 입력" onChange={onIdChange} required='required'/>
                        <input name="password" type="password" placeholder="비밀번호 입력" onChange={onPwChange} required='required'/>
                    </div>
                    <div className={styles.loginBox__loginOption}>
                        <div className={styles.loginBox__loginOption_auto}>
                            {/* <input type="checkbox" name="auto-login" checked/>
                            <label for="auto-login">자동 로그인</label>   */}
                        </div>          
                        <input  type="submit" value="로그인"/>
                    </div>
                    <Link to={`/makeaccount`} className={styles.loginBox__lostIDPW} > {'>> 회원가입을 하고 싶어요'}</Link>

                </form>
            </div>

        </div>
    );

}

export default Login;
