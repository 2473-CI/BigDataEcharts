<template>
   <div id="box">
        <h1>谋杀原因分析</h1>
        <hr/>
        <h6>
            1. 各谋杀原因占比（南丁格尔）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 逐年在爱情、彩礼与恐怖分子上的谋杀情况对比 （折线图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 2012年死于各谋杀原因的人数 （条形图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 各谋杀原因逐年变化趋势 （单轴散点）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 2010年后各死亡原因对比 （雷达图）
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
    await axios.get(window.BaseURL+"/Murder").then(res => data = res.data.map(o=> {
        return {
            "种族歧视": Number(o["Casteism"]),
            "阶级冲突": Number(o["Class Conflict"]),
            "社区主义": Number(o["Communalism"]),
            "彩礼嫁妆": Number(o["Dowry"]),
            "物品获得": Number(o["Gain"]),
            "爱情/性": Number(o["Love Affairs/ Sexual relations"]),
            "精神病": Number(o["Lunacy"]),
            "其他原因": Number(o["Other Causes"]),
            "仇恨": Number(o["Personal Vendetta or Enemity"]),
            "政治原因": Number(o["Political Reasons"]),
            "财产纠纷": Number(o["Property Dispute"]),
            "STATE": o["STATE"],
            "恐怖分子": Number(o["Terrorists/ Extremists"]),
            "巫术": Number(o["Witchcraft"]),
            "YEAR": o["YEAR"]
        }
    }))
    
    let stutes = Object.keys(data[0]).filter(type => type!="STATE" && type!="YEAR")
    let years = [...new Set(data.map(o=>o.YEAR))]

    let tmp1 = stutes.map(type => {
        let sum = 0
        data.forEach(el => sum += el[type])
        return {name: type, value: sum}
    }).sort((o1, o2) => o2.value-o1.value)
    let plot1 = echarts.init(k1.value)
    plot1.setOption({
        title: {
            text: "各谋杀原因占比",
            left: "center"
        },
        series: [
            {
                type: "pie",
                data: tmp1.filter(o=>o.name!="其他原因"),
                roseType: 'area',
                radius: [20, 250],
                itemStyle: {
                    borderRadius: 8
                },
                center: ['50%', '50%'],
                label: {
                    formatter: "{b}\n{d}%"
                }
            }
        ]
    })

    let tmp2 = years.map(year => {
        let cl = 0, aq = 0, kb = 0
        data.filter(o=>o.YEAR==year).forEach(raw => {
            cl += raw["彩礼嫁妆"]
            aq += raw["爱情/性"]
            kb += raw["恐怖分子"]
        })
        return {year: year, "彩礼嫁妆": cl, "爱情/性": aq, "恐怖分子": kb}
    })
    let plot2 = echarts.init(k2.value)
    plot2.setOption({
        title: {
            text: "逐年在爱情和彩礼上的谋杀情况对比",
            x: "center"
        },
        legend: {
            data: ["彩礼嫁妆", "爱情/性", "恐怖分子"],
            top: "5%"
        },
        xAxis: {
            data: tmp2.map(o=>o["year"]),
            name: "年"
        },
        yAxis: {
            name: "谋杀数量(单位：场)"
        },
        series: ["彩礼嫁妆", "爱情/性", "恐怖分子"].map(name => {
            return {
                name: name,
                type: "line",
                data: tmp2.map(o=>o[name])
            }
        })
    })

    let tmp3 = stutes.map(type => {
        let sum = 0
        data.filter(el => "2012" == el.YEAR).forEach(el => sum += el[type])
        return {name: type, value: sum}
    }).sort((o1, o2) => o1.value - o2.value)
    let plot3 = echarts.init(k3.value)
    plot3.setOption({
        title: {
            text: "2012年死于各谋杀原因的人数",
            left: "center"
        },
        yAxis: {
            data: tmp3.map(o=>o.name),
            name: "谋杀原因"
        },
        xAxis: {
            name: "死亡人数"
        },
        series: [
            {
                type: "bar",
                data: tmp3.map(o=>o.value),
                label: {
                    show: true,
                    position: "right",
                    formatter: "{c}人"
                }
            }
        ]
    })

    let tmp4 = stutes.map(state => {
        let res = years.map(year => {
            let sum = 0
            data.filter(o => o["YEAR"]==year).forEach(o=> sum+=o[state])
            return sum
        })
        return {state: state, sum: res}
    })
    console.log(tmp4)
    // TODO

    let legend_4=[],singleAxis_4=[],title_4=[],series_4=[]
    Object.keys(tmp4).forEach(element => {
        ++element;
        if(element<10){ legend_4.push("200"+element)}
        else(legend_4.push("20"+element))
    });

    Object.values(tmp4).forEach(function(el, idx){
        title_4.push({
            text:el["state"],
            top: (idx+ .3) * 100 / tmp4.length + "%"
        })
        singleAxis_4.push({
            top: (idx) * 100 / tmp4.length + "%",
            left: "100px",
            data: legend_4,
            height:"10px",
            type: "category",
            axisLabel :{
                interval:1
            }
        })
        series_4.push({
            type: "scatter",
            data:el["sum"],
            singleAxisIndex:idx,
            coordinateSystem:"singleAxis",
            symbolSize:function(dataItem){
                if(dataItem>=54987){
                    return dataItem / 1100
                }
                if (dataItem< 1000){
                    return dataItem / 30
                }
                else{
                    return dataItem / 300
                }
            
            }
        })
    });
    let plot4 = echarts.init(k4.value)
    let opt4={
        tooltip:{
            position:"top"
        },
        title: title_4,
        singleAxis: singleAxis_4,
        series: series_4
    }
    plot4.setOption(opt4)



    let plot5 = echarts.init(k5.value)
    let tmp5 = years.filter(y => Number(y)>=2010).map(year => {
        let res = stutes.map(state => {
            let sum = 0
            data.filter(o => o["YEAR"]==year).forEach(o=> sum+=o[state])
            return {state: state, sum: sum}
        })
        return {year: year, arr: res}
    })
    console.log(tmp5)
    // TODO
    let legend_5=[],data_5=[],indicator_5=[]
    legend_5=["2010", "2011", "2012", "2013"]
    Object.values(tmp4).forEach(element => {
        indicator_5.push({name: element["state"]})
    });
    Object.values(tmp5).forEach(element => {
        data_5.push({
            name: element["year"],
            value: (Object.values(element["arr"])).map(o => o.sum)
        })
    });
    let opt5={
        text: "2010年后各死亡原因对比",
        radar:[{
            indicator:indicator_5
        }],
        legend:{
            data:legend_5
        },
        series: [{
            type: "radar",
            data:data_5
        }]
    }

//     let opt5 = {
//   title: {
//     text: 'Basic Radar Chart'
//   },
//   legend: {
//     data: tmp5.map(el => el.year)
//   },
//   radar: {
//     // shape: 'circle',
//     indicator: stutes.map(o => {return {name: o}})
//   },
//   series: [
//     {
//       name: 'Budget vs spending',
//       type: 'radar',
//       data: tmp5.map(el => {
//         return {
//             name: el.year,
//             value: el.arr.map(o => o.sum)
//         }
//       })
//     }
//   ]
// };
    console.log(JSON.stringify(opt5))
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