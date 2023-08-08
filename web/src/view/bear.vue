<template>
   <div id="box">
        <h1>北美熊杀人案</h1>
        <hr/>
        <h6>
            1.终极杀人熊  各种类的熊杀人人数排名（条形图）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2.雌雄难辨 受害者男女分布（饼图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           
            3.最作死的职业 （杀人熊职业分布）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4.哪里的黎明静悄悄 （案发地点排名 前五 条形）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5.谁才是真正的猎人 （每年有多少猎人被熊反杀 折线）
        </h6>
        <div class="char" ref="k5"></div>
    </div>
</template>

<script setup>
import { number } from 'echarts'
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
    await axios.get(window.BaseURL+"/NorthAmericaBearKillings").then(res => data = res.data)

    console.log("数据源", data)
    let tmp1 = [...new Set(data.map(o=>o["Type of bear"]))].map(type => { return {name:type, value: data.filter(o=>o["Type of bear"]==type).length} }).sort((o1, o2) => o1.value - o2.value)
    let plot1 = echarts.init(k1.value)
    plot1.setOption({
        title: {text: "终极杀人熊", x: 'center'},
        yAxis: {data: tmp1.map(o=>o.name)},
        xAxis: {},
        series: [{type: "bar",data: tmp1.map(o=>o.value), label: {show: true}}]
    })

    let tmp2 = ["female", "male"].map(gender=> { return {name: gender, value: data.filter(o=>o.gender==gender).length} })
    let plot2 = echarts.init(k2.value)
    plot2.setOption({
        title: {text: "雌雄难辨"},
        series: [{type: "pie",data:tmp2,label:{formatter: "{b}\n{d}%"}}]
    })

    let tmp3 = [...new Set(data.map(o=>o.Type))].map(type => { return {name: type, value: data.filter(o=>o.Type==type).length} } )
    let plot3 = echarts.init(k3.value)
    plot3.setOption({
        title: {text: "最作死的职业"},
        xAxis: {data: tmp3.map(o=>o.name)},
        yAxis: {},
        series: [ { type: "bar", data: tmp3.map(o=>o.value), label: { show: true  } } ]
    })

    let tmp4 = [...new Set(data.map(o=>o.Location))].map(type => { return {name: type, value: data.filter(o=>o.Location==type).length} } ).sort((o1, o2)=> o2.value-o1.value).slice(0, 5).reverse()
    let plot4 = echarts.init(k4.value)
    plot4.setOption({
        title: {text: "哪里的黎明静悄悄", x: 'center'},
        yAxis: {data: tmp4.map(o=>o.name)},
        xAxis: {},
        series: [{type: "bar",data: tmp4.map(o=>o.value), label: {show: true}}]
    })

    let years = [...new Set(data.map(o=>o.Year))].sort((o1, o2) => Number(o1)- Number(o2))

    let tmp5 = years.map(year=>{
        let ob = {Hikers: 0, Hunter: 0, year: year}
        data.filter(o=>o.Year==year).forEach(el=>{
            ob["Hikers"] += Number(el["Hikers"])
            ob["Hunter"] += Number(el["Hunter"])
        })
        return ob
    })
    let plot5 = echarts.init(k5.value)
    plot5.setOption({
        title: {text: "谁才是真正的猎人"},
        xAxis: {data: tmp5.map(o=>o.year)},
        yAxis: {},
        legend: {
            data: ["Hikers", "Hunter"]
        },
        series: [
            {
                type: "line",
                name: "Hikers",
                data: tmp5.map(o=>o.Hikers)
            },
            {
                type: "line",
                name: "Hunter",
                data: tmp5.map(o=>o.Hunter)
            }
        ]
    })
    console.log(tmp5)
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