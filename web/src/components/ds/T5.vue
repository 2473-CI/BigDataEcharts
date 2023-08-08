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

            let provinceAvg = this.getAvg(res, "provinceName", "finalTotalAmount")
                .sort((o1, o2) => {
                    return o2.value - o1.value
                }).slice(0, 5)
  
            let regionNameAvg = {}
            this.getAvg(res, "regionName", "finalTotalAmount").forEach(el => {
                regionNameAvg[el.name] = el.value
            })

            let ptor = {}
            res.forEach(el => {
                ptor[el.provinceName] = el.regionName
            })

            let op = {
                title: {
                    text: "省份平均消费额和地区平均消费额",
                    x: "center",
                    y: "15"
                },
                xAxis: {
                    name: "城市",
                    data: provinceAvg.map(it => it.name)
                },
                yAxis: {
                    name: "平均消费额",
                    min: 55000,
                    max: 75000,
                    axisLabel: {
                        formatter(value){
                            return value/10000 + "万元"
                        }
                    }
                },
                legend: {
                    data: ["省平均消费额", "地区平均消费额"],
                    x: "80%",
                    y: "12%",
                },
                series: [
                    {
                        name: "省平均消费额",
                        type: "bar",
                        label: {
                            show: true,
                            position: "top"
                        },
                        data: provinceAvg.map(it => it.value)
                    },
                    {
                        name: "地区平均消费额",
                        type: "line",
                        label: {
                            show: true,
                            position: "top"
                        },
                        data: provinceAvg.map(it => {
                            return regionNameAvg[ptor[it.name]]
                        })
                    }
                ],
                tooltip: {
                    trigger: "axis"
                }
            }
            console.log("T5", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })
    },
    methods:{
        getAvg(res, groupName, sumName){
            let sum = groupSum(res, groupName, sumName)
            let count = groupCount(res, groupName)
            let avg = Object.keys(sum).map(key => {
                return {name: key, value: (sum[key]/count[key]).toFixed(2)}
            })
            return avg
        }
    }
}
</script>

<style scoped>
div{
    width: 800px;
    height: 600px;
}
</style>