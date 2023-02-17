<template>
   <div id="box">
        <h1>黄金的价格</h1>
        <hr/>
        <h6>
           1. 2000年至今黄金的最高价与最低价波动情况 （平滑折线 时间轴）
        </h6>
        <div class="char" ref="k1"></div>
        <h6>
            2. 每日黄金的价格变化 （折线 时间轴 变化=开仓价格-闭仓价格）
        </h6>
        <div class="char" ref="k2"></div>
        <h6>
           3. 逐年黄金流通市场容量变化 （按月做叠加柱状）
        </h6>
        <div class="char" ref="k3"></div>
        <h6>
           4. 回到2000年你最多能挣多少钱 （在过去20年中 最低点买入 最高点卖出 求每日累计收益 折线）
        </h6>
        <div class="char" ref="k4"></div>
        <h6>
          5. 目前黄金价格形势 （用最后一天的数据绘制雷达图 五个角分别是open high low close yolume， 每个角的最大值是黄金属性的最高点）
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