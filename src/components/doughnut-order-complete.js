import { Doughnut } from "react-chartjs-2";
import styles from "./css/doughnut-order-complete.module.css";

const data = {
    labels: ["미완료", "준비중" ,"완료"],
    datasets: [{
        data: [12, 3, 5],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)", 
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
        ]
    }]
};

function DoughnutOrderComplete(){
    return (
        <div>
            <h1>발주 완료 지표</h1>
            <div className={styles.doughnut_setting}>
                <Doughnut data={data}/>
            </div>
            
        </div>
    )
}

export default DoughnutOrderComplete;