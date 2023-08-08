<template>
    <div ref="v">

    </div>
</template>

<script>
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

            let legends=[]
            let seriess=[]

            data.forEach(function(element, index){
                legends.push(element.machineName)

                seriess.push(
                    {
                        name:element.machineName,
                        type:"scatter",
                        data:[],
                        symbolSize:10
                    }
                )})

            data.forEach(function(element,index){
                element.showFactEnvironmentData.forEach(function(el){
                
                    seriess[index].data.push([new Date(el.inputTime).getTime(), el.humidity])
                
                })

                });
            
                
            let op = {
            title: {
                text: "环境湿度变化",
                x: "center"
            },
            legend:{
                data:legends,

            },
            xAxis:{
                type:'time',
                axisLabel: {
                        formatter(value){
                            let date = new Date(value)
                            
                            return date.getDate() + "日" + date.getHours() + "时"
                        }
                    }
            },
            yAxis:{
                scale:true
            },
            series:seriess,
            dataZoom: [
                    {
                    type: 'inside',
                    start: 0,
                    end: 20
                    },
                    {
                    start: 0,
                    end: 20
                    }
                ],
                tooltip: {
                    trigger: "axis"
                }
        }

        console.log("T11", op)
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