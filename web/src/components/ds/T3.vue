<template>
    <div  ref="v">
    </div>
</template>
<script>
import { groupCount } from '@/utils/util';


export default {
    mounted(){
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        fetch(window.BaseURL+"/dataVisualization/selectGoodsInfo", {
            method: "POST",
            body: "{}",
            headers: headers,
        })
        .then(res => res.json())
        .then(res => {
            let count = groupCount(res.data, "year")
            count = Object.keys(count).map(key => {return [Number(key), count[key]]})
            let op = {
                title: {
                    text: "每年上架商品数量变化",
                    x: "center",
                    y: 15,
                },
                xAxis:{
                    name: "年份",
                    scale:true,
                    minInterval:1
                },
                yAxis:{
                    name: "上架商品数量",
                    scale:true
                },
                series:{
                    data:count,
                    type:"scatter"
                }
            }

            console.log("T3", op)
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