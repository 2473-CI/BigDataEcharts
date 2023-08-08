<template>
    <div ref="v">

    </div>
</template>

<script>

export default{
    mounted(){

        fetch("/api/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            res = this.calculate(res.data)
            let so = ["OP50", "OP160", "OP170", "OP170B"]
            let op = {
                title: {
                    text: "每日各设备产量",
                    x: "center",
                },
                yAxis: {
                    data: Object.keys(res),
                    name: "日期"
                },
                legend: {
                    data: so,
                    x: "90%",
                    y: "10%"
                },
                xAxis:{
                    name: "产量",
                    axisLabel: {
                        formatter(value){
                            return value + "件"
                        }
                    }
                },
                series: so.map(o => {
                    return {
                        name: o,
                        type: "bar",
                        data: Object.values(res).map(it => it[o]),
                        label: {
                            show: true,
                            position: "right"
                        }
                    }
                }),
                tooltip: {
                    trigger: "axis"
                }
            }

            console.log("T4", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })


    },
    methods: {
        calculate(res){
            let dayMap = {}
            res.forEach(machine => {
                machine.showFactProduceRecords.forEach(pr => {
                    let day = pr.produceCodeEndTime.split(" ")[0]
                    let mach = machine.machineName
                    if(dayMap[day] == undefined){
                        dayMap[day] = {}
                    }
                    dayMap[day][mach] = dayMap[day][mach] ? dayMap[day][mach] + 1 : 1
                })
            })
            return dayMap
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