import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import tableStyles from "../css/result-table.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Fragment from "render-fragment";
import Pagination from "./paginationForNotice";
import NoticeTables from "./NoticeTables";
//test
//import TEST_Notice_DATA from "./testNoticeData.json";

function NoticeList() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  //while testing loading : false
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePerPage] = useState(7);
  const [noticeTable, setNoticeTable] = useState([]);

  useEffect(() => {
    // erase only when testing
    axios.get(`${baseURL}/notice`).then((response) => {
      setNoticeTable(response.data);
      setLoading(false);
    });
    // only for testing delete when real
    //setNoticeTable(TEST_Notice_DATA);
  }, []);

  // Get current tables
  const indexOfLastTable = currentPage * tablePerPage;
  const indexOfFirstTable = indexOfLastTable - tablePerPage;
  const qnaPage = noticeTable.slice(indexOfFirstTable, indexOfLastTable);

  //change page number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>공지사항</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/qna`}>
          <input type="button" value="문의목록" />
        </Link>
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
                      <th>공지 제목</th>
                      <th>공지일</th>
                      <th>최종수정일</th>
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
              </form>
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
