<template>
    <div id="box">
        <h1>全球艾滋死亡人数统计</h1>
        <h6>1. 各国死亡人数对比 (饼图 Top20)</h6>
        <div class="char" ref="r1"></div>

        <h6>2. 每年死亡人数对比 (柱状图)</h6>
        <div class="char" ref="r2"></div>

        <h6>3. 中国每年各年龄段死亡人数对比（折线图，x轴为年）</h6>
        <div class="char" ref="r3"></div>
        
        <h6>4. 中、美、日、韩逐年艾滋死亡情况 （单轴散点）</h6>
        <div class="char" ref="r4"></div>

        <h6>5. 中、美、日、韩各年龄段总计死亡情况 （雷达）</h6>
        <div class="char" ref="r5"></div>
    </div>
</template>

<script setup>
import axios from 'axios'
import {onMounted, ref} from 'vue'
// import func from 'vue-temp/vue-editor-bridge'
const echarts = require("echarts")
const r1 = ref("r1")
const r2 = ref("r2")
const r3 = ref("r3")
const r4 = ref("r4")
const r5 = ref("r5")
let data=[]
onMounted(async()=>{
    await axios.get(window.BaseURL+"/AIDS").then(res=>data=res.data)
    
    data = data.filter(o => o.Country!=""&&o.Country!="World")
    
    let NumData = data.map(o=>{
        return {
            ...o,
            "15-49": Number(o["15-49"]) == NaN? 0 : Number(o["15-49"]),
            "5-14": Number(o["5-14"]) == NaN? 0 : Number(o["5-14"]),
            "50-69": Number(o["50-69"]) == NaN? 0 : Number(o["50-69"]),
            "70+": Number(o["70+"]) == NaN? 0 : Number(o["70+"]),
            "Under 5": Number(o["Under 5"]) == NaN? 0 : Number(o["Under 5"])
        }
    })
    let country = [...new Set(data.map(o=>o.Country))]
    let year = [...new Set(data.map(o=>o.Year))]
// 480 0000
    let tmp1 = country.map(c=>{  // c 国家
        let sum = 0
        NumData.filter(o=>o.Country==c).forEach(el => {  // el 行
            sum += (el["Under 5"] + el["5-14"] + el["15-49"] + el["50-69"] + el["70+"])
        })
        return {name: c, value: sum}
    }).sort((o1, o2) => {
        return o2.value-o1.value
    }).slice(0, 20)

    let plot1 = echarts.init(r1.value)
    let opt1 = {
        title: {
            text: "各国死亡人数对比"
        },
        series: [
            {
                type: "pie",
                data: tmp1
            }
        ],
        tooltip: {
            trigger: "item"
        }
    }
    plot1.setOption(opt1)

    let tmp2 = year.map(y=>{
        let sum = 0
        NumData.filter(o=>o.Year==y).forEach(el => {
            sum += (el["Under 5"] + el["5-14"] + el["15-49"] + el["50-69"] + el["70+"])
        })
        return {name: y, value: sum}
    }).sort((o1, o2)=>Number(o2.Year)-Number(o2.Year))
    let plot2 = echarts.init(r2.value)
    let opt2 = {
        title: {
            text: "每年死亡人数对比"
        },
        xAxis: {
            data: tmp2.map(o=>o.name)
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                data: tmp2.map(o=>o.value),
                // label: {
                //     show: true
                // }
            }
        ],
        tooltip: {
            trigger: "item"
        }
    }
    plot2.setOption(opt2)
    let tmp3 = NumData.filter(o=>o.Country == "China")
    let plot3 = echarts.init(r3.value)
    let opt3 = {
        title: {
            text: "中国每年各年龄段死亡人数对比",
            x: "center",
        },
        legend: {
            data: ["Under 5", "5-14", "15-49", "50-69", "70+"],
            top: "5%"
        },
        xAxis: {data: tmp3.map(o=>o.Year)},
        yAxis: {},
        tooltip: {
            trigger: "axis"
        },
        series: ["Under 5", "5-14", "15-49", "50-69", "70+"].map(it => {
            return {
                type: "line",
                name: it,
                data: tmp3.map(o=>o[it])
            }
        })
    }

    plot3.setOption(opt3)

    let plot4 = echarts.init(r4.value)
    let Country=["China", "United States","Japan","South Korea"]
    let title_4=[],singleAxis_4=[],series_4=[],years=[],data_4=[]
    data.forEach(element=>{
        if(!years.includes(element["Year"])) years.push(element["Year"])
    })
    Country.forEach(function(element, idx){
        title_4.push({
            text:element,
            top: (idx+.5) *100 / Country.length + "%"
        })
        singleAxis_4.push({
            top: (idx+.5) *100 / Country.length + "%",
            left: "150px",
            height: "30px",
            data:years.sort(),
            type:"category",
            interval:5
        })
        series_4.push({
            singleAxisIndex:idx,
            coordinateSystem:"singleAxis",
            data:[],
            symbolSize:function(dataItem){
                if(dataItem[1]>2 * 10**4){
                    return dataItem[1] / 350
                }else if(dataItem[1]>3 * 10**3){
                    return dataItem[1] / 150
                }else{
                    return dataItem[1] / 10
                }
0            },
            type:"scatter"
        })
    });


    console.log("ser", series_4)
    series_4.forEach((el, idx) => {
        year.forEach((y, i) => {
            let sum = 0
            let item = NumData.filter(o=> o.Country==Country[idx] && o.Year==y )[0]
            sum += (item["Under 5"] + item["5-14"] + item["15-49"] + item["50-69"] + item["70+"])
            el["data"].push([y, sum])
        })
    });

    let opt4={
        tooltip:{
            position:"top",
        },
        title:title_4,
        singleAxis:singleAxis_4,
        series:series_4
    }
    console.log(opt4)
    plot4.setOption(opt4)

    let age=["Under 5", "5-14", "15-49", "50-69", "70+"],indicator=[]
    Country.forEach(element=>{ indicator.push({name: element})})
    let plot5= echarts.init(r5.value)
    let opt5={
        title:{text:"中、美、日、韩各年龄段总计死亡情况",left:"center"},
        legend:{
            data:age,
            left:"left",
            orient:'vertical'
        },
        radar:{
            indicator:indicator
        },
        series:[{
            type:"radar",
            data: age.map(a => {
                return {
                    name: a,
                    value: Country.map(c => {
                        let sum = 0
                        console.log(NumData.filter(o=>o.Country == c))
                        NumData.filter(o=>o.Country == c).forEach(o => {
                            sum += o[a]
                        })
                        return sum
                    })
                }
            })
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
.char{
    width: 800px;
    height: 600px;
}
h6{
    width: 800px;
}
</style>

