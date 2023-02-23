<template>
   <div id="box">
        <h1>日本地震啦</h1>
        <hr/>
        <h6>
           1. 日本震心经纬度分布 （散点）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 日本每月各等级地震发生次数 （叠加柱状）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 各地震深度与之对应的常见强度 （折线）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 各时刻发生地震的可能性 （时间轴 折线）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 日本常见地震等级 (饼图)
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

onMounted(()=>{
    
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