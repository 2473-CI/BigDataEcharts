<template>
    <div id="box">
        <h1>印度全国健康调查</h1>
        <hr/>
        <h6>
            1.各大洲受访人数分布: 各大洲（State/UT），全部受访、男性受访、女性受访 分布情况 只取前十的州（一张画布，三个饼图）
        </h6>
        <div class="char" ref="k1" style="height: 1000px"></div>
        <h6>
            2.各大洲分娩自付费情况: 每个州分娩自付费的最大值，最小值，平均值（折线图，三条折线）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3.各大洲各绝育方法使用情况: 每个州每个绝育方法的使用人数（包括Condom、IUD/PPIUD、Injectables、Pill）柱状叠加
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4.男女受访者高血糖人数对比: 接受调查人数前十的州，贫血人数对比 柱状图
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5.五岁以下儿童的完整疫苗接种情况: 儿童数量以民政局登记数量为准，若计算为小数，则按地区为单位向上取整，相关指标：五剂DPT 疫苗， 五剂乙型肝炎、3剂脊髓灰质炎、3剂轮状病毒、卡介苗、二剂含麻疹疫苗（雷达图）
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

function GB(arr, tup){
    let State = [...new Set(arr.map(it => it["State/UT"]))]
    let ob = {}
    State.forEach(it => ob[it] = 0)
    for(let it of arr) ob[it["State/UT"]] += eval(it[tup])
    return ob
}

