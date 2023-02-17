<template>
   <div id="box">
        <h1>猫的习性</h1>
        <hr/>
        <h6>
           1. 数据探索 （四品种的猫 样本占比 饼图）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 地理位置分布情况 （散点图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 你能看到我嘛 （各品种猫的可见性）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 猫的平均速度 （各品种猫 除去静止状态 其平均速度是多少）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 猜猜我在哪里 （各品种猫各时间段上 其常见所处高度）
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