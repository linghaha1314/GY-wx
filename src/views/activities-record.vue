<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.back(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div>
      <van-dropdown-menu active-color="#17d4b5">
        <van-dropdown-item title="类型" v-model="value1" :options="option1" />
        <van-dropdown-item title="状态" v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div>
      <van-search
          v-model="value"
          shape="round"
          placeholder="搜索活动名字"
      />
    </div>
    <div style="background: #f6f6f6; padding: 12px;">
      <div style="background: #ffffff; padding: 10px 20px; border-radius: 4px; position: relative;margin-bottom: 12px"
           v-for="data in testData" :key="data.title"
           @click="goDetail(data)"
      >
        <div style="font-size: 14px;display: flex;justify-content: space-between;">
          {{data.title}}
          <van-tag :type="['success', 'warning'][data.status]" size="medium">{{option2[data.status].text}}</van-tag>
        </div>
        <van-divider />
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">活动时间:</div>
          <div>2020年10月10日 {{data.startTime}}</div>
        </div>
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">讲师:</div>
          <div>{{data.peopleValue}}</div>
        </div>
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">活动地址:</div>
          <div>{{data.address}}</div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return{
                value: '',
                value1: 'Rounds-One',
                value2: 'a',
                option1: [
                    // 理论授课，小讲课，技能培训，教学查房，病案讨论，专题培训，读书报告，主任查房
                    { text: '教学查房', value: 'Rounds-One' },
                    { text: '病案讨论', value: 'Discussion' },
                    { text: '读书报告', value: 'Report' },
                    { text: '小讲课', value: 'lecture' },
                    { text: '理论授课', value: 'theory_teaching' },
                    { text: '技能培训', value: 'SkillTraining' },
                    { text: '专题培训', value: 'special_training' },
                    { text: '主任查房', value: 'director_round' },
                ],
                option2: [
                    { text: '已提交', value: 'a' },
                    { text: '未提交', value: 'b' },
                ],
                testData: [
                    {
                        title: '2020楚科活动11',
                        startTime: '09:00 - 11:00',
                        content: '2020-2021 口腔专业理论活动11',
                        isPass: true,
                        score: 89,
                        peopleValue: '凌老师',
                        address: '教学楼7楼403室',
                        status: 0,
                    },
                    {
                        title: '2020楚科活动1001',
                        startTime: '10:00 - 21:00',
                        content: '2020-2021 口腔专业理论活动1001',
                        isPass: false,
                        score: 60,
                        peopleValue: '刘老师',
                        address: '教学楼7楼403室',
                        status: 1,
                    }
                ]
            }
        },
        computed:{
            name(){
                return this.$route.name
            }
        },
        mounted() {
            let newData = JSON.parse(localStorage.getItem('addItem')||'{}')
            let len = Object.keys(newData).length
            if(len !== 0){
                newData.status = 2
                this.testData.unshift(newData);
                localStorage.setItem('addItem','')
            }
        },
        methods:{
            goDetail(data){
                localStorage.setItem('currentData',JSON.stringify(data))
                this.$router.push({
                    path: '/activities-write'
                })
            }
        }
    }
</script>