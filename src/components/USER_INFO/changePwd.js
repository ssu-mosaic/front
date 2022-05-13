import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import pwStyles from "../css/userInfo_pwForm.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");
function ChangeUserPwd() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  const [newPwd, setNewPwd] = useState("");
  const [newPwdAgain, setNewPwdAgain] = useState("");
  const [oldPwd, setOldPwd] = useState("");

  const onPwdChange = (event) => {
    setNewPwd(event.target.value);
  };
  const onPwdAgainChange = (event) => {
    setNewPwdAgain(event.target.value);
  };
  const onConfirmChange = (event) => {
    setOldPwd(event.target.value);
  };

  const onChangeSubmit = (event) => {
    event.preventDefault();
    if (newPwd !== newPwdAgain || oldPwd === newPwd) {
      alert("Password does not match or write new password");
    } else {
      const changeNewPwd = {
        userId: userID,
        userPwd: newPwd,
      };
      axios
        .put(`${baseURL}/myinfo/changepwd`, changeNewPwd)
        .then((response) => {
          if (response.data === true) {
            alert("PW edited");
            //test
            window.location.href = "/user/info";
            //publish
            //window.location.href = "https://ssu-mosaic.github.io/user/info";
          } else {
            alert("edit failed ");
          }
        });
    }
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Edit Password</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/user/info`}>
          <input type="button" value="Profile" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>Edit Password</div>
        <div className={pwStyles.userInfoBox}>
          <form onSubmit={onChangeSubmit}>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                Previous Password:
              </div>
              <input type="password" onChange={onConfirmChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>New Password : </div>
              <input type="password" onChange={onPwdChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                New Password rewrite:
              </div>
              <input type="password" onChange={onPwdAgainChange} required />
            </div>

            <input type="submit" value="Submit" className={pwStyles.button} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserPwd;
