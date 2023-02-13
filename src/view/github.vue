<template>
   <div id="box">
        <h1>GitHub项目统计</h1>
        <hr/>
        <h6>
            1. 近5年Github新增项目数和stars数量对比 (折、柱混合图 双Y轴 创建时间：createdAt)
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 2022年各语言在languages与primaryLanguage上的占比 （柱状图 单Y轴）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. Github上最受欢迎的开源标准 （条形图 Top20 排除不包含许可证的项目 开源标准：license）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 2020年最受欢迎的主流语言项目 受欢迎程度与实际使用情况对比 （堆叠柱状图 两根柱子 受欢迎程度包括：stars、forks、watchers， 实际使用情况：pullRequests）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 在更新的主流语言累计分支占比 （主流语言的定义，用户数量超过Golang 只统计2022年相关数据）
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

let pre = 'http://192.168.10.109:8999'

onMounted(async() => {
    let data = []
    await axios.post(pre+"/GitHub", {"year":["2019", "2020", "2021", "2022", "2023"], "primaryLanguage": [], "need": ["createdAt", "stars"]}).then(res => data = res.data)
    let year = ["2019", "2020", "2021", "2022", "2023"]
    let sum = year.map(o=>[0,0])
    data.forEach(el => {
        let index = year.indexOf(el.createdAt.slice(0,4))
        sum[index][0] += 1
        sum[index][1] += el.stars
    })

    let plot = echarts.init(k1.value)

    let opt = {
        title: {text: "近5年Github新增项目数和stars数量对比"},
        xAxis: {
            data: year
        },
        legend: {
            data: ["新增数量", "starts"]
        },
        yAxis: [
            {
            },{
                max: 25000000
            }
        ],
        series: [
            {
                type: "line",
                name: "新增数量",
                data: sum.map(o=>o[0])
            },
            {
                type: "bar",
                name: "starts",
                data: sum.map(o=>o[1]),
                yAxisIndex: 1
            }
        ]
    }

    plot.setOption(opt)


})

onMounted(async () => {
    let data = []
    await await axios.post(pre+"/GitHub", {"year":["2022"], "primaryLanguage": [], "need": ["languages", "primaryLanguage"]})
    .then(res => data = res.data.map(o => {
            return {primaryLanguage: o.primaryLanguage, languages: JSON.parse(o.languages)
        }
    }))

    let primaryLanguageSum = 0, languagesSum = 0
    let primaryLanguageOb = {}, languagesOb = {}
    data.forEach(o => {
        if(! primaryLanguageOb.hasOwnProperty(o.primaryLanguage))  primaryLanguageOb[o.primaryLanguage] = 0
        primaryLanguageOb[o.primaryLanguage] += 1
        primaryLanguageSum += 1
        o.languages.forEach(po => {
            if(! languagesOb.hasOwnProperty(po.name))  languagesOb[po.name] = 0
            languagesOb[po.name] += po.size
            languagesSum += po.size
        })
    })
    let primaryLanguageArr = Object.keys(primaryLanguageOb).filter(key => key!="null").map(key => {return {name: key, value: primaryLanguageOb[key]/primaryLanguageSum}} ).sort((o1,o2) => o2.value-o1.value).slice(0,10)
    let languagesArr = Object.keys(languagesOb).map(key => {return {name: key, value: languagesOb[key]/languagesSum}} )
    
    let plot = echarts.init(k2.value)
    let opt = {
        title: {text: "2022年各语言在languages与primaryLanguage上的占比"},
        xAxis: {
            data: primaryLanguageArr.map(o=>o.name),
            axisLabel: {
                interval: 0,
                rotate: 90
            }
        },
        yAxis: {},
        legend: {
            data: ["primaryLanguag", "languages"],
            top: "5%"
        },
        series: [
            {
                type: "bar",
                name: "primaryLanguag",
                data: primaryLanguageArr.map(o=>o.value)
            },
            {
                type: "bar",
                name: "languages",
                data: languagesArr.map(o=>o.value)
            }
        ]
    }
    plot.setOption(opt)

})

