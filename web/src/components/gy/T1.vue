<template>
    <div ref="v">

    </div>
</template>

<script>
import {subTime} from '@/utils/util.js'
import { getCurrentInstance } from 'vue'
export default{
    mounted(){

        fetch(window.BaseURL+"/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            let sumMap = this.calculate(res.data)
            let legend = ["离线", "待机", "运行"]
            let op = {
                title: {
                    text: "设备历史各个状态持续时长",
                    x: "center"
                },
                xAxis: {
                    data: Object.keys(sumMap),
                    name: "设备"
                },
                yAxis: {
                    name: "持续时长（秒）"
                },
                legend: {
                    data: legend,
                    x: "90%"
                },
                series: legend.map(it => {
                    return {
                        name: it,
                        type: "bar",
                        data: Object.values(sumMap).map(v => v[it] == undefined ? 0 : v[it] ),
                    }
                }),
                tooltip:{
                    trigger: "axis"
                }
            }
            console.log("T1", op)
            this.$echarts.init(this.$refs.v).setOption(op)
            
        })
    },

    methods: {
        calculate(res){
            let sumMap = {}
            for(let machine of res){
                let baseMachineId = machine.machineNo
                let tmp = {}
                for(let changeRecord of machine.showFactChangeRecordList){
                    let state = changeRecord.changeRecordState
                    if(! tmp.hasOwnProperty()){
                        tmp[state] = 0
                    }             
                    tmp[state] += subTime(changeRecord.changeStartTime, changeRecord.changeEndTime)
                }
                sumMap[baseMachineId] =  tmp
            }
            return sumMap
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