import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import pwStyles from "../css/userInfo_pwForm.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");
function DeleteUserInfo() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  const [pwd, setPwd] = useState("");
  const [pwdAgain, setPwdAgain] = useState("");
  const [lastConfirm, setLastConfirm] = useState("");

  const onPwdChange = (event) => {
    setPwd(event.target.value);
  };
  const onPwdAgainChange = (event) => {
    setPwdAgain(event.target.value);
  };
  const onConfirmChange = (event) => {
    setLastConfirm(event.target.value);
  };

  const onDeleteSubmit = (event) => {
    event.preventDefault();
    if (pwd !== pwdAgain || lastConfirm !== "Proceed") {
      alert("Password does not match or you should agree to the term");
    } else {
      const identification = {
        userId: userID,
      };
      axios.put(`${baseURL}/withdraw`, identification).then((response) => {
        if (response.data === true) {
          alert("user withdraw complete");
          localStorage.setItem("USER_ID", null);
          //test
          //window.location.href = "/login";
          //publish
          window.location.href = "https://ssu-mosaic.github.io/login";
        } else {
          alert("withdraw failed");
        }
      });
    }
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Withdraw</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/user/info`}>
          <input type="button" value="Profile" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>Withdraw</div>
        <div className={pwStyles.userInfoBox}>
          <form onSubmit={onDeleteSubmit}>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>Password : </div>
              <input type="password" onChange={onPwdChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                Password rewrite :
              </div>
              <input type="password" onChange={onPwdAgainChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div
                className={`${pwStyles.userInfoBox__title} ${pwStyles.alertMessage}`}
              >
                All Data will be deleted permanently and cannot be restored ==
              </div>
              <input
                type="text"
                placeholder="Proceed"
                onChange={onConfirmChange}
                className={pwStyles.alertMessage}
                required
              />
            </div>
            <input type="submit" value="Withdraw" className={pwStyles.button} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserInfo;
