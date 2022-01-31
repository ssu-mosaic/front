function EditUserInfo({
  userId,
  userPwd,
  userAddress,
  userName,
  userPhoneNo,
  userBusinessNo,
  userEmail,
  onSaveClick,
  handleEditFormChange,
}) {
  const blind = "*";

  return (
    <div>
      <ul>
        <li>
          <div>아이디 : </div>
          <div>{userId}</div>
        </li>
        <li>
          <div>비밀번호 : </div>
          <input
            type="password"
            name="userPwd"
            placeholder={blind.repeat(userPwd.length)}
            onChange={handleEditFormChange}
            required
          />
          <input
            type="password"
            name="userPwdRe"
            placeholder="비밀번호 재입력"
            required
          />
        </li>
        <li>
          <div>이름 : </div>
          <div>{userName}</div>
        </li>
        <li>
          <div>주소 : </div>
          <input
            type="text"
            name="userAddress"
            placeholder={userAddress}
            onChange={handleEditFormChange}
            required
          />
        </li>
        <li>
          <div>전화번호 : </div>
          <input
            type="text"
            name="userPhoneNo"
            placeholder={userPhoneNo}
            onChange={handleEditFormChange}
            required
          />
        </li>
        <li>
          <div>사업자번호 : </div>
          <div>{userBusinessNo}</div>
        </li>
        <li>
          <div>이메일 : </div>
          <input
            type="text"
            name="userEmail"
            placeholder={userEmail}
            onChange={handleEditFormChange}
            required
          />
        </li>
      </ul>
      <input type="button" value="수정완료" onClick={onSaveClick} />
    </div>
  );
}

export default EditUserInfo;
