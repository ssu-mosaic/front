import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import Fragment from "render-fragment";

let userID = localStorage.getItem("USER_ID");

function Detail() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";
  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(false);

  const emptyQnaDetails = {
    inquiryId: -1,
    inquiryTitle: "",
    inquiryDate: "",
    inquiryContent: "",
    inquiryAnswer: "",
    inquiryAnsDate: "",
  };

  const [qnaDetails, setQnaDetails] = useState(emptyQnaDetails);

  useEffect(() => {
    const identification = {
      userId: userID,
    };
    axios.get(`${baseURL}/${id}`, identification).then((response) => {
      setQnaDetails(response.data);
      setLoading(false);
    });
    //test delete when real
    //test
    const testQnaDetails = {
      inquiryId: 1111,
      inquiryTitle: "this is test title",
      inquiryDate: "2099/99/99",
      inquiryContent: "this is test content",
      inquiryAnswer: "this is test answer",
      inquiryAnsDate: "2999/99/99",
    };
    setQnaDetails(testQnaDetails);
  }, []);

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>문의상세</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input type="button" value="문의수정" />
        <input type="button" value="문의삭제" />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>문의상세</span>
        </div>
        <div>
          {loading ? (
            <strong>로딩중...</strong>
          ) : (
            <Fragment>
              <form>
                <div>{qnaDetails.inquiryTitle}</div>
              </form>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;