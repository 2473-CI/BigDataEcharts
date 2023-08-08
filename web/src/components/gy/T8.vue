<template>
    <div ref="v">

    </div>
</template>

<script>
import { subTime } from '@/utils/util'
import { indexOf } from 'lodash'


export default{
    mounted(){

        fetch(window.BaseURL+"/machine/getIndustrial")
        .then(res => res.json())
        .then(res => {
            // this.init(res.data)

            res = this.calculate(res.data)

            console.log(res)
            let titles=[], singleAxiss=[], seriess=[]
            let machine = ["OP50","OP160","OP170","OP170B"]
            let lj = Object.keys(res)
            let sb = Object.values(res)

            sb.forEach((element, index) => {
                titles.push({
                    text: lj[index],
                    top: (index + .3) * 100 / lj.length +"%"
                }),

                singleAxiss.push({
                    top: (index + .4) * 100 /lj.length +"%",
                    left: "100px",
                    height: "20px",
                    type: 'category',
                    data: ["OP50","OP160","OP170","OP170B"]
                })

                seriess.push({
                    singleAxisIndex: index,
                    coordinateSystem: 'singleAxis',
                    data: [],
                    type: "scatter",
                    symbolSize:function(dataItem){
                        if(dataItem[1] > 1500){
                            return dataItem[1] / 300
                        }
                        else if(dataItem[1] > 1200){
                            return dataItem[1] / 25
                        }
                        else{
                            return dataItem[1] / 10
                        }
                    }
                })
            });

            sb.forEach((element,index) => {
                
                (Object.keys(element)).forEach(function(el){
                    seriess[index].data.push([machine.indexOf(el), element[el]])
                })
                console.log(element)
            });

            let op = {
                title: titles,
                singleAxis: singleAxiss,
                series: seriess,
                tooltip:{}
            }

            

            
            console.log("T8", op)
            this.$echarts.init(this.$refs.v).setOption(op)
        })

    },
    methods: {
        calculate(res){

            let ljMap = {}
            res.forEach(machine => {
                machine.showFactProduceRecords.forEach(record => {
                    let code = record.produceCodeNumber
                    record["machineName"] = machine.machineName
                    ljMap[code] ? ljMap[code].push(record) : ljMap[code] = [record]
                })
            });
            let resMap = {}
            Object.keys(ljMap).map(lj => {
                let sumMap = {}
                let countMap = {}
                ljMap[lj].map(machine => {
                    let time = subTime(machine.produceCodeStartTime, machine.produceCodeEndTime)
                    time = machine.produceCodeCycleTime / 1000
                    sumMap[machine.machineName] = sumMap[machine.machineName] ? sumMap[machine.machineName] + time : time
                    countMap[machine.machineName] = countMap[machine.machineName] ? sumMap[machine.machineName] + 1 : 1
                })
                Object.keys(sumMap).map(key => {
                    sumMap[key] = countMap[key]
                })
                resMap[lj] = sumMap
            })
            // console.log(resMap)
            return resMap
        }
    }
    // methods:{
    //     init(data){
    //     let titles =[], singleAxiss=[], seriess=[]

    //     let schema_lingjian = [],schema_machine=[], schema=[]

    //     data.forEach(function(element, index){

    //         schema_machine.push(element.machineName)

    //         element.showFactProduceRecords.forEach(el => {
    //             if(!schema_lingjian.includes(el.produceCodeNumber)){
    //                 schema_lingjian.push(el.produceCodeNumber)
    //             }
    //         });

    //         schema.push()

    //     });
    //         // 基础数据

    //     data.forEach(function(element, index){
    //         titles.push({
    //             text: "",
    //             top: (index+0.2) * 100 / schema_lingjian.length + "%"
    //         })

    //         singleAxiss.push({
    //             data: schema_machine,
    //             top: (index) * 100 / schema_lingjian.length + "%",
    //             left: "100px",
    //             height:"50px"
    //         })

    //         seriess.push({
    //             singleIndex: index,
    //             coordinateSystem:"singleAxis",
    //             data:[],
    //             type:"scatter"
    //         })
    //     });

    //     for(let i=0;i<schema_lingjian.length;i++){
    //         titles[i].text=schema_lingjian[i]
    //     }

    //     data.forEach(element => {
    //         // console.log(element.machineName)

    //         element.showFactProduceRecords.forEach(el => {
    //             let tmp = {
    //                 time: 0,
    //                 long : 0
    //             }
    //             for(let key of schema_lingjian){
 
    //             // console.log(key)
    //                 if(el.produceCodeNumber== key)
    //                 {
    //                     tmp.time++
    //                     tmp.long += subTime(el.produceCodeEndTime,el.produceCodeStartTime)
    //                 }

    //             }

    //         });
    //         // console.log(tmp)
    //     });



    //     let op ={
    //             title:titles,
    //             singleAxis:singleAxiss,
    //             series:seriess
    //         }

        
    //     console.log("T8", op)
    //     this.$echarts.init(this.$refs.v).setOption(op)
    //     }
        

    //     }
    }

</script>

<style scoped>
div{
    width: 80vw;
    height: 60vh;
    background-color: aliceblue;
}
</style>