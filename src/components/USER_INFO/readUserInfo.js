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
          <div>아이디 : </div>
          <div className={styles.userInfoList__readonly}>{userId}</div>
        </li>
        <li>
          <div>비밀번호 : </div>
          <div className={styles.userInfoList__readonly}>
            {blind.repeat(userPwd.length)}
          </div>
        </li>
        <li>
          <div>이름 : </div>
          <div className={styles.userInfoList__readonly}>{userName}</div>
        </li>
        <li>
          <div>주소 : </div>
          <div className={styles.userInfoList__readonly}>{userAddress}</div>
        </li>
        <li>
          <div>전화번호 : </div>
          <div className={styles.userInfoList__readonly}>{userPhoneNo}</div>
        </li>
        <li>
          <div>사업자번호 : </div>
          <div className={styles.userInfoList__readonly}>{userBusinessNo}</div>
        </li>
        <li>
          <div>이메일 : </div>
          <div className={styles.userInfoList__readonly}>{userEmail}</div>
        </li>
      </ul>
    </div>
  );
}

export default ReadUserInfo;
