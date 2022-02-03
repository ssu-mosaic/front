import QnaStyles from "../css/qnaReadEdit.module.css";
import React, { useState } from "react";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

let userID = localStorage.getItem("USER_ID");

function QnaWrite() {
  const baseURL =
    "http://ec2-15-164-170-164.ap-northeast-2.compute.amazonaws.com:8080";

  const emptyQna = {
    userId: userID,
    inquiryTitle: "",
    inquiryContent: "",
  };

  const [newQna, setNewQna] = useState(emptyQna);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...newQna };
    newFormData[fieldName] = fieldValue;

    setNewQna(newFormData);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    axios.post(`${baseURL}/qna/write`, newQna).then((response) => {
      if (response.data === true) {
        alert("문의 접수 완료");
      } else {
        alert("문의 접수 실패");
      }
    });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>문의상세</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/qna`}>
          <input type="button" value="문의목록" />
        </Link>
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>문의상세</span>
        </div>
        <div>
          <form onSubmit={onFormSubmit}>
            <div className={QnaStyles.qnaBox}>
              <div className={QnaStyles.qnaBox__row}>
                <input
                  type="text"
                  onChange={handleEditFormChange}
                  required
                  placeholder="문의 제목을 입력하세요"
                  name="inquiryTitle"
                  className={QnaStyles.qnaTitle}
                />
              </div>
              <div className={QnaStyles.qnaBox__row}>
                <div className={QnaStyles.qnaBox__row_title}>문의 내용</div>
                <textarea
                  type="text"
                  onChange={handleEditFormChange}
                  name="inquiryContent"
                  required
                  className={QnaStyles.qnaContent}
                />
              </div>
              <input
                type="submit"
                value="작성 완료"
                className={QnaStyles.qnaEditButton}
              />
              <Link to={`/qna`}>
                <input
                  type="button"
                  value="작성 취소"
                  className={QnaStyles.qnaEditButton}
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QnaWrite;
