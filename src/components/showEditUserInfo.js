import contentStyles from "./css/screen-content.module.css";
import styles from "./css/search-order.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import ReadUserInfo from "./readUserInfo";
import EditUserInfo from "./editUserInfo";
//import { Link } from "react-router-dom";

let userID = localStorage.getItem("USER_ID");

function ShowEditUserInfo() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  const emptyUserData = {
    userId: "",
    userPwd: "",
    userAddress: "",
    userName: "",
    userPhoneNo: "",
    userBusinessNo: "",
    userEmail: "",
  };
  const testUserData = {
    userId: "lomantic",
    userPwd: "12345678",
    userAddress: "mars",
    userName: "jhp",
    userPhoneNo: "000111333444",
    userBusinessNo: "0101010101010101",
    userEmail: "lomantic@gmail.com",
  };

  //while testing loading : false
  const [loading, setLoading] = useState(false);
  // testing useState : testUserData
  const [userData, setUserData] = useState(testUserData);
  const [editData, setEditData] = useState(false);

  useEffect(() => {
    const identification = {
      userId: userID,
    };

    axios.post(`${baseURL}/myinfo`, identification).then((response) => {
      setUserData(response.data);
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
    console.log(userData);
  };

  const onSaveClick = (event) => {
    event.preventDefault();
    setEditData(false);
    axios.put(`${baseURL}/myinfo/change`, userData).then((response) => {
      if (response.data === true) {
        alert("회원 정보 수정 완료");
      } else {
        alert(
          "회원 정보 수정 실패 \n 회원 정보 중 타 계정과 중복되는 정보가 있습니다 "
        );
      }
    });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>회원정보</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input
          type="button"
          value="회원정보수정"
          onClick={onEditDataClick}
          disabled={editData}
        />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <div>
            {loading ? (
              <strong>로딩중...</strong>
            ) : (
              <Fragment>
                <span>회원정보</span>
                {editData ? (
                  <EditUserInfo
                    userId={userData.userId}
                    userPwd={userData.userPwd}
                    userAddress={userData.userAddress}
                    userName={userData.userName}
                    userPhoneNo={userData.userPhoneNo}
                    userBusinessNo={userData.userBusinessNo}
                    userEmail={userData.userEmail}
                    onSaveClick={onSaveClick}
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
