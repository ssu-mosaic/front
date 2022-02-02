import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import tableStyles from "../css/result-table.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import Pagination from "./paginationForQna";
import QnaTables from "./QnaTables";
//test
import TEST_QNA_DATA from "./testQnaData.json";

let userID = localStorage.getItem("USER_ID");

function QnaList() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  //while testing loading : false
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(7);
  const [qnaTable, setQnaTable] = useState([]);

  useEffect(() => {
    const identification = {
      userId: userID,
    };
    // erase only when testing
    axios.get(`${baseURL}/qna`, identification).then((response) => {
      setQnaTable(response.data);
      setLoading(false);
    });
    // only for testing delete when real
    setQnaTable(TEST_QNA_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const qnaPage = qnaTable.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>문의센터</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input type="button" value="문의작성" />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>문의목록</span>
        </div>
        <div>
          {loading ? (
            <strong>로딩중...</strong>
          ) : (
            <Fragment>
              <form>
                <table className={tableStyles.screenPage__searchResultTable}>
                  <thead>
                    <tr
                      className={
                        tableStyles.screenPage__searchResultTable_header
                      }
                    >
                      <th>문의 제목</th>
                      <th>문의 날짜</th>
                      <th>답변 날짜</th>
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
              </form>
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
