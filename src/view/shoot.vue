<template>
   <div id="box">
        <h1>自由美利坚，枪战每一天</h1>
        <hr/>
        <h6>
            1.逐年枪击事件的死亡人数和受伤人数对比（柱状图）
        </h6>
        <div class="char" ref="k1" style="height: 1000px"></div>
        <h6>
            2.各大洲在过去5年中的死亡人数和受伤人数统计（双饼图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3.统计发生枪击事件最多的州Top10 （条形图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4.统计美国每月枪击事件的死亡比 （折线图 死亡比=死亡人数/总人数）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5.以Illinois、California、Texas、Florida、Pennsylvania 五大洲为例，绘制单轴散点图，分析每年每月死亡人数
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
    console.log(data)



    let State_5=["Illinois", "California", "Texas", "Florida", "Pennsylvania"]
    let title_5=[], singleAxis_5=[], series_5=[],month=[]
    data.forEach(element => {
        let date = element["Date"].split("/")
        console.log(date)
    });
    State_5.forEach(function(el, idx){
        title_5.push(
            {
                text:el,
                top: (idx+.4) * 100 / State_5.length +"%"
            }
        )
        singleAxis_5.push(

        )
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