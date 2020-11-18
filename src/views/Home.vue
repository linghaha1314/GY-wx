<template>
  <div class="home">
    <van-nav-bar :title="name">
<!--      <template #left>-->
<!--        <van-icon name="scan" size="18" color="#17d4b5" @click="goScan"/>-->
<!--      </template>-->
    </van-nav-bar>
    <router-view style="overflow: auto; padding-bottom: 60px"></router-view>
    <div>
      <van-tabbar v-model="active" route active-color="#17d4b5">
        <van-tabbar-item icon="wap-home" to="/home/index">首页</van-tabbar-item>
        <van-tabbar-item icon="video" to="/home/study">课程</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/home/we">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data (){
    return{
      active: 0,
    }
  },
  computed:{
      name(){
          return this.$route.name
      }
  },
  methods:{
      goScan(){
          this.$router.push({
              path: '/scan'
          })
      }
  }
};
</script>
