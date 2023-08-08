<template>
    <div  ref="v">
    </div>
</template>
<script>
import { groupCount, groupSum } from '@/utils/util';


export default {
    mounted(){
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch("/api/dataVisualization/selectOrderInfo", {
            method: "POST",
            body: JSON.stringify({
                "startTime": "2020-01-01 00:00:00",
                "endTime": "2020-12-30 00:00:00"
            }),
            headers: headers,
        })
        .then(res => res.json())
        .then(res => {
            let avg = this.getAvg(res.data, "provinceName", "finalTotalAmount")
            .sort((o1, o2) => {
                return o2.value - o1.value
            }).slice(0, 10)
            
            let seriess=[]
            
            avg.forEach((val, index) => {
                seriess.push({
                    name: val.name,
                    data:[ [index, Number(val.value)]],
                    type:"scatter",
                    symbolSize:20
                })
            })

            let op = {
                title: {
                    text: "省份平均消费额",
                    x: "center",
                    y: 15,
                },
                legend:{
                    x: "90%",
                    y: "20%",
                    data: avg.map(it => it.name)
                },
                xAxis:{
                },
                yAxis:{
                    scale:true
                },
                series:seriess
            }

            console.log(op)
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