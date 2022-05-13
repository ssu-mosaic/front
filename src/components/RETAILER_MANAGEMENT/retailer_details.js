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
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com:8080";

  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(true);

  const emptyRetailerDetails = {
    retailerId: -1,
    retailerName: "",
    retailerEmail: "",
    retailerPhoneNo: "",
    retailerDetail: "",
  };

  const emptyProductForm = {
    productName: "",
    productPrice: -1,
    productUnit: "",
    productDetail: "",
    retailerId: parseInt(id),
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
    productDetail: "",
  });
  const [showProductDetail, setShowProductDetail] = useState(false);
  useEffect(() => {
    const identification = {
      userId: userID,
    };
    axios.post(`${baseURL}/retailer/${id}`, identification).then((response) => {
      setRetailerDetails(response.data);
      setNewRetailerDetails(response.data);
      setLoading(false);
    });
    //test delete when real
    //test
    // const testRetailerDetails = {
    //   retailerId: id,
    //   retailerName: "test retailer",
    //   retailerEmail: "testretailer@retail.com",
    //   retailerPhoneNo: "00011122233344455",
    //   retailerDetail: "this is test retailer description",
    // };
    // setRetailerDetails(testRetailerDetails);
    // setNewRetailerDetails(testRetailerDetails);
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
    setRetailerDetails(newFormData);
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
    axios
      .put(`${baseURL}/retailer/edit/${id}`, retailerDetails)
      .then((response) => {
        if (response.data !== null) {
          alert("Edited");
        } else {
          alert("edit failed");
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
    console.log(newProduct);
    axios
      .post(`${baseURL}/retailer/product/add`, newProduct)
      .then((response) => {
        if (response.data !== null) {
          alert("Added");
          //test
          window.location.href = `/order/retailer/${id}`;
          //publish
          //window.location.href = `https://ssu-mosaic.github.io/order/retailer/${id}`;
        } else {
          alert("Add failed");
        }
        setNewProduct(emptyProductForm);
      });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Retailer Detail</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input
          type="button"
          value="Edit"
          onClick={onRetailerEditClick}
          disabled={addProductToggle}
        />
        <input
          type="button"
          value="Add Product"
          onClick={onAddProductClick}
          disabled={retailerDetailEdit}
        />
        <Link to={`/order/retailer`}>
          <input type="button" value="Retailers" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>
            {addProductToggle
              ? `Retailer ${retailerDetails.retailerName} Add Product`
              : "Retailer Details"}
          </span>
        </div>
        <div>
          {loading || retailerDetails.retailerId === -1 ? (
            <strong>loading</strong>
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
                  retailerDetail={newRetailerDetails.retailerDetail}
                  handleRetailerFormChange={handleRetailerFormChange}
                  onRetailerDetailCancelClick={onRetailerDetailCancelClick}
                  onRetailerFormSubmit={onRetailerFormSubmit}
                  newRetailerDetails={newRetailerDetails}
                />
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
                      ? `${productDetailData.productName} Details`
                      : `${retailerDetails.retailerName} Products`}
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
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
