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
            console.log(res)

            let op = {
                title: {
                    text: "设备日均产量和所在车间日均产量",
                    x: "center"
                },
                xAxis: {
                    data: res.map(it => it.sb),
                    name: "设备"
                },
                yAxis: {
                    name: "日均产量"
                },
                legend: {
                    data: ["设备日均产量", "车间日均产量"],
                    x: "90%",
                    y: "15%"
                },
                series: [
                    {
                        type: "bar",
                        name: "设备日均产量",
                        label: {
                            show: true,
                            formatter(value){
                                return value.value ? value.value+'' : ""
                            },
                        },
                        data: res.map(it => it.sbCount)
                    },
                    {
                        type: "line",
                        name: "车间日均产量",
                        label: {
                            show: true,
                            position: "top",
                            formatter(value){
                                return value.value ? value.value+'' : ""
                            },
                        },
                        data: res.map(it => it.cjCount)
                    }
                ],
                tooltip: {
                    trigger: "axis"
                }
            }

            console.log("T5", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })

    },
    methods: {
        calculate(res){
            
            let sbMap = {}
            let chMap = {}
            let sbToCh = {}
            res.forEach(machine => {
                sbMap[machine.machineNo] = sbMap[machine.machineNo] ? sbMap[machine.machineNo] + machine.showFactProduceRecords.length : machine.showFactProduceRecords.length
                chMap[machine.machineFactory] = chMap[machine.machineFactory] ? chMap[machine.machineFactory] + machine.showFactProduceRecords.length : machine.showFactProduceRecords.length
                sbToCh[machine.machineNo] = machine.machineFactory
            });
            
            return Object.keys(sbMap).map(sb => {
                return {
                    sb: sb,
                    sbCount: sbMap[sb]/2,
                    cj: sbToCh[sb],
                    cjCount: chMap[sbToCh[sb]]/2
                }
            })

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