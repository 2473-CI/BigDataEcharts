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
            let op = {
                title: {
                    text: "每日各设备产量",
                    x: "center"
                },
                xAxis: {
                    name: "时间",
                    data: Object.keys(res),
                },
                yAxis: {
                    name: "产量",
                },
                legend: {
                    data: Object.keys(res["2020-01-01"]).map(o => o+""),
                    x: "90%",
                    y: "20%"
                },
                series: Object.keys(res["2020-01-01"]).map(o => {
                    return {
                        type: "bar",
                        name: o + "",
                        data: Object.values(res).map(it => it[o]),
                        label: {
                            show: true,
                        }
                    }
                }),
                tooltip: {
                    trigger: "axis"
                }
            }

            console.log("T12", op)
            this.$echarts.init(this.$refs.v).setOption(op)

        })

    },
    methods: {
        calculate(res){
            let dayMap = {}
            res.forEach(machine => {
                machine.showFactProduceRecords.forEach(record => {
                    let day = record.produceCodeEndTime.split(" ")[0]
                    dayMap[day] ? dayMap[day].push(record) : dayMap[day]=[record]
                })
            });

            let soMap = {}
            Object.keys(dayMap).map(day => {
                soMap[day] = {}
                dayMap[day].forEach(it => {
                    let id = it.produceMachineId
                    soMap[day][id] = soMap[day][id] ? soMap[day][id] + 1 : 1
                })
            })
            return (soMap)
        },

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