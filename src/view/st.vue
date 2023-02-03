<template>
    <div id="box">
        <h1>学生在考试中的表现</h1>
        <h6>学生在各个科目中获得的分数</h6>

        <div class="char" ref="s1"></div>
        <div class="char" ref="s2"></div>
        <div class="char" ref="s3"></div>
        <div class="char" ref="s4"></div>
        <div class="char" ref="s5"></div>
        <!-- <div class="char" ref="s6"></div> -->
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
let axios = require('axios')
let echarts = require("echarts")
let s1 = ref(null)
let s2 = ref(null)
let s3 = ref(null)
let s4 = ref(null)
let s5 = ref(null)
let s6 = ref(null)

let data = []
onMounted(async () => {
    await axios.get("/api/Student").then(res => data = res.data)


    let polt1 = echarts.init(s1.value)
    let scatterdata1 = []
    data.forEach(element => scatterdata1.push([Number(element["math score"]), Number(element['writing score'])]));
    
    let opt1={
        title:{
            text:"学生在数学和写作上的表现",
            left: "center",
            top: "3%"
        },
        xAxis:{name:'math score'},
        yAxis:{name: 'writing score'},
        series:[
            {
                data:scatterdata1,
                type:"scatter"
            }
        ]
    }
    polt1.setOption(opt1)

    let polt2 = echarts.init(s2.value)
    let scatterdata2_M = []
    let scatterdata2_F = []
    data.forEach(element => {
        if(element["gender"] == "female"){
            scatterdata2_F.push([Number(element["reading score"]), Number(element['writing score'])])
        }else{
            scatterdata2_M.push([Number(element["reading score"]), Number(element['writing score'])])
        }
    });
    
    let opt2={
        title:{
            text:"男女生在阅读和写作上的差异",
            left: "center",
            top: "3%"
        },
        legend:{
            data:["M", "F"],
            left:"90%",
            orient: "vertical"
        },
        xAxis:{name:'Reading Score'},
        yAxis:{name: 'Writing Score'},
        series:[
            {
                data:scatterdata2_M,
                type:"scatter",
                name:"M"
            },
            {
                data:scatterdata2_F,
                type:"scatter",
                name:"F"
            },
        ]
    }
    polt2.setOption(opt2)

    // 众数
    function zs(arr){
        arr = arr.map(it => it+"")
        let tmpDict = {}
        for(let it of arr){
            if(! tmpDict.hasOwnProperty(it)) tmpDict[it] = 0
            tmpDict[it] ++;
        }
        let res = Object.keys(tmpDict).map(key => {
            return {
                name: key,
                value: tmpDict[key]
            }
        }).sort((o1, o2) =>o2.value -  o1.value)
        return Number(res[0]["name"]) 
    }

    let plot3 = echarts.init(s3.value)
    let opt3 = {
        title: {
            text: "父母受教育水平对三科成的影响(雷达)",
            left: "center",
            top: "3%"
        }
    }
    plot3.setOption(opt3)


    function isCoress(arr){
        let count = 0
        for(let it of arr) if(Number(it)>=60) count ++ ;
        return [
                {name: "及格", value: count},
                {name: "不及格", value: arr.length-count},
            ] 
    }

    let plot4 = echarts.init(s4.value)
    let opt4 = {
        title: [
            {
                text: "三科成绩的及格率",
                left: "center",
                top: "3%"
            },
            {
                subtext: "math score",
                left: "15%",
                top: "70%"
            },
            {
                subtext: "reading score",
                left: "45%",
                top: "70%"
            },
            {
                subtext: "writing score",
                left: "75%",
                top: "70%"
            }
        ],
        legend: {
            data: ["及格", "不及格"],
            top: "20%"
        },
        series: [
            {
                type: "pie",
                title: "math",
                data: isCoress(data.map(it => it["math score"])),
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{d}%"
                },
                center: ["20%", "50%"],
                radius: [0, 100]
            },
            {
                type: "pie",
                title: "math",
                data: isCoress(data.map(it => it["reading score"])),
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{d}%"
                },
                center: ["50%", "50%"],
                radius: [0, 100]
            },
            {
                type: "pie",
                title: "math",
                data: isCoress(data.map(it => it["writing score"])),
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{d}%"
                },
                center: ["80%", "50%"],
                radius: [0, 100]
            },
        ]
    }
    plot4.setOption(opt4)

    function SourceCount(arr){
        let t = []
        for(let i = 0; i < 101; i++) t.push(0)
        for(let it of arr) t[it] ++ ;
        return t;
    }
    console.log( SourceCount(data.map(it => Number(it["math score"]))))

    let x = []
    for(let i = 0; i < 101; i++) x.push(i)
    let plot5 = echarts.init(s5.value)
    let opt5 = {
        title:{text: "各科目分数分布情况",x: "center", y: "3%"},
        yAxis: {
            name: "人数"
        },
        xAxis: {
            data: x ,
            name: "分数"
        },
        legend: {
            data: ["math score", "reading score", "writing score"],
            orient:"virtical",
            left: "20%",
            top:  "15%",
        },
        series: [
            {
                type: "line",
                name: "math score",
                data: SourceCount(data.map(it => Number(it["math score"])))
            },
            {
                type: "line",
                name: "reading score",
                data: SourceCount(data.map(it => Number(it["reading score"])))
            },
            {
                type: "line",
                name: "writing score",
                data: SourceCount(data.map(it => Number(it["writing score"])))
            }
        ]
    }
    plot5.setOption(opt5)

    // let plot6 = echarts.init(s6.value)
    // let opt6 = {
    //     title: {
    //         text: "不同学历家庭的考试情况"
    //     }
    // }
    // plot6.setOption(opt6)
})
</script>

<style scoped>
#box{
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
}
.char{
    width: 800px;
    height: 600px;
    border: 1px solid rgb(51, 52, 52);
}
</style>