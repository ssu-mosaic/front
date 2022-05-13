import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-item.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
//import SearchItemResultTable from "./search-item-result";

const userID = localStorage.getItem("USER_ID");

function RetailerAdd() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  let newRetailerData = {
    userId: "",
    retailerName: "",
    retailerPhoneNo: "",
    retailerEmail: "",
    retailerDetail: "",
  };
  const resetRetailerData = {
    userId: "",
    retailerName: "",
    retailerPhoneNo: "",
    retailerEmail: "",
    retailerDetail: "",
  };

  const [userId] = useState(userID);
  const [retailerName, setRetailerName] = useState("");
  const [retailerPhone, setRetailerPhone] = useState("");
  const [retailerEmail, setRetailerEmail] = useState("");
  const [retailerMemo, setRetailerMemo] = useState("");

  // const ApiCall = async () => {
  //   const response = await axios.post(
  //     `${baseURL}/retailer/add`,
  //     newRetailerData
  //   );
  //   const data = await response.data;
  //   //console.log(newRetailerData);
  //   //console.log(data);

  //   //setData(data);
  //   //return await response.data;
  // };

  const onRetailerNameChange = (event) => {
    setRetailerName(event.target.value);
  };
  const onRetailerPhoneChange = (event) => {
    setRetailerPhone(event.target.value);
  };
  const onRetailerEmailChange = (event) => {
    setRetailerEmail(event.target.value);
  };
  const onRetailerMemoChange = (event) => {
    setRetailerMemo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    newRetailerData.userId = userId;
    newRetailerData.retailerName = retailerName;
    newRetailerData.retailerPhoneNo = retailerPhone;
    newRetailerData.retailerEmail = retailerEmail;
    newRetailerData.retailerDetail = retailerMemo;
    console.log(newRetailerData);

    axios.post(`${baseURL}/retailer/add`, newRetailerData).then((response) => {
      if (response.data !== null) {
        alert("added");
        //test
        window.location.href = "/order/retailer";
        //publish
        //window.location.href = "https://ssu-mosaic.github.io/order/retailer";
      } else {
        alert("add failed ");
      }
    });

    newRetailerData = resetRetailerData;
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Add Retailer</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={"/order/retailer"}>
          <input type="button" value="Retailer Menu" />
        </Link>
      </div>
      <div className={styles.screenPage__searchBox}>
        <div className={styles.screenPage_title}>
          <span>Retailer Detail</span>
        </div>
        <form onSubmit={onSubmit}>
          <div
            className={`${styles.screenPage__section_row} ${styles.screenPage__searchList}`}
          >
            <div className={styles.screenPage__section_column}>
              <div className={styles.screenPage__searchOption}>
                <label for="retailerName">Retailer Name </label>
                <input
                  type="text"
                  name="retailerName"
                  onChange={onRetailerNameChange}
                  required
                />
              </div>
            </div>
            <div className={styles.screenPage__section_column}>
              <div className={styles.screenPage__searchOption}>
                <label for="retailerEmail">Email </label>
                <input
                  type="text"
                  name="retailerEmail"
                  onChange={onRetailerEmailChange}
                  required
                />
              </div>
              <div className={styles.screenPage__searchOption}>
                <label for="retailerPhoneNo">Phone No </label>
                <input
                  type="text"
                  name="retailerPhoneNo"
                  onChange={onRetailerPhoneChange}
                  required
                />
              </div>
            </div>
            <div className={styles.screenPage__section_column}>
              <div className={styles.screenPage__searchOption}>
                <label for="retailerDetail">Description </label>
                <textarea
                  name="retailerDetail"
                  onChange={onRetailerMemoChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.screenPage__section_row}>
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default RetailerAdd;
