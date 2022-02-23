import styles from "../css/qnaReadEdit.module.css";

function QnaEdit({
  inquiryTitle,
  inquiryContent,
  inquiryAnswer,
  handleEditFormChange,
  onFormSubmit,
  onCancelClick,
}) {
  return (
    <form>
      <div className={styles.qnaBox}>
        <div className={styles.qnaBox__row}>{`${inquiryTitle}`}</div>
        <div className={styles.qnaBox__row}>
          <div className={styles.qnaBox__row_title}>문의 내용</div>
          <div className={styles.qnaContent}>{`${inquiryContent}`}</div>
        </div>
        <div className={styles.qnaBox__row}>
          <div className={styles.qnaBox__row_title}>답변 내용</div>
          <textarea
            type="text"
            onChange={handleEditFormChange}
            value={inquiryAnswer}
            name="inquiryAnswer"
            required
            className={styles.qnaContent}
          />
        </div>
        <input
          type="button"
          value="작성 완료"
          onClick={onFormSubmit}
          className={styles.qnaEditButton}
        />
        <input
          type="button"
          value="작성 취소"
          onClick={onCancelClick}
          className={styles.qnaEditButton}
        />
      </div>
    </form>
  );
}

export default QnaEdit;
