import styles from "../css/qnaReadEdit.module.css";

function QnaRead({ inquiryTitle, inquiryContent, inquiryAnswer }) {
  //console.log(inquiryContent);
  return (
    <div className={styles.qnaBox}>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaTitle}>{`${inquiryTitle}`}</div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>Inquiry</div>
        <div className={styles.qnaContent}>{`${inquiryContent}`}</div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>Answer</div>
        <div className={styles.qnaContent}>
          {inquiryAnswer === null ? "Waiting for Answer" : `${inquiryAnswer}`}
        </div>
      </div>
    </div>
  );
}

export default QnaRead;