onMounted(async() => {
    await axios.get("http://192.168.10.109:8999/keep").then(res => data = res.data)
    console.log(data)

    let State = [...new Set(data.map(it => it["State/UT"]))]

    let plot1 = echarts.init(k1.value)
    let p1 = GB(data, "Number of Households surveyed")
    let p2 = GB(data, "Number of Men age 15-54 years interviewed")
    let p3 = GB(data, "Number of Women age 15-49 years interviewed")
    
    
    let opt1 = {
        title: {
            text: "各大洲受访人数分布",
            left: "center",
            top: "3%"
        },
        legend: {
            data: [
                ...Object.keys(p1).map(name => {return {name: name, value: p1[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11).map(it => it.name),
                ...Object.keys(p2).map(name => {return {name: name, value: p2[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11).map(it => it.name),
                ...Object.keys(p3).map(name => {return {name: name, value: p3[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11).map(it => it.name)
            ],
            orient: "v",
            left: "80%",
            top: "center"
            
        },
        series: [
            {
                type: "pie",
                center: ["40%", "20%"],
                radius: ["0", "30%"],
                data: Object.keys(p1).map(name => {return {name: name, value: p1[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11)
            },
            {
                type: "pie",
                center: ["40%", "50%"],
                radius: ["0", "30%"],
                data: Object.keys(p2).map(name => {return {name: name, value: p2[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11)
            },
            {
                type: "pie",
                center: ["40%", "80%"],
                radius: ["0", "30%"],
                data: Object.keys(p3).map(name => {return {name: name, value: p3[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 11)
            }
        ]
    }
    plot1.setOption(opt1)

    let tmp2 = State.map(state => {
        let list = data.filter(it => it["State/UT"] == state).map(l => eval(l["Average out-of-pocket expenditure per delivery in a public health facility (for last birth in the 5 years before the survey) (Rs"][")"]))
        let sum = 0
        for(let l of list) if((l + 0) != NaN) sum += l
        return [Math.max(...list), sum/list.length, Math.min(...list)]
    })



    let plot2 = echarts.init(k2.value)
    let opt2 = {
        title: {
            text: "各大洲分娩自付费情况",
            left: "center",
            top: "3%"
        },
        xAxis: {
            data: State,
            axisLabel: {
                interval: 0,
                rotate: 90
            }
        },
        yAxis: [
            {
                max: Math.max(...tmp2.map(it => it[0])),
            },
            {
                max: Math.max(...tmp2.map(it => it[1])),
            },{
                max: Math.max(...tmp2.map(it => it[2]))
            }
        ],
        series: [
            {
                type: "line",
                name: "最大值",
                data: tmp2.map(it => it[0])
            },
            {
                type: "line",
                name: "平均值",
                data: tmp2.map(it => it[1]),
                yIndex: 1
            },
            {
                type: "line",
                name: "最小值",
                data: tmp2.map(it => it[2]),
                yIndex: 2
            }
        ]
    }

    plot2.setOption(opt2)

    // 包括Condom、IUD/PPIUD、Injectables、Pill
    
    let tmp = []
    let flag = [
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Condom (%)",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - IUD/PPIUD (%)",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Injectables (%)",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Pill (%)"
    ]
    let tmp3 = State.map(state => {  // state 地区
        return flag.map(f => {  // 方式
            let arr = data.filter(d => d["State/UT"] == state) // 过滤后的数组
            let sum = 0
            // arr.map(it => it[f]).forEach(el => {
            //     sum += Number(el["Number of Households surveyed"]) * Number(el[f])
            // })
            arr.forEach((el, index) => { // 数据
                if(index == 0){
                    sum += (el[f] * el["Number of Men age 15-54 years interviewed"])/100
                }else{
                    sum += (el[f] * el["Number of Women age 15-49 years interviewed"])/100
                }
                
            })
            return sum
        })
    })

    let plot3 = echarts.init(k3.value)
    let opt3 = {
        title: {
            text: "各大洲各绝育方法使用情况",
            left: "center",
            top: "3%"
        },
        xAxis: {
            data: State,
            axisLabel: {
                interval: 0,
                rotate: 90
            }
        },
        legend: {
            data: ["避孕套", "宫内节育器", "注射剂", "避孕药"]
        },
        yAxis: {

        },
        tooltip: {
            trigger: "axis"
        },
        series: [
            {
                type: "bar",
                stack: "a",
                data: tmp3.map(d => Number(d[0].toFixed(0))),
                name: "避孕套"
            },
            {
                type: "bar",
                stack: "a",
                data: tmp3.map(d => Number(d[1].toFixed(0))),
                name: "宫内节育器"
            },
            {
                type: "bar",
                stack: "a",
                data: tmp3.map(d => Number(d[2].toFixed(0))),
                name: "注射剂"
            },
            {
                type: "bar",
                stack: "a",
                data: tmp3.map(d => Number(d[3].toFixed(0))),
                name: "避孕药"
            }
        ]
    }
    plot3.setOption(opt3)

    let StateTop10 = Object.keys(p1).map(name => {return {name: name, value: p1[name]}} ).sort((o1, o2) => -(o1.value - o2.value)).slice(0, 10)
    let tmp4 = StateTop10.map(state => {
        let filterArr = data.filter(line => line["State/UT"] == state.name)
        let ob = {"M": 0, "W": 0}
        filterArr.forEach(filterLine => {
            
            ob.M += Number(filterLine["Number of Men age 15-54 years interviewed"]) * Number(filterLine["Men age 15 years and above wih high (141-160 mg/dl) Blood sugar level23 (%)"])
            ob.W += Number(filterLine["Number of Women age 15-49 years interviewed"]) * Number(filterLine["Women age 15 years and above wih very high (>160 mg/dl) Blood sugar level23 (%)"])
        })
        return ob
    })
    console.log(tmp4)
    
    let plot4 = echarts.init(k4.value)
    let opt4 = {
        title: {
            text: "男女受访者高血糖人数对比",
            left: "center",
            top: "3%"
        },
        xAxis: {
            data: StateTop10.map(o => o.name)
        },
        legend: {
            data: ["男性非常高血糖", "女性非常高血糖"]
        },
        yAxis: {},
        series: [
            {
                type: "bar",
                name: "男性非常高血糖",
                data: tmp4.map(it => it.M)
            },
            {
                type: "bar",
                name: "女性非常高血糖",
                data: tmp4.map(it => it.W)
            }
        ]
    }
    plot4.setOption(opt4)

    
    let yimiao_5=["五剂DPT疫苗", "五剂乙型肝炎", "3剂脊髓灰质炎", "3剂轮状病毒", "卡介苗", "二剂含麻疹疫苗"]
    let regions=[],regions_5=[]
    data.forEach(element => {
        if(!regions.includes(element["State/UT"])){
            regions.push(element["State/UT"])
        }
    });

    regions.forEach(element => {
        regions_5.push({
            name: element
        })
    });
    
    console.log(regions)

    let plot5 = echarts.init(k5.value)
    let opt5 = {
        tooltip:{position:"top"},
        title: {
            text: "儿童疫苗接种统计",
            left: "center",
            top: "3%"
        },
        legend:{
            data:yimiao_5,
        },
        radar:{
            shape:"cycle",
            indicator:regions_5
        },
        series:[{
            type: "radar",
            data:[
                {name:"五剂DPT疫苗", value:[10, 20]} ,
                {name:"五剂乙型肝炎", value:[20]} ,
                {name:"3剂脊髓灰质炎", value:[30]} ,
                {name:"3剂轮状病毒", value:[12]} ,
                {name:"卡介苗", value:[54]} ,
                {name:"二剂含麻疹疫苗", value:[9]}
            ]
        }]

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
