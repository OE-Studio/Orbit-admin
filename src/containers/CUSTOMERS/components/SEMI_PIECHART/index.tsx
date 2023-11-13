import React, {useEffect} from "react";
import Chart from 'chart.js/auto';

let myChart:any = null

interface stat{
    stat:{
        active_users:number,
        all_users:number,
        blocked_users:number,
        unverified_users:number,
        verified_users:number
    }
}

const SemiPieChart = (props:stat) =>{
    useEffect(()=>{
        let canvas = document.querySelector('#pieChart') as HTMLCanvasElement
        let ctx = canvas.getContext('2d')

        const data={
            labels: ["verified", "unverified"],
            datasets: [
                {
                    label: 'Recent withdrawal',
                    axis:"y",
                    data: [(props.stat?.verified_users/props.stat?.all_users * 100), (props.stat?.unverified_users/props.stat?.all_users * 100)],
                    backgroundColor: [
                        '#5DADEC',
                        '#DFEFFB'
                      ],
                    // fillColor: "rgba(151,187,205,0.5)",
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
                cutout:"70%",
                circumference:180,
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
        <div className="border-4 border-b-0 border-neutral_100 p-1 pb-0 rounded-t-full relative w-28 h-14">
            <div className="h-full">
                <canvas style={{width:"112px", height:"56px"}} id="pieChart"></canvas>  

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto inline-block font-medium text-gray_300">
                    {((props.stat?.verified_users/props.stat?.all_users) * 100).toFixed(0)}%
                </div>
            </div> 
        </div>
    )
}

export default SemiPieChart