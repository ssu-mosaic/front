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
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(false);

  const emptyRetailerDetails = {
    retailerId: -1,
    retailerName: "",
    retailerEmail: "",
    retailerPhoneNo: "",
    retailerDesc: "",
  };

  const [retailerDetails, setRetailerDetails] = useState(emptyRetailerDetails);

  const [productDetailData, setProductDetailData] = useState({
    productName: "",
    productPrice: "",
    productUnit: "",
    productDesc: "",
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
      retailerDesc: "this is test retailer description",
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
      productDesc: rowData.productDesc,
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
        <span>거래처 상세</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/order/requestorder`}>
          <input type="button" value="거래처목록" />
        </Link>
        <Link to={`/order/requestorder/basket`}>
          <input type="button" value="장바구니" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>거래처 상세 정보</span>
        </div>
        <div>
          {loading ? (
            <strong>로딩중...</strong>
          ) : (
            <Fragment>
              <ReadDetail
                retailerName={retailerDetails.retailerName}
                retailerEmail={retailerDetails.retailerEmail}
                retailerPhoneNo={retailerDetails.retailerPhoneNo}
                retailerDesc={retailerDetails.retailerDesc}
              />
              <div className={styles.tableTitle}>
                {showProductDetail
                  ? `${productDetailData.productName} 세부정보`
                  : `${retailerDetails.retailerName} 판매 상품`}
              </div>
              {showProductDetail ? (
                <ProductDetail
                  productName={productDetailData.productName}
                  productPrice={productDetailData.productPrice}
                  productUnit={productDetailData.productUnit}
                  productDesc={productDetailData.productDesc}
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
