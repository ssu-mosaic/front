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
    <div>
      <ul>
        <li>
          <div>아이디 : </div>
          <div>{userId}</div>
        </li>
        <li>
          <div>비밀번호 : </div>
          <div>{blind.repeat(userPwd.length)}</div>
        </li>
        <li>
          <div>이름 : </div>
          <div>{userName}</div>
        </li>
        <li>
          <div>주소 : </div>
          <div>{userAddress}</div>
        </li>
        <li>
          <div>전화번호 : </div>
          <div>{userPhoneNo}</div>
        </li>
        <li>
          <div>사업자번호 : </div>
          <div>{userBusinessNo}</div>
        </li>
        <li>
          <div>이메일 : </div>
          <div>{userEmail}</div>
        </li>
      </ul>
    </div>
  );
}

export default ReadUserInfo;
