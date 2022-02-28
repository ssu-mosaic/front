import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import NoticeRead from "./notice_read";
import { Link } from "react-router-dom";

function Detail() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(true);

  const emptyNoticeDetails = {
    noticeId: -1,
    noticeTitle: "",
    noticeDate: "",
    noticeContent: "",
    noticeEditDate: "",
  };

  const [noticeDetails, setNoticeDetails] = useState(emptyNoticeDetails);

  useEffect(() => {
    axios.get(`${baseURL}/notice/${id}`).then((response) => {
      setNoticeDetails(response.data);
      setLoading(false);
    });
    //test delete when real
    //test
    // const testQnaDetails = {
    //   noticeId: 1111,
    //   noticeTitle: "this is test title",
    //   noticeDate: "2099/99/99",
    //   noticeContent: "this is test content",
    //   noticeEditDate: "2999/99/99",
    // };
    //setNoticeDetails(testQnaDetails);
  }, [id]);

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>공지사항</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/notice`}>
          <input type="button" value="공지목록" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>{noticeDetails.noticeTitle}</span>
        </div>
        <div>
          {loading ? (
            <strong>로딩중...</strong>
          ) : (
            <NoticeRead
              noticeDate={noticeDetails.noticeDate}
              noticeContent={noticeDetails.noticeContent}
              noticeEditDate={noticeDetails.noticeEditDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
