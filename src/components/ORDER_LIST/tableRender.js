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
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

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
        alert("주문 취소 완료");
        //test
        //window.location.href = "/order/searchorder";
        //publish
        window.location.href = "https://ssu-mosaic.github.io/order/searchorder";
      } else {
        alert("주문 취소 실패 재시도 해주세요");
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
          alert("수치 확인 완료");
          alert("주문 취소 완료");
          //test
          //window.location.href = "/order/searchorder";
          //publish
          window.location.href =
            "https://ssu-mosaic.github.io/order/searchorder";
        } else {
          alert("수취 확인 실패 재시도 해주세요");
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
        <strong>로딩중...</strong>
      ) : (
        <Fragment>
          {orderDetail === false ? (
            <Fragment>
              <table className={styles.screenPage__searchResultTable}>
                <thead>
                  <tr className={styles.screenPage__searchResultTable_header}>
                    <th>주문 아이디</th>
                    <th>주문 날짜</th>
                    <th>주문 내역</th>
                    <th>주문 완료율</th>
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
                    <th>상품 이름</th>
                    <th>거래처 이름</th>
                    <th>상품 수량</th>
                    <th>상품 단위</th>
                    <th>발주 상태</th>
                    <th>주문 취소</th>
                    <th>수취 완료</th>
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
                value="주문목록 돌아가기"
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
