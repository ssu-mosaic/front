import React, { useState, useEffect } from "react";
import Tables from "./Tables";
import Pagination from "./paginationNoHook";
import Fragment from "render-fragment";
import styles from "../css/result-table.module.css";
import axios from "axios";
import EditRow from "./editRow";
import ProductDetail from "../ORDER_MANAGEMENT/productDetail";

//only for testing
import TEST_BASKET_DATA from "./MOCK_DATA.json";

let userID = localStorage.getItem("USER_ID");

//거래처목록
function BasketTable() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(5);
  const [table, setTable] = useState([]);
  const [showProductDetail, setShowProductDetail] = useState(false);

  const [editFormData, setEditFormData] = useState({
    userId: userID,
    productId: "",
    productCnt: 0,
  });
  const [productDetailData, setProductDetailData] = useState({
    productName: "",
    productPrice: "",
    productUnit: "",
    productCnt: 0,
    productDesc: "",
  });
  useEffect(() => {
    const userData = {
      userId: userID,
    };
    axios.post(`${baseURL}/order/cart`, userData).then((response) => {
      //console.log(response.data);
      setTable(response.data);
      setLoading(false);
    });
    //only for testing erase when real
    setTable(TEST_BASKET_DATA);
  }, []);

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
      productId: rowData.productId,
      productCnt: rowData.productCnt,
    };

    setEditFormData(formValues);
  };

  const onProductDetailClick = (event, rowData) => {
    event.preventDefault();
    const formValues = {
      productName: rowData.productName,
      productPrice: rowData.productPrice,
      productUnit: rowData.productUnit,
      productCnt: rowData.productCnt,
      productDesc: rowData.productDesc,
    };
    //console.log(formValues);
    setShowProductDetail(true);
    setProductDetailData(formValues);
  };
  const handleBackToProducts = (event) => {
    event.preventDefault();
    setShowProductDetail(false);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //save changes
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedForm = {
      userId: userID,
      productId: rowId,
      productCnt: editFormData.productCnt,
    };

    //console.log(editedForm);

    axios.put(`${baseURL}/order/cart/${rowId}`, editedForm).then((response) => {
      if (response.data === true) {
        alert("물품 수량 수정 완료");
      } else {
        alert("물품 수량 수정 실패 재시도 해주세요");
      }
    });

    const newTable = [...table];
    const index = table.findIndex((row) => row.productId === rowId);

    newTable[index].productCnt = editedForm.productCnt;
    //console.log(newTable);
    setTable(newTable);
    //ApiCallForEdit();
    setRowId(null);
    //console.log(table);
  };

  const handleCancelClick = () => {
    setRowId(null);
  };

  const handleDeleteClick = (rowId) => {
    const deleteForm = {
      userId: userID,
      productId: rowId,
    };
    // const ApiCallForDelete = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios
      .delete(`${baseURL}/order/cart/${rowId}`, deleteForm)
      .then((response) => {
        if (response.data === true) {
          alert("거래처 정보 삭제 완료");
        } else {
          alert("거래처 정보 삭제 실패 재시도 해주세요");
        }
      });

    const newTable = [...table];
    const index = table.findIndex((row) => row.productId === rowId);
    newTable.splice(index, 1);
    setTable(newTable);
    //ApiCallForDelete();
  };

  return (
    <div>
      {loading ? (
        <strong>로딩중...</strong>
      ) : (
        <Fragment>
          {showProductDetail ? (
            <ProductDetail
              productName={productDetailData.productName}
              productPrice={productDetailData.productPrice}
              productUnit={productDetailData.productUnit}
              productDesc={productDetailData.productDesc}
              productCnt={productDetailData.productCnt}
              handleBackToProducts={handleBackToProducts}
            />
          ) : (
            <Fragment>
              <form onSubmit={handleEditFormSubmit}>
                <table className={styles.screenPage__searchResultTable}>
                  <thead>
                    <tr className={styles.screenPage__searchResultTable_header}>
                      <th>상품 이름</th>
                      <th>상품 가격</th>
                      <th>상품 단위</th>
                      <th>주문 수량</th>
                      <th>상품 설명</th>
                      <th>수량 수정</th>
                      <th>삭제</th>
                    </tr>
                  </thead>

                  <tbody className="testTable__tbody">
                    {tables.map((tables) => (
                      <Fragment key={`${tables.productId}_fragment`}>
                        {rowId === tables.productId ? (
                          <EditRow
                            key={tables.productId}
                            productId={tables.productId}
                            productName={tables.productName}
                            productPrice={tables.productPrice}
                            productUnit={tables.productUnit}
                            productCnt={tables.productCnt}
                            productDesc={tables.productDesc}
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}
                          />
                        ) : (
                          <Tables
                            key={tables.productId}
                            productId={tables.productId}
                            productName={tables.productName}
                            productPrice={tables.productPrice}
                            productUnit={tables.productUnit}
                            productCnt={tables.productCnt}
                            productDesc={tables.productDesc}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick}
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
        </Fragment>
      )}
    </div>
  );
}

export default BasketTable;
