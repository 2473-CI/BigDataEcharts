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
        "District Names": "Nicobars", 地区名称
        "State/UT": "Andaman & Nicobar Islands", 州/中央直辖区
        "Number of Households surveyed": "882", 受访住户数
		"Number of Men age 15-54 years interviewed": "125", 接受采访的15-54岁男性人数
		"Number of Women age 15-49 years interviewed": "764", 接受采访的15-49岁女性人数
		" Sex ratio of the total population (females per 1,000 males)": "973",  总人口的性别比例（每1 000名男性中有女性）
		"All women age 15-19 years who are anaemic22 (%)": "48.0",  所有 15-19 岁贫血的女性22 （%）
		"All women age 15-49 years who are anaemic22 (%)": "38.3",  所有 15-49 岁贫血的女性22 （%）
		"Average out-of-pocket expenditure per delivery in a public health facility (for last birth in the 5 years before the survey) (Rs": {
			")": "2278" 每次分娩的自付费用
		},
		"Births attended by skilled health personnel (in the 5 years before the survey)10 (%)": "98.6", 由熟练卫生人员接生（调查前5年）
		"Births delivered by caesarean section (in the 5 years before the survey) (%)": "11.5", 剖腹产分娩（调查前5年）
		"Births in a private health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "",
		"Births in a public health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "10.7",
		"Births in the 5 years preceding the survey that are third or higher order (%)": "0.0", 调查前5年内出生率为三级或三级以上（%）
		"Breastfeeding children age 6-23 months receiving an adequate diet16, 17  (%)": "(19.4)", 接受充足饮食的6-23个月母乳喂养儿童16， 17 （%）
		"Children Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (Children under age 5 years) (%)": "1.8", 儿童 调查前两周急性呼吸道感染（ARI）症状的患病率（5岁以下儿童）（%）“：
		"Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%)": "(64.2)",  根据疫苗接种卡或母亲回忆的信息，12-23 个月的儿童完全接种疫苗11 （%）
		"Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%)": "(94.1)", 12-23 个月的儿童仅根据疫苗接种卡上的信息完全接种疫苗12 （%
		"Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%)": "(71.9)", 接种了 3 剂五药或 DPT 疫苗的 12-23 个月大的儿童 （%）
		"Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%)": "(68.6)", 接种了3剂五剂或乙型肝炎疫苗的12-23个月大的儿童（%）
		"Children age 12-23 months who have received 3 doses of polio vaccine13 (%)": "(69.1)",接种了3剂脊髓灰质炎疫苗的12-23个月大的儿童13 （%）
		"Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%)": "(3.1)", 接种了3剂轮状病毒疫苗的12-23个月大的儿童14 （%）
		"Children age 12-23 months who have received BCG (%)": "(80.4)", 接受过卡介苗的 12-23 个月大的儿童 （%）
		"Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%)": "(67.3)", 已接种第一剂含麻疹疫苗 （MCV） 的 12-23 个月大的儿童
		"Children age 12-23 months who received most of their vaccinations in a private health facility (%)": "(0.0)", 在私人医疗机构接种大部分疫苗的 12-23 个月大的儿童
		"Children age 12-23 months who received most of their vaccinations in a public health facility (%)": "(100.0)", 在公共卫生机构接种大部分疫苗的 12-23 个月大的儿童
		"Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%)": "(20.7)", 已接种第二剂含麻疹疫苗 （MCV） 的 24-35 个月大儿童
		"Children age 5 years who attended pre-primary school during the school year 2019-20 (%)": "(29.5)", 在2019-20学年期间接受学前教育的5岁儿童
		"Children age 6-59 months who are anaemic (<11": { 6-59 个月大贫血的儿童
			"0 g/dl)22 (%)": "37.7"
		},
		"Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%)": "", 6-8 个月大的儿童接受固体或半固体食物和母乳16
		"Children age 9-35 months who received a vitamin A dose in the last 6 months (%)": "94.9", 在过去 6 个月内接受维生素 A 剂量的 9-35 个月大的儿童
		"Children born at home who were taken to a health facility for a check-up within 24 hours of birth (for last birth in the 5 years before the survey} (%)": "", 在出生后24小时内被送往医疗机构进行检查的在家出生的儿童（调查前5年内最后一次分娩（%）
		"Children swith diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "", 在调查到医疗机构或医疗服务提供者处进行调查前 2 周内腹泻的儿童（5 岁以下儿童）
		"Children under 5 years who are overweight (weight-for-height)20 (%)": "1.5", 5岁以下超重儿童（身高别体重）20
		"Children under 5 years who are severely wasted (weight-for-height)19 (%)": "7.8", 严重消瘦的 5 岁以下儿童（身高别体重）19
		"Children under 5 years who are stunted (height-for-age)18 (%)": "21.6",发育迟缓的 5 岁以下儿童（年龄别身高）18
		"Children under 5 years who are underweight (weight-for-age)18 (%)": "24.6", 体重不足的 5 岁以下儿童（年龄别体重）18
		"Children under 5 years who are wasted (weight-for-height)18 (%)": "15.7",体重不足的 5 岁以下儿童（年龄别体重）18
		"Children under age 3 years breastfed within one hour of birth15 (%)": "55.4", 3岁以下儿童出生后一小时内母乳喂养15 （%）
		"Children under age 5 years whose birth was registered with the civil authority (%)": "98.0",在民政当局登记出生的 5 岁以下儿童
		"Children under age 6 months exclusively breastfed16 (%)": "",6 个月以下的儿童纯母乳喂养16
		"Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "92.5", 在分娩后2天内接受医生/护士/LHV/ANM/助产士/其他卫生人员产后护理的儿童（调查前5年内的最后一次分娩）
		"Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (Children under age 5 years) (%)": "",在调查前两周内接受口服补液盐（ORS）的腹泻儿童（5岁以下儿童）
		"Children with diarrhoea in the 2 weeks preceding the survey who received zinc (Children under age 5 years) (%)": "",
		"Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "(85.7)", 在调查前2周内发烧或出现ARI症状的儿童被带到医疗机构或医疗服务提供者（5岁以下儿童）（%）
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any method6 (%)": "65.3",目前使用计划生育方法（目前15-49岁的已婚妇女）-任何方法6
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any modern method6 (%)": "57.2", 计划生育方法的当前使用情况（目前15-49岁的已婚妇女）-任何现代方法6
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Condom (%)": "4.9",目前使用计划生育方法（目前15-49岁的已婚妇女）——避孕套
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Female sterilization (%)": "46.4", 目前使用计划生育方法（目前已婚妇女年龄在15-49岁之间）——女性绝育
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - IUD/PPIUD (%)": "2.7", 目前使用计划生育方法（目前15-49岁的已婚妇女）——宫内节育器/宫内节育器
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Injectables (%)": "1.2", 目前使用计划生育方法（目前15-49岁的已婚妇女）-注射剂
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Male sterilization (%)": "0.0", 目前使用计划生育方法（目前已婚妇女年龄在15-49岁之间）——男性绝育
		"Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Pill (%)": "2.0", 目前使用计划生育方法（目前15-49岁的已婚妇女）-避孕药（%）
		"Current users ever told about side effects of current method of family planning8 (%)": "49.4", 当前用户曾经讲述过当前计划生育方法的副作用8
		"Deaths in the last 3 years registered with the civil authority (%)": "83.2", 过去3年在民政当局登记的死亡人数（%）
		"Female population age 6 years and above who ever attended school (%)": "78.0", 6岁及以上曾上过学的女性人口（%）
		"Health worker ever talked to female non-users about family planning (%)": "40.4", 卫生工作者曾与非使用者的女性谈论计划生育（%）
		"Home births that were conducted by skilled health personnel  (in the 5 years before the survey)10 (%)": "0.8", 由熟练卫生人员进行的家庭分娩（调查前5年）10
		"Households using clean fuel for cooking3 (%)": "56.9", 使用清洁燃料做饭的家庭3 （%）
		"Households using iodized salt (%)": "99.4", 使用碘盐的家庭（%）
		"Households with any usual member covered under a health insurance/financing scheme (%)": "2.7", 健康保险/融资计划涵盖任何普通成员的家庭
		"Institutional births (in the 5 years before the survey) (%)": "97.8",机构出生（调查前5年）（%）
		"Institutional births in public facility (in the 5 years before the survey) (%)": "96.7",公共设施中的机构分娩（调查前5年内）
		"Men (age 15 years and above wih  very high (>160 mg/dl) Blood sugar level23 (%)": "4.4",男性（15岁及以上，血糖水平非常高（>160毫克/分升）23
		"Men age 15 years and above who consume alcohol (%)": "64.5",饮酒的 15 岁及以上男性
		"Men age 15 years and above who use any kind of tobacco (%)": "76.8", 使用任何烟草的 15 岁及以上男性
		"Men age 15 years and above wih Elevated blood pressure (Systolic \u2265140 mm of Hg and/or Diastolic \u226590 mm of Hg) or taking medicine to control blood pressure (%)": "47.0", 15 岁及以上且血压升高（收缩压 ≥140 mm 汞柱和/或舒张压 ≥90 mm Hg）或正在服用药物控制血压
		"Men age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "32.9",15 岁及以上且血压轻度升高（收缩压 140-159 毫米汞柱和/或舒张压 90-99 毫米汞柱）
		"Men age 15 years and above wih Moderately or severely elevated blood pressure (Systolic \u2265160 mm of Hg and/or Diastolic \u2265100 mm of Hg) (%)": "11.1", 15 岁及以上且血压中度或重度升高（收缩压 ≥160 mm 汞柱和/或舒张压 ≥100 mm Hg）
		"Men age 15 years and above wih high (141-160 mg/dl) Blood sugar level23 (%)": "9.6",15岁及以上高血糖水平（141-160毫克/分升）的男性23（%）“：
		"Men age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level  or taking medicine to control blood sugar level23 (%)": "15.4",
		“15岁及以上高或非常高（>140毫克/分升）血糖水平或服用药物控制血糖水平的男性23（%）
		"Mothers who consumed iron folic acid for 100 days or more when they were pregnant (for last birth in the 5 years before the survey) (%)": "72.6",
		"Mothers who consumed iron folic acid for 180 days or more when they were pregnant (for last birth in the 5 years before the survey} (%)": "43.9",怀孕时食用叶酸铁180天或以上的母亲 调查前5年内最后一次分娩
		"Mothers who had an antenatal check-up in the first trimester  (for last birth in the 5 years before the survey) (%)": "62.8",在妊娠早期进行产前检查的母亲（调查前5年内的最后一次分娩）
		"Mothers who had at least 4 antenatal care visits  (for last birth in the 5 years before the survey) (%)": "71.7",至少接受过4次产前检查的母亲（调查前5年内最后一次分娩）
		"Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "85.1", 在分娩后2天内接受医生/护士/LHV/ANM/助产士/其他卫生人员产后护理的母亲（调查前5年内的最后一次分娩）
		"Mothers whose last birth was protected against neonatal tetanus (for last birth in the 5 years before the survey)9 (%)": "78.0",
		"Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%)": "",接受充足饮食的6-23个月非母乳喂养儿童16， 17
		"Non-pregnant women age 15-49 years who are anaemic (<12": {
			"0 g/dl)22 (%)": "38.4"  年龄在 15-49 岁且贫血的非孕妇
		},
		"Population below age 15 years (%)": "23.0", 15岁以下人口（%）
		"Population living in households that use an improved sanitation facility2 (%)": "83.5", 生活在使用经改善的卫生设施的家庭中的人口2
		"Population living in households with an improved drinking-water source1 (%)": "98.8", 生活在饮用水源改善的家庭中的人口1
		"Population living in households with electricity (%)": "97.9", 有电家庭人口（%）
		"Pregnant women age 15-49 years who are anaemic (<11": {
			"0 g/dl)22 (%)": ""  15-49 岁贫血的孕妇
		},
		"Prevalence of diarrhoea in the 2 weeks preceding the survey (Children under age 5 years) (%)": "5.7", 调查前两周腹泻患病率（5岁以下儿童）
		"Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (for last birth in the 5 years before the survey) (%)": "97.9", 母亲获得母婴保护（MCP）卡的登记怀孕（调查前5年内最后一次生育）
		"Sex ratio at birth for children born in the last five years (females per 1,000 males)": "927", 过去五年出生的儿童出生性别比（每1 000名男性中的女性）
		"Total Unmet need for Family Planning (Currently Married Women Age 15-49  years)7 (%)": "9.5", 未满足的计划生育需求总额（目前15-49岁的已婚妇女）7 （%）
		"Total children age 6-23 months receiving an adequate diet16, 17  (%)": "(18.7)", 6-23个月大的儿童获得充足饮食16， 17 （%）
		"Unmet need for spacing (Currently Married Women Age 15-49  years)7 (%)": "3.3", 未满足的间距需求（目前已婚女性年龄在15-49岁）7 （%）
		"Women  age 15 years and above with high (141-160 mg/dl) Blood sugar level23 (%)": "7.4", 15岁及以上血糖水平高（141-160毫克/分升）的女性23
		"Women (age 15-49 years) who are overweight or obese (BMI \u226525": { 
			"0 kg/m2)21 (%)": "39.1" 超重或肥胖的女性（15-49 岁）
		},
		"Women (age 15-49 years) who have high risk waist-to-hip ratio (\u22650": { 
			"85) (%)": "62.5" 腰臀比风险较高的女性（15-49 岁）
		}, 
		"Women (age 15-49 years) whose Body Mass Index (BMI) is below normal (BMI <18": {
			"5 kg/m2)21 (%)": "8.2" 体重指数（BMI）低于正常水平的女性（15-49岁）
		}, 
		"Women (age 15-49)  with 10 or more years of schooling (%)": "53.5", 受过10年或10年以上教育的妇女（15-49岁）
		"Women (age 15-49) who are literate4 (%)": "87.5", 识字的妇女（15-49岁）4
		"Women (age 30-49 years) Ever undergone a breast examination for breast cancer (%)": "13.2", 女性（30-49岁） 曾经接受过乳腺癌乳房检查
		"Women (age 30-49 years) Ever undergone a screening test for cervical cancer (%)": "13.4", 女性（30-49岁） 曾经接受过宫颈癌筛查测试
		"Women (age 30-49 years) Ever undergone an oral cavity examination for oral cancer (%)": "5.4", 女性（30-49岁） 曾经接受过口腔癌检查
		"Women age 15 years and above who consume alcohol (%)": "29.6", 饮酒的 15 岁及以上女性
		"Women age 15 years and above who use any kind of tobacco (%)": "63.5", 使用任何烟草的 15 岁及以上女性
		"Women age 15 years and above wih Elevated blood pressure (Systolic \u2265140 mm of Hg and/or Diastolic \u226590 mm of Hg) or taking medicine to control blood pressure (%)": "35.4", 15 岁及以上且血压升高（收缩压 ≥140 mm 汞柱和/或舒张压 ≥90 mm Hg）或服用药物控制血压 （%）
		"Women age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "23.2", 15 岁及以上且血压轻度升高的女性（收缩压 140-159 毫米汞柱和/或舒张压 90-99 毫米汞柱）
		"Women age 15 years and above wih Moderately or severely elevated blood pressure (Systolic \u2265160 mm of Hg and/or Diastolic \u2265100 mm of Hg) (%)": "8.5", 15 岁及以上的女性 中度或重度血压升高（收缩压 ≥160 mm 汞柱和/或舒张压 ≥100 mm Hg）（%）
		"Women age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level or taking medicine to control blood sugar level23 (%)": "13.1", 15岁及以上的女性，高或非常高（>140毫克/分升） 血糖水平或服用药物控制血糖水平23
		"Women age 15 years and above wih very high (>160 mg/dl) Blood sugar level23 (%)": "3.9", 15岁及以上的女性血糖水平非常高（>160毫克/分升）23
		"Women age 15-19 years who were already mothers or pregnant at the time of the survey (%)": "1.8", 15-19岁在调查时已经为人母或怀孕的女性（%）
		"Women age 15-24 years who use hygienic methods of protection during their menstrual period5 (%)": "100.0", 15-24 岁女性在月经期间使用卫生防护方法5
		"Women age 20-24 years married before age 18 years (%)": "11.4", 20-24岁未婚妇女在18岁之前结婚（%）
		"field1": "0"
	},
        {
        " Sex ratio of the total population (females per 1,000 males)": "1140",
        "All women age 15-19 years who are anaemic22 (%)": "59.2",
        "All women age 15-49 years who are anaemic22 (%)": "62.6",
        "Average out-of-pocket expenditure per delivery in a public health facility (for last birth in the 5 years before the survey) (Rs": {
            ")": "3479"
        },
        "Births attended by skilled health personnel (in the 5 years before the survey)10 (%)": "96.4",
        "Births delivered by caesarean section (in the 5 years before the survey) (%)": "57.0",
        "Births in a private health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "73.8",
        "Births in a public health facility that were delivered by caesarean section (in the 5 years before the survey) (%)": "44.5",
        "Births in the 5 years preceding the survey that are third or higher order (%)": "0.0",
        "Breastfeeding children age 6-23 months receiving an adequate diet16, 17  (%)": "(14.0)",
        "Children Prevalence of symptoms of acute respiratory infection (ARI) in the 2 weeks preceding the survey (Children under age 5 years) (%)": "1.3",
        "Children age 12-23 months fully vaccinated based on information from either vaccination card or mother's recall11 (%)": "(82.8)",
        "Children age 12-23 months fully vaccinated based on information from vaccination card only12 (%)": "(100.0)",
        "Children age 12-23 months who have received 3 doses of penta or DPT vaccine (%)": "(89.7)",
        "Children age 12-23 months who have received 3 doses of penta or hepatitis B vaccine (%)": "(89.7)",
        "Children age 12-23 months who have received 3 doses of polio vaccine13 (%)": "(82.8)",
        "Children age 12-23 months who have received 3 doses of rotavirus vaccine14 (%)": "(74.8)",
        "Children age 12-23 months who have received BCG (%)": "(93.3)",
        "Children age 12-23 months who have received the first dose of measles-containing vaccine (MCV) (%)": "(93.3)",
        "Children age 12-23 months who received most of their vaccinations in a private health facility (%)": "(3.0)",
        "Children age 12-23 months who received most of their vaccinations in a public health facility (%)": "(97.0)",
        "Children age 24-35 months who have received a second dose of measles-containing vaccine (MCV) (%)": "(34.9)",
        "Children age 5 years who attended pre-primary school during the school year 2019-20 (%)": "(0.0)",
        "Children age 6-59 months who are anaemic (<11": {
            "0 g/dl)22 (%)": "59.6"
        },
        "Children age 6-8 months receiving solid or semi-solid food and breastmilk16 (%)": "",
        "Children age 9-35 months who received a vitamin A dose in the last 6 months (%)": "69.6",
        "Children born at home who were taken to a health facility for a check-up within 24 hours of birth (for last birth in the 5 years before the survey} (%)": "",
        "Children swith diarrhoea in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "",
        "Children under 5 years who are overweight (weight-for-height)20 (%)": "4.5",
        "Children under 5 years who are severely wasted (weight-for-height)19 (%)": "7.4",
        "Children under 5 years who are stunted (height-for-age)18 (%)": "19.7",
        "Children under 5 years who are underweight (weight-for-age)18 (%)": "21.4",
        "Children under 5 years who are wasted (weight-for-height)18 (%)": "19.5",
        "Children under age 3 years breastfed within one hour of birth15 (%)": "42.8",
        "Children under age 5 years whose birth was registered with the civil authority (%)": "95.0",
        "Children under age 6 months exclusively breastfed16 (%)": "",
        "Children who received postnatal care from a doctor/nurse/LHV/ANM/midwife/ other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "97.7",
        "Children with diarrhoea in the 2 weeks preceding the survey who received oral rehydration salts (ORS) (Children under age 5 years) (%)": "",
        "Children with diarrhoea in the 2 weeks preceding the survey who received zinc (Children under age 5 years) (%)": "",
        "Children with fever or symptoms of ARI in the 2 weeks preceding the survey taken to a health facility or health provider (Children under age 5 years) (%)": "(79.7)",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any method6 (%)": "72.3",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Any modern method6 (%)": "72.2",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Condom (%)": "0.3",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Female sterilization (%)": "71.0",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - IUD/PPIUD (%)": "0.6",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Injectables (%)": "0.0",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Male sterilization (%)": "0.3",
        "Current Use of Family Planning Methods (Currently Married Women Age 15-49  years) - Pill (%)": "0.0",
        "Current users ever told about side effects of current method of family planning8 (%)": "45.8",
        "Deaths in the last 3 years registered with the civil authority (%)": "71.0",
        "District Names": "Srikakulam",
        "Female population age 6 years and above who ever attended school (%)": "60.0",
        "Health worker ever talked to female non-users about family planning (%)": "16.0",
        "Home births that were conducted by skilled health personnel  (in the 5 years before the survey)10 (%)": "0.5",
        "Households using clean fuel for cooking3 (%)": "74.7",
        "Households using iodized salt (%)": "76.5",
        "Households with any usual member covered under a health insurance/financing scheme (%)": "75.6",
        "Institutional births (in the 5 years before the survey) (%)": "97.9",
        "Institutional births in public facility (in the 5 years before the survey) (%)": "52.2",
        "Men (age 15 years and above wih  very high (>160 mg/dl) Blood sugar level23 (%)": "8.6",
        "Men age 15 years and above who consume alcohol (%)": "28.3",
        "Men age 15 years and above who use any kind of tobacco (%)": "21.3",
        "Men age 15 years and above wih Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%)": "22.9",
        "Men age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "14.4",
        "Men age 15 years and above wih Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%)": "5.5",
        "Men age 15 years and above wih high (141-160 mg/dl) Blood sugar level23 (%)": "6.8",
        "Men age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level  or taking medicine to control blood sugar level23 (%)": "17.6",
        "Mothers who consumed iron folic acid for 100 days or more when they were pregnant (for last birth in the 5 years before the survey) (%)": "67.5",
        "Mothers who consumed iron folic acid for 180 days or more when they were pregnant (for last birth in the 5 years before the survey} (%)": "35.3",
        "Mothers who had an antenatal check-up in the first trimester  (for last birth in the 5 years before the survey) (%)": "79.7",
        "Mothers who had at least 4 antenatal care visits  (for last birth in the 5 years before the survey) (%)": "78.4",
        "Mothers who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (for last birth in the 5 years before the survey) (%)": "90.8",
        "Mothers whose last birth was protected against neonatal tetanus (for last birth in the 5 years before the survey)9 (%)": "94.4",
        "Non-breastfeeding children age 6-23 months receiving an adequate diet16, 17 (%)": "",
        "Non-pregnant women age 15-49 years who are anaemic (<12": {
            "0 g/dl)22 (%)": "62.8"
        },
        "Number of Households surveyed": "874",
        "Number of Men age 15-54 years interviewed": "100",
        "Number of Women age 15-49 years interviewed": "780",
        "Population below age 15 years (%)": "20.7",
        "Population living in households that use an improved sanitation facility2 (%)": "71.6",
        "Population living in households with an improved drinking-water source1 (%)": "87.7",
        "Population living in households with electricity (%)": "99.9",
        "Pregnant women age 15-49 years who are anaemic (<11": {
            "0 g/dl)22 (%)": ""
        },
        "Prevalence of diarrhoea in the 2 weeks preceding the survey (Children under age 5 years) (%)": "11.9",
        "Registered pregnancies for which the mother received a Mother and Child Protection (MCP) card (for last birth in the 5 years before the survey) (%)": "100.0",
        "Sex ratio at birth for children born in the last five years (females per 1,000 males)": "1163",
        "State/UT": "Andhra Pradesh",
        "Total Unmet need for Family Planning (Currently Married Women Age 15-49  years)7 (%)": "5.7",
        "Total children age 6-23 months receiving an adequate diet16, 17  (%)": "16.1",
        "Unmet need for spacing (Currently Married Women Age 15-49  years)7 (%)": "3.6",
        "Women  age 15 years and above with high (141-160 mg/dl) Blood sugar level23 (%)": "8.2",
        "Women (age 15-49 years) who are overweight or obese (BMI ≥25": {
            "0 kg/m2)21 (%)": "27.2"
        },
        "Women (age 15-49 years) who have high risk waist-to-hip ratio (≥0": {
            "85) (%)": "54.0"
        },
        "Women (age 15-49 years) whose Body Mass Index (BMI) is below normal (BMI <18": {
            "5 kg/m2)21 (%)": "13.8"
        },
        "Women (age 15-49)  with 10 or more years of schooling (%)": "42.5",
        "Women (age 15-49) who are literate4 (%)": "64.3",
        "Women (age 30-49 years) Ever undergone a breast examination for breast cancer (%)": "0.2",
        "Women (age 30-49 years) Ever undergone a screening test for cervical cancer (%)": "1.0",
        "Women (age 30-49 years) Ever undergone an oral cavity examination for oral cancer (%)": "3.8",
        "Women age 15 years and above who consume alcohol (%)": "0.6",
        "Women age 15 years and above who use any kind of tobacco (%)": "7.1",
        "Women age 15 years and above wih Elevated blood pressure (Systolic ≥140 mm of Hg and/or Diastolic ≥90 mm of Hg) or taking medicine to control blood pressure (%)": "22.1",
        "Women age 15 years and above wih Mildly elevated blood pressure (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%)": "12.8",
        "Women age 15 years and above wih Moderately or severely elevated blood pressure (Systolic ≥160 mm of Hg and/or Diastolic ≥100 mm of Hg) (%)": "5.9",
        "Women age 15 years and above wih high or very high (>140 mg/dl) Blood sugar level or taking medicine to control blood sugar level23 (%)": "17.4",
        "Women age 15 years and above wih very high (>160 mg/dl) Blood sugar level23 (%)": "7.8",
        "Women age 15-19 years who were already mothers or pregnant at the time of the survey (%)": "5.5",
        "Women age 15-24 years who use hygienic methods of protection during their menstrual period5 (%)": "78.0",
        "Women age 20-24 years married before age 18 years (%)": "25.4",
        "field1": "3"
    },
]
```



### 
### 俄乌战争相关信息

#### 接口地址

```
curl --location --request POST 'http://192.168.10.109:8999/war' \
--header 'Content-Type: application/json' \
--data-raw '{"Country":"Russia"}'
```

#### 接口数据

```json
[
    {
        "APC": "516",装甲运兵车
        "MRL": "4",最大残留限量
        "aircraft": "10", 飞机
        "anti-aircraft warfare": "0",  防空战
        "cruise missiles": "", 巡航导弹
        "date": "2022-02-25", 
        "day": "2", 
        "drone": "0",  无人机
        "field artillery": "49", 野战炮兵
        "fuel tank": "60.0", 油箱
        "greatest losses direction": "", 最大损失方向
        "helicopter": "7", 直升机
        "military auto": "100.0", 军用汽车
        "mobile SRBM system": "", 移动式短程弹道导弹系统
        "naval ship": "2", 舰船
        "special equipment": "", 特种设备
        "tank": "80", 坦克
        "vehicles and fuel tanks": "" 车辆和油箱
    },
]
```


### 
### 美国大规模枪击事件信息统计

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8999/shoot'
```

