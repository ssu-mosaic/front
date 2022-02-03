import styles from "../css/qnaReadEdit.module.css";

function QnaEdit({
  inquiryTitle,
  inquiryContent,
  handleEditFormChange,
  onFormSubmit,
  onCancelClick,
}) {
  return (
    <form>
      <div className={styles.qnaBox}>
        <div className={styles.qnaBox__row}>
          <input
            type="text"
            onChange={handleEditFormChange}
            value={inquiryTitle}
            required
            name="inquiryTitle"
            className={styles.qnaTitle}
          />
        </div>
        <div className={styles.qnaBox__row}>
          <div className={styles.qnaBox__row_title}>문의 내용</div>
          <textarea
            type="text"
            onChange={handleEditFormChange}
            value={inquiryContent}
            name="inquiryContent"
            required
            className={styles.qnaContent}
          />
        </div>
        <input
          type="button"
          value="수정 완료"
          onClick={onFormSubmit}
          className={styles.qnaEditButton}
        />
        <input
          type="button"
          value="수정 취소"
          onClick={onCancelClick}
          className={styles.qnaEditButton}
        />
      </div>
    </form>
  );
}

export default QnaEdit;
