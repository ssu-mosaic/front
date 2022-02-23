import styles from "../css/qnaReadEdit.module.css";

function QnaRead({ inquiryTitle, inquiryContent, inquiryAnswer }) {
  //console.log(inquiryContent);
  return (
    <div className={styles.qnaBox}>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaTitle}>{`${inquiryTitle}`}</div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>문의 내용</div>
        <div className={styles.qnaContent}>{`${inquiryContent}`}</div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>답변 내용</div>
        <div className={styles.qnaContent}>
          {inquiryAnswer === null ? "답변 대기 중입니다" : `${inquiryAnswer}`}
        </div>
      </div>
    </div>
  );
}

export default QnaRead;
