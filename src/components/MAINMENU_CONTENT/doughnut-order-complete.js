import { Doughnut } from "react-chartjs-2";
import styles from "../css/mainMenu-content.module.css";

function DoughnutOrderComplete(orderData) {
  const newData = orderData.orderData;
  //console.log(newData);

  const doughnutData = {
    labels: ["발주진행중", "수취완료", "주문취소"],
    datasets: [
      {
        data: newData,
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.miniMenu_box}>
      <div className={styles.miniMenu_title}>최근 주문 발주상태</div>
      <div className={styles.chart_setting}>
        <Doughnut
          data={doughnutData}
          options={{
            legend: { position: "right" },
            layout: {
              padding: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            defaultFontSize: "14px",
          }}
        />
      </div>
    </div>
  );
}

export default DoughnutOrderComplete;
