import { Doughnut } from "react-chartjs-2";
import './chart.css'

const data = {
    labels: ["Red", "Blue", "Yellow" ,"Green" ,"Purple" ,"Orange"],
    datasets: [{
        data: [12, 19, 3, 5, 12, 4],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)", 
            "rgba(55, 162, 235, 0.2)", 
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 99, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
        ]
    }]
};

function DoughnutChart(){
    return (
        <div>
            <h1>Doughnut</h1>
            <div className="doughnutChart">
                <Doughnut data={data}/>
            </div>
            
        </div>
    )
}

export default DoughnutChart;