import jeanStyles from "./jeanStyle.module.css";
//import { Link } from "react-router-dom";
import logo from '../../image/jeanLogo.JPG';
import React, { useState, useEffect } from 'react';

import axios from "axios";


function JeanJoin(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

    useEffect(() => {
        
    }, []);

    let newAccountData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
        address: "",
        phone: ""
    }
    const resetAccountData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
        address: "",
        phone: ""
    }
    const [data, setData] = useState(false);

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPwRe, setUserPwRe] = useState("");
    const [pwValid, setPwValid] = useState(false);
    const [businessNo, setBusinessNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

    const ApiCall = async () => {
        const response = await axios.post(`${baseURL}/register`,newAccountData)
        const data = await response.data;
        console.log(data);
        //setData(data);
        //return await response.data;
    }

    const onIdChange= (event) => {
        setUserId(event.target.value);
    }
    const onPwChange= (event) => {
        setPwValid(false);
        setUserPw(event.target.value);
    }
    const onPwReChange= (event) => {
        setPwValid(false);
        setUserPwRe(event.target.value);
    }
    const onPwCheckClick= () =>{
        if(userPw === userPwRe){
            setPwValid(true);
            alert("비밀번호 일치확인");
        }
        else{
            setPwValid(false);
            alert("비밀번호 불일치");
        }
    }
    const onBusinessNoChange= (event) => {
        setBusinessNo(event.target.value);
    }
    const onEmailChange= (event) => {
        setEmail(event.target.value);
    }
    const onAddressChange= (event) => {
        setAddress(event.target.value);
    }
    const onPhoneChange= (event) => {
        setPhoneNum(event.target.value);
    }

    const onSubmit= (event) => {
        event.preventDefault();
        newAccountData.name = userId;
        newAccountData.password = userPw;
        newAccountData.businessNo = businessNo;
        newAccountData.email = email;
        newAccountData.address = address;
        newAccountData.phone = phoneNum;

        ApiCall();

        //reset 
        newAccountData = resetAccountData;
        if((pwValid === true)){
            alert("가입 완료 로그인 화면으로 갈게요");
            window.location.href = "/login"
        }
        else{
            alert("가입 실패 비밀번호 등을 살펴보세요 ");
        }
        
    }

    return(
        <div className={jeanStyles.jeanBody}>
            <img src={logo} className={jeanStyles.logo_Img} alt="logo_Img"/>
            <section className={jeanStyles.login_form}>
                <form onSubmit={onSubmit}> 
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="userId" id="userId" onChange={onIdChange}  required/>
                        <label for="userId">ID</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="password" name="password" id="pw" onChange={onPwChange} required/>
                        <label for="pw">PASSWORD</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="password" name="pwch" id="pwch" onChange={onPwReChange} required/>
                        <label for="pwch" id="pwch">PASSWORD CHECK</label>
                        <button type = "button" onClick={onPwCheckClick}>check</button>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="businessNo" id="busNo" onChange={onBusinessNoChange} required/>
                        <label for="busNo">BUSINESS.NO</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="email" name="email" id="email" onChange={onEmailChange} required/>
                        <label for="email">E-mail</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="address" id="addr" onChange={onAddressChange} required/>
                        <label for="addr">ADDRESS</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="phone" id="ph" onChange={onPhoneChange} required/>
                        <label for="ph">PHONE</label>
                    </div>

                    <div className={jeanStyles.btn_area}>
                        <button type = "submit">OK</button>

                    </div>
                </form>
            </section>
        </div>

    );

}

export default JeanJoin;
