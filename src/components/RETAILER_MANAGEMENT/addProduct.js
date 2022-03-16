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
            Product Name :{" "}
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
            Price :{" "}
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
            Unit :{" "}
          </label>
          <input
            type="text"
            name="productUnit"
            onChange={handleProductFormChange}
            required
          />
        </div>
        <div className={styles.userInfo_row}>
          <div className={styles.userInfoList__title}> Description : </div>
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
          value="Add"
        />
        <input
          className={styles.userInfoList__saveChange}
          type="button"
          onClick={onAddProductCancelClick}
          value="Cancel"
        />
      </form>
    </div>
  );
}

export default AddProduct;
