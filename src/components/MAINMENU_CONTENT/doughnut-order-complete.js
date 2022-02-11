import { Doughnut } from "react-chartjs-2";
import styles from "../css/mainMenu-content.module.css";

function DoughnutOrderComplete(orderData) {
  const newData = orderData.orderData;
  //console.log(newData);
  return (
    <div className={styles.miniMenu_box}>
      <div className={styles.miniMenu_title}>최근 주문 발주상태</div>
      <div className={styles.chart_setting}>
        <Doughnut
          data={newData}
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
