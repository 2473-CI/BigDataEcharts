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
            res = this.calculate(res.data)
            let op = {
                title: {
                    text: "PM2.5浓度变化",
                    x: "center"
                },
                xAxis: {
                    name: "时间",
                    type: "time",
                    axisLabel: {
                        formatter(value){
                            let date = new Date(value)
                            
                            return date.getDate() + "日" + date.getHours() + "时"
                        }
                    }
                },
                yAxis: {
                    name: "浓度",
                    axisLabel: {
                        formatter(value){
                            
                            return value + " μg/m3"
                        }
                    }
                },
                series: [
                    {
                        type: "line",
                        data: res["OP170"].map(it => [it.time, it.pm25]),
                        smooth: true,
                        symbol: 'none',
                    }
                ],
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

            console.log("T9", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })

    },
    methods: {
        calculate(res){
            let envMap = {}
            res.forEach(machine => {
                if(!machine.showFactEnvironmentData.length) return;
                envMap[machine.machineName] = []
                machine.showFactEnvironmentData.forEach(env => {
                    envMap[machine.machineName].push({
                        time:  new Date(env.inputTime).getTime(),
                        pm25: env.pm25
                    })
                })
            });
            return envMap
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