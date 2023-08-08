// data:Array , groupName: String , sumName: String
export function groupSum(data, groupName, sumName){
    let tmp = {}
    for(let item of data){
        let key = item[groupName]
        let val = item[sumName]
        if(! tmp.hasOwnProperty(key)){
            tmp[key] = 0
        }
        tmp[key] += val
    }
    return tmp
}


// data:Array , groupName: String , sumName: String
export function groupCount(data, groupName){
    let tmp = {}
    for(let item of data){
        let key = item[groupName]
        if(! tmp.hasOwnProperty(key)){
            tmp[key] = 0
        }
        tmp[key] += 1
    }
    return tmp
}

// t1: String, t2: String
export function subTime(t1, t2){
    return (new Date(t2).getTime() - new Date(t1).getTime()) / 1000
}

// dict: Object
export function sortByTimesort(dict){
    let res = Object.keys(dict).map(key => {
        return {
            key: key,
            value: dict[key]
        }
    }).sort((o1, o2) => {
        return o2.value - o1.value
    })
    return res
}

// dict: Object
export function sortByTime(dict){
    let res = Object.keys(dict).map(key => {
        return {
            key: key,
            value: dict[key]
        }
    }).sort((o1, o2) => {
        return new Date(o1.key).getTime()  - new Date(o2.key).getTime() 
    })
    return res
}