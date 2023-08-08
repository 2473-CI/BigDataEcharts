<template>
    <div id="context">

        <div class="char" id="top">
            该数据集是根据2018年至2022年QS排名,生命科学与医学系关于全球顶尖大学。这是一个清晰的数据集。<br/>此数据集包含 6 列和 5200+ 行。
            <br/>
            <hr/>
            年份 ：此列的值为 2018,2019,2020,2021,2022<br/>
            排名：排名由 QS 根据以 1 开头的点给出 名称：基于排名的每所大学名称 <br/>
            积分：每所大学都有自己的积分，基于教育质量、师资设施、学生设施等 <br/>
            城市 : 大学所在的城市<br/>
            国家 : 大学所在的国家
        </div>

        <div class="char" ref="c1"> </div>
        <div class="char" ref="c2"> </div>
        <div class="char" ref="c3"> </div>
        <div class="char" ref="c4"> </div>
        <div class="char" ref="c5"> </div>
    </div>
</template>

<script setup>
import {reactive, onMounted, ref} from 'vue'
const axios = require('axios');
const echarts = require('echarts');

const data = ref([])
const years = [2018, 2019, 2020, 2021, 2022]

const c1 = ref(null)
const c2 = ref(null)
const c3 = ref(null)
const c4 = ref(null)
const c5 = ref(null)

function index_of_year(year){
    for(let index in years){
        if(year == years[index]) return index;
    }
    return -1;
}

onMounted(()=>{

})

