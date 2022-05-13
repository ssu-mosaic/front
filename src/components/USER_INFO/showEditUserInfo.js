import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import ReadUserInfo from "./readUserInfo";
import EditUserInfo from "./editUserInfo";
//import { Link } from "react-router-dom";

let userID = localStorage.getItem("USER_ID");

function ShowEditUserInfo() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  const emptyUserData = {
    userId: "",
    userPwd: "",
    userAddress: "",
    userName: "",
    userPhoneNo: "",
    userBusinessNo: "",
    userEmail: "",
  };

  // const testUserData = {
  //   userId: "lomantic",
  //   userPwd: "12345678",
  //   userAddress: "mars",
  //   userName: "jhp",
  //   userPhoneNo: "000111333444",
  //   userBusinessNo: "0101010101010101",
  //   userEmail: "lomantic@gmail.com",
  // };

  //while testing loading : false
  const [loading, setLoading] = useState(false);
  // testing useState : testUserData real: emptyUserData
  const [userData, setUserData] = useState(emptyUserData);
  const [newUserData, setNewUserData] = useState(emptyUserData);
  const [editData, setEditData] = useState(false);

  useEffect(() => {
    const identification = {
      userId: userID,
    };

    axios.post(`${baseURL}/myinfo`, identification).then((response) => {
      setUserData(response.data);
      setNewUserData(response.data);
      setLoading(false);
    });
  }, []);

  const onEditDataClick = (event) => {
    event.preventDefault();
    setEditData(true);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...userData };
    newFormData[fieldName] = fieldValue;

    setUserData(newFormData);
    setNewUserData(newFormData);
    //console.log(userData);
  };

  const onCancelClick = (event) => {
    event.preventDefault();
    setEditData(false);
    setNewUserData(userData);
  };

  const onSaveClick = (event) => {
    event.preventDefault();
    setEditData(false);
    axios.put(`${baseURL}/myinfo/change`, userData).then((response) => {
      if (response.data === true) {
        alert("edited");
      } else {
        alert("edit failed wrong password or information ");
      }
    });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Profile</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input
          type="button"
          value="Edit"
          onClick={onEditDataClick}
          disabled={editData}
        />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <div>
            {loading ? (
              <strong>loading...</strong>
            ) : (
              <Fragment>
                <span>Profile</span>
                {editData ? (
                  <EditUserInfo
                    userId={newUserData.userId}
                    userPwd={newUserData.userPwd}
                    userAddress={newUserData.userAddress}
                    userName={newUserData.userName}
                    userPhoneNo={newUserData.userPhoneNo}
                    userBusinessNo={newUserData.userBusinessNo}
                    userEmail={newUserData.userEmail}
                    onSaveClick={onSaveClick}
                    onCancelClick={onCancelClick}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadUserInfo
                    userId={userData.userId}
                    userPwd={userData.userPwd}
                    userAddress={userData.userAddress}
                    userName={userData.userName}
                    userPhoneNo={userData.userPhoneNo}
                    userBusinessNo={userData.userBusinessNo}
                    userEmail={userData.userEmail}
                  />
                )}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEditUserInfo;
