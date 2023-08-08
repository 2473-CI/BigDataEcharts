<template>
    <div ref="v">

    </div>
</template>

<script>
import {xhrPost} from '@/utils/api.js'
import {groupSum} from '@/utils/util.js'

export default {
    mounted(){
        xhrPost(window.BaseURL+"/dataVisualization/selectOrderInfo", {"startTime":"2020-01-01 00:00:00","endTime":"2020-12-30 00:00:00"})
        .then((res) => {
            res = res.data
            let data = groupSum(res, "provinceName", "finalTotalAmount")
            data = Object.keys(data).map(k => {return {k:k, v:data[k]}}).sort((o1, o2) => {return o2.v-o1.v}).slice(0,5)
            let op = {
                title: {
                    text: "消费额最高的省份",
                    x: "center",
                    y: "15"
                },
                xAxis: {
                    name: "省份",
                    data: data.map(item => item.k)
                },
                yAxis: {
                    name: "总消费额",
                    min: 1000 * 10000,
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
            console.log("T1", op)
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