import styles from "../css/qnaReadEdit.module.css";

function QnaRead({ noticeContent, noticeEditDate }) {
  //console.log(noticeContent);
  return (
    <div className={styles.qnaBox}>
      <div className={styles.qnaBox__row}>
        <div className={styles.noticeEditDate}>
          {noticeEditDate.length < 1
            ? "This Qna is not edited"
            : `Last Written : ${noticeEditDate.slice(0, 10)}`}
        </div>
      </div>
      <div className={styles.qnaBox__row}>
        <div className={styles.qnaBox__row_title}>Notice</div>
        <div className={styles.noticeContent}>{`${noticeContent}`}</div>
      </div>
    </div>
  );
}

export default QnaRead;
