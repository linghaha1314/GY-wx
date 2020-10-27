<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.go(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div style="display: flex;justify-content: space-between;align-items: center; padding: 0 12px;">
      <van-search
          v-model="value"
          shape="round"
          placeholder="搜索考试"
          style="width: 80%"
      />
      <router-link to="/my-test">
        <div style="display: flex; flex-direction: column;align-items: center; color: #17d4b5">
          <van-icon name="records" size="22"/>
          <span style="font-size: 10px">我的考试</span>
        </div>
      </router-link>
    </div>
    <div style="background: #f6f6f6; padding: 12px;">
      <div style="background: #ffffff; padding: 10px 20px; border-radius: 4px; position: relative;margin-bottom: 12px"
           v-for="data in testData" :key="data.title"
           @click="goTestDetail(data)"
      >
        <div style="font-size: 14px;">
          {{data.title}}
        </div>
        <van-divider />
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">考试时间:</div>
          <div>2020年10月10日 {{data.startTime}}</div>
        </div>
        <div>
          <div style="color: #cccccc;margin-bottom: 4px;">考试内容:</div>
          <div>{{data.content}}</div>
        </div>
        <div style="position: absolute;right: -6px;top: -6px;" v-if="data.isPass">
          <van-icon name="checked" color="#17d4b5" size="20"/>
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
              testData: [
                  {
                      title: '2020楚科考试11',
                      startTime: '09:00 - 11:00',
                      content: '2020-2021 口腔专业理论考试11',
                      isPass: true,
                      score: 89,
                  },
                  {
                      title: '2020楚科考试1001',
                      startTime: '10:00 - 21:00',
                      content: '2020-2021 口腔专业理论考试1001',
                      isPass: false,
                      score: 60
                  }
              ]
          }
      },
      computed:{
          name(){
              return this.$route.name
          }
      },
      methods:{
          goTestDetail(data){
              this.$router.push({
                  path: '/test-detail',
                  params: {
                      ...data
                  }
              })
          }
      }
  }
</script>