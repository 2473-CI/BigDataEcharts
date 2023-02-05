# echarts

## 需要准备环境

> node.js
>
> python 3.9

## 后台启动方法
```
source activate python39
pip install flask
python data.py
```

### 前端启动方法
```
npm install
npm run serve
```



## 接口说明

### 获取时间区间内的订单数据

#### 接口地址

```
curl --location --request POST 'http://127.0.0.1:8999/dataVisualization/selectOrderInfo' \
--header 'Content-Type: application/json' \
--data-raw '{
      "startTime":"2020-01-01 00:00:00",
      "endTime":"2020-12-30 00:00:00"
   }'
```

#### 接口数据

```json
{
	id : 主键,
	finalTotalAmount ：总金额,
	outTradeNo ：订单交易编号（第三方支付用),
	provinceName ：省名称,
	regionName ：地区名称,
	userName : 用户名 
}
```

### 查询每年上架的商品

#### 接口地址

```
curl --location --request POST 'http://127.0.0.1:8999/dataVisualization/selectGoodsInfo' \
--data-raw ''
```

#### 接口数据

```json
{
	id : 编号,
	price ：总金额,
	skuName ：商品名称,
	year ：年份 
}
```

### 查看工业数据信息

#### 接口地址

```
curl --location --request GET 'http://127.0.0.1:8999/machine/getIndustrial' \
--data-raw ''
```

#### 接口数据

```json
{
    baseMachineId：设备id,
    machineFactory：所属车间,
    machineNo：设备编号,
    machineName：设备名称,
    machineIp：通讯IP,
    machinePort：通讯端口,
    machineAddDate：维护日期,
    machineRemarks：备注,
    machineAddEmpId：数据维护人员,
    machineResponsEmpId：设备负责人员,
    machineLedgerXml：设备附带台账细信息,
    isws：设备适配采集协议,
    showFactChangeRecordList{ ：设备各状态信息
        changeId：设备状态切换表ID,
        changeMachineId：设备ID,
        changeRecordState：状态信息,
        changeStartTime：状态开始时间,
        changeEndTime：状态结束时间,
        hangeRecordData：状态最后一次采集数据信息,
        changeHandleState：当ChangeRecordState为报警的时候,
	}
    showFactEnvironmentData{ :设备对应检测信息
        envoid：环境检测表ID,
        baseid：设备ID,
        co2：检测环境项,
        pm25：颗粒物,
        pm10：可吸入颗粒物,
        temperature：温度,
        humidity：环境湿度变化,
        tvoc：有机气态物质,
        ch2o：碳水化合物,
        smoke：含烟量,
        InPuttime：维护时间,
    },
    showFactProduceRecords{ ：设备产品加工信息
        produceRecordId：设备加工产品过程记录ID,
        produceMachineId：加工设备ID,
        produceCodeNumber：设备加工所用的程序代号,
        produceStartWaitTime：产品加工准备时间，也就是上一个产品加工的结束时间,
        produceCodeStartTime：产品开始加工时间，也就是员工按下启动按钮的时间,
        produceCodeEndTime：产品加工结束时间，也就是下一个产品的加工准备时间,
        produceCodeCycleTime：加工产品的标准时间，单位是毫秒,
        produceEndTime：加工产品结束时间，单位是毫秒,
        produceTotalout：实时读取的设备累计加工数量,
        produceInspect：是否已经检验，1代表已经检验，0代表未检验,
    }
}
```

### 
### 查看QS世界大学排名数据

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8082/api/QSWorldRankingUniversity'
```

#### 接口数据

```json
[
    {
        "City": "Cambridge",
        "Country": "United States",
        "Name": "Harvard University",
        "Point": "97.7",
        "Rank": "1",
        "Year": "2018"
    },
]
```

### 
### YouTube的受欢迎程度

#### 接口地址

```
curl --location --request POST 'http://192.168.10.109:8999/Youtube' \
--header 'Content-Type: application/json' \
--data-raw '{"StartRank":1,"EndRank":1000}'
```

#### 接口数据

```json
[
    {
        "Category": "Film & Animation",
        "Rank": "2",
        "Started": "2015",
        "Subscribers": "161,000,000",
        "Video Count": "0",
        "Video Views": "0",
        "Youtube Channel": "YouTube Movies"
    },
]
```


### 
### 学生考试情况

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8999/Student'
```

#### 接口数据

```json
[
    {
        "gender": "male",
        "lunch": "free/reduced",
        "math score": "64",
        "parental level of education": "high school",
        "race/ethnicity": "group D",
        "reading score": "64",
        "test preparation course": "completed",
        "writing score": "67"
    },
]
```

### 
### 性犯罪者登记处

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8999/Sex'
```

#### 接口数据

```json
[
  {
    "ADDDATE": "2021/12/22 16:03:10+00",  添加日期
    "ALIASES": "RONALD  WYN / BOY  WYNN",  别名
    "BIRTHDATE": "1957/01/07 05:00:00+00", 生日
    "BLOCKNAME": "5300 BLOCK C STREET SE", 区块名称
    "BLOCK_X": "406505", BLOCK_X
    "BLOCK_Y": "135194", BLOCK_Y
    "CREATED": "", 
    "CREATOR": "", 
    "DCS_LAST_MOD_DTM": "2022/11/15 11:10:37+00", 
    "DISTRICT": "6", 区
    "EDITED": "", 
    "EDITOR": "", 
    "EYECOLOR": "BROWN",  眼睛颜色
    "FIRSTNAME": "RONALD", 名
    "GIS_ID": "", 
    "GLOBALID": "{ED8167D4-D37B-5038-E053-792F520A2494}",  全球ID
    "HAIRCOLOR": "BLACK", 发色
    "HEIGHTNUM": "68", 身高
    "LASTNAME": "WYNN", 姓氏
    "LATITUDE": "38.884557", 纬度
    "LONGITUDE": "-76.925021", 经度
    "MARKINGS": "", 标记
    "MAXCLASSIFICATION": "A", 最大分类
    "OBJECTID": "1095037", 对象标识
    "PSA": "604", 
    "QUADRANT": "SE", 
    "REGISTRATIONDATE": "2022/01/12 05:00:00+00", 
    "SEXOFFENDERCODE": "004-366", 性犯罪者代码
    "TYPE": "HOME", 犯罪场所
    "WEIGHTNUM": "180", 体重
    "X": "-76.9250275843539", 
    "Y": "38.8845676858294", 
    "ZIPCODE": "20019" 邮编
  }
    
]
```