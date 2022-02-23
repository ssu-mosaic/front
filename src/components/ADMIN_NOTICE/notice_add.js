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
          value="작성취소"
          onClick={onCancelClick}
          className={styles.qnaEditButton}
        />
        <input
          type="button"
          value="작성완료"
          onClick={onSubmitEditForm}
          className={styles.qnaEditButton}
        />
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>공지 내용</div>
        <input
          type="text"
          name="noticeTitle"
          placeholder="공지 제목"
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
          placeholder="공지 내용"
          className={styles.noticeContent}
          required
        />
      </div>
    </div>
  );
}

export default NoticeAdd;
