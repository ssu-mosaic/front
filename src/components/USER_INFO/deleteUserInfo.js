import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import pwStyles from "../css/userInfo_pwForm.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");
function DeleteUserInfo() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

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
    if (pwd !== pwdAgain || lastConfirm !== "확인했습니다") {
      alert("비밀번호 불일치 또는 인증문자 불일치");
    } else {
      const identification = {
        userId: userID,
      };
      axios.delete(`${baseURL}/withdraw`, identification).then((response) => {
        if (response.data === true) {
          alert("회원 탈퇴 완료");
        } else {
          alert("회원 탈퇴 실패 재시도 해주세요 ");
        }
      });
    }
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>회원탈퇴</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/user/info`}>
          <input type="button" value="회원정보" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>회원탈퇴</div>
        <div className={pwStyles.userInfoBox}>
          <form onSubmit={onDeleteSubmit}>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>비밀번호 : </div>
              <input type="password" onChange={onPwdChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div className={pwStyles.userInfoBox__title}>
                비밀번호 재확인:
              </div>
              <input type="password" onChange={onPwdAgainChange} required />
            </div>
            <div className={pwStyles.userInfoBox__row}>
              <div
                className={`${pwStyles.userInfoBox__title} ${pwStyles.alertMessage}`}
              >
                회원 탈퇴시 모든 정보가 삭제 되며 복구될 수 없음을
              </div>
              <input
                type="text"
                placeholder="확인했습니다"
                onChange={onConfirmChange}
                className={pwStyles.alertMessage}
                required
              />
            </div>
            <input type="submit" value="탈퇴요청" className={pwStyles.button} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserInfo;
