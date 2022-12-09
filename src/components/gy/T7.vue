<template>
    <div ref="v">

    </div>
</template>

<script>
import { subTime } from '@/utils/util'

export default{
    mounted(){

        fetch("/api/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            this.init(res.data)
        })
    },
    methods: {
        calculate(res){

            let sub = subTime("2021-10-14 04:04:02", "2021-10-14 04:52:01")
            console.log(sub)
        },
        init(data){
            // this.calculate(res.data)
            let legends=[]
            let seriess=[]
            data.forEach(function(element, index){
                legends.push(element.machineName)

                seriess.push(
                    {
                        name:element.machineName,
                        type:"scatter",
                        data:[[index,0]],
                        symbolSize:20
                    }
                )

                element.showFactChangeRecordList.forEach(el => {
                    if(el.changeRecordState=='运行'){
                        seriess[index].data[0][1] += subTime(el.changeStartTime, el.changeEndTime)
                        }
                    });
            });
            
            let op = {
                title: {
                    text: "设备运行时长",
                    x: "center"
                },
                xAxis:{
                },
                yAxis:{
                    scale: true
                },
                legend:{
                    data:legends,
                    top: "25px"
                },
                series:seriess,
                tooltip: {
                    trigger: "item"
                }
            }

            console.log("T7", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        }
    }
}
</script>

<style scoped>
div{
    width: 800px;
    height: 600px;
    background-color: aliceblue;
}
</style>