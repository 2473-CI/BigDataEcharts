<template>
    <div ref="v">

    </div>
</template>

<script>
import { subTime } from '@/utils/util'

export default{

    mounted(){

        fetch(window.BaseURL+"/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            this.init(res.data)
        })
       
    },
    methods:{
        init(data){
        
            let titles=[], singleAxiss=[], seriess=[]
            data.forEach(function(element, index){

                titles.push({
                    text:element.machineName,
                    top: (index) * 100 / (Object.keys(data)).length + "%"
                })

                singleAxiss.push({
                    top: (index) * 100 / (Object.keys(data)).length + "%",
                    left : "100px",
                    height: "30px"
                })

                seriess.push(
                    {
                        singleAxisIndex: index,
                        coordinateSystem: 'singleAxis',
                        type:"scatter",
                        data:[[0,0]],
                        symbolSize:function(dataItem){
                            console.log(dataItem)
                            return dataItem[0] / 2000
                        }
                    }
                )

                element.showFactChangeRecordList.forEach(el => {
                    if(el.changeRecordState==='运行'){
                        seriess[index].data[0][0] += subTime(el.changeStartTime, el.changeEndTime)
                    }
                    });
            });
            
        let op = {
            title:titles,
            singleAxis:singleAxiss,
            series:seriess
        }

        console.log("T13", op)
        this.$echarts.init(this.$refs.v).setOption(op)
        }
    }

}
</script>

<style scoped>
div{
    width: 800px;
    height: 600px;
    background-color: aliceblue;
}
</style>