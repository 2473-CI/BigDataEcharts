<template>
   <div id="box">
        <h1>Gpu性能分析</h1>
        <hr/>
        <h6>
           1. 各品牌逐年新品发售数量 （柱状图 叠加）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. Clock的相关性 （散点图 memClock和gpuClock）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 各厂商不同类型显卡市场占比 （多饼图 igp字段）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 显卡光锥天梯排行榜 （Top15）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. Radeon RX 7900 XT与GeForce RTX 4090性能对比 （雷达图 对比参数包括memSize、memBusWidth、unifiedShader、tmu、rop）
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

onMounted(async () => {
    await axios.get(window.BaseURL+"/gpu").then(res => data = res.data)

    console.log(data)


    let plot2 = echarts.init(k2.value)
    let opt2={
        title:{
            text:"Clock相关性"
        },
        xAxis:{scale:true},
        yAxis:{scale:true},
        series:[{
            type:"scatter",
            data:data.map(d=>{
                return [Number(d.memClock), Number(d.gpuClock)]
            })
        }],
        tooltip:{
            position:"top"
        }
    }
    plot2.setOption(opt2)

    let legend5 = ["Radeon RX 7900 XT", "GeForce RTX 4090"]
    let data5=[]
    let indicator="memSize、memBusWidth、unifiedShader、tmu、rop".split("、")
    legend5.map(product=>{
        data5.push(data.filter(o=>o.productName==product))
    })

    let plot5 = echarts.init(k5.value)
    let opt5={
        title:{
            text: 'Radeon RX 7900 XT与GeForce RTX 4090性能对比',
            left: 'center'
        },
        legend:{
            data:legend5,
            left: "left",
            orient: ""
        },
        radar:{
            indicator:indicator.map(i=>{
                return {name : i}
            })
        },
        series:[{
            type: 'radar',
            data:[
                { name: "Radeon RX 7900 XT", value:[16, 256, 768, 12288, 256]},
                { name: "GeForce RTX 4090", value:[24, 192, 544, 17408, 384]},
            ]
        }]

    }
    console.log(opt5)
    plot5.setOption(opt5)
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