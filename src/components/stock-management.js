import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-order.module.css";
//import PaginationTableRender from "./TEST_TABLE/tableRender";
import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

let userID = localStorage.getItem('USER_ID')

function StockManagement(){

    const baseURL = "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

    let newStockData = {
        userName: "",
        stockName: "",
        stockCount: "",
    }
    const resetStockData = {
        userName: "",
        stockName: "",
        stockCount: "",
    }

    const [stockName, setStockName] = useState(""); 
    const [stockCount, setStockCount] = useState(""); 

    // const ApiCall = async () => {
    //     const response = await axios.post(`${baseURL}/stock/add`,newStockData)
    //     //const data = await response.data;
    //     console.log(response.data);
    //     console.log(newStockData);
    //     //console.log(data);
    //     //setData(data);
    //     //return await response.data;
    // }

    const onStockNameChange = (event) => {
        setStockName(event.target.value);
    }
    const onStockCountChange = (event) => {
        setStockCount(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        newStockData.userName = userID;
        newStockData.stockName = stockName;
        newStockData.stockCount = stockCount;
        console.log(newStockData);

        //ApiCall();
        axios.post(`${baseURL}/stock/add`,newStockData)
            .then((response) => {
                console.log(response.data);
            });

        newStockData = resetStockData;
    }

    return(
        <div className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}>
            <div className={styles.screenPage__searchItem}>
                <span>재고등록</span>
            </div>
            <div className={styles.screenPage__nextButton}>
            <Link to={'/order/requestorder'}><input type="button" value="발주요청"/></Link>
            </div>

            <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form onSubmit={onSubmit}>
                    <div className={`${styles.screenPage__section_column} ${styles.screenPage__searchList}`}>
                    <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="stockName">재고명 </label> 
                                <input type="text" onChange={onStockNameChange} name="stockName" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_row}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="stockCount">잔여재고 </label> 
                                <input type="number" onChange={onStockCountChange} name="stockCount" required/>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.screenPage__section_column}>
                        <input type="submit" value="추가"/>
                    </div>
                </form>
            </div> 
            {/* <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>검색옵션</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="orderDate">검색조건? </label> 
                                <input type="date" name="orderDate" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">매입거래처 </label> 
                                <input type="text" name="company" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">물품검색 </label> 
                                <input type="text" name="itemName" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">수량 </label> 
                                <input type="text" name="condition" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">검색조건? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">검색조건? </label> 
                                    <input type="number" name="condition" required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="조회"/>
                    </div>
                </form>
            </div> */}

            {/* <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span>검색결과</span></div>
                <PaginationTableRender/>
            </div> */}
        </div>
    
    );
}

export default StockManagement;