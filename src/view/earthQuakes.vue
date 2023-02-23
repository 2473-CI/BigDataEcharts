<template>
   <div id="box">
        <h1>日本地震啦</h1>
        <hr/>
        <h6>
           1. 日本震心经纬度分布 （散点）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 日本每月各等级地震发生次数
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 各地震深度与之对应的常见强度 （折线）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 各时刻发生地震的可能性 （折线）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 日本常见地震等级 (饼图)
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

onMounted(async ()=>{
    await axios.get("/api/EarthQuakes").then(res => data=res.data)
    data = data.map(raw => {
        function d(str){
            let splitArr = str.replace("°", "′").split("′")
            return Number(splitArr[0]) < 0 ? Number(splitArr[0]) - (Number(splitArr[1])/60) : Number(splitArr[0]) + (Number(splitArr[1])/60) 
        }
        return {
            ...raw,
            "强度": Number(raw["强度"]),
            "深度": Number(raw["深度"].split(" ")[0]),
            "经度": d(raw["精度"]),
            "纬度": d(raw["纬度"]),
            "月": raw["日期"].split("/")[1],
            "时间": raw["时间"].split(".")[1]
        }
    })
    console.log(data)
    
    let time = [...new Set(data.map(raw => raw["时间"]))].sort((o1, o2) => o1-o2)
    let month = [...new Set(data.map(raw=>raw["月"]))].sort((o1, o2) => Number(o1)-Number(o2))
    let grade = [...new Set(data.map(raw => raw["最大震度"]))]
    let depth = [...new Set(data.map(raw => raw["深度"]))].sort((o1, o2) => o1-o2)

    let plot1 = echarts.init(k1.value)
    let opt1 = {
        xAxis: {},
        yAxis: {},
        series: [
            {
            symbolSize: 10,
            data: data.map(raw => [raw["经度"], raw["纬度"]]),
            type: 'scatter'
            }
        ]
    }
    plot1.setOption(opt1)

    let tmp2 = month.map(m=>{
        return grade.map(g => {
            return data.filter(raw => raw["月"]==m && raw["最大震度"] == g).length
        })
    })

    let plot2 = echarts.init(k2.value)
    let opt2 = {
        xAxis: {data: month},
        yAxis: {},
        series: grade.map((g, i) => {
            return {
                type: "bar",
                name: g,
                // stack: "s",
                data: tmp2.map(raw => raw[i])
            }
        }),
        legend: {
            data: grade
        }
    }
    plot2.setOption(opt2)

    function multiplicity(arr){
        return [...new Set(arr)].map(n=>{return{name:n, value:arr.filter(o=>o==n).length}}).sort((o1, o2) => o2.value-o1.value)[0]["name"]
    }

    let plot3 = echarts.init(k3.value)
    let opt3 = {
        xAxis: {data: depth},
        yAxis: {},
        series: [
            {
                type: "line",
                data: depth.map(d=>multiplicity(data.filter(raw=>raw["深度"]==d).map(raw=>raw["强度"])))
            }
        ]
    }
    plot3.setOption(opt3)

    let plot4 = echarts.init(k4.value) 
    let opt4 = {
        xAxis: {
            data: time
        },
        yAxis: {},
        series: [
            {
                type: "line",
                data: time.map(t=> data.filter(raw=>raw["时间"]==t).length/data.length)
            }
        ],
    }
    console.log(opt4)
    plot4.setOption(opt4)

    let plot5 = echarts.init(k5.value)
    let opt5 = {
        legend: {
            data: grade
        },
        series: [
            {
                type: "pie",
                data: grade.map(g => {
                    return {
                        name: g,
                        value: data.filter(raw=>raw["最大震度"]==g).length
                    }
                }),
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}\n{d}%',
                    }
                }
            }
        ]
    }
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