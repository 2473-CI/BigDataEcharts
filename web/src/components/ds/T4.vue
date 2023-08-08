<template>
    <div ref="v">
        暂无 此图
    </div>
</template>

<script>
import {xhrPost} from '@/utils/api.js'
import {groupCount, groupSum} from '@/utils/util.js'
export default {
    mounted(){
        xhrPost(window.BaseURL+"/dataVisualization/selectOrderInfo", {"startTime":"2020-01-01 00:00:00","endTime":"2020-12-30 00:00:00"})
        .then((res) => {
            res = res.data
            let sum = groupSum(res, "provinceName", "finalTotalAmount")
            let count = groupCount(res, "provinceName")
            let avg = Object.keys(sum).map(key => {
                return {name: key, value: (sum[key]/count[key]).toFixed(2)}
            }).sort((o1, o2) => {
                return o2.value - o1.value
            }).slice(0, 5).reverse()
            let op = {
                title: {
                    text: "平均消费额最高的省份",
                    x: "center",
                    y: "15"
                },
                yAxis: {
                    name: "地区",
                    data: avg.map(it => it.name)
                },
                xAxis: {
                    name: "人均消费额",
                    min: 60000,
                    max: 75000,
                    axisLabel: {
                        formatter(value){
                            return value/10000 + "万元"
                        }
                    }
                },
                series: [{
                    type: "bar",
                    data: avg.map(it => it.value),
                    label: {
                        show: true,
                        position: "right"
                    }
                }]
            }
            console.log("T4", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })

        
    }
}
</script>

<style scoped>
div{
    width: 800px;
    height: 600px;
}
</style>