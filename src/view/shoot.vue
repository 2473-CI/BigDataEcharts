<template>
   <div id="box">
        <h1>自由美利坚，枪战每一天</h1>
        <hr/>
        <h6>
            1.逐年枪击事件的死亡人数和受伤人数对比（柱状图）
        </h6>
        <div class="char" ref="k1" ></div>
        <h6>
            2.各大洲在过去5年中的死亡人数和受伤人数统计（双饼图）
        </h6>
        <div class="char" ref="k2" style="height:1000px"></div>
        <h6>
           3.统计发生枪击事件最多的州Top10 （条形图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4.统计美国每月枪击事件的死亡比 （折线图 死亡比=死亡人数/总人数）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5.以Illinois、California、Texas、Florida、Pennsylvania 五大洲为例，绘制单轴散点图，分析每月死亡人数
        </h6>
        <div class="char" ref="k5"></div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const echarts = require("echarts")
const axios = require("axios")

const k1 = ref("k1")
const k2 = ref("k2")
const k3 = ref("k3")
const k4 = ref("k4")
const k5 = ref("k5")

let data = []

onMounted(async() => {
    await axios.get("/api/shoot").then(res => data = res.data)
    data = data.map(o => {return {...o, M: o.Date.slice(3, 10), Y: o.Date.slice(6, 10), Dead: Number(o.Dead), Injured: Number(o.Injured), Total: Number(o.Total)}})

    console.log(data)

    let State = [...new Set(data.map(o=>o.State))]

    let tmp1 = [...new Set(data.map(o=>o.Y))].map(year => {
        let ob = {Dead: 0, Injured: 0, year: year}
        data.filter(o=>o.Y==year).forEach(el => {ob.Dead += el.Dead; ob.Injured += el.Injured} )
        return ob
    })

    let plot1 = echarts.init(k1.value)
    let opt1 = {
        title: {
            text: "逐年枪击事件的死亡人数和受伤人数对比"
        },
        xAxis: {data: tmp1.map(o=>o.year)},
        yAxis: {},
        legend: {
            data: ["死亡人数", "受伤人数"]
        },
        series: [
            {
                name: "死亡人数",
                type: "bar",
                data: tmp1.map(o => o.Dead)
            },
            {
                name: "受伤人数",
                type: "bar",
                data: tmp1.map(o => o.Injured)
            }
        ]
    }
    plot1.setOption(opt1)

    let plot2 = echarts.init(k2.value)
    
    let tmp2 = State.map(state => {
        let ob = {Dead: 0, Injured: 0, State: state}
        data.filter(o=>o.State==state).forEach(el => {ob.Dead += el.Dead; ob.Injured += el.Injured} )
        return ob
    })
    console.log(tmp2)
    let opt2 = {
        title: {
            text: "各大洲在过去5年中的死亡人数和受伤人数统计"
        },
        series: [
            {
                type: "pie",
                data: tmp2.map(o=> {return {name: o.State, value: o.Dead}}),
                center: ["50%", "30%"],
                radius: ["0", "50%"]
            },
            {
                type: "pie",
                data: tmp2.map(o=> {return {name: o.State, value: o.Injured}}),
                center: ["50%", "70%"],
                radius: ["0", "50%"]
            },
        ]
    }
    plot2.setOption(opt2)

    let plot3 = echarts.init(k3.value)
    plot3.setOption(opt3)

    let State_5=["Illinois", "California", "Texas", "Florida", "Pennsylvania"]

    let title_5=[], singleAxis_5=[], series_5=[],month=[]
    let tmp5 = State_5.map(state => {
        let num={}
        let stateData = data.filter(o => o.State == state)
        stateData.forEach(element => {
            let date = element["Date"].split("/")
            if(!month.includes(date[1])){month.push(date[1])}

            if(num[date[1]]==undefined){num[date[1]]=0}
            num[date[1]] += Number(element["Dead"])
        });
        return num
    })
    State_5.forEach(function(el, idx){

        title_5.push(
            {
                text:el,
                top: (idx+.4) * 100 / State_5.length +"%"
            })
        singleAxis_5.push(
            {
                type:"category",

                data:month.sort(),
                top: (idx+.4) * 100 / State_5.length +"%",
                height:"10px",
                left:"150px",
                interval:4
            }
        )
        series_5.push({
            type:"scatter",
            coordinateSystem:"singleAxis",
            singleAxisIndex:idx,
            data:Object.values(tmp5[idx]),
            symbolSize:function(dataItem){
                return dataItem
            }
        })
    })

    let plot5 = echarts.init(k5.value)
    let opt5 ={
        tooltip:{
            position:"top"
        },
        title:title_5,
        singleAxis:singleAxis_5,
        series:series_5

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