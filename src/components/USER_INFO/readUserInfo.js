import styles from "../css/userInfo.module.css";

function ReadUserInfo({
  userId,
  userPwd,
  userAddress,
  userName,
  userPhoneNo,
  userBusinessNo,
  userEmail,
}) {
  const blind = "*";

  return (
    <div className={styles.userInfoBox}>
      <ul className={styles.userInfoList}>
        <li>
          <div>ID : </div>
          <div className={styles.userInfoList__readonly}>{userId}</div>
        </li>
        <li>
          <div>PW : </div>
          <div className={styles.userInfoList__readonly}>
            {blind.repeat(userPwd.length)}
          </div>
        </li>
        <li>
          <div>Name : </div>
          <div className={styles.userInfoList__readonly}>{userName}</div>
        </li>
        <li>
          <div>Address : </div>
          <div className={styles.userInfoList__readonly}>{userAddress}</div>
        </li>
        <li>
          <div>Phone No : </div>
          <div className={styles.userInfoList__readonly}>{userPhoneNo}</div>
        </li>
        <li>
          <div>Business No : </div>
          <div className={styles.userInfoList__readonly}>{userBusinessNo}</div>
        </li>
        <li>
          <div>Email : </div>
          <div className={styles.userInfoList__readonly}>{userEmail}</div>
        </li>
      </ul>
    </div>
  );
}

export default ReadUserInfo;