#### 接口数据

```json
[
    {  // 此数据集包含 2018 年至 2022 年的五个 csv 文件。每个数据包含以下属性
        "Date": "31/12/2018", 大规模枪击事件发生的日期
        "Dead": "3",  死于大规模枪击事件的总人数
        "Description": "A dispute began at a rented Airbnb during a New Year's Eve party. Three men were killed and another man and woman were wounded.", 事件的描述/简短报告，其中可能包括性别/地点等信息。
        "Injured": "2", 在大规模枪击事件中受伤的总人数-
        "State": "Ohio", 事件发生的州
        "Total": "5" 死伤总人数
    },
]
```


### 
### 全球艾滋死亡情况

#### 接口地址

```
curl --location --request GET 'http://cn-hk-nf-3.natfrp.cloud:61322/AIDS'
```

#### 接口数据
```json
[
    {
        "15-49": "15",   15-49岁间的死亡人数
        "5-14": "0",       5-14岁间的死亡人数
        "50-69": "7",   50-69岁间的死亡人数
        "70+": "1",     70+岁间的死亡人数
        "Codecountry": "AFG",
        "Country": "Afghanistan",
        "Under 5": "10",   小于5岁间死于艾滋
        "Year": "1990"  
    },
]
```


### 
### Github相关数据分析

