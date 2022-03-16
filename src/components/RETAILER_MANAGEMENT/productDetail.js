import styles from "../css/userInfo.module.css";

function ProductDetail({
  productName,
  productPrice,
  productUnit,
  productDetail,
  handleBackToProducts,
}) {
  return (
    <div className={`${styles.userInfoBox} ${styles.userInfoBox__grey}`}>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}>Product Name : </div>
        <div className={styles.userInfoList__item}>{productName} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> Price : </div>
        <div className={styles.userInfoList__item}>{productPrice} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> Unit : </div>
        <div className={styles.userInfoList__item}>{productUnit} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> Description : </div>
        <div className={styles.userInfoList__item}>{productDetail} </div>
      </div>

      <input
        className={styles.userInfoList__saveChange}
        type="button"
        onClick={handleBackToProducts}
        value="Products"
      />
    </div>
  );
}

export default ProductDetail;
