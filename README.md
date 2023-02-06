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




### 
### 印度全国健康调查

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8999/keep'
```

#### 接口数据
```json
[
    {
		" Sex ratio of the total population (females per 1,000 males)": "973",
		"All women age 15-19 years who are anaemic22 (%)": "48.0",
		"All women age 15-49 years who are anaemic22 (%)": "38.3",
		"Average out-of-pocket expenditure per delivery in a public health facility (for last birth in the 5 years before the survey) (Rs": {
			")": "2278"
		},
		"Births attended by skilled health personnel (in the 5 years before the survey)10 (%)": "98.6",
		"Births delivered by caesarean section (in the 5 years before the survey) (%)": "11.5",
		"Births in a private health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "",
		"Births in a public health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "10.7",
		"Births in the 5 years preceding the survey that are third or higher order (%)": "0.0",
		"Breastfeeding children age 6-23 months receiving an adequate diet16, 17  (%)": "(19.4)",
		"Children Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (Children under age 5 years) (%)": "1.8",
		"Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%)": "(64.2)",
		"Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%)": "(94.1)",
		"Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%)": "(71.9)",
		"Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%)": "(68.6)",
		"Children age 12-23 months who have received 3 doses of polio vaccine13 (%)": "(69.1)",
		"Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%)": "(3.1)",
		"Children age 12-23 months who have received BCG (%)": "(80.4)",
		"Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%)": "(67.3)",
		"Children age 12-23 months who received most of their vaccinations in a private health facility (%)": "(0.0)",
		"Children age 12-23 months who received most of their vaccinations in a public health facility (%)": "(100.0)",
		"Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%)": "(20.7)",
		"Children age 5 years who attended pre-primary school during the school year 2019-20 (%)": "(29.5)",
		"Children age 6-59 months who are anaemic (<11": {
			"0 g/dl)22 (%)": "37.7"
		},
		"Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%)": "",
		"Children age 9-35 months who received a vitamin A dose in the last 6 months (%)": "94.9",
		"Children born at home who were taken to a health facility for a check-up within 24 hours of birth (for last birth in the 5 years before the survey} (%)": "",
		"Children swith diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "",
		"Children under 5 years who are overweight (weight-for-height)20 (%)": "1.5",
		"Children under 5 years who are severely wasted (weight-for-height)19 (%)": "7.8",
		"Children under 5 years who are stunted (height-for-age)18 (%)": "21.6",
		"Children under 5 years who are underweight (weight-for-age)18 (%)": "24.6",
		"Children under 5 years who are wasted (weight-for-height)18 (%)": "15.7",
		"Children under age 3 years breastfed within one hour of birth15 (%)": "55.4",
		"Children under age 5 years whose birth was registered with the civil authority (%)": "98.0",
		"Children under age 6 months exclusively breastfed16 (%)": "",
		"Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "92.5",
		"Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (Children under age 5 years) (%)": "",
		"Children with diarrhoea in the 2 weeks preceding the survey who received zinc (Children under age 5 years) (%)": "",
		"Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "(85.7)",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any method6 (%)": "65.3",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any modern method6 (%)": "57.2",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Condom (%)": "4.9",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Female sterilization (%)": "46.4",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - IUD/PPIUD (%)": "2.7",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Injectables (%)": "1.2",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Male sterilization (%)": "0.0",
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Pill (%)": "2.0",
		"Current users ever told about side effects of current method of family planning8 (%)": "49.4",
		"Deaths in the last 3 years registered with the civil authority (%)": "83.2",
		"District Names": "Nicobars",
		"Female population age 6 years and above who ever attended school (%)": "78.0",
		"Health worker ever talked to female non-users about family planning (%)": "40.4",
		"Home births that were conducted by skilled health personnel  (in the 5 years before the survey)10 (%)": "0.8",
		"Households using clean fuel for cooking3 (%)": "56.9",
		"Households using iodized salt (%)": "99.4",
		"Households with any usual member covered under a health insurance/financing scheme (%)": "2.7",
		"Institutional births (in the 5 years before the survey) (%)": "97.8",
		"Institutional births in public facility (in the 5 years before the survey) (%)": "96.7",
		"Men (age 15 years and above wih  very high (>160 mg/dl) Blood sugar level23 (%)": "4.4",
		"Men age 15 years and above who consume alcohol (%)": "64.5",
		"Men age 15 years and above who use any kind of tobacco (%)": "76.8",
		"Men age 15 years and above wih Elevated blood pressure (Systolic \u2265140 mm of Hg and/or Diastolic \u226590 mm of Hg) or taking medicine to control blood pressure (%)": "47.0",
		"Men age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "32.9",
		"Men age 15 years and above wih Moderately or severely elevated blood pressure (Systolic \u2265160 mm of Hg and/or Diastolic \u2265100 mm of Hg) (%)": "11.1",
		"Men age 15 years and above wih high (141-160 mg/dl) Blood sugar level23 (%)": "9.6",
		"Men age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level  or taking medicine to control blood sugar level23 (%)": "15.4",
		"Mothers who consumed iron folic acid for 100 days or more when they were pregnant (for last birth in the 5 years before the survey) (%)": "72.6",
		"Mothers who consumed iron folic acid for 180 days or more when they were pregnant (for last birth in the 5 years before the survey} (%)": "43.9",
		"Mothers who had an antenatal check-up in the first trimester  (for last birth in the 5 years before the survey) (%)": "62.8",
		"Mothers who had at least 4 antenatal care visits  (for last birth in the 5 years before the survey) (%)": "71.7",
		"Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "85.1",
		"Mothers whose last birth was protected against neonatal tetanus (for last birth in the 5 years before the survey)9 (%)": "78.0",
		"Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%)": "",
		"Non-pregnant women age 15-49 years who are anaemic (<12": {
			"0 g/dl)22 (%)": "38.4"
		},
		"Number of Households surveyed": "882",
		"Number of Men age 15-54 years interviewed": "125",
		"Number of Women age 15-49 years interviewed": "764",
		"Population below age 15 years (%)": "23.0",
		"Population living in households that use an improved sanitation facility2 (%)": "83.5",
		"Population living in households with an improved drinking-water source1 (%)": "98.8",
		"Population living in households with electricity (%)": "97.9",
		"Pregnant women age 15-49 years who are anaemic (<11": {
			"0 g/dl)22 (%)": ""
		},
		"Prevalence of diarrhoea in the 2 weeks preceding the survey (Children under age 5 years) (%)": "5.7",
		"Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (for last birth in the 5 years before the survey) (%)": "97.9",
		"Sex ratio at birth for children born in the last five years (females per 1,000 males)": "927",
		"State/UT": "Andaman & Nicobar Islands",
		"Total Unmet need for Family Planning (Currently Married Women Age 15-49  years)7 (%)": "9.5",
		"Total children age 6-23 months receiving an adequate diet16, 17  (%)": "(18.7)",
		"Unmet need for spacing (Currently Married Women Age 15-49  years)7 (%)": "3.3",
		"Women  age 15 years and above with high (141-160 mg/dl) Blood sugar level23 (%)": "7.4",
		"Women (age 15-49 years) who are overweight or obese (BMI \u226525": {
			"0 kg/m2)21 (%)": "39.1"
		},
		"Women (age 15-49 years) who have high risk waist-to-hip ratio (\u22650": {
			"85) (%)": "62.5"
		},
		"Women (age 15-49 years) whose Body Mass Index (BMI) is below normal (BMI <18": {
			"5 kg/m2)21 (%)": "8.2"
		},
		"Women (age 15-49)  with 10 or more years of schooling (%)": "53.5",
		"Women (age 15-49) who are literate4 (%)": "87.5",
		"Women (age 30-49 years) Ever undergone a breast examination for breast cancer (%)": "13.2",
		"Women (age 30-49 years) Ever undergone a screening test for cervical cancer (%)": "13.4",
		"Women (age 30-49 years) Ever undergone an oral cavity examination for oral cancer (%)": "5.4",
		"Women age 15 years and above who consume alcohol (%)": "29.6",
		"Women age 15 years and above who use any kind of tobacco (%)": "63.5",
		"Women age 15 years and above wih Elevated blood pressure (Systolic \u2265140 mm of Hg and/or Diastolic \u226590 mm of Hg) or taking medicine to control blood pressure (%)": "35.4",
		"Women age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "23.2",
		"Women age 15 years and above wih Moderately or severely elevated blood pressure (Systolic \u2265160 mm of Hg and/or Diastolic \u2265100 mm of Hg) (%)": "8.5",
		"Women age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level or taking medicine to control blood sugar level23 (%)": "13.1",
		"Women age 15 years and above wih very high (>160 mg/dl) Blood sugar level23 (%)": "3.9",
		"Women age 15-19 years who were already mothers or pregnant at the time of the survey (%)": "1.8",
		"Women age 15-24 years who use hygienic methods of protection during their menstrual period5 (%)": "100.0",
		"Women age 20-24 years married before age 18 years (%)": "11.4",
		"field1": "0"
	},
]
```