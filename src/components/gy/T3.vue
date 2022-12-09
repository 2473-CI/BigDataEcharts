<template>
    <div ref="v">

    </div>
</template>

<script>
import { subTime, sortByTime } from '@/utils/util'


export default{
    mounted(){

        fetch("/api/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            res = this.calculate(res.data)
            res = sortByTime(res)
            let op = {
                title: {
                    text: "设备OP160每日运行时长",
                    x: "center"
                },
                xAxis: {
                    data: res.map(it => it.key),
                    name: "日期"
                },
                yAxis: {
                    name: "运行时长（秒）"
                },
                series: [
                    {
                        type: "line",
                        data: res.map(it => it.value),
                        label: {
                            show: true,
                            position: "top"
                        }
                    }
                ]
            }

            console.log("T3", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })


    },
    methods: {
        calculate(res){
            let dayMap = {}
            res.forEach(machine => {
                //  剔除 ID 不为 OP160 的机器
                if(machine.machineNo != "OP160") return;
                machine.showFactChangeRecordList.forEach(record => {
                    if (record.changeRecordState != "运行") return;
                    let day = record.changeStartTime.split(" ")[0]
                    dayMap[day] = dayMap[day] == undefined ? subTime(record.changeStartTime, record.changeEndTime) : dayMap[day]+subTime(record.changeStartTime, record.changeEndTime)
                })
            });
            return dayMap
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