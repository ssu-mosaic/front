import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import pwStyles from "../css/userInfo_pwForm.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");
function ChangeUserPwd() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

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

  const onDeleteSubmit = (event) => {
    event.preventDefault();
    if (newPwd !== newPwdAgain || oldPwd === newPwd) {
      alert("비밀번호 불일치 또는 이전과 다른 비밀번호를 작성해주세요");
    } else {
      const changeNewPwd = {
        userId: userID,
        userPwd: newPwd,
      };
      axios
        .put(`${baseURL}/myinfo/changepwd`, changeNewPwd)
        .then((response) => {
          if (response.data === true) {
            alert("비밀번호 수정 완료");
          } else {
            alert("비밀번호 수정 실패 재시도 해주세요 ");
          }
        });
    }
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>비밀번호 수정</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/user/info`}>
          <input type="button" value="회원정보" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>비밀번호 수정</div>
        <div className={pwStyles.userInfoBox}>
          <form onSubmit={onDeleteSubmit}>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                이전 비밀번호 확인:
              </div>
              <input type="password" onChange={onConfirmChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>새 비밀번호 : </div>
              <input type="password" onChange={onPwdChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                새 비밀번호 재확인:
              </div>
              <input type="password" onChange={onPwdAgainChange} required />
            </div>

            <input type="submit" value="수정요청" className={pwStyles.button} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserPwd;
