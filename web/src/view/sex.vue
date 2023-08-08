<template>
    <div id="box">
        <h1>性犯罪者相关分析</h1>
        <div style="width: 800px;">性犯罪者工作和家庭地点，作为华盛顿特区地理信息系统 （DC GIS） 的一部分为华盛顿特区首席技术官办公室 （OCTO） 和参与的华盛顿特区政府机构创建。如果用户想获得有关性犯罪者的更多信息，他们应该访问性犯罪者地图应用程序（此处）并下载“更多详细信息”PDF。法院事务和罪犯监督机构提供的一个数据库确定了性犯罪者登记册，在街区一级提供位置。</div>
        <hr/>
        <div class="char" ref="s1"></div>
        <div class="char" ref="s2"></div>
        <div class="char" ref="s3"></div>
        <div class="char" ref="s4"></div>
        <div class="char" ref="s5"></div>
    </div>
</template>

<script setup>
import { init } from 'echarts'
import {onMounted, ref} from 'vue'

const echarts = require("echarts")
const axios = require("axios")
let data = []

const s1 = ref(null)
const s2 = ref(null)
const s3 = ref(null)
const s4 = ref(null)
const s5 = ref(null)
const ages = []

function getAge(ob){
    return Number(ob.ADDDATE.split("/")[0]) - Number(ob.BIRTHDATE.split("/")[0])
}

onMounted(async() => {
    await axios.get(window.BaseURL+"/sex").then(res => data = res.data)

    for(let i = 0; i < 100; i++) ages.push(i)

    let plot1 = echarts.init(s1.value)
    let tmp1 = [...new Set(data.map(it => it.TYPE))].map(
        t => {return {name: t, value: data.filter(it => it.TYPE == t).length}}
    ).sort((o1, o2) => o1.value - o2.value )
    let opt1 = {
        title: {
            text: "性侵犯场所占比",
            left: "center",
            top: "90%"
        },
        legend: {
            data: [...new Set(data.map(it => it.TYPE))],
            orient:"vertical",
            x: "90%"
        },
        series: [
            {
                type: "pie",
                data: tmp1,
            },
            {
                type: "pie",
                data: tmp1,
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{d}%"
                }
            }
        ]
    }
    // console.log(tmp1)
    plot1.setOption(opt1)

    let plot2 = echarts.init(s2.value)
    let tmp2 = []
    for(let i = 0; i < 100; i++) {
        tmp2.push({
            "SCHOOL": data.filter(it => getAge(it) == i && it.TYPE == "SCHOOL").length, 
            "WORK": data.filter(it => getAge(it) == i && it.TYPE == "WORK").length, 
            "HOME": data.filter(it => getAge(it) == i && it.TYPE == "HOME").length
        }) 
    }
    
    let opt2 = {
        title: {
            text: "各年龄段性犯罪场所倾向",
            x: "center",
            y: "93%"
        },
        xAxis: {
            data: ages,
        },
        yAxis: {},
        legend: {
            data: ["SCHOOL", "WORK", "HOME"],
            orient:"vertical",
            x: "80%",
            y: "24%"
        },
        series: [
            {
                type: "line",
                name: "SCHOOL",
                smooth: true,
                data: tmp2.map(it => it["SCHOOL"])
            },
            {
                type: "line",
                name: "WORK",
                smooth: true,
                data: tmp2.map(it => it["WORK"])
            },
            {
                type: "line",
                name: "HOME",
                smooth: true,
                data: tmp2.map(it => it["HOME"])
            }
        ]
        

    }
    console.log(opt2)
    plot2.setOption(opt2)

    let plot3 = echarts.init(s3.value)
    let tmp3 = [...new Set(data.map(o => o.LASTNAME))].map(o => {
        return {name:o, value: data.filter(i => i.LASTNAME == o).length}
    }).sort((o1, o2) => o2.value-o1.value).slice(0, 10).reverse()
    let opt3 = {
        title: {
            text: "不同姓氏犯罪人数Top10"
        },
        xAxis: {},
        yAxis: { data: tmp3.map(it => it.name)},
        series: [
            {
                type: "bar",
                data: tmp3.map(it => it.value),
                label: {
                    show: true,
                    position: "right"
                }
            }
        ]
    }
    plot3.setOption(opt3)

let datas3 = []
data.forEach(element => {
    if(element["LONGITUDE"]==""&&element["LATITUDE"]==""){}
    else{
        datas3.push([
        Number(element["LONGITUDE"]),
        Number(element["LATITUDE"])
    ])
    }

});
    let plot4 = echarts.init(s4.value)
    let opt4 = {
        title: {
            text: "犯罪分子地理空间分布"
        },
        xAxis:{
            scale:true
        },
        yAxis:{
            scale:true
        },
        series:[
            {
                type:"scatter",
                data:datas3,
            }
        ],
        tooltip:{
                    show:true,
                    trigger: "axis",
                }

    }
    plot4.setOption(opt4)
    console.log(opt4)

// console.log(data)
    // let titles4=["一月","二月","三月","四月","五月","六月",
    //             "七月","八月","九月","十月","十一月","十二月"]
    let legends4=[],datas4=[],titles4=[],singleAxiss=[],seriess=[]

    
    data.forEach(element => {
        let date = element["ADDDATE"].split(" ")[0].split("/")
        datas4.push(
            [
                date[1], date[2]
            ]
        )
        if(!titles4.includes(date[1])){
            titles4.push(date[1])
        }
        if(!legends4.includes(date[2])){
            legends4.push(date[2])
        }
    });
    
    let data_4={}
    for(let m = 0; m < 12; m++){
        data_4[m] = []
        for(let d = 0; d < 31; d++){
            data_4[m][d] = datas4.filter(it => Number(it[0]) == m+1 && Number(it[1]) == d+1).length
        }
    }

    // console.log(data_4)

    let title4=titles4.sort(),title_4=[]
    title4.forEach(function(el,idx){
        title_4.push(
            {text:el, top:(idx+.4) *100 / titles4.length +"%"}
        )
        singleAxiss.push(
            {   
                top:(idx+.4) *100 / titles4.length +"%",
                data:legends4.sort(),
                height: "10px",
                left: "75px",
                axisLabel:{
                    interval: 5
                },
                type:"category"
            }
        )
        seriess.push(
            {
                singleAxisIndex: idx,
                coordinateSystem:"singleAxis",
                type:"scatter",
                data:data_4[idx],
                symbolSize: function(dataItem){
                    return dataItem > 100? dataItem/15:dataItem
                }
            }
        )
    });
    
    let plot5 = echarts.init(s5.value)
    let opt5 = {
        tooltip:{
            position: "top"
        },
        title:title_4,
        singleAxis:singleAxiss,
        series: seriess

    }
    plot5.setOption(opt5)
    console.log(opt5)
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
    border: 1px solid rgb(221, 159, 71);
}
</style>