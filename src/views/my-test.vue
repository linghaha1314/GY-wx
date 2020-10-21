<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.back(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div>
      <van-search
          v-model="value"
          shape="round"
          placeholder="搜索考试"
      />
    </div>
    <div style="background: #f6f6f6; padding: 12px;">
      <div style="background: #ffffff; padding: 10px 20px; border-radius: 4px; position: relative;margin-bottom: 12px"
           v-for="data in testData" :key="data.title"
      >
        <div style="font-size: 14px;">
          {{data.title}}
        </div>
        <van-divider />
        <div style="margin-bottom: 10px">
          <div style="color: #cccccc;margin-bottom: 4px;">考试时间:</div>
          <div>2020年10月10日 {{data.startTime}}</div>
        </div>

        <div style="position: absolute;right: 20px;bottom: 10px;">
          <span style="font-size: 24px; font-weight: bold;color: #17d4b5">
            {{data.score}}
          </span>
          分
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
      }
  }
</script>