import styles from "../css/userInfo.module.css";

//let userID = localStorage.getItem("USER_ID");

function ReadUserInfo({
  retailerName,
  retailerEmail,
  retailerPhoneNo,
  retailerDetail,
}) {
  return (
    <div className={styles.userInfoBox}>
      <ul className={styles.userInfoList}>
        <li>
          <div className={styles.userInfoList__title}>Retailer Name : </div>
          <div className={styles.userInfoList__readonly}>{retailerName}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>Email : </div>
          <div className={styles.userInfoList__readonly}>{retailerEmail}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>Phone No : </div>
          <div className={styles.userInfoList__readonly}>{retailerPhoneNo}</div>
        </li>
        <li>
          <div className={styles.userInfoList__title}>Description : </div>
          <div className={styles.userInfoList__readonly}>{retailerDetail}</div>
        </li>
      </ul>
    </div>
  );
}

export default ReadUserInfo;
