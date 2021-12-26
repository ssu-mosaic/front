import jeanStyles from "./jeanStyle.module.css";
import { Link } from "react-router-dom";
import logo from '../../image/jeanLogo.JPG';
import React, { useState, useEffect } from 'react';

import axios from "axios";

let USER_ID ="";

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
        <div className={jeanStyles.jeanBody}>
            <img src={logo} className={jeanStyles.logo_Img} alt="logo_Img"/>
            <section className={jeanStyles.login_form}>
                <form action=""> 
                    <div className={jeanStyles.int_area}>
                        <input type="email" name="email" id="email" autocomplete="off" required/>
                        <label for="email">E-mail</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="password" name="password" id="pw" autocomplete="off" required/>
                        <label for="pw">PASSWORD</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="password" name="pwch" id="pwch" autocomplete="off" required/>
                        <label for="pwch" id="pwch">PASSWORDCHECK</label>
                        <button type = "submit">check</button>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="name" id="name" autocomplete="off" required/>
                        <label for="name">NAME</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="businessNo" id="busNo" autocomplete="off" required/>
                        <label for="busNo">BUSINESS.NO</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="address" id="addr" autocomplete="off" required/>
                        <label for="addr">ADDRESS</label>
                    </div>
                    <div className={jeanStyles.int_area}>
                        <input type="text" name="phone" id="ph" autocomplete="off" required/>
                        <label for="ph">PHONE</label>
                    </div>

                    <div className={jeanStyles.btn_area}>
                        <button type = "submit" onclick="location.href='login.html'">OK</button>

                    </div>
                </form>
            </section>
        </div>

    );

}

export default JeanJoin;
