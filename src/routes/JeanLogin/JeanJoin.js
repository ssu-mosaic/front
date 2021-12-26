import jeanStyles from "./jeanStyle.module.css";
import { Link } from "react-router-dom";
import logo from '../../image/jeanLogo.JPG';
import React, { useState, useEffect } from 'react';

import axios from "axios";


function JeanJoin(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
    const [data, setData] = useState("");
    const [data2, setData2] = useState(99999999);
    
    const TestApiCall = async () => {
        const response = await axios.get(`${baseURL}/register`)
        setData(response.data);
        console.log(data);
    }
    
    useEffect(() => {
    // axios.get(`${baseURL}/register`).then((response) => {
    //     setData(response.data);
    // });
        TestApiCall();
    }, []);

    let newLoginData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
        address: "",
        phone: ""
    }
    const resetLoginData = {
        email: "",
        businessNo: "",
        name: "",
        password: "",
        address: "",
        phone: ""
    }

    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userPwRe, setUserPwRe] = useState("");
    const [pwValid, setPwValid] = useState(false);
    const [businessNo, setBusinessNo] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

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
        newLoginData.name = userId;
        newLoginData.password = userPw;
        newLoginData.businessNo = businessNo;
        newLoginData.email = email;
        newLoginData.address = address;
        newLoginData.phone = phoneNum;

        axios
        .put(`${baseURL}/register`,newLoginData)
        .then((response) => {
            setData2(response.data);
        });
        console.log(data2);
        // send data to server
        console.log(newLoginData);
        
        //reset 
        newLoginData = resetLoginData;
        if(true){
            alert("가입 완료 로그인 화면으로 갈게요");
            window.location.href = "/login"
        }
        else{
            alert("아이디 중복 확인 또는 비밀번호 확인해주세요");
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
