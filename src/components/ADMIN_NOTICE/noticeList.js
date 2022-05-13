import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import tableStyles from "../css/result-table.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import Pagination from "./paginationForNotice";
import NoticeTables from "./NoticeTables";
import NoticeAdd from "./notice_add";
//test
//import TEST_Notice_DATA from "./testNoticeData.json";

let userID = localStorage.getItem("USER_ID");

function NoticeList() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com";

  //while testing loading : false
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(7);
  const [noticeTable, setNoticeTable] = useState([]);
  const [noticeAdd, setNoticeAdd] = useState(false);
  const [newFormData, setNewFormData] = useState({
    userId: userID,
    noticeTitle: "",
    noticeContent: "",
  });
  useEffect(() => {
    // erase only when testing
    axios.get(`${baseURL}/notice`).then((response) => {
      setNoticeTable(response.data);
      setLoading(false);
    });
    // only for testing delete when real
    //testsetNoticeTable(TEST_Notice_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const qnaPage = noticeTable.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onNoticeAdd = () => {
    setNoticeAdd(true);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newNoticeData = { ...newFormData };
    newNoticeData[fieldName] = fieldValue;

    setNewFormData(newNoticeData);
  };

  const onSubmitEditForm = (event) => {
    event.preventDefault();
    axios.post(`${baseURL}/admin/notice`, newFormData).then((response) => {
      if (response.data !== null) {
        alert("Notice submitted");
        //when publish
        // window.location.href =
        //   "https://ssu-mosaic.github.io/front/admin/notice";
        //when test
        window.location.href = "/admin/notice";
      } else {
        alert("Notice submit failed");
      }
    });
  };

  const onCancelClick = () => {
    setNoticeAdd(false);
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Notice</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input type="button" value="Add Notice" onClick={onNoticeAdd} />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>{noticeAdd ? "New Notice" : "Notice"}</span>
        </div>
        <div>
          {noticeAdd ? (
            <NoticeAdd
              newFormData={newFormData}
              handleEditFormChange={handleEditFormChange}
              onCancelClick={onCancelClick}
              onSubmitEditForm={onSubmitEditForm}
            />
          ) : loading || noticeTable.length === 0 ? (
            <strong>loading...</strong>
          ) : (
            <Fragment>
              <table className={tableStyles.screenPage__searchResultTable}>
                <thead>
                  <tr
                    className={tableStyles.screenPage__searchResultTable_header}
                  >
                    <th>Notice Title</th>
                    <th>Notice Date</th>
                    <th>Last Written</th>
                  </tr>
                </thead>
                <tbody className={tableStyles.testTable__tbody}>
                  {qnaPage.map((qna) => (
                    <NoticeTables
                      key={qna.noticeId}
                      noticeId={qna.noticeId}
                      noticeTitle={qna.noticeTitle}
                      noticeDate={qna.noticeDate}
                      noticeEditDate={qna.noticeEditDate}
                    />
                  ))}
                </tbody>
              </table>

              <Pagination
                tablePerPage={tablePerPage}
                totalTables={noticeTable.length}
                paginate={paginate}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoticeList;
