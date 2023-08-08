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
            let sum = groupSum(res, "regionName", "finalTotalAmount")
            let data = Object.keys(sum).map(key => {
                return {name: key, value: sum[key]}
            }).sort((o1, o2) => {
                return o2.value - o1.value
            })
            let op = {
                title: {
                    text: "各地区消费能力",
                    x: "center",
                    y: "15"
                },
                legend: {
                    data: data.map(it => it.name),
                    x: "90%",
                    y: "30%"
                },
                series: [{
                    type: "pie",
                    radius: ["10%", "70%"],
                    data: data,
                    roseType: "area",
                    itemStyle: {
                        borderRadius: 8
                    },
                    label: {
                        formatter(value){
                            return value.name + "\n" + value.percent + "%"
                        }
                    }
                }]
            }
            console.log("T12", op)
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