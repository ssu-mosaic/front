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
  newRetailerDetails,
}) {
  return (
    <Fragment>
      <form onSubmit={onRetailerFormSubmit}>
        <div className={styles.userInfoBox}>
          <ul className={styles.userInfoList}>
            <li>
              <div className={styles.userInfoList__title}>Retailer Name : </div>
              <input
                type="text"
                name="retailerName"
                placeholder={retailerName}
                value={newRetailerDetails.retailerName}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>Email : </div>
              <input
                type="text"
                name="retailerEmail"
                placeholder={retailerEmail}
                value={newRetailerDetails.retailerEmail}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>Phone No : </div>
              <input
                type="text"
                name="retailerPhoneNo"
                placeholder={retailerPhoneNo}
                value={newRetailerDetails.retailerPhoneNo}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
            <li>
              <div className={styles.userInfoList__title}>Description : </div>
              <textarea
                type="text"
                name="retailerDetail"
                placeholder={retailerDetail}
                value={newRetailerDetails.retailerDetail}
                onChange={handleRetailerFormChange}
                required
              />
            </li>
          </ul>
          <input
            type="submit"
            value="Edit"
            className={styles.userInfoList__saveChange}
          />
          <input
            type="button"
            value="Cancel"
            onClick={onRetailerDetailCancelClick}
            className={styles.userInfoList__saveChange}
          />
        </div>
      </form>
    </Fragment>
  );
}

export default EditRetailerDetail;
