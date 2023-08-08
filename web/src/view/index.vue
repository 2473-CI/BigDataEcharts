<template>
    <div class="context">

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://img.zcool.cn/community/0146bb5d65e3cfa80120695c103f86.jpg@2o.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>2022年国赛电商系列</span>
                <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="this.$router.push('/ds')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>


        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.46edc6195673fa53763b81d6df1a8f03?rik=B4S5fCWY9MSEWQ&riu=http%3a%2f%2fwww.lingxixueyuan.com%2fFiles%2fimage%2f20200924%2f20200924091135_1796.png&ehk=wtQ6g0fhKpXx3L%2bTWVDKXR8LKA8tkjgcgB%2bBIPaz4jc%3d&risl=&pid=ImgRaw&r=0"
                class="image"
            />
            <div style="padding: 14px">
                <span>2022年国赛工业系列</span>
                <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button" @click="this.$router.push('/gy')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/QS.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>QS世界排名大学(2018-2022)</span>
                <div class="bottom">
                <time class="time">2023/02/02</time>
                <el-button text class="button" @click="this.$router.push('/qs')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/YT.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>Youtube受欢迎的频道</span>
                <div class="bottom">
                <time class="time">2023/02/02</time>
                <el-button text class="button" @click="this.$router.push('/yt')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/ST.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>学生在考试中的表现</span>
                <div class="bottom">
                <time class="time">2023/02/03</time>
                <el-button text class="button" @click="this.$router.push('/st')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/Sex.png"
                class="image"
            />
            <div style="padding: 14px">
                <span>关于性犯罪者的数据分析</span>
                <div class="bottom">
                <time class="time">2023/02/05</time>
                <el-button text class="button" @click="this.$router.push('/sex')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        
        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://th.bing.com/th/id/OIP.PHsmW4nITClXsqQNv5wC4AHaE7?pid=ImgDet&rs=1"
                class="image"
            />
            <div style="padding: 14px">
                <span>印度全国健康调查</span>
                <div class="bottom">
                <time class="time">2023/02/07</time>
                <el-button text class="button" @click="this.$router.push('/keep')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://www.by56.com/Upload/News/2022/dced8940-f304-462b-b3fe-71ab64de6f70.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>俄乌局势分析</span>
                <div class="bottom">
                <time class="time">2023/02/09</time>
                <el-button text class="button" @click="this.$router.push('/war')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.dc14a536850d1efd9753318abc2e73e0?rik=PD9oLZOa6TzNPw&riu=http%3a%2f%2fnews.cjn.cn%2fgnxw%2f202103%2fW020210329438793429102.png&ehk=IC%2bb9Tfh%2b75iGjv8wXNvcFfv3Cs%2f3DyIFHHAwhXWgXw%3d&risl=&pid=ImgRaw&r=0"
                class="image"
            />
            <div style="padding: 14px">
                <span>自由美利坚，枪战每一天</span>
                <div class="bottom">
                <time class="time">2023/02/10</time>
                <el-button text class="button" @click="this.$router.push('/shoot')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>


        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://tse2-mm.cn.bing.net/th/id/OIP-C.kWnFtaohc-UEHXt-ljDk1gHaE8?pid=ImgDet&rs=1"
                class="image"
            />
            <div style="padding: 14px">
                <span>全球艾滋死亡情况统计</span>
                <div class="bottom">
                <time class="time">2023/02/11</time>
                <el-button text class="button" @click="this.$router.push('/AIDS')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <!-- <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://lthub.ubc.ca/files/2021/06/GitHub-Logo.png"
                class="image"
            />
            <div style="padding: 14px">
                <span>Github项目统计</span>
                <div class="bottom">
                <time class="time">2023/02/11</time>
                <el-button text class="button" @click="this.$router.push('/Github')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div> -->


        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/Murder.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>谋杀的原因</span>
                <div class="bottom">
                <time class="time">2023/02/14</time>
                <el-button text class="button" @click="this.$router.push('/Murder')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.6337b346ba3b13aeffb9d0570d726a60?rik=sB0LLMhDRSZ6%2fA&riu=http%3a%2f%2fb.zol-img.com.cn%2fdesk%2fbizhi%2fimage%2f6%2f960x600%2f1424829104965.jpg&ehk=wVuZXSkQrJCTE7wpQy9VttIg3HNslk1so6oqCh%2fhypk%3d&risl=&pid=ImgRaw&r=0"
                class="image"
            />
            <div style="padding: 14px">
                <span>熊出没</span>
                <div class="bottom">
                <time class="time">2023/02/14</time>
                <el-button text class="button" @click="this.$router.push('/Bear')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.e1fd1639f530ce121e0f886d75485d8e?rik=RYsHVyKk5UnAiw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40148%2f1981.jpg_wh860.jpg&ehk=ToeT1IsbC9wArCxb7uBQ4yAm%2bUTrXXlkCh0lytgI8T0%3d&risl=&pid=ImgRaw&r=0"
                class="image"
            />
            <div style="padding: 14px">
                <span>日本地震啦</span>
                <div class="bottom">
                <time class="time">2023/02/17</time>
                <el-button text class="button" @click="this.$router.push('/EarthQuakes')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>


        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://n.sinaimg.cn/translate/600/w1920h1080/20180416/wEvC-fzcyxmv5958389.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>你会屯黄金嘛？</span>
                <div class="bottom">
                <time class="time">2023/02/17</time>
                <el-button text class="button" @click="this.$router.push('/gold')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>



        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="@/assets/cat.jpg"
                class="image"
            />
            <div style="padding: 14px">
                <span>猫咪的习性</span>
                <div class="bottom">
                <time class="time">2023/02/17</time>
                <el-button text class="button" @click="this.$router.push('/Cat')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://tse1-mm.cn.bing.net/th/id/OIP-C.tlblLfBfmZrJaha2DQaKhwHaEI?pid=ImgDet&rs=1"
                class="image"
            />
            <div style="padding: 14px">
                <span>Stream上的游戏</span>
                <div class="bottom">
                <time class="time">2023/02/17</time>
                <el-button text class="button" @click="this.$router.push('/Stream')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

        <div class="box">
            <el-card  shadow="hover" :body-style="{ padding: '0px' }">
            <img
                src="https://ts1.cn.mm.bing.net/th/id/R-C.7e59309f1e3b540bb44f27a559b7b2d7?rik=4jyO3tKS%2bUy%2bBA&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2015%2f02%2fAMD-Fiji-GPU-Radeon-300-Series.jpg&ehk=fc9yxtnvIbBHEsOaLOvP5L6vXmeapQvrkzm%2f9zA1WdQ%3d&risl=&pid=ImgRaw&r=0"
                class="image"
            />
            <div style="padding: 14px">
                <span>Gpu性能分析</span>
                <div class="bottom">
                <time class="time">2023/02/17</time>
                <el-button text class="button" @click="this.$router.push('/Gpu')">查看</el-button>
                </div>
            </div>
            </el-card>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            currentDate: "2022/12/17"
        }
    }
}
</script>

<style>
.context{
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.box{
    width: 300px;
    /* height: 600px; */
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 400px;
  height: 190px;
  display: block;
}
</style>