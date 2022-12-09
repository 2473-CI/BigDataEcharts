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
            let data = groupSum(res, "regionName", "finalTotalAmount")
            data = Object.keys(data).map(k => {return {name:k, value:data[k]}}).sort((o1, o2) => {return o2.value-o1.value})
            let op = {
                title: {
                    text: "各地区消费能力",
                    x: "center",
                    y: "15"
                },
                legend: {
                    data: data.map(it => it.name),
                    left:"90%",
                    top: "35%",
                    orient:"vertical"
                },
                series: [
                    {
                        type: "pie",
                        data: data,
                        label: {
                            show: true
                        },
                        label: {
                            show : true,
                            position : 'inner',
                            formatter: '{d}%',
                        }
                    }
                ],
                tooltip: {
                    tirgger: "item"
                }
            }
            console.log("T2", op)
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