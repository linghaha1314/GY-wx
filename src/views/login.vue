<template>
  <div style="text-align: center;">
    <img style="height:50px; margin-bottom: 30px" src="../assets/img/logo.png">
    <div class="title">贵州医科大学附属医院</div>
    <div class="sub-title mb20">贵医大进修</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="loginInfo.username"
        name="username"
        label="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '必须填写账号' }]"
      />
      <van-field
        v-model="loginInfo.password"
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
    <div style="text-align: right;padding: 20px 20px;">
      <a href="https://www.baidu.com">
        <span>
          注册
        </span>
      </a>
    </div>
  </div>
</template>
<script>
  // import Vue from 'vue'
  // import { Toast } from 'vant';
  //
  // Vue.use(Toast)
  import {getLogin} from '../http/apiMap.js'
  export default {
    data() {
      return {
        loginInfo:{
            username: '',
            password: '',
            hospitalId: 'c77e18b0-1ffa-11e7-b036-00163e0603fa',
            verifyCode: '',
        }

      };
    },
    methods: {
      onSubmit(values) {
        this.$toast.loading({
            message: '正在登录...',
            forbidClick: true,
            duration: 0
        });
        Object.assign(this.loginInfo,values)
          getLogin(this.$qs.stringify(this.loginInfo)).then((res)=>{
              if(res.data.success){
                  let scan = localStorage.getItem('scan') || ''; // 是否是扫描过来的
                      this.$toast.clear()
                      if(scan === '1'){
                          localStorage.setItem('scan','')
                          this.$router.replace({
                              path: '/activities-sign'
                          })
                      }else {
                          localStorage.setItem('isLogin', '1') // 存储登录标识
                          this.$router.push('/home')
                      }
              }else {
                  this.$toast.fail(res.data.message);
              }
          }).catch(()=>{
              localStorage.setItem('isLogin', '1') // 存储登录标识
              this.$router.push('/home')
          })
        // this.$axios.post('/formLogin',this.$qs.stringify(this.loginInfo)).then( (res) => {
        //   console.log(res, 999999)
        //   localStorage.setItem('isLogin', '1') // 存储登录标识
        //   let scan = localStorage.getItem('scan') || ''; // 是否是扫描过来的
        //   this.$toast.clear()
        //   if(scan === '1'){
        //       localStorage.setItem('scan','')
        //       // this.$router.replace({
        //       //   path: '/activities-sign'
        //       // })
        //   }else {
        //       // this.$router.push('/home')
        //   }
        // })




        setTimeout(()=>{


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
