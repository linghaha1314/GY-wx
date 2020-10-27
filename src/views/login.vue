<template>
  <div style="text-align: center;">
    <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <div class="title">贵州医科大学附属医院</div>
    <div class="sub-title mb20">贵医大进修</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="idCard"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '必须填写账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '必须填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
  // import Vue from 'vue'
  // import { Toast } from 'vant';
  //
  // Vue.use(Toast)
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      onSubmit(values) {
        console.log('submit', values);
        this.$toast.loading({
          message: '正在登录...',
          forbidClick: true,
          duration: 0,
        });
        localStorage.setItem('isLogin', '1')
        setTimeout(()=>{
          this.$toast.clear()
          this.$router.push('/home')
        },1000)
      },
    },
  };
</script>
<style lang="less">
  .title{
    font-size: 20px;
  }
  .sub-title{
    font-size: 16px;
    color: rgb(203, 203, 203)
  }
  .mb20{
    margin-bottom: 20px;
  }
</style>
