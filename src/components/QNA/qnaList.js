import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import tableStyles from "../css/result-table.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import Pagination from "./paginationForQna";
import QnaTables from "./QnaTables";
//test
//import TEST_QNA_DATA from "./testQnaData.json";

let userID = localStorage.getItem("USER_ID");

function QnaList() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  //while testing loading : false
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(7);
  const [qnaTable, setQnaTable] = useState([]);

  useEffect(() => {
    const identification = {
      userId: userID,
    };
    // erase only when testing
    axios.post(`${baseURL}/qna`, identification).then((response) => {
      setQnaTable(response.data);
      setLoading(false);
    });
    // only for testing delete when real
    //setQnaTable(TEST_QNA_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const qnaPage = qnaTable.slice(indexOfFirstTable, indexOfLastTable);

  //console.log(qnaPage);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Customer Center</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/qna/write`}>
          <input type="button" value="Write Inquiry" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Inquiry</span>
        </div>
        <div>
          {loading || qnaTable.length < 1 ? (
            <strong>loading...</strong>
          ) : (
            <Fragment>
              <table className={tableStyles.screenPage__searchResultTable}>
                <thead>
                  <tr
                    className={tableStyles.screenPage__searchResultTable_header}
                  >
                    <th>Inquiry Title</th>
                    <th>Inquiry Date</th>
                    <th>Answer Date</th>
                  </tr>
                </thead>
                <tbody className={tableStyles.testTable__tbody}>
                  {qnaPage.map((qna) => (
                    <QnaTables
                      key={qna.inquiryId}
                      inquiryId={qna.inquiryId}
                      inquiryTitle={qna.inquiryTitle}
                      inquiryDate={qna.inquiryDate}
                      inquiryAnswer={qna.inquiryAnswer}
                      inquiryAnsDate={qna.inquiryAnsDate}
                    />
                  ))}
                </tbody>
              </table>

              <Pagination
                tablePerPage={tablePerPage}
                totalTables={qnaTable.length}
                paginate={paginate}
              />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default QnaList;
