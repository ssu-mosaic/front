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
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  // If purpose for testing without server useState(false)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(5);
  const [table, setTable] = useState([]);
  const [editFormData, setEditFormData] = useState({
    userId: userID,
    retailerId: retailerId,
    productId: "",
    productName: "",
    productPrice: "",
    productUnit: "",
    productDesc: "",
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
    };

    setEditFormData(formValues);
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
      retailerId: retailerId,
      productId: rowId,
      productName: editFormData.productName,
      productPrice: editFormData.productPrice,
      productUnit: editFormData.productUnit,
      productDesc: editFormData.productDesc,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.put(`${baseURL}/product/${rowId}`, editedForm).then((response) => {
      if (response.data === true) {
        alert("물품 수정 완료");
      } else {
        alert("물품 수정 실패 재시도 해주세요");
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

  const handleDeleteClick = (rowId) => {
    const deleteForm = {
      userId: userID,
      retailerId: retailerId,
      productId: rowId,
    };
    // const ApiCallForDelete = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios.delete(`${baseURL}/product/${rowId}`, deleteForm).then((response) => {
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
          <form onSubmit={handleEditFormSubmit}>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>상품 이름</th>
                  <th>상품 가격</th>
                  <th>상품 단위</th>
                  <th>상품 설명</th>
                  <th>수정</th>
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
    </div>
  );
}

export default ProductListTable;
