<template>
  <el-timeline style="margin-top: 20px;">
    <el-timeline-item timestamp="1.用柱状图展示设备历史各个状态持续时长" placement="top">
      <div class="context">
        <T1 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="2.用柱状图展示每日所有车间各设备平均运行时长" placement="top">
      <div class="context">
        <T2 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="3.用折线图展示某设备每日运行时长" placement="top">
      <div class="context">
        <T3 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="4.用条形图展示每日各设备产量" placement="top">
      <div class="context">
        <T4 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="5.用折柱混合图展示设备日均产量和所在车间日均产量" placement="top">
      <div class="context">
        <T5 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="6.用多个饼状图展示某设备每天各状态时间" placement="top">
      <div class="context">
        <T6 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="7.用散点图展示设备运行时长" placement="top">
      <div class="context">
        <T7 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="8.用单轴散点图展示各设备加工每件产品所需时长" placement="top">
      <div class="context">
        <T8 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="9.用折线图展示PM2.5浓度变化" placement="top">
      <div class="context">
        <T9 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="10.用饼状图展示每日各状态总时长" placement="top">
      <div class="context">
        <T10 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="11.用散点图展示环境湿度变化" placement="top">
      <div class="context">
        <T11 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="12.用柱状图展示每日各设备产量" placement="top">
      <div class="context">
        <T12 />
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="13.用单轴散点图展示设备运行时长" placement="top">
      <div class="context">
        <T13 />
      </div>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import T1 from '@/components/gy/T1.vue'
import T2 from '@/components/gy/T2.vue'
import T3 from '@/components/gy/T3.vue'
import T4 from '@/components/gy/T4.vue'
import T5 from '@/components/gy/T5.vue'
import T6 from '@/components/gy/T6.vue'
import T7 from '@/components/gy/T7.vue'
import T8 from '@/components/gy/T8.vue'
import T9 from '@/components/gy/T9.vue'
import T10 from '@/components/gy/T10.vue'
import T11 from '@/components/gy/T11.vue'
import T12 from '@/components/gy/T12.vue'
import T13 from '@/components/gy/T13.vue'
export default {
  components: {
    T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13
  },
  created() {
    console.log(this._)
    // console.log(this._.appContext.app.config.globalProperties.$echarts)
  }
}
</script>

<style scoped>
.context {
  display: flex;
  width: 90vw;
  height: 700px;
  background-color: azure;
  align-items: center;
  justify-content: center;
}
</style>