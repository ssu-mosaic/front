import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
//import PaginationTableRender from "./TEST_TABLE/tableRender";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

let userID = localStorage.getItem("USER_ID");

function StockManagement() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  let newStockData = {
    userId: "",
    stockName: "",
    stockCnt: "",
    //retailerName: "",
    stockUnit: "",
  };
  const resetStockData = {
    userId: "",
    stockName: "",
    stockCnt: "",
    //retailerName: "",
    stockUnit: "",
  };

  const [stockName, setProductName] = useState("");
  const [stockCnt, setStockCount] = useState(-1);
  //const [retailerName, setRetailerName] = useState("");
  const [stockUnit, setProductUnit] = useState("");
  // const ApiCall = async () => {
  //     const response = await axios.post(`${baseURL}/stock/add`,newStockData)
  //     //const data = await response.data;
  //     console.log(response.data);
  //     console.log(newStockData);
  //     //console.log(data);
  //     //setData(data);
  //     //return await response.data;
  // }

  const onProductNameChange = (event) => {
    setProductName(event.target.value);
  };
  const onProductUnitChange = (event) => {
    setProductUnit(event.target.value);
  };
  // const onRetailerNameChange = (event) => {
  //   setRetailerName(event.target.value);
  // };
  const onStockCntChange = (event) => {
    setStockCount(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newStockData.userId = userID;
    newStockData.stockName = stockName;
    //newStockData.retailerName = retailerName;
    newStockData.stockUnit = stockUnit;
    newStockData.stockCnt = stockCnt;
    console.log(newStockData);

    //ApiCall();
    axios.post(`${baseURL}/stock/add`, newStockData).then((response) => {
      if (response.data !== null) {
        alert("added");
        //test
        window.location.href = "/stock/edit";
        //publish
        //window.location.href = "https://ssu-mosaic.github.io/stock/edit";
      } else {
        alert("add failed");
      }
    });

    newStockData = resetStockData;
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Add Stock</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/stock/edit"}>
          <input type="button" value="stock" />
        </Link>
      </div>

      <div className={styles.screenPage__searchBox}>
        <div className={styles.screenPage_title}>
          <span>option</span>
        </div>
        <form onSubmit={onSubmit}>
          <div
            className={`${styles.screenPage__section_column} ${styles.screenPage__searchList}`}
          >
            <div className={styles.screenPage__section_row}>
              <div className={styles.screenPage__searchOption}>
                <label for="stockName">Stock Name </label>
                <input
                  type="text"
                  onChange={onProductNameChange}
                  name="stockName"
                  required
                />
              </div>
              {/* <div className={styles.screenPage__searchOption}>
                <label for="retailerName">??????????????? </label>
                <input
                  type="text"
                  onChange={onRetailerNameChange}
                  name="retailerName"
                  required
                />
              </div> */}
            </div>
            <div className={styles.screenPage__section_row}>
              <div className={styles.screenPage__searchOption}>
                <label for="stockCnt">count </label>
                <input
                  type="number"
                  onChange={onStockCntChange}
                  name="stockCnt"
                  required
                />
              </div>
              <div className={styles.screenPage__searchOption}>
                <label for="stockUnit">unit </label>
                <input
                  type="text"
                  onChange={onProductUnitChange}
                  name="stockUnit"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.screenPage__section_column}>
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
      {/* <div className={styles.screenPage__searchBox}>
                <div className={styles.screenPage_title}><span>????????????</span></div>
                <form method="get">
                    <div className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="orderDate">????????????? </label> 
                                <input type="date" name="orderDate" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="company">??????????????? </label> 
                                <input type="text" name="company" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="itemName">???????????? </label> 
                                <input type="text" name="itemName" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">?????? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                            <div className={styles.screenPage__searchOption}>
                                <label for="condition">????????????? </label> 
                                <input type="text" name="condition" required/>
                            </div>
                        </div>
                        <div className={styles.screenPage__section_column}>
                                <div className={styles.screenPage__searchOption}>
                                    <label for="condition">????????????? </label> 
                                    <input type="number" name="condition" required/>
                                </div>
                        </div>
                    </div>
                    <div className={styles.screenPage__section_row}>
                            <input type="submit" value="??????"/>
                    </div>
                </form>
            </div> */}

      {/* <div className={styles.screenPage__searchResult}>
                <div className={styles.screenPage_title}><span>????????????</span></div>
                <PaginationTableRender/>
            </div> */}
    </div>
  );
}

export default StockManagement;
