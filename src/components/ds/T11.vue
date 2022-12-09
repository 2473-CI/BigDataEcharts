<template>
    <div ref="v">
        暂无 此图
    </div>
</template>

<script>
import {xhrPost} from '@/utils/api.js'
import {groupSum} from '@/utils/util.js'

export default {
    mounted(){
        xhrPost("/api/dataVisualization/selectOrderInfo", {"startTime":"2020-01-01 00:00:00","endTime":"2020-12-30 00:00:00"})
        .then((res) => {
            res = res.data
            let data = groupSum(res, "userName", "finalTotalAmount")
            data = Object.keys(data).map(k => {return {k:k, v:data[k]}}).sort((o1, o2) => {return o2.v-o1.v}).slice(0,5)
            let op = {
                title: {
                    text: "消费额最高的用户",
                    x: "center",
                    y: "15"
                },
                xAxis: {
                    name: "用户",
                    data: data.map(item => item.k)
                },
                yAxis: {
                    name: "总消费额",
                    axisLabel: {
                        formatter(value){
                            return value/10000 + "万"
                        }
                    }
                },
                series: [
                    {
                        type: "bar",
                        data: data.map(item => item.v),
                        label: {
                            show: true
                        }
                    }
                ]
            }
            console.log("T11", op)
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