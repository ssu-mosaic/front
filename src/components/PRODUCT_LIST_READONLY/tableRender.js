import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import EditRow from "./editRow";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";

//only for testing
import TEST_PRODUCT_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//거래처목록
function ProductListTable({ retailerId, onProductDetailClick }) {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(5);
  const [table, setTable] = useState([]);
  const [orderFormData, setOrderFormData] = useState({
    userId: userID,
    retailerId: retailerId,
    productId: "",
    productName: "",
    productPrice: 0,
    productUnit: "",
    productDesc: "",
    productCnt: 0,
  });

  useEffect(() => {
    const userData = {
      userId: userID,
      retailerId: retailerId,
    };
    axios.post(`${baseURL}/retailer/products`, userData).then((response) => {
      //console.log(response.data);
      setTable(response.data);
      setLoading(false);
    });
    //only for testing erase when real
    setTable(TEST_PRODUCT_DATA);
  }, [retailerId]);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const tables = table.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //edit data
  const [rowId, setRowId] = useState(null);
  const handleEditClick = (event, rowData) => {
    event.preventDefault();
    setRowId(rowData.productId);

    const formValues = {
      userId: userID,
      retailerId: retailerId,
      productId: rowData.productId,
      productName: rowData.productName,
      productPrice: rowData.productPrice,
      productUnit: rowData.productUnit,
      productDesc: rowData.productDesc,
      productCnt: rowData.productCnt,
    };

    setOrderFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...orderFormData };
    newFormData[fieldName] = fieldValue;

    setOrderFormData(newFormData);
  };

  //save changes
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedForm = {
      userId: userID,
      retailerId: retailerId,
      productId: rowId,
      productName: orderFormData.productName,
      productPrice: orderFormData.productPrice,
      productUnit: orderFormData.productUnit,
      productCnt: orderFormData.productCnt,
      productDesc: orderFormData.productDesc,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.post(`${baseURL}/order/cart/add`, editedForm).then((response) => {
      if (response.data === true) {
        alert(
          `물품 :${orderFormData.productName} \n수량:${orderFormData.productCnt} ${orderFormData.productUnit}\n장바구니 추가 성공`
        );
      } else {
        alert("장바구니 추가 실패 재시도 해주세요");
      }
    });

    const newTable = [...table];
    const index = table.findIndex((row) => row.productId === rowId);

    newTable[index] = editedForm;
    //console.log(newTable);
    setTable(newTable);
    //ApiCallForEdit();
    setRowId(null);
    //console.log(table);
  };

  const handleCancelClick = () => {
    setRowId(null);
  };

  return (
    <div>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <Fragment>
          <form onSubmit={handleEditFormSubmit}>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>상품 이름</th>
                  <th>상품 가격</th>
                  <th>상품 단위</th>
                  <th>상품 설명</th>
                  <th>장바구니에 담기</th>
                </tr>
              </thead>

              <tbody className="testTable__tbody">
                {tables.map((tables) => (
                  <Fragment key={`${tables.productId}_fragment`}>
                    {rowId === tables.productId ? (
                      <EditRow
                        key={`${tables.productId}_edit`}
                        productId={tables.productId}
                        productName={tables.productName}
                        productPrice={tables.productPrice}
                        productUnit={tables.productUnit}
                        productDesc={tables.productDesc}
                        productCnt={tables.productCnt}
                        orderFormData={orderFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <Tables
                        key={`${tables.productId}_read`}
                        productId={tables.productId}
                        productName={tables.productName}
                        productPrice={tables.productPrice}
                        productUnit={tables.productUnit}
                        productDesc={tables.productDesc}
                        handleEditClick={handleEditClick}
                        onProductDetailClick={onProductDetailClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          <Pagination
            tablePerPage={tablePerPage}
            totalTables={table.length}
            paginate={paginate}
          />
        </Fragment>
      )}
    </div>
  );
}

export default ProductListTable;
