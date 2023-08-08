<template>
    <div  ref="v">
    </div>
</template>
<script>
import { groupCount } from '@/utils/util';


export default {
    mounted(){
        fetch("/api/dataVisualization/selectGoodsInfo", {
            method: "POST",
            body: "{}",
            "Content-type": "application/json"
        })
        .then(res => res.json())
        .then(res => {
            let count = groupCount(res.data, "year")
            
            let op = {
                title: {
                    text: "每年上架商品数量变化",
                    x: "center",
                    y: 15,
                },
                xAxis: {
                    name: "年份",
                    data: Object.keys(count)
                },
                yAxis: {
                    name: "上架商品数量"
                },
                series: [{
                    type: "line",
                    label: {
                        show: true,
                        position: "top"
                    },
                    data: Object.values(count)
                }]
            }

            console.log("T6", op)
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