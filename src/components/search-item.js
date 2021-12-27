import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-item.module.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
//import SearchItemResultTable from "./search-item-result";

const userID = localStorage.getItem('USER_ID')

function SearchForItem(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

    let newRetailerData = {
        name: "",
        retailerName: "",
        retailerPhone: "",
        retailerEmail: "",
        retailerAddress: "",
        retailerMemo: "",
    }
    const resetRetailerData = {
        name: "",
        retailerName: "",
        retailerPhone: "",
        retailerEmail: "",
        retailerAddress: "",
        retailerMemo: "",
    }

    const [userId] = useState(userID);
    const [retailerName, setRetailerName] = useState("");
    const [retailerPhone, setRetailerPhone] = useState("");
    const [retailerEmail, setRetailerEmail] = useState("");
    const [retailerAddress, setRetailerAddress] = useState("");
    const [retailerMemo, setRetailerMemo] = useState("");

    const ApiCall = async () => {
        //const response = 
        await axios.post(`${baseURL}/retailer/add`,newRetailerData)
        //const data = await response.data;
        console.log(newRetailerData);
        //console.log(data);
        //setData(data);
        //return await response.data;
    }

    const onRetailerNameChange = (event) => {
        setRetailerName(event.target.value);
    }
    const onRetailerPhoneChange = (event) => {
        setRetailerPhone(event.target.value);
    }
    const onRetailerEmailChange = (event) => {
        setRetailerEmail(event.target.value);
    }
    const onRetailerAddressChange = (event) => {
        setRetailerAddress(event.target.value);
    }
    const onRetailerMemoChange = (event) => {
        setRetailerMemo(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        newRetailerData.name = userId;
        newRetailerData.retailerName = retailerName;
        newRetailerData.retailerPhone = retailerPhone;
        newRetailerData.retailerEmail = retailerEmail;
        newRetailerData.retailerAddress = retailerAddress;
        newRetailerData.retailerMemo = retailerMemo;
        console.log(newRetailerData);

        ApiCall();

        newRetailerData = resetRetailerData;
    }

    return(

        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>거래처등록</span>
            </div>
            <div className={styles.screenPage__nextButton}>
                <Link to={'/order/confirmitem'}><input type="button" value="거래처목록"/></Link>
            </div>
            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>거래처정보입력</span></div>
                <form onSubmit={onSubmit}>
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처이름 </label> 
                                <input type="text" onChange={onRetailerNameChange} required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">거래처연락처 </label> 
                                <input type="text" onChange={onRetailerPhoneChange} required/>
                            </div>

                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">거래처주소 </label> 
                                <input type="text" onChange={onRetailerAddressChange} required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">거래처이메일 </label> 
                                <input type="text" onChange={onRetailerEmailChange} required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">메모 </label> 
                                    <textarea onChange={onRetailerMemoChange} required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="등록"/>
                    </div>
                </form>
            </div>
            <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span></span></div>
            </div>
        </div>
    
    );
}

export default SearchForItem;