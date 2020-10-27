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
      >
        <div style="font-size: 14px;display: flex;justify-content: space-between;">
          {{data.title}}
          <van-tag color="#17d4b5" size="medium">{{option2[0].text}}</van-tag>
        </div>
        <van-divider />
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">活动时间:</div>
          <div>2020年10月10日 {{data.startTime}}</div>
        </div>
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">讲师:</div>
          <div>{{data.Teachers}}</div>
        </div>
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">活动地址:</div>
          <div>{{data.Address}}</div>
        </div>
      </div>
      <div style="position: fixed;right: 26px;bottom: 60px">
        <van-icon color="#17d4b5" name="add" size="40"/>
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
                    { text: '开展中', value: 'a' },
                    { text: '已完成', value: 'b' },
                    { text: '未发布', value: 'c' },
                ],
                testData: [
                    {
                        title: '2020楚科活动11',
                        startTime: '09:00 - 11:00',
                        content: '2020-2021 口腔专业理论活动11',
                        isPass: true,
                        score: 89,
                        Teachers: '凌老师',
                        Address: '教学楼7楼403室'
                    },
                    {
                        title: '2020楚科活动1001',
                        startTime: '10:00 - 21:00',
                        content: '2020-2021 口腔专业理论活动1001',
                        isPass: false,
                        score: 60,
                        Teachers: '刘老师',
                        Address: '教学楼7楼403室'
                    }
                ]
            }
        },
        computed:{
            name(){
                return this.$route.name
            }
        }
    }
</script>