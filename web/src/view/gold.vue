<template>
   <div id="box">
        <h1>黄金的价格</h1>
        <hr/>
        <h6>
           1. 2000年至今黄金的最高价与最低价波动情况 （平滑折线 时间轴）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 每日黄金的价格变化 （折线 时间轴 变化=开仓价格-闭仓价格）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 逐年黄金流通市场容量变化 （按月做叠加柱状）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 回到2000年你最多能挣多少钱 （在过去20年中 最低点买入 最高点卖出 求每日累计收益 折线）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 目前黄金价格形势 （用最后一天的数据绘制雷达图 五个角分别是open high low close yolume， 每个角的最大值是黄金属性的最高点）
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
    await axios.get(window.BaseURL+"/Gold").then(res => data = res.data)
    data = data.map(raw => {
        return {
            "闭盘价格": raw["Close"],
            "日期": raw["Date"],
            "最高价格": Number(raw["High"]),
            "最低价格": Number(raw["Low"]),
            "开盘价格": raw["Open"],
            "最大容量": raw["Volume"],
            "年": raw["Date"].split("-")[0],
            "月": raw["Date"].split("-")[1],
        }
    })

    let years = [...new Set(data.map(raw=>raw["年"]))]
    let months = [...new Set(data.map(raw=>raw["月"]))]

    let plot1 = echarts.init(k1.value)
    let opt1 = {
        xAxis: {type: "time"},
        yAxis: {},
        series: [
            {
                type: "line",
                name: "最高价格",
                symbol: 'none',
                data: data.map(raw=>[ new Date(raw.日期).getTime(), raw.最高价格])
            },
            {
                type: "line",
                name: "最低价格",
                symbol: "none",
                data: data.map(raw=>[ new Date(raw.日期).getTime(), raw.最低价格])
            }
        ],
        legend: {
            data: ["最高价格", "最低价格"]
        },
        dataZoom: [ { }, { } ],
    }
    plot1.setOption(opt1)

    let plot2 = echarts.init(k2.value)
    let opt2 = {
        xAxis: {type: "time"},
        yAxis: {},
        series: [
            {
                type: "line",
                symbol: "none",
                data: data.map(raw => {
                    return  [new Date(raw.日期).getTime(), raw.开盘价格-raw.闭盘价格]
                })
            }
        ],
        dataZoom: [{},{}]
    }
    plot2.setOption(opt2)

    let plot3 = echarts.init(k3.value)
    let opt3 = {
        xAxis: {data: years},
        yAxis: {},
        legend: {
            data: months
        },
        series: 
            months.map(m=>{
                return {
                    type: "bar",
                    name: m,
                    stack: "0",
                    data: years.map(y=> {
                        let sum = 0
                        data.filter(raw => raw.年==y && raw.月==m).forEach(el => {
                            sum += Number(el.最大容量)
                        })
                        return sum
                    })
                }
            })
        
    }
    console.log(opt3)
    plot3.setOption(opt3)

    let max = {index:0, value: data[0].最高价格}
    let min = {index:0, value: data[1].最低价格}
    data.forEach((el, index) => {
        if(el.最低价格<min.value){
            min.index = index
            min.value = el.最低价格
            min.room = el.最大容量
        }
        if(el.最高价格>min.value){
            max.index = index
            max.value = el.最高价格
        }
    })
    console.log(min, max)
    let minToMax = data.slice(min.index, max.index + 1)

    let plot4 = echarts.init(k4.value)
    let opt4 = {
        xAxis: {type: "time"},
        yAxis: {},
        series: [
            {
                type: "line",
                symbol: "none",
                data: minToMax.map((raw, index) => {
                    if(index != minToMax.length){
                        return [new Date(raw.日期).getTime(), (raw.闭盘价格 - min.value) * min.room]
                    }else{
                        return [new Date(raw.日期).getTime(), (max.value - min.value) * min.room]
                    }
                    
                })
            }
        ],
        dataZoom: [{}, {}]
    }
    plot4.setOption(opt4)



    let last_data=data[data.length -1]
    
    let indicator = [
    "闭盘价格",
    "最高价格",
    "最低价格",
    "开盘价格",
    "最大容量"]
    let indicator_5 = indicator.map(o=>{
        return {name: o}
    })
    
    let legend=["最后一天"]


    let plot5 = echarts.init(k5.value)
    let opt5 = {
        title:{
            text:"黄金"
        },
        legend:{data:legend},
        radar:{
            indicator: indicator_5
        },
        series:[{
            type:'radar',
            data:[
                {name : "最后一天", value:indicator.map(o=>{
                    return Number(last_data[o])
                }) }
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