import styles from "../css/userInfo.module.css";
import Fragment from "render-fragment";

function EditRetailerDetail({
  retailerName,
  retailerEmail,
  retailerPhoneNo,
  retailerDetail,
  onRetailerDetailCancelClick,
  handleRetailerFormChange,
  onRetailerFormSubmit,
}) {
  return (
    <Fragment>
      <form onSubmit={onRetailerFormSubmit}>
        <div className={styles.userInfoBox}>
          <ul className={styles.userInfoList}>
            <li>
              <div className={styles.userInfoList__title}>거래처 이름 : </div>
              <input
                type="text"
                name="retailerName"
                placeholder={retailerName}
                value={retailerName}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>거래처 이메일 : </div>
              <input
                type="text"
                name="retailerEmail"
                placeholder={retailerEmail}
                value={retailerEmail}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>거래처 번호 : </div>
              <input
                type="text"
                name="retailerPhoneNo"
                placeholder={retailerPhoneNo}
                value={retailerPhoneNo}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>거래처 설명 : </div>
              <textarea
                type="text"
                name="retailerDetail"
                placeholder={retailerDetail}
                value={retailerDetail}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
          </ul>
          <input
            type="submit"
            value="수정완료"
            className={styles.userInfoList__saveChange}
          />
          <input
            type="button"
            value="수정취소"
            onClick={onRetailerDetailCancelClick}
            className={styles.userInfoList__saveChange}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default EditRetailerDetail;
