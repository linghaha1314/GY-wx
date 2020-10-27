<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.go(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div style="text-align: center;margin-top: 53px;">
      <van-icon name="completed" size="80" color="#17D4B5"/>
      <div style="margin-top: 22px;font-size: 14px">
        您的试卷已成功提交！
      </div>
      <div style="color: #909090; margin: 12px 0 42px;">
        放松下眼睛，保护好视力哦~
      </div>
    </div>
    <div style="padding: 30px 12px;">
      <router-link replace to="/test">
        <van-button round type="primary" block color="#17d4b5">确定</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'test',
        data() {
            return {
                activeNames: ['1'],
            }
        },
        computed: {
            name() {
                return this.$route.name
            }
        },
        methods: {}
    }
</script>
<style lang="less">
  .p12 {
    padding: 0 12px;
  }
</style>