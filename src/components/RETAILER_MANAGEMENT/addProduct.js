import styles from "../css/userInfo.module.css";

function AddProduct({
  handleProductFormChange,
  onAddProductCancelClick,
  onProductFormSubmit,
}) {
  return (
    <div className={`${styles.userInfoBox} ${styles.userInfoBox__grey}`}>
      <form onSubmit={onProductFormSubmit}>
        <div className={styles.userInfo_row}>
          <label className={styles.userInfoList__title} for="productName">
            상품이름 :{" "}
          </label>
          <input
            type="text"
            name="productName"
            onChange={handleProductFormChange}
            required
          />
        </div>
        <div className={styles.userInfo_row}>
          <label className={styles.userInfoList__title} for="productPrice">
            {" "}
            상품가격 :{" "}
          </label>
          <input
            type="number"
            name="productPrice"
            onChange={handleProductFormChange}
            required
          />
        </div>
        <div className={styles.userInfo_row}>
          <label className={styles.userInfoList__title} for="productUnit">
            {" "}
            상품단위 :{" "}
          </label>
          <input
            type="text"
            name="productUnit"
            onChange={handleProductFormChange}
            required
          />
        </div>
        <div className={styles.userInfo_row}>
          <div className={styles.userInfoList__title}> 상품메모 : </div>
          <textarea
            type="text"
            name="productDetail"
            onChange={handleProductFormChange}
            required
          />
        </div>
        <input
          className={styles.userInfoList__saveChange}
          type="submit"
          value="물품추가"
        />
        <input
          className={styles.userInfoList__saveChange}
          type="button"
          onClick={onAddProductCancelClick}
          value="취소"
        />
      </form>
    </div>
  );
}

export default AddProduct;
