import styles from "../css/qnaReadEdit.module.css";
//import Fragment from "render-fragment";

function NoticeAdd({
  newFormData,
  handleEditFormChange,
  onCancelClick,
  onSubmitEditForm,
}) {
  //console.log(noticeContent);
  return (
    <div className={styles.qnaBox}>
      <div className={styles.qnaBox__row}>
        <input
          type="button"
          value="Cancel"
          onClick={onCancelClick}
          className={styles.qnaEditButton}
        />
        <input
          type="button"
          value="Submit"
          onClick={onSubmitEditForm}
          className={styles.qnaEditButton}
        />
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>Notice</div>
        <input
          type="text"
          name="noticeTitle"
          placeholder="Notice Title"
          value={newFormData.noticeTitle}
          onChange={handleEditFormChange}
          className={styles.noticeTitle}
          required
        />
        <textarea
          type="text"
          name="noticeContent"
          value={newFormData.noticeContent}
          onChange={handleEditFormChange}
          placeholder="Notice Content"
          className={styles.noticeContent}
          required
        />
      </div>
    </div>
  );
}

export default NoticeAdd;
