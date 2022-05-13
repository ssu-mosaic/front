import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import Fragment from "render-fragment";
import QnaRead from "./qna_read";
import QnaEdit from "./qna_edit";

let userID = localStorage.getItem("USER_ID");

function Detail() {
  const baseURL =
    "http://ec2-54-180-8-119.ap-northeast-2.compute.amazonaws.com";

  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const identification = {
      userId: userID,
    };
    axios.post(`${baseURL}/qna/${id}`, identification).then((response) => {
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
    //setQnaDetails(testQnaDetails);
  }, [id]);

  const onQnaEditClick = () => {
    setQnaEdit(true);
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
    axios.put(`${baseURL}/qna/edit/${id}`, qnaDetails).then((response) => {
      if (response.data === id) {
        alert("edited");
      } else {
        alert("edit failed");
      }
    });
  };
  const onDeleteClick = (event) => {
    event.preventDefault();
    const identification = {
      userId: userID,
    };
    setQnaEdit(false);
    axios.put(`${baseURL}/qna/${id}`, identification).then((response) => {
      if (response.data === id) {
        alert("deleted");
        //test
        //window.location.href = "/qna";
        //publish
        window.location.href = "https://ssu-mosaic.github.io/qna";
      } else {
        alert("delete failed");
      }
    });
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Inquiry Details</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <input
          type="button"
          value="Edit"
          disabled={qnaEdit || qnaDetails.inquiryAnswer !== null}
          onClick={onQnaEditClick}
        />
        <input
          type="button"
          value="Delete"
          onClick={onDeleteClick}
          disabled={qnaEdit}
        />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          <span>Inquiry Details</span>
        </div>
        <div>
          {loading || qnaDetails.inquiryId === -1 ? (
            <strong>loading...</strong>
          ) : (
            <Fragment>
              {qnaEdit ? (
                <QnaEdit
                  inquiryTitle={qnaDetails.inquiryTitle}
                  inquiryContent={qnaDetails.inquiryContent}
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
