import styles from "../css/userInfo.module.css";

let userID = localStorage.getItem("USER_ID");

function ReadUserInfo({
  retailerName,
  retailerEmail,
  retailerPhoneNo,
  retailerDesc,
}) {
  return (
    <div className={styles.userInfoBox}>
      <ul className={styles.userInfoList}>
        <li>
          <div className={styles.userInfoList__title}>거래처 이름 : </div>
          <div className={styles.userInfoList__readonly}>{retailerName}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>거래처 이메일 : </div>
          <div className={styles.userInfoList__readonly}>{retailerEmail}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>거래처 번호 : </div>
          <div className={styles.userInfoList__readonly}>{retailerPhoneNo}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>거래처 설명 : </div>
          <div className={styles.userInfoList__readonly}>{retailerDesc}</div>
        </li>
      </ul>
    </div>
  );
}

export default ReadUserInfo;
