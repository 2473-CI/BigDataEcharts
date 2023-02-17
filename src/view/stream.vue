<template>
   <div id="box">
        <h1>Stream上的游戏</h1>
        <hr/>
        <h6>
           1. stream上游戏对各平台支持率 （多饼图）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 最受欢迎的影戏 （按游戏评论数拍 Top10 条形图）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 你喜欢免费游戏吗 （将游戏分类为 需要买与免费 求其评论占比与游戏数量占比 柱状图）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. Stream会越来越好吗 （按发售日期分组 求每年发售情况与发售后受欢迎程度-评论数）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 我玩的游戏你喜欢吗 （按照游戏类型分类，各类型游戏的数量与受欢迎程度 多Y轴）
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