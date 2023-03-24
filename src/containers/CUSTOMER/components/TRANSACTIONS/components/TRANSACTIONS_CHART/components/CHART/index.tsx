import React, {useEffect} from "react";
import Chart from 'chart.js/auto';

let myChart = null

const TransactionsPieChart = () =>{
    useEffect(()=>{
        let ctx = document.querySelector('#pieChartTransactions').getContext('2d')

        const data={
            labels: ["verified", "unverified"],
            datasets: [
                {
                    label: 'Recent withdrawal',
                    axis:"y",
                    data: [120, 80],
                    backgroundColor: [
                        '#FD9900',
                        '#77B4FA'
                      ],
                    highlightFill: "rgba(151,187,205,0.75)",
                    borderWidth: 0,
                },             
            ],
        }
        const config={
            type:"doughnut",
            data:data,
            options:{ 
                maintainAspectRatio: false,
                plugins:{
                    tooltip:{
                        position:'nearest',
                    },
                    legend:{
                        display:false
                    }
                },
                cutout:"90%",
                rotation:-90,
                borderRadius:"20"
            }
        }
        

        if(myChart!==null) myChart.destroy()

        myChart = new Chart(ctx, config)

        return ()=>{myChart.destroy()}
        // eslint-disable-next-line
    })
    return (
        <div className="relative w-24 h-24">
            <div className="h-full w-full">
                <canvas style={{width:"96px", height:"96px"}} id="pieChartTransactions"></canvas>
            </div> 
        </div>
    )
}

export default TransactionsPieChart