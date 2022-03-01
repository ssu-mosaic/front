import { Bar } from "react-chartjs-2";
import styles from "../css/mainMenu-content.module.css";

function ChartSpending(spendingData) {
  const newData = spendingData.spendingData;
  //console.log(newData);
  const dataLength = newData.labels.length;
  const bgColor = [];

  for (let i = 0; i < dataLength; i++) {
    bgColor.push("rgba(255, 199, 132, 0.6)");
  }

  const chartData = {
    labels: newData.labels,
    datasets: [
      {
        data: newData.datasets,
        backgroundColor: bgColor,
      },
    ],
  };

  return (
    <div className={styles.miniMenu_box}>
      <div className={styles.miniMenu_title}>최근 7개 주문 지출 통계(원)</div>
      <div className={styles.chart_setting}>
        <Bar
          data={chartData}
          options={{
            legend: { display: false },
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

export default ChartSpending;
