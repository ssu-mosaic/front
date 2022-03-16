import styles from "../css/qnaReadEdit.module.css";
//import Fragment from "render-fragment";

function QnaRead({
  noticeContent,
  editFormData,
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
        <textarea
          type="text"
          placeholder={noticeContent}
          name="noticeContent"
          value={editFormData.noticeContent}
          onChange={handleEditFormChange}
          className={styles.noticeContent}
          required
        />
      </div>
    </div>
  );
}

export default QnaRead;
