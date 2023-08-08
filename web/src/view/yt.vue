<template>
    <div id="box">
        <h1>订阅量最高的 YT 频道</h1>

        <div ref="t1" class="char"></div>
        <div ref="t2" class="char"></div>
        <div ref="t3" class="char"></div>
        <div ref="t4" class="char"></div>
        <div ref="t5" class="char"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const echarts = require("echarts")
const axios = require("axios")

let t1 = ref(null)
let t2 = ref(null)
let t3 = ref(null)
let t4 = ref(null)
let t5 = ref(null)


let data = []

onMounted(async () => {
    await axios.post("/api/Youtube", {"StartRank":1,"EndRank":500}).then(res => data = res.data)

    let plot1 = echarts.init(t1.value)
    let CategoryObj = {}
    for(let item of data){
        if(Number(item.Subscribers.replaceAll(",", "")) < 20000000) continue;
        if(! CategoryObj.hasOwnProperty(item.Category)) CategoryObj[item.Category] = 0
        CategoryObj[item.Category] ++ ;
    }
    let ser = {
        type: "pie",
        data: Object.keys(CategoryObj).map(key => {
            return {
                name: key, value: CategoryObj[key]
            }
        })
    }
    let opt1 = {
        title: {text: "用户超过20M各频道占比", left: "center", top: "3%"},
        tooltip: {trigger: "item"},
        series: [
            ser,
            {
                ...ser,
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{d}%"
                }
            }
        ]
    }
    plot1.setOption(opt1)

    let plot2 = echarts.init(t2.value)
    let yearObj = {}
    for(let item of data){
        if(! yearObj.hasOwnProperty(item.Started)) yearObj[item.Started] = 0
        yearObj[item.Started] ++ ;
    }
    let opt2 = {
        title: {text: "逐年频道启动数量变化", left: "center", top: "3%"},
        xAxis: {
            data: Object.keys(yearObj)
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                data: Object.values(yearObj),
                label: {
                    show: true,
                }
            }
        ]
    }
    plot2.setOption(opt2)

    let plot3 = echarts.init(t3.value)
    let MEObj = {}
    for(let item of data){
        let Subscribers = Number(item.Subscribers.replaceAll(",", "")) 

        if(! (item.Category=="Music" || item.Category=="Entertainment")) continue;
        if(! MEObj.hasOwnProperty(item.Started)) MEObj[item.Started] = [0, 0]
        if(item.Category=="Music") MEObj[item.Started][0] ++ ;
        if(item.Category=="Entertainment") MEObj[item.Started][1] ++ ;
    }
    let opt3 = {
        title: {text: "Music与Entertainment逐年用户变化", left: "center", top: "3%"},
        xAxis:{
            data: Object.keys(MEObj)
        },
        yAxis:{},
        legend: {
            data: ["Music", "Entertainment"],
            x: "90%",
            y: "10%"
        },
        series: [
            {
                type: "line",
                name: "Music",
                data: Object.values(MEObj).map(it => it[0])
            },
            {
                type: "line",
                name: "Entertainment",
                data: Object.values(MEObj).map(it => it[1])
            }
        ]
    }
    plot3.setOption(opt3)


    let plot4 = echarts.init(t4.value)
    let sandian1=[]
        for(let item of data){
        sandian1.push(
            [
            Number(item["Subscribers"].replaceAll(",",'')),
            0
            ]
        )
    }

        let opt4 = {
            title: {
                text: "Subscribers分布情况",
                x: "center",
                y: "3%"
            },
            xAxis:{
                interval:  50 * 10 **7,
                interval: {
                    splitNumber: 5,
                },
                axisLabel:{
                    formatter: function (value, index) {
                        return value/10000000 + 'M';
                    },
                }
            },
            yAxis:{
                axisLine:{onZero: false},
                scale: true,
                min: -0.5,
                max: 0.5,
                show: false
            },
            series:[
                {
                    data:sandian1,
                    type: 'scatter'
                }
            ],
    }
    plot4.setOption(opt4)




    let plot5 = echarts.init(t5.value)
    let sandian2=[]
    for(let item of data){
        sandian2.push(
            [
            Number(item["Subscribers"].replaceAll(",",'') / 10**8),
            Number(item["Video Views"].replaceAll(",",'') / 10**11),
            ]
        )
    }

    let opt5 = {
        title: {
            text: "Subscribers与Video Views的相关性",
            x: "center",
            y: "3%"
        },
        xAxis:{
            interval: .5
        },
        yAxis:{
            interval: .5
        },
        series:[
            {
                data:sandian2,
                type: 'scatter'
            }
        ],

    }

    plot5.setOption(opt5)

    console.log(opt1)
    console.log(opt2)
    console.log(opt3)
    console.log(opt4)
    console.log(opt5)
})

</script>

<style scoped>
#box{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.char{
    width: 800px;
    height: 600px;
    border: 1px solid rgb(181, 114, 114);
}
</style>