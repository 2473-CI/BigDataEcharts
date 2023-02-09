<template>
   <div id="box">
        <h1>俄乌局势分析</h1>
        <hr/>
        <h6>
            1.各军事设施总消耗情况变化（折线）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2.各设施在最大损失种的占比 (等比南丁格尔玫瑰图)
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3.陆、海、空设施每月损失情况 (柱状)
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4.各设施总损失情况排名 (条形图)
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5.每月飞机、直升机、无人机、防空设备、和巡航导弹的损失情况 (雷达图)
        </h6>
        <div class="char" ref="k5"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const echarts = require("echarts")
const axios = require("axios")

let data = []
const k1 = ref("k1")
const k2 = ref("k2")
const k3 = ref("k3")
const k4 = ref("k4")
const k5 = ref("k5")

onMounted(async() => {
    await axios.post("/api/war", {"Country":"Russia"}).then(res => data = res.data)


    let sb = Object.keys(data[0]).filter(sb => sb!="date" || sb!="day" || sb!="greatest losses direction" || sb!="MRL")
    console.log(sb)
    let plot1 = echarts.init(k1.value)
    let opt1 = {
        title: {
            text: "各军事设施总消耗情况变化",
            left: "center"
        },
        xAxis: {type: "time"},
        yAxis: {},
        legend: {
            data: sb,
        },
        dataZoom: [
            {
            type: 'inside',
            start: 0,
            end: 20
            },
            {
            start: 0,
            end: 20
            }
        ],
        series: sb.map(name => {
            return {
                type: "line",
                name: name,
                data: data.map(line => {
                    return [new Date(line.date).getTime(), Number(line[name])]
                })
            }
        })
    }
    plot1.setOption(opt1)

    console.log(k1)
})

</script>


<style scoped>
#box{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h6{
    width: 800px;
}
.char{
    width: 800px;
    height: 600px;
    border: 1px solid rgb(148, 216, 232);
}
</style>