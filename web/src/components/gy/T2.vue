<template>
    <div ref="v">

    </div>
</template>

<script>
import { sortByTime, subTime } from '@/utils/util'

export default{
    mounted(){

        fetch(window.BaseURL+"/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            res = this.calculate(res.data)
            res = sortByTime(res)
            let so = [112, 113, 110, 111, 115, 117, 114, 116, 109]
            let op = {
                title: {
                    text: "每日所有车间各设备平均运行时长",
                    x: "center"
                },
                xAxis: {
                    data: res.map(it => it.key),
                    name: "日期"
                },
                yAxis: {
                    name: "平均运行时长（秒）"
                },
                legend: {
                    data: so.map(o => o+''),
                    x: "90%",
                    y: "20%"
                },
                tooltip: {
                    trigger: "axis"
                },
                series: so.map(it => {
                    return{
                        type: "bar",
                        name: it+'',  
                        data: res.map(it => it.value).map(el => el[it] == undefined ? 0 :  el[it])          
                    }
                })
            }

            console.log("T2", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })
    },
    methods: {
        calculate(res){
            let dayCount = {}
            let daySum = {}

            // group day
            let dayMap = {}
            res.forEach((machine) => {
                machine.showFactChangeRecordList.forEach((record) => {
                    // 过滤掉不为运行状态的
                    if(record.changeRecordState == "运行") {
                        let day = record.changeEndTime.split(" ")[0]
                        dayMap[day] == undefined ? dayMap[day] = [record] : dayMap[day].push(record)
                    }
                })
            })

            let AvgMap = {}
            Object.keys(dayMap).forEach(day => {
                let tmp = {}
                dayMap[day].forEach(event => {
                    let id = event.changeMachineId
                    tmp[id] = tmp[id] == undefined ? [subTime(event.changeStartTime, event.changeEndTime), 1] : [tmp[id][0]+subTime(event.changeStartTime, event.changeEndTime),  tmp[id][1]+1]
                })
                Object.keys(tmp).forEach(k => tmp[k] = (tmp[k][0]/tmp[k][1]).toFixed(2))
                AvgMap[day] = tmp
            })
            return AvgMap
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