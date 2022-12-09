<template>
    <div ref="v">

    </div>
</template>

<script>
import { subTime } from '@/utils/util'
import { keyBy } from 'lodash'

export default{
    mounted(){
        fetch("/api/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            res = this.calculate(res.data)
            let i = 0
            let op = {
                title: [
                    {
                        text: "OP170B每天各状态时间",
                        x: "center",
                    },
                    {
                        subtext: "2021-10-12",
                        x: "15%",
                        y: "65%"
                    },
                    {
                        subtext: "2021-10-13",
                        x: "35%",
                        y: "65%"
                    },
                    {
                        subtext: "2021-10-14",
                        x: "55%",
                        y: "65%"
                    },
                    {
                        subtext: "2021-10-15",
                        x: "75%",
                        y: "65%"
                    }
                ],
                legend: {
                    data: ["运行", "离线", "待机"],
                    y: "80%"
                },
                series: Object.keys(res).map(key => {
                    return {
                        type: "pie",
                        center: [20*(++i) + "%", "50%"],
                        radius: "20%",
                        label: {
                            formatter(value){
                                return value.name + "\n" + value.percent + "%"
                            }
                        },
                        data: Object.keys(res[key]).map(name => {
                            return {
                                name: name,
                                value: res[key][name]
                            }
                        })
                    }
                }),
                tooltip: {
                    tirgger: "axis"
                }

                
            }



            console.log("T6", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })

    },
    methods: {
        calculate(res){
            let stateMap = {}
            res.forEach(machine => {
                if(machine.machineName == "OP170B") return;
                machine.showFactChangeRecordList.forEach( record => {
                    let state = record.changeRecordState
                    let day = record.changeStartTime.split(" ")[0]
                    let time = subTime(record.changeStartTime, record.changeEndTime)
                    if(! stateMap[day]) stateMap[day] = {}
                    stateMap[day][state] = stateMap[day][state] ? stateMap[day][state] + time : time
                })
            });
            return stateMap
        }
    }
}
</script>

<style scoped>
div{
    width: 1000px;
    height: 600px;
    background-color: aliceblue;
}
</style>