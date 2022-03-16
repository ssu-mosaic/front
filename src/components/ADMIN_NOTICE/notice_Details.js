import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import contentStyles from "../css/screen-content.module.css";
import styles from "../css/search-order.module.css";
import NoticeRead from "./notice_read";
import NoticeEdit from "./notice_edit";
import { Link } from "react-router-dom";

let userID = localStorage.getItem("USER_ID");

function Detail() {
  const baseURL =
    "http://ec2-3-39-21-95.ap-northeast-2.compute.amazonaws.com:8080";

  const { id } = useParams();
  //while testing loading : false
  const [loading, setLoading] = useState(true);
  const [editFormData, setEditFormData] = useState({
    userId: userID,
    noticeTitle: "",
    noticeDate: "",
    noticeContent: "",
    noticeEditDate: "",
  });

  const emptyNoticeDetails = {
    noticeId: -1,
    noticeTitle: "",
    noticeDate: "",
    noticeContent: "",
    noticeEditDate: "",
  };

  const [noticeDetails, setNoticeDetails] = useState(emptyNoticeDetails);
  const [noticeEdit, setNoticeEdit] = useState(false);

  useEffect(() => {
    axios.get(`${baseURL}/notice/${id}`).then((response) => {
      setLoading(false);
      setNoticeDetails(response.data);
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

  const onSubmitEditForm = (event) => {
    event.preventDefault();
    axios
      .put(`${baseURL}/admin/notice/${id}`, editFormData)
      .then((response) => {
        if (response.data === true) {
          alert("Notice edited");
          setNoticeDetails(editFormData);
          setNoticeEdit(false);
        } else {
          alert("Notice edit failed");
        }
      });
  };

  const onCancelClick = () => {
    setNoticeEdit(false);
  };
  const onNoticeDeleteClick = (event) => {
    event.preventDefault();
    const deleteForm = {
      noticeId: id,
    };
    axios
      .delete(`${baseURL}/admin/notice/${id}`, deleteForm)
      .then((response) => {
        if (response.data === true) {
          alert("Notice deleted");
          //when publish
          window.location.href =
            "https://ssu-mosaic.github.io/front/admin/notice";
          //when test
          //window.location.href = "/admin/notice";
        } else {
          alert("Notice delete failed");
        }
      });
  };

  const onNoticeEditClick = () => {
    const formValues = {
      userId: userID,
      noticeTitle: noticeDetails.noticeTitle,
      noticeDate: noticeDetails.noticeDate,
      noticeContent: noticeDetails.noticeContent,
      noticeEditDate: noticeDetails.noticeEditDate,
    };
    setEditFormData(formValues);
    setNoticeEdit(true);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  return (
    <div
      className={`${contentStyles.screenPage__content} ${contentStyles.screenPage__content_box}`}
    >
      <div className={styles.screenPage__searchItem}>
        <span>Notice</span>
      </div>
      <div className={styles.screenPage__nextButton}>
        <Link to={`/admin/notice`}>
          <input type="button" value="Notice" />
        </Link>
        <input
          type="button"
          value="Edit"
          onClick={onNoticeEditClick}
          disabled={noticeEdit}
        />
        <input
          type="button"
          value="Delete"
          onClick={onNoticeDeleteClick}
          disabled={noticeEdit}
        />
      </div>
      <div className={styles.screenPage__searchResult}>
        <div className={styles.screenPage_title}>
          {noticeEdit ? (
            <input
              type="text"
              name="noticeTitle"
              onChange={handleEditFormChange}
              value={editFormData.noticeTitle}
              className={styles.editTitle}
            />
          ) : (
            <span>{noticeDetails.noticeTitle}</span>
          )}
        </div>
        <div>
          {loading ? (
            <strong>loading...</strong>
          ) : noticeEdit ? (
            <NoticeEdit
              noticeContent={noticeDetails.noticeContent}
              onCancelClick={onCancelClick}
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              onSubmitEditForm={onSubmitEditForm}
            />
          ) : (
            <NoticeRead
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
