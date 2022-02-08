import styles from "../css/userInfo.module.css";

function ProductDetail({
  productName,
  productPrice,
  productUnit,
  productDesc,
  handleBackToProducts,
}) {
  return (
    <div className={`${styles.userInfoBox} ${styles.userInfoBox__grey}`}>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}>상품이름 : </div>
        <div className={styles.userInfoList__item}>{productName} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> 상품가격 : </div>
        <div className={styles.userInfoList__item}>{productPrice} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> 상품단위 : </div>
        <div className={styles.userInfoList__item}>{productUnit} </div>
      </div>
      <div className={styles.userInfo_row}>
        <div className={styles.userInfoList__title}> 상품메모 : </div>
        <div className={styles.userInfoList__item}>{productDesc} </div>
      </div>

      <input
        className={styles.userInfoList__saveChange}
        type="button"
        onClick={handleBackToProducts}
        value="물품목록"
      />
    </div>
  );
}

export default ProductDetail;
