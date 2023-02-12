<template>
   <div id="box">
        <h1>GitHub项目统计</h1>
        <hr/>
        <h6>
            1. 近5年Github新增项目数和stars数量对比 (折、柱混合图 双Y轴 创建时间：createdAt)
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 2022年各语言在languages与primaryLanguage上的占比 （柱状图 单Y轴）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. Github上最受欢迎的开源标准 （条形图 Top20 排除不包含许可证的项目 开源标准：license）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 2020年最受欢迎的主流语言项目 受欢迎程度与实际使用情况对比 （堆叠柱状图 两根柱子 受欢迎程度包括：stars、forks、watchers， 实际使用情况：pullRequests）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 在更新的主流语言累计分支占比 （主流语言的定义，用户数量超过Golang 只统计2022年相关数据）
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