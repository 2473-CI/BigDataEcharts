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
            res = this.calculate(res.data)

            let op = {
                title: {
                    text: "每日各状态总时长",
                    x: "center"
                },
                legend: {
                    data: Object.keys(res),
                    y: "90%"
                },
                series: [
                    {
                        type: "pie",
                        data: Object.keys(res).map(key => {
                            return {
                                name: key,
                                value: res[key],
                                label: {
                                    show: true,
                                    position: "inside",
                                    formatter: "{b}\n{d}%"
                                }
                            }
                        })
                    }
                ]
            }

            console.log("T10", op)
            this.$echarts.init(this.$refs.v).setOption(op)

            })
    },
    methods: {
        calculate(res){
            let recordMap = {}
            res.forEach(machine => {
                machine.showFactChangeRecordList.forEach(record => {
                    let state = record.changeRecordState
                    let time = subTime(record.changeStartTime, record.changeEndTime)
                    recordMap[state] = recordMap[state] ? time + recordMap[state] : time
                })
            });
            return recordMap
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