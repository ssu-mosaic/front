import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import Fragment from "render-fragment";
import QnaRead from "./qna_read";
import QnaEdit from "./qna_ans_edit";
import QnaWrite from "./qna_ans_write";

//let userID = localStorage.getItem("USER_ID");

function Detail() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

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
  const [qnaEdit, setQnaEdit] = useState(false);
  const [qnaWrite, setQnaWrite] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/admin/qna/${id}`).then((response) => {
      setQnaDetails(response.data);
      setLoading(false);
    });
    //test delete when real
    //test
    // const testQnaDetails = {
    //   inquiryId: 1111,
    //   inquiryTitle: "this is test title",
    //   inquiryDate: "2099/99/99",
    //   inquiryContent: "this is test content",
    //   inquiryAnswer: "this is test answer",
    //   inquiryAnsDate: "2999/99/99",
    // };
    // setQnaDetails(testQnaDetails);
  }, [id]);

  const onQnaEditClick = () => {
    setQnaEdit(true);
  };

  const onQnaWriteClick = () => {
    setQnaWrite(true);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...qnaDetails };
    newFormData[fieldName] = fieldValue;

    setQnaDetails(newFormData);
  };

  const onCancelClick = (event) => {
    event.preventDefault();
    setQnaEdit(false);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setQnaEdit(false);
    console.log(qnaDetails);
    axios
      .post(`${baseURL}/admin/qna/${id}/answer`, qnaDetails)
      .then((response) => {
        if (response.data === true) {
          alert("문의 내역 답변 완료");
        } else {
          alert("문의 내역 답변 실패");
        }
      });
  };
  const onFormEditSubmit = (event) => {
    event.preventDefault();
    setQnaEdit(false);
    axios
      .put(`${baseURL}/admin/qna/${id}/answer`, qnaDetails)
      .then((response) => {
        if (response.data === true) {
          alert("문의 내역 답변 수정 완료");
        } else {
          alert("문의 내역 답변 수정 실패");
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
        <input
          type="button"
          value="문의답변"
          disabled={qnaEdit || qnaWrite || qnaDetails.inquiryAnswer !== null}
          onClick={onQnaWriteClick}
        />
        <input
          type="button"
          value="답변수정"
          disabled={qnaEdit || qnaWrite}
          onClick={onQnaEditClick}
        />
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
              {qnaEdit ? (
                <QnaEdit
                  inquiryTitle={qnaDetails.inquiryTitle}
                  inquiryContent={qnaDetails.inquiryContent}
                  inquiryAnswer={qnaDetails.inquiryAnswer}
                  handleEditFormChange={handleEditFormChange}
                  onFormEditSubmit={onFormEditSubmit}
                  onCancelClick={onCancelClick}
                />
              ) : qnaWrite ? (
                <QnaWrite
                  inquiryTitle={qnaDetails.inquiryTitle}
                  inquiryContent={qnaDetails.inquiryContent}
                  inquiryAnswer={qnaDetails.inquiryAnswer}
                  handleEditFormChange={handleEditFormChange}
                  onFormSubmit={onFormSubmit}
                  onCancelClick={onCancelClick}
                />
              ) : (
                <QnaRead
                  inquiryTitle={qnaDetails.inquiryTitle}
                  inquiryContent={qnaDetails.inquiryContent}
                  inquiryAnswer={qnaDetails.inquiryAnswer}
                />
              )}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
export default Detail;
