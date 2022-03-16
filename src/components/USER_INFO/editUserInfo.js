import styles from "../css/userInfo.module.css";

function EditUserInfo({
  userId,
  userPwd,
  userAddress,
  userName,
  userPhoneNo,
  userBusinessNo,
  userEmail,
  onSaveClick,
  onCancelClick,
  handleEditFormChange,
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
          <input
            type="password"
            name="userPwd"
            placeholder={blind.repeat(userPwd.length)}
            onChange={handleEditFormChange}
            required
          />
        </li>
        <li>
          <div>Name : </div>
          <div className={styles.userInfoList__readonly}>{userName}</div>
        </li>
        <li>
          <div>Address : </div>
          <input
            type="text"
            name="userAddress"
            placeholder={userAddress}
            onChange={handleEditFormChange}
            required
          />
        </li>
        <li>
          <div>Phone No : </div>
          <input
            type="text"
            name="userPhoneNo"
            placeholder={userPhoneNo}
            onChange={handleEditFormChange}
            required
          />
        </li>
        <li>
          <div>Business No : </div>
          <div className={styles.userInfoList__readonly}>{userBusinessNo}</div>
        </li>
        <li>
          <div>Email : </div>
          <input
            type="text"
            name="userEmail"
            placeholder={userEmail}
            onChange={handleEditFormChange}
            required
          />
        </li>
      </ul>
      <input
        type="button"
        value="Edit"
        onClick={onSaveClick}
        className={styles.userInfoList__saveChange}
      />
      <input
        type="button"
        value="Cancel"
        onClick={onCancelClick}
        className={styles.userInfoList__saveChange}
      />
    </div>
  );
}

export default EditUserInfo;
