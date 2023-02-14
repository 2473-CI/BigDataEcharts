<template>
   <div id="box">
        <h1>谋杀原因分析</h1>
        <hr/>
        <h6>
            1. 各谋杀原因占比（南丁格尔）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 逐年在爱情和彩礼上的谋杀情况对比 （折线图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 2022年死于各谋杀原因的人数 （条形图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 各谋杀原因逐年变化趋势 （单轴散点）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 2020年后各死亡原因对比 （雷达图）
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