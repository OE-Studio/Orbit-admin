import React, {useEffect, useState, ReactNode} from "react";
import { Chart, registerables, ChartConfiguration  } from "chart.js";
Chart.register(...registerables)
import { BarChart, Camera } from "@/assets/icons";
import html2canvas from 'html2canvas'

let myChart:any = null
const months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(',')


const LineChart = () =>{
    let [chartType, setChartType] = useState("bar")

    const stackedChart = chartType === 'bar' ? true : false

    const changeChart = ()=>{
        if(chartType === "bar"){
            setChartType('line')
        }
        else {
            setChartType('bar')
        }
    }

    const downloadImage = () =>{
        // const screenshotTarget = document.body;
        const screenshotTarget = document.querySelector('.chartCont') as HTMLElement

        html2canvas(screenshotTarget)
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas=>{
            const image = canvas.toDataURL('image/png')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
    }
    
    useEffect(()=>{
        let canvas = document.querySelector('#lineChart') as HTMLCanvasElement;
        let ctx = canvas.getContext('2d') as CanvasRenderingContext2D

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

        const config: ChartConfiguration = {
            type:chartType === 'bar' ? 'bar' : 'line',
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
                        stacked: stackedChart
                    },
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                        },
                        stacked: stackedChart
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
        // eslint-disable-next-line
    },[chartType])
    return (
        <div className="border border-neutral_200 mt-6 rounded-[12px]">
            <div className="p-6 chartCont">
                <div className="flex gap-3 justify-start items-center text-gray_400">
                    <BarChart/> Activity overview for <span className="text-neutral_300">Last 7 days</span>
                </div>
                <div className="mt-6 h-72">
                    <canvas id="lineChart"></canvas>
                </div>
            </div>

            <div className="text-gray_400 bg-[#FBFDFE] py-4 rounded-b-[12px] px-6 flex justify-between">
                <div className="flex gap-6 justify-start items-center">
                    <div className="flex items-center justify-start gap-1 text-xs">
                        <input type="checkbox"/>
                        Total users
                    </div>

                    <div className="flex items-center justify-start gap-1 text-xs">
                        <input type="checkbox"/>
                        Active users
                    </div>

                    <div className="flex items-center justify-start gap-1 text-xs">
                        <input type="checkbox"/>
                        New users
                    </div>

                    <div className="flex items-center justify-start gap-1 text-xs">
                        <input type="checkbox"/>
                        Total funding
                    </div>

                    <div className="flex items-center justify-start gap-1 text-xs">
                        <input type="checkbox"/>
                        Total spending
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="border border-neutral_200 rounded-5px flex items-center justify-center w-9 h-9" onClick={changeChart}>
                        <BarChart/>
                    </div>
                    <div className="border border-neutral_200 rounded-5px flex items-center justify-center w-9 h-9" onClick={downloadImage}>
                        <Camera/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LineChart