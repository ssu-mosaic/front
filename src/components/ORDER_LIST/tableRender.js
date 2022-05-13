import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import ProductTables from "./ProductTables";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import buttonStyles from "../css/userInfo.module.css";
//import resultStyles from "./retailer-list-readonly.module.css";
import axios from "axios";
//test
//import TEST_ORDER_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//발주조회
function OrderList() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [menuPage, setMenuPage] = useState(1);
  const [tablePerPage] = useState(5);
  const [table, setTable] = useState([]);
  const [orderDetail, setOrderDetail] = useState(false);
  const [productList, setProductList] = useState([]);
  const [orderId, setOrderId] = useState(-1);

  //get data from server
  useEffect(() => {
    const userData = {
      userId: userID,
    };

    axios.post(`${baseURL}/order`, userData).then((response) => {
      setTable(response.data);
      setLoading(false);
      //console.log(userData);
    });
    //only for test erase when real
    //setTable(TEST_ORDER_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const tables = table.slice(indexOfFirstTable, indexOfLastTable);
  const productLists = productList.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onOrderDetailClick = (event, orderProducts, orderId) => {
    event.preventDefault();
    setOrderId(orderId);
    setMenuPage(currentPage);
    setCurrentPage(1);
    setProductList(orderProducts);
    //console.log(productList);
    setOrderDetail(true);
  };

  const onOrderMenuClick = () => {
    setCurrentPage(menuPage);
    setOrderDetail(false);
  };

  const handleCancelClick = (event, productId, orderProductId) => {
    event.preventDefault();

    axios.put(`${baseURL}/order/cancel/${orderProductId}`).then((response) => {
      if (response.data === true) {
        alert("order canceled");
        //test
        window.location.href = "/order/searchorder";
        //publish
        //window.location.href = "https://ssu-mosaic.github.io/order/searchorder";
      } else {
        alert("order cancel failed");
      }
    });

    let newOrderForm = [...table];
    for (let index = 0; index < newOrderForm.length; index++) {
      if (newOrderForm[index].orderId === orderId) {
        for (
          let idx = 0;
          idx < newOrderForm[index].orderProducts.length;
          idx++
        ) {
          if (newOrderForm[index].orderProducts[idx].productId === productId) {
            newOrderForm[index].orderProducts[idx].orderStatus = "canceled";
            setTable(newOrderForm);
            return;
          }
        }
      }
    }
  };

  const handleCompleteClick = (event, productId, orderProductId) => {
    event.preventDefault();

    axios
      .put(`${baseURL}/order/complete/${orderProductId}`)
      .then((response) => {
        if (response.data === true) {
          alert("fetch confirmed");

          //test
          window.location.href = "/order/searchorder";
          //publish
          // window.location.href =
          //   "https://ssu-mosaic.github.io/order/searchorder";
        } else {
          alert("fetch failed");
        }
      });

    let newOrderForm = [...table];
    for (let index = 0; index < newOrderForm.length; index++) {
      if (newOrderForm[index].orderId === orderId) {
        for (
          let idx = 0;
          idx < newOrderForm[index].orderProducts.length;
          idx++
        ) {
          if (newOrderForm[index].orderProducts[idx].productId === productId) {
            newOrderForm[index].orderProducts[idx].orderStatus = "complete";
            setTable(newOrderForm);
            return;
          }
        }
      }
    }
  };

  return (
    <div>
      {loading || tables.length === 0 ? (
        <strong>loading...</strong>
      ) : (
        <Fragment>
          {orderDetail === false ? (
            <Fragment>
              <table className={styles.screenPage__searchResultTable}>
                <thead>
                  <tr className={styles.screenPage__searchResultTable_header}>
                    <th>Order ID</th>
                    <th>date</th>
                    <th>receipt</th>
                    <th>fetch rate</th>
                  </tr>
                </thead>
                <tbody className={styles.testTable__tbody}>
                  {tables.map((tables) => (
                    <Tables
                      key={tables.orderId}
                      orderId={tables.orderId}
                      orderDate={tables.orderDate}
                      orderProducts={tables.orderProducts}
                      onOrderDetailClick={onOrderDetailClick}
                    />
                  ))}
                </tbody>
              </table>
              <Pagination
                tablePerPage={tablePerPage}
                totalTables={table.length}
                paginate={paginate}
              />
            </Fragment>
          ) : (
            <Fragment>
              <table className={styles.screenPage__searchResultTable}>
                <thead>
                  <tr className={styles.screenPage__searchResultTable_header}>
                    <th>Product Name</th>
                    <th>Retailer Name</th>
                    <th>count</th>
                    <th>unit</th>
                    <th>status</th>
                    <th>cancel</th>
                    <th>fetch</th>
                  </tr>
                </thead>
                <tbody className={styles.testTable__tbody}>
                  {productLists.map((product) => (
                    <ProductTables
                      key={product.productId}
                      productId={product.productId}
                      retailerName={product.retailerName}
                      productName={product.productName}
                      productUnit={product.productUnit}
                      productCnt={product.productCnt}
                      orderStatus={product.orderStatus}
                      orderProductId={product.orderProductId}
                      handleCancelClick={handleCancelClick}
                      handleCompleteClick={handleCompleteClick}
                    />
                  ))}
                </tbody>
              </table>
              <Pagination
                tablePerPage={tablePerPage}
                totalTables={productList.length}
                paginate={paginate}
              />
              <input
                type="button"
                value="Back to List"
                onClick={onOrderMenuClick}
                className={buttonStyles.userInfoList__saveChange}
              />
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default OrderList;
