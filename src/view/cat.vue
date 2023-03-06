<template>
   <div id="box">
        <h1>猫的习性</h1>
        <hr/>
        <h6>
           1. 数据探索 （四品种的猫 样本占比 饼图）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 地理位置分布情况 （散点图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 你能看到我嘛 （各品种猫的可见性）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 猫的平均速度 （各品种猫 除去静止状态 其平均速度是多少）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 猜猜我在哪里 （各品种猫各时间段上 其常见所处高度）
        </h6>
        <div class="char" ref="k5"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const echarts = require("echarts")
const axios = require("axios")

let Australias = []
let NewZealands = []
let Kingdoms = []
let UnitedStates = []
const k1 = ref("k1")
const k2 = ref("k2")
const k3 = ref("k3")
const k4 = ref("k4")
const k5 = ref("k5")

let cats = ["Australia", "NewZealands", "Kingdoms", "UnitedStates"]

onMounted(async() => {
    await axios.get("/api/cat?study-name=Australia").then(res => Australias=res.data)
    await axios.get("/api/cat?study-name=NewZealand").then(res => NewZealands=res.data)
    await axios.get("/api/cat?study-name=Kingdom").then(res => Kingdoms=res.data)
    await axios.get("/api/cat?study-name=UnitedStates").then(res => UnitedStates=res.data)

    let plot1 = echarts.init(k1.value)
    plot1.setOption({
        legend: {
            data: ["Australia", "NewZealands", "Kingdoms", "UnitedStates"]
        },
        series: [
            {
                type: "pie",
                data: [
                    {name: "Australia", value: Australias.length},
                    {name: "NewZealands", value: NewZealands.length},
                    {name: "Kingdoms", value: Kingdoms.length},
                    {name: "UnitedStates", value: UnitedStates.length},
                ],
                label: {
                    show: "true",
                    formatter: "{b}\n样本占比{d}%"
                },
                
            }
        ]
    })


    let plot2 = echarts.init(k2.value)
    plot2.setOption({
        xAxis: {},
        yAxis: {},
        legend: {
            data: ["Australia", "NewZealands", "Kingdoms", "UnitedStates"]
        },
        series: [
            {
                type: "scatter",
                name: "Australia",
                data: Australias.map(raw => [raw["location-lat"], raw["location-long"]])
            },
            {
                type: "scatter",
                name: "NewZealands",
                data: NewZealands.map(raw => [raw["location-lat"], raw["location-long"]])
            },
            {
                type: "scatter",
                name: "Kingdoms",
                data: Kingdoms.map(raw => [raw["location-lat"], raw["location-long"]])
            },
            {
                type: "scatter",
                name: "UnitedStates",
                data: UnitedStates.map(raw => [raw["location-lat"], raw["location-long"]])
            }
        ]
    })

    let tmp3 = {}

    // cats.map(cat => {
    //     tmp3[cat] = {}
    //     tmp3[cat]["visible"] = 
    // })

    let plot3 = echarts.init(k3.value)
    plot3.setOption({
        xAxis: {
            data: cats
        },
        legend: {
            data: ["visible", "unvisible"]
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                name: "visible",
                data: [
                    Australias.filter(raw=>raw["visible"]==="true" || (raw["visible"]==="TRUE")).length/ Australias.length,
                    NewZealands.filter(raw=>raw["visible"]=="true" || (raw["visible"]=="TRUE")).length/ NewZealands.length,
                    Kingdoms.filter(raw=>raw["visible"]=="true" || (raw["visible"]=="TRUE")).length/ Kingdoms.length,
                    UnitedStates.filter(raw=>raw["visible"]=="true" || (raw["visible"]=="TRUE")).length/ UnitedStates.length
                ]
            },
            {
                type: "bar",
                name: "unvisible",
                data: [
                    Australias.filter(raw=>raw["visible"]=="false" || (raw["visible"]=="FALSE")).length/ Australias.length,
                    NewZealands.filter(raw=>raw["visible"]=="false" || (raw["visible"]=="FALSE")).length/ NewZealands.length,
                    Kingdoms.filter(raw=>raw["visible"]=="false" || (raw["visible"]=="FALSE")).length/ Kingdoms.length,
                    UnitedStates.filter(raw=>raw["visible"]=="false" || (raw["visible"]=="FALSE")).length/ UnitedStates.length
                ]
            }
        ]
    })

    function speed(arr){
        let sum = 0
        arr.forEach(element => {
            // console.log(Number(element["ground-speed"]))
            sum += Number(element["ground-speed"])
        });
        console.log(sum , arr.length)
        return sum / arr.length
    }
    
    // console.log(speed(UnitedStates.filter(raw => raw["ground-speed"] != "0" || raw["ground-speed"] != "")))

    let plot4 = echarts.init(k4.value)
    plot4.setOption({
        xAxis: {data:["Kingdoms", "UnitedStates"]},
        yAxis: {min: 1800},
        series: [
            {
                type: "bar",
                // name: "",
                data: [
                    speed(Kingdoms.filter(raw => raw["ground-speed"] != "0" && raw["ground-speed"] != "")),
                    speed(UnitedStates.filter(raw => raw["ground-speed"] != "0" && raw["ground-speed"] != ""))
                ]

            }
        ]
    })

    function zs(arr){
        return [...new Set(arr)].map(n=>{return{name:n, value:arr.filter(o=>o==n).length}}).sort((o1, o2) => o2.value-o1.value)[0]
    }

    let plot5 = echarts.init(k5.value)
    plot5.setOption({
        xAxis: {data: cats},
        yAxis: {},
        series: [
            {
                type:"line",
                data: [
                    zs(Australias.map(raw => raw["height-above-ellipsoid"])),
                    zs(NewZealands.map(raw => raw["height-above-ellipsoid"])),
                    zs(Kingdoms.map(raw => raw["height-above-ellipsoid"])),
                    zs(UnitedStates.map(raw => raw["height-above-ellipsoid"])),
                ]

            }
        ]
    })


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