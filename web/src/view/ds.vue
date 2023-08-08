<template>
    <div class="demo-collapse">
      <el-collapse  accordion>
        <el-collapse-item title="1.用柱状图展示消费额最高的省份" name="1">
          <div class="Echart">
            <T1 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="2.用饼状图展示各地区消费能力" name="2">
          <div class="Echart">
            <T2 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="3.用散点图展示每年上架商品数量的变化" name="3">
          <div class="Echart">
            <T3 />
          </div>
        </el-collapse-item>


        <el-collapse-item title="4.用条形图展示平均消费额最高的省份" name="4">
          <div class="Echart">
            <T4 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="5.用折柱混合图展示省份平均消费额和地区平均消费额" name="5">
          <div class="Echart">
            <T5 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="6.用折线图展示每年上架商品数量的变化" name="6">
          <div class="Echart">
            <T6 />
          </div>
        </el-collapse-item>


        <el-collapse-item title="7.用条形图展示消费额最高的地区" name="7">
          <div class="Echart">
            <T7 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="8.用散点图展示省份平均消费额" name="8">
          <div class="Echart">
            <T8 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="9.用柱状图展示消费额最高的地区" name="9">
          <div class="Echart">
            <T9 />
          </div>
        </el-collapse-item>


        <el-collapse-item title="10.用条形图展示平均消费额最高的地区" name="10">
          <div class="Echart">
            <T10 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="11.用柱状图展示消费额最高的用户" name="11">
          <div class="Echart">
            <T11 />
          </div>
        </el-collapse-item>

        <el-collapse-item title="12.用玫瑰图展示各地区消费能力" name="12">
          <div class="Echart">
            <T12 />
          </div>
        </el-collapse-item>


        <el-collapse-item title="13.用条形图展示消费总额最高的省份" name="13">
          <div class="Echart">
            <T13 />
          </div>
        </el-collapse-item>


      </el-collapse>
    </div>
</template>
  
<script>
import T1 from '@/components/ds/T1.vue'
import T2 from '@/components/ds/T2.vue'
import T3 from '@/components/ds/T3.vue'
import T4 from '@/components/ds/T4.vue'
import T5 from '@/components/ds/T5.vue'
import T6 from '@/components/ds/T6.vue'
import T7 from '@/components/ds/T7.vue'
import T8 from '@/components/ds/T8.vue'
import T9 from '@/components/ds/T9.vue'
import T10 from '@/components/ds/T10.vue'
import T11 from '@/components/ds/T11.vue'
import T12 from '@/components/ds/T12.vue'
import T13 from '@/components/ds/T13.vue'
  export default{
    components: {
        T1,T2,T3,T4,T5,T6,T7,T8,T9,T10,T11,T12,T13
    },
    created() {
    }
  }
</script>

<style>
.Echart{
    display: flex;
    width: 100%;
    height: 600px;
    justify-content: center;
    align-items: center;
    background-color: white;
}

</style>