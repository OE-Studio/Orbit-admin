import React, {useEffect} from "react";
import Chart from 'chart.js/auto';

let myChart:any = null

const InsightPieChart = () =>{
    useEffect(()=>{
        let myCanvas= document.querySelector('#pieChartInsight') as HTMLCanvasElement
        let ctx = myCanvas.getContext('2d')

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

        if(ctx){
            // @ts-ignore
            myChart = new Chart(ctx, config)
        }

        return ()=>{myChart.destroy()}
        // eslint-disable-next-line
    })
    return (
        <div className="relative w-full">
            <p className="text-sm text-[#475467]">Product purchase</p>

            <div className="h-full inline-block mt-6">
                <canvas style={{width:"160px", height:"160px"}} id="pieChartInsight"></canvas>
            </div> 

            <hr className="w-full my-6"/>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue_500"></div>
                        <p className="text-cool_gray_1 text-sm">Data</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-new_green_700"></div>
                        <p className="text-cool_gray_1 text-sm">Airtime</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple_400"></div>
                        <p className="text-cool_gray_1 text-sm">Electricity</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FD9900]"></div>
                        <p className="text-cool_gray_1 text-sm">Send money</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#F26969]"></div>
                        <p className="text-cool_gray_1 text-sm">Cable subscription</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green_500"></div>
                        <p className="text-cool_gray_1 text-sm">Transfer to friends</p>
                    </div>
                    <p className="text-xs font-semibold">200</p>
                </div>
            </div>
        </div>
    )
}

export default InsightPieChart