onMounted(async ()=> {
    await axios.get("/api/QSWorldRankingUniversity").then((res) => {
        data.value = res
    })
    
    // 图1 逐年参与排名的高校数量
    let plot1 = echarts.init(c1.value)
    let ser1 = [0, 0, 0, 0, 0]
    for(let item of data.value.data){
        ser1[index_of_year(item.Year)] ++;
    }
    let opt1 = {
        title: {
            text: "逐年参与排名的高校数量",
            x: "center",
            y: "3%"
        },
        xAxis:{
            name: "年份",
            data: years,
        },
        yAxis:{
            name: "数量"
        },
        series: [
            {
                type: "bar",
                data: ser1,
                label: {
                    show: true
                }
            }
        ]
    }
    console.log("图1", opt1)
    plot1.setOption(opt1)

    // 图2 2018年学校积分top10城市
    let plot2 = echarts.init(c2.value)
    let CityPointSum = {}
    for(let item of data.value.data){
        if(item.Year != '2018') continue;
        if(! CityPointSum.hasOwnProperty(item.City)) CityPointSum[item.City] = 0
        CityPointSum[item.City] += Number(item.Point)
    }
    let CityPointSort = Object.keys(CityPointSum).map((it)=> {
        return {
            city: it, sum: CityPointSum[it].toFixed(2)
        }
    }).sort((o1, o2) => o2.sum - o1.sum).slice(0,10).reverse()
    let opt2 = {
        title: {
            text: "2018年学校积分top10城市",
            x: "center",
            y: "5%"
        },
        xAxis: {
            name: "积分"
        },
        yAxis: {
            name: "城市",
            data: CityPointSort.map(it => it.city)
        },
        series: [{
            type: "bar",
            data: CityPointSort.map(it => it.sum),
            label: {
                show: true,
                position: "right"
            }
        }]
    }
    console.log("图2", opt2)
    plot2.setOption(opt2)

    // 图3 2019年排名前100的大学国家分布情况
    let plot3 = echarts.init(c3.value)
    let CityRank100 = {}
    for(let item of data.value.data){
        if(item.Year == '2019' && Number(item.Rank) <= 100){
            if(! CityRank100.hasOwnProperty(item.Country)) CityRank100[item.Country] = 0
            CityRank100[item.Country] += 1 ;
        }
    }

    let opt3 = {
        title: {
            text: "2019年排名前100的大学国家分布情况",
            x: "center",
            y: "5%"
        },
        series: [
            {
                type: "pie",
                data: Object.keys(CityRank100).map((Country) => {
                    return {
                        name: Country, value: CityRank100[Country]
                    }
                }).sort((o1, o2) => o2.value - o1.value)
            }
        ],
        tooltip: {
            show: true,
            trigger: "item"
        }
    }
    console.log("图3", opt3)
    plot3.setOption(opt3)
    
    // 图四 逐年各国家参与情况
    let plot4 = echarts.init(c4.value)
    let YearCountryMap = {}
    let tmpDic = {
        "2018": 0,
        "2019": 0,
        "2020": 0,
        "2021": 0,
        "2022": 0,
        "sum": 0
    }
    for(let item of data.value.data){
        if(! YearCountryMap.hasOwnProperty(item.Country)) YearCountryMap[item.Country] = {...tmpDic}
        YearCountryMap[item.Country][item.Year] ++ ;
        YearCountryMap[item.Country]["sum"] ++ ;
    }
    let YearCountrySort = Object.keys(YearCountryMap).map((Country) => {
        return {
            name: Country,
            value: YearCountryMap[Country],
            sum: YearCountryMap[Country]["sum"]
        }
    }).sort((o1, o2) => o2.sum - o1.sum)
    let opt4 = {
        title: {
            text: "逐年各国家参与情况",
            right: "center",
            top: "3%"
        },
        xAxis: {
            data: YearCountrySort.map(it => it.name),
            axisLabel: {
                interval: 0,
                rotate: 90,
                fontSize: 10
            }
        },
        yAxis: {
            type: "value"
        },
        legend: {
            data: years.map(it => it+''),
            left: "90%"
        },
        series: years.map(y => {
            return {
                type: "bar",
                name: y+"",
                data: YearCountrySort.map(d => d.value[y])
            }
        }),
        tooltip: {
            show: true,
            trigger: "axis"
        }
    }
    console.log("图4", opt4)
    plot4.setOption(opt4)


    // 图五  [United States,United Kingdom,Australia,Netherlands,Canada] 五国学校积分的 众数、中位数、均值
    let plot5 = echarts.init(c5.value)
    let rdMap = {
        "United States": [],
        "United Kingdom": [],
        "Australia": [],
        "Netherlands": [],
        "Canada": [],
    }
    // 中位数
    function zws(arr){
        let tmpArr = arr.sort((o1, o2) => o1-o2)
        if(tmpArr.length%2 == 0) return (tmpArr[Math.floor(tmpArr.length/2)] + tmpArr[Math.floor(tmpArr.length/2)-1]) / 2
        return tmpArr[Math.floor(tmpArr.length/2)]
    }

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

    // 平均值
    function zz(arr){
        let sum = 0
        for(let it of arr){
            sum += it
        }
        return sum/arr.length
    }

    for(let item of data.value.data){
        if(! rdMap.hasOwnProperty(item.Country)) continue
        rdMap[item.Country].push(Number(item.Point))
    }
    
    for(let k of Object.keys(rdMap)){
        rdMap[k] = [zws(rdMap[k]), zs(rdMap[k]), zz(rdMap[k])]
    }
    console.log(rdMap)

    let s = ["中位数", "众数", "平均值"]


    let opt5 = {
        title: {
            text: "各国学校积分的众数、中位数、均值",
            x: "center",
            y: "10px"
        },
        legend: {
            data: s,
            y: "90%"
        },
        radar :{
            indicator:Object.keys(rdMap).map(C => {
                return {
                    name: C, // 国家
                    max: Math.max(...rdMap[C])
                }
            })
        },
        series: {
            type: "radar",
            data: s.map(name => {
                return {
                    name: name,  // 指标
                    value: Object.values(rdMap).map(arr => arr[s.indexOf(name)])
                }
            })
        }


    }
    console.log("图5", opt5)
    plot5.setOption(opt5)

    

})

</script>

<style scoped>
#context{
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
}
#top{
    border: none;
    margin-top: 30px;
    height: 250px;
} 

.char{
    width: 800px;
    height: 600px;
    border: 1px solid rgb(148, 216, 232);
    text-align: center;
}

</style>