import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import Fragment from "render-fragment";
import { Link } from "react-router-dom";
import ReadDetail from "./readRetailerDetail";
import ProductListTable from "../PRODUCT_LIST_READONLY/tableRender";
import ProductDetail from "./productDetail";

let userID = localStorage.getItem("USER_ID");

function Detail() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(false);

  const emptyRetailerDetails = {
    retailerId: -1,
    retailerName: "",
    retailerEmail: "",
    retailerPhoneNo: "",
    retailerDetail: "",
  };

  const [retailerDetails, setRetailerDetails] = useState(emptyRetailerDetails);

  const [productDetailData, setProductDetailData] = useState({
    productName: "",
    productPrice: "",
    productUnit: "",
    productDetail: "",
  });
  const [showProductDetail, setShowProductDetail] = useState(false);
  useEffect(() => {
    const identification = {
      userId: userID,
    };

    axios.post(`${baseURL}/retailer/${id}`, identification).then((response) => {
      setRetailerDetails(response.data);
      setLoading(false);
    });
    //test delete when real
    //test
    const testRetailerDetails = {
      retailerId: id,
      retailerName: "test retailer",
      retailerEmail: "testretailer@retail.com",
      retailerPhoneNo: "00011122233344455",
      retailerDetail: "this is test retailer description",
    };
    setRetailerDetails(testRetailerDetails);
  }, [id]);

  const handleBackToProducts = (event) => {
    event.preventDefault();
    setShowProductDetail(false);
  };
  const onProductDetailClick = (event, rowData) => {
    event.preventDefault();
    const formValues = {
      productName: rowData.productName,
      productPrice: rowData.productPrice,
      productUnit: rowData.productUnit,
      productDetail: rowData.productDetail,
    };
    //console.log(formValues);
    setShowProductDetail(true);
    setProductDetailData(formValues);
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Retailer Detail</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/order/requestorder`}>
          <input type="button" value="retailer" />
        </Link>
        <Link to={`/order/requestorder/basket`}>
          <input type="button" value="cart" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Retailer Detail</span>
        </div>
        <div>
          {loading ? (
            <strong>loading...</strong>
          ) : (
            <Fragment>
              <ReadDetail
                retailerName={retailerDetails.retailerName}
                retailerEmail={retailerDetails.retailerEmail}
                retailerPhoneNo={retailerDetails.retailerPhoneNo}
                retailerDetail={retailerDetails.retailerDetail}
              />
              <div className={styles.tableTitle}>
                {showProductDetail
                  ? `${productDetailData.productName} Detail`
                  : `${retailerDetails.retailerName}'s product`}
              </div>
              {showProductDetail ? (
                <ProductDetail
                  productName={productDetailData.productName}
                  productPrice={productDetailData.productPrice}
                  productUnit={productDetailData.productUnit}
                  productDetail={productDetailData.productDetail}
                  handleBackToProducts={handleBackToProducts}
                />
              ) : (
                <ProductListTable
                  retailerId={id}
                  onProductDetailClick={onProductDetailClick}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
