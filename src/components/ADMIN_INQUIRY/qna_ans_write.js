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
          <div className={styles.qnaBox__row_title}>Inquiry</div>
          <div className={styles.qnaContent}>{`${inquiryContent}`}</div>
        </div>
        <div className={styles.qnaBox__row}>
          <div className={styles.qnaBox__row_title}>Answer</div>
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
          value="Submit"
          onClick={onFormSubmit}
          className={styles.qnaEditButton}
        />
        <input
          type="button"
          value="Cancel"
          onClick={onCancelClick}
          className={styles.qnaEditButton}
        />
      </div>
    </form>
  );
}

export default QnaEdit;
