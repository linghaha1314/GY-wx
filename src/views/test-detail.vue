<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.go(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div class="p12" style="padding: 15px 12px;font-size: 14px">
      2020年贵州省出生缺陷防治人才综合考试
    </div>
    <!--间隔-->
    <div style="width:100%; height: 7px; background: #f6f6f6"></div>

    <div class="p12">

      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #efefef;padding: 12px 0;
">
        <div>考试时间</div>
        <div style="color:#999999;">2020年9月29日 09:00 - 12:00</div>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #efefef;padding: 12px 0;
">
        <div>考试内容</div>
        <div style="color:#999999;">人才综合考试</div>
      </div>
      <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #efefef;padding: 12px 0;
">
        <div>试卷名称</div>
        <div style="color:#999999;">2020年秋季贵医大技能人才综合考试</div>
      </div>
    </div>

    <div style="width:100%; height: 7px; background: #f6f6f6"></div>

    <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="注意事项" name="1">1、考生必须自觉服从监考员等考试工作人员管理，不得以任何理由妨碍监考员等考试工作人员履行职责，不得扰乱考场及其他考试工作地点的秩序。
          <br>
          <br>
          2、考生凭准考证、身份证，按规定时间和准考证上各科目的考试试室、座位号参加考试。
        </van-collapse-item>
      </van-collapse>
      <div style="padding: 30px 12px;">
        <router-link replace to="/paper">
          <van-button round type="primary" block color="#17d4b5">开始考试</van-button>
        </router-link>
      </div>
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
                setInterval(()=>{

                    return this.$route.name
                },1000)
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