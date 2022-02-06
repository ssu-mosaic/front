import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import Fragment from "render-fragment";
import { Link } from "react-router-dom";
import ReadDetail from "./readRetailerDetail";
import EditData from "./editRetailerDetail";
import AddProduct from "./addProduct";
import ProductListTable from "../PRODUCT_LIST/tableRender";
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

  const emptyProductForm = {
    userId: userID,
    productName: "",
    productPrice: -1,
    productUnit: "",
    productDesc: "",
  };

  const [retailerDetails, setRetailerDetails] = useState(emptyRetailerDetails);
  const [newRetailerDetails, setNewRetailerDetails] =
    useState(emptyRetailerDetails);
  const [retailerDetailEdit, setRetailerDetailEdit] = useState(false);
  const [addProductToggle, setAddProductToggle] = useState(false);
  const [newProduct, setNewProduct] = useState(emptyProductForm);
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
    setNewRetailerDetails(testRetailerDetails);
  }, []);

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
  const onAddProductClick = () => {
    setAddProductToggle(true);
  };
  const onRetailerEditClick = () => {
    setRetailerDetailEdit(true);
  };
  const handleRetailerFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...retailerDetails };
    newFormData[fieldName] = fieldValue;

    setNewRetailerDetails(newFormData);
  };

  const onRetailerDetailCancelClick = (event) => {
    event.preventDefault();
    setRetailerDetailEdit(false);
    setNewRetailerDetails(retailerDetails);
  };

  const onRetailerFormSubmit = (event) => {
    event.preventDefault();
    setRetailerDetailEdit(false);
    setRetailerDetails(newRetailerDetails);
    axios.put(`${baseURL}/retailer/${id}`, retailerDetails).then((response) => {
      if (response.data === true) {
        alert("거래처 정보 수정 완료");
      } else {
        alert("거래처 정보 수정 실패");
      }
    });
  };

  const handleProductFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...newProduct };
    newFormData[fieldName] = fieldValue;
    setNewProduct(newFormData);
  };

  const onAddProductCancelClick = (event) => {
    event.preventDefault();
    setAddProductToggle(false);
    setNewProduct(emptyProductForm);
  };
  const onProductFormSubmit = (event) => {
    event.preventDefault();
    setAddProductToggle(false);
    //console.log(newProduct);
    axios
      .post(`${baseURL}/retailer/product/add`, newProduct)
      .then((response) => {
        if (response.data === true) {
          alert("물품 등록 완료");
        } else {
          alert("물품 등록 실패 재시도 해주세요");
        }
        setNewProduct(emptyProductForm);
      });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>거래처 상세</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input
          type="button"
          value="거래처수정"
          onClick={onRetailerEditClick}
          disabled={addProductToggle}
        />
        <input
          type="button"
          value="물품추가"
          onClick={onAddProductClick}
          disabled={retailerDetailEdit}
        />
        <Link to={`/order/retailer`}>
          <input type="button" value="거래처목록" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>
            {addProductToggle
              ? `거래처 ${retailerDetails.retailerName} 물품추가`
              : "거래처 상세 정보"}
          </span>
        </div>
        <div>
          {loading ? (
            <strong>로딩중...</strong>
          ) : (
            <Fragment>
              {addProductToggle ? (
                <AddProduct
                  handleProductFormChange={handleProductFormChange}
                  onAddProductCancelClick={onAddProductCancelClick}
                  onProductFormSubmit={onProductFormSubmit}
                />
              ) : retailerDetailEdit ? (
                <EditData
                  retailerName={newRetailerDetails.retailerName}
                  retailerEmail={newRetailerDetails.retailerEmail}
                  retailerPhoneNo={newRetailerDetails.retailerPhoneNo}
                  retailerDesc={newRetailerDetails.retailerDesc}
                  handleRetailerFormChange={handleRetailerFormChange}
                  onRetailerDetailCancelClick={onRetailerDetailCancelClick}
                  onRetailerFormSubmit={onRetailerFormSubmit}
                />
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
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