#### 接口地址

```
curl --location --request POST 'http://192.168.10.109:8999/GitHub' \
--header 'Content-Type: text/plain' \
--data-raw '{"year":["2019","2020","2021","2022","2023"],"primaryLanguage":[],"need":["createdAt","stars"]}'
```
```json
{
  "owner": "pelmers", 所有者
  "name": "text-rewriter",  名字
  "stars": 11,
  "forks": 4,
  "watchers": 3,
  "isFork": false,
  "isArchived": false,
  "languages": [ { "name": "JavaScript", "size": 21769 }, { "name": "HTML", "size": 2096 }, { "name": "CSS", "size": 2081 } ],  编程语言
  "diskUsageKb": 75,  项目大小
  "pullRequests": 4,  拉取请求次数
  "description": "Webextension to rewrite phrases in pages",  描述
  "primaryLanguage": "JavaScript",  主要语言
  "createdAt": "2015-03-14T22:35:11Z",  创建于
  "pushedAt": "2022-02-11T14:26:00Z", 推在
  "defaultBranchCommitCount": 54, 默认分支提交计数
  "license": null, 许可证
  "assignableUserCount": 1,  可分配用户计数
  "codeOfConduct": null,  行为准则
  "forkingAllowed": true,
  "nameWithOwner": "pelmers/text-rewriter",  名称与所有者
  "parent": null
}
```

### 
### 谋杀原因分析

#### 接口地址

```
curl --location --request GET 'http://192.168.10.109:8999/Murder'
```
```json
  {
    "Casteism": "1", 种族歧视
    "Class Conflict": "2",  阶级冲突
    "Communalism": "1",  社区主义
    "Dowry": "96",  彩礼嫁妆
    "Gain": "122",  物品获得
    "Love Affairs/ Sexual relations": "355",  爱情/性
    "Lunacy": "7",  精神病
    "Other Causes": "1348",  其他原因
    "Personal Vendetta or Enemity": "332", 仇恨
    "Political Reasons": "39",  政治原因
    "Property Dispute": "159",  财产纠纷
    "STATE": "ANDHRA PRADESH",  州
    "Terrorists/ Extremists": "120",  恐怖分子
    "Witchcraft": "20",  巫术
    "YEAR": "2001"
  },
```