onMounted(async() => {
    let data = []
    await axios.post(pre+"/GitHub", {"year":[], "primaryLanguage": [], "need": ["license"]}).then(res => data = res.data.filter(o=>o.license!=null).map(o=>o.license))

    let ob = {}
    data.forEach(el => {
        if(! ob.hasOwnProperty(el)) ob[el] = 0
        ob[el] += 1
    })
    let tmp = Object.keys(ob).map(key => {return {name: key, value: ob[key]}}).sort((o1,o2) => o2.value - o1.value).slice(0, 20).reverse()

    let plot = echarts.init(k3.value)
    let opt = {
        title: {
            text: "Github上最受欢迎的开源标准",
        },
        xAxis: {},
        yAxis: {data: tmp.map(o => o.name)},
        series: [
            {
                type: "bar",
                data: tmp.map(o => o.value),
                label: {
                    show: true,
                    position: "right"
                }
            }
        ]
    }
    plot.setOption(opt)

})

onMounted(async() => {
    await axios.post(pre+"/GitHub", {"year":["2020"], "primaryLanguage": [], "need": ["primaryLanguage", "assignableUserCount"]}).then(res => data = res.data)
    
    // 求出各语言的流行程度
    let ob = {}
    data.forEach(o=>{
        if(! ob.hasOwnProperty(o.primaryLanguage)) ob[o.primaryLanguage] = 0
        ob[o.primaryLanguage] += o.assignableUserCount
    })
    
    // 求出流行度比Go高的语言
    let popularLanguage = []
    Object.keys(ob).forEach(el => ob[el] >= ob["Go"] && el!="null" ? popularLanguage.push({name: el, value: ob[el]}) : 0 )
    popularLanguage = popularLanguage.sort((o2, o1) => o1.value - o2.value)

    let tmp = []
    for(let el of popularLanguage){
        let response = []
        await axios.post(pre+"/GitHub", {"year":["2020"], "primaryLanguage": [el.name], "need": ["stars", "forks", "watchers", "pullRequests"]}).then(res => response = res.data)

        let start = 0,fork = 0,watcher=0, sum2 = 0
        response.forEach(o => {
            start += o.stars
            fork += o.forks
            watcher += o.watchers
            sum2 += o.pullRequests
        })
        tmp.push({name: el.name, sum1: [start, fork, watcher], sum2: sum2})
    }



    let plot = echarts.init(k4.value)
    let opt = {
        title: {
            text: "受欢迎程度与实际使用情况对比"
        },
        xAxis: {
            data: tmp.map(o=>o.name)
        },
        yAxis: {
            
        },
        legend: {
            data: ["start", "fork", "watcher", "pullRequests"]
        },
        series: [
            {
                type: "bar",
                name: "start",
                stack: "受欢迎程度",
                data: tmp.map(o=>o.sum1[0])
            },
            {
                type: "bar",
                name: "fork",
                stack: "受欢迎程度",
                data: tmp.map(o=>o.sum1[1])
            },
            {
                type: "bar",
                name: "watcher",
                stack: "受欢迎程度",
                data: tmp.map(o=>o.sum1[2])
            },
            {
                type: "bar",
                name: "pullRequests",
                stack: "实际使用情况",
                data: tmp.map(o=>o.sum2)
            }
        ]
    }
    plot.setOption(opt)

    let Branchs = []
    await axios.post(pre+"/GitHub", {"year":["2022"], "primaryLanguage": popularLanguage.map(o=>o.name), "need": ["primaryLanguage", "defaultBranchCommitCount"]}).then(res => Branchs = res.data)
    let tmp5 = {}
    Branchs.forEach(el => {
        if(! tmp5.hasOwnProperty(el.primaryLanguage)) tmp5[el.primaryLanguage] = 0
        tmp5[el.primaryLanguage] += el.defaultBranchCommitCount
    })

    let plot5 = echarts.init(k5.value)
    let opt5 = {
        title: {
            text: "在更新的主流语言累计分支占比 "
        },
        legend: {
            data: Object.keys(tmp5)
        },
        series: [
            {
                type: "pie",
                data: Object.keys(tmp5).map(key => {
                    return {
                        name: key,
                        value: tmp5[key]
                    }
                }),
                label: {
                    show: "true",
                    position: "inside",
                    formatter: "{d}%"
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