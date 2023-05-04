import React, {useEffect} from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)
import { BarChart, Camera } from "@/assets/icons";

let myChart:any = null
const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(',')


const FinanceLineChart = () =>{
    
    useEffect(()=>{
        let ctx = document.querySelector('#lineChartFinance').getContext('2d')

        const data={
            labels: [...months],
            datasets: [
                {
                    label: 'Recent withdrawal',
                    axis:"y",
                    data: [2000, 3000, 4000, 3000,5000,5500, 6000,6500,7000,7200,7500,6000],
                    borderColor: [
                        '#00CC74'
                    ],
                    fillColor: "rgba(151,187,205,0.5)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    borderWidth: 1,
                    color:"#F3F5FD",
                    scaleLineColor: "rgba(0,0,0,0)",
                    tension:0.5,
                    pointBackgroundColor:"#A9C6FF",
                    pointBorderWidth:0,
                    pointRadius:0,
                    showLine:true,
                },  
                {
                    label: 'Recent withdrawal',
                    axis:"y",
                    data: [1000, 2000, 3000, 3500,3000,3500, 4000,4500,5000,5200,5300,5900],
                    borderColor: [
                        '#EF9645'
                    ],
                    fillColor: "rgba(151,187,205,0.5)",
                    highlightFill: "rgba(151,187,205,0.75)",
                    borderWidth: 1,
                    color:"#F3F5FD",
                    scaleLineColor: "rgba(0,0,0,0)",
                    tension:0.5,
                    pointRadius:0,
                    pointBackgroundColor:"#A9C6FF",
                    pointBorderWidth:0,
                    showLine:true,
                },                    
            ],
        }
        const config={
            type:"line",
            data:data,
            options:{ 
                maintainAspectRatio: false ,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: true,
                        },
                        ticks:{
                            display:true,
                        },
                        display:false,
                    },
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                    }
                },
                plugins:{
                    tooltip:{
                        enabled:false,
                        position:'nearest',
                        // external:externalTooltipHandler
                    },
                    legend:{
                        display:false
                    }
                },
            }
        }

        if(myChart!==null) myChart.destroy()
        myChart = new Chart(ctx, config)

        return ()=>{myChart.destroy()}

    },[])
    return (
        <div className="border border-neutral_200 mt-6 rounded-[12px]">
            <div className="p-6">
                <div className="flex gap-3 justify-start items-center text-gray_400">
                    <BarChart/> Activity overview for <span className="text-neutral_300">Last 7 days</span>
                </div>
                <div className="mt-6 h-72">
                    <canvas id="lineChartFinance"></canvas>
                </div>
            </div>
        </div>
    )
}

export default FinanceLineChart