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
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(5);
  const [table, setTable] = useState([]);
  const [editFormData, setEditFormData] = useState({
    retailerId: retailerId,
    productName: "",
    productPrice: "",
    productUnit: "",
    productDetail: "",
  });

  useEffect(() => {
    const userData = {
      userId: userID,
      retailerId: retailerId,
    };
    axios.post(`${baseURL}/retailer/product`, userData).then((response) => {
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
      retailerId: retailerId,
      productName: rowData.productName,
      productPrice: rowData.productPrice,
      productUnit: rowData.productUnit,
      productDetail: rowData.productDetail,
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
      retailerId: retailerId,
      productName: editFormData.productName,
      productPrice: editFormData.productPrice,
      productUnit: editFormData.productUnit,
      productDetail: editFormData.productDetail,
    };

    // const ApiCallForEdit = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/edit`,editedForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios
      .put(`${baseURL}/retailer/product/edit/${rowId}`, editedForm)
      .then((response) => {
        if (response.data === true) {
          alert("edit complete");
        } else {
          alert("edit failed");
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
      retailerId: retailerId,
    };
    // const ApiCallForDelete = async () => {
    //     //const response =
    //     await axios.post(`${baseURL}/retailer/delete`,deleteForm)
    //     //const data = await response.data;
    //     //console.log(data);
    // }
    axios
      .put(`${baseURL}/retailer/product/${rowId}`, deleteForm)
      .then((response) => {
        if (response.data === true) {
          alert("deleted");
        } else {
          alert("delete failed");
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
      {loading || table.length === 0 ? (
        <strong>loading...</strong>
      ) : (
        <Fragment>
          <form onSubmit={handleEditFormSubmit}>
            <table className={styles.screenPage__searchResultTable}>
              <thead>
                <tr className={styles.screenPage__searchResultTable_header}>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Unit</th>
                  <th>Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
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
                        productDetail={tables.productDetail}
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
                        productDetail={tables.productDetail}
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
