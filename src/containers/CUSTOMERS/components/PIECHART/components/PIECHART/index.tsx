import React, {useEffect} from "react";
import Chart from 'chart.js/auto';

let myChart:any = null

const PieChart = () =>{
    useEffect(()=>{
        let canvas = document.querySelector('#pieChartFull') as HTMLCanvasElement
        let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        const data={
            labels: ["verified", "unverified"],
            datasets: [
                {
                    label: 'Recent withdrawal',
                    axis:"y",
                    data: [120, 80, 50, 100],
                    backgroundColor: [
                        '#FD9900',
                        '#77B4FA',
                        '#B72AB9',
                        '#05CE91'
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
                rotation:-90
            }
        }
        

        if(myChart!==null) myChart.destroy()

        // @ts-ignore
        myChart = new Chart(ctx, config)

        return ()=>{myChart.destroy()}
        // eslint-disable-next-line
    })
    return (
        <div className="relative w-40 h-40">
            <div className="h-full">
                <canvas style={{width:"160px", height:"160px"}} id="pieChartFull"></canvas>
            </div> 
        </div>
    )
}

export default PieChart