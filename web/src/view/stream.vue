<template>
   <div id="box">
        <h1>Stream上的游戏</h1>
        <hr/>
        <h6>
           1. stream上游戏对各平台支持率 （多饼图）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 最受欢迎的游戏 （按游戏评论数拍 Top10 条形图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 你喜欢免费游戏吗 （将游戏分类为 需要买与免费 求其评论占比与游戏数量占比 柱状图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. Stream会越来越好吗 （按发售日期分组 求每年发售情况与发售后受欢迎程度-评论数）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 我玩的游戏你喜欢吗 （按照游戏类型分类，各类型游戏的数量与受欢迎程度 多Y轴）
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
    await axios.get("/api/stream").then(res => data = res.data)
    console.log(data)

    let plot1 = echarts.init(k1.value)
    plot1.setOption({
        title: [
            {
                text: "各平台支持率",
                x: "center"
            },
            {
                subtext: "win",
                x: "20%",
                y: "80%"
            },
            {
                subtext: "linux",
                x: "50%",
                y: "80%"
            },
            {
                subtext: "mac",
                x: "80%",
                y: "80%"
            }
        ],
        series: [
            {
                type: "pie",
                center: ["20%", "50%"],
                radius: ["0", "30%"],
                name: "win",
                data: [
                    {name: "支持", value: data.filter(raw => raw.win=="true").length},
                    {name: "不支持", value: data.filter(raw => raw.win!="true").length}
                ]
            },
            {
                type: "pie",
                center: ["50%", "50%"],
                radius: ["0", "30%"],
                name: "linux",
                data: [
                    {name: "支持", value: data.filter(raw => raw.linux=="true").length},
                    {name: "不支持", value: data.filter(raw => raw.linux!="true").length}
                ]
            },
            {
                type: "pie",
                center: ["80%", "50%"],
                name: "mac",
                radius: ["0", "30%"],
                data: [
                    {name: "支持", value: data.filter(raw => raw.mac=="true").length},
                    {name: "不支持", value: data.filter(raw => raw.mac!="true").length}
                ]
            }
        ]
    })
    
    let plot2 = echarts.init(k2.value)

    let tmp2 = data.sort((o1, o2) => {
        return o2["user_reviews"] - o1["user_reviews"]
    }).slice(0, 10).reverse()

    plot2.setOption({
        xAxis: {},
        yAxis: {data:tmp2.map(o=>o["title"])},
        series: [
            {
                type: "bar",
                data: tmp2.map(o=>Number(o["user_reviews"]))
            }
        ]
    })

    let sum = {
        "评论": {"免费":0, "不免费": 0},
        "数量": {"免费":0, "不免费": 0}
    } 

    data.forEach(el => {
        if(el["price_final"] == "0.0"){
            sum["评论"]["免费"] += Number(el["user_reviews"])
            sum["数量"]["免费"] += 1
        }else{
            sum["评论"]["不免费"] += Number(el["user_reviews"])
            sum["数量"]["不免费"] += 1
        }
    })

    console.log(sum)

    let plot3 = echarts.init(k3.value)
    plot3.setOption({
        xAxis: {data: ["免费", "不免费"]},
        yAxis: {},
        series: [
            {
                name: "评论占比",
                type: "bar",
                data: [ sum["评论"]["免费"]/(sum["评论"]["免费"]+sum["评论"]["不免费"]), sum["评论"]["不免费"]/(sum["评论"]["免费"]+sum["评论"]["不免费"]) ]
            },
            {
                name: "数量占比",
                type: "bar",
                data: [ sum["数量"]["免费"]/(sum["数量"]["免费"]+sum["数量"]["不免费"]), sum["数量"]["不免费"]/(sum["数量"]["免费"]+sum["数量"]["不免费"]) ]
            }
        ]
    })


    let years = [...new Set(data.map(o=>o["date_release"].split("-")[0]))].filter(o=>o!='If It Means Saving the Planet\\"!?"')
    
    let ToToBest = {}
    data.forEach(el=> {
        let year = el["date_release"].split("-")[0]
        if(year!='If It Means Saving the Planet\"!?"'){
            if(! ToToBest.hasOwnProperty(year)){
                ToToBest[year] = {"发售情况":0, "受欢迎程度": 0}
            }
            ToToBest[year]["受欢迎程度"] += Number(el["user_reviews"])
            ToToBest[year]["发售情况"] += 1
        }

    })
    
    // Reflect.deleteProperty(ToToBest,'If It Means Saving the Planet\"!?"')
    console.log(ToToBest)

    let plot4 = echarts.init(k4.value)
    plot4.setOption({
        xAxis: {data: Object.keys(ToToBest),axisLabel: {interval: 0, rotate: 90} },
        yAxis: [{}, {}],
        series: [
            {
                type: "line",
                name: "发售情况",
                data: Object.values(ToToBest).map(raw => raw["发售情况"])
            },
            {
                type: "line",
                name: "受欢迎程度",
                yAxisIndex: 1,
                data: Object.values(ToToBest).map(raw => raw["受欢迎程度"])
            }
        ]
    })
    let MeAndYou = {}
    data.forEach(el=> {
        let year = el["rating"]
        if(! MeAndYou.hasOwnProperty(year)){
                MeAndYou[year] = {"发售情况":0, "受欢迎程度": 0}
            }
            MeAndYou[year]["受欢迎程度"] += Number(el["user_reviews"])
            MeAndYou[year]["发售情况"] += 1

    })
    

    let plot5 = echarts.init(k5.value)

    plot5.setOption({
        xAxis: {data: Object.keys(MeAndYou)},
        yAxis: [{}, {}],
        series: [
            {
                type: "line",
                name: "发售情况",
                data: Object.values(MeAndYou).map(raw => raw["发售情况"])
            },
            {
                type: "line",
                name: "受欢迎程度",
                yAxisIndex: 1,
                data: Object.values(MeAndYou).map(raw => raw["受欢迎程度"])
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