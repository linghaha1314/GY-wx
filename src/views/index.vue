<template>
  <div>
    <div style="padding: 12px; border-bottom: 1px solid #efefef">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image :src="require('../assets/img/banner-1.png')" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image :src="require('../assets/img/banner-2.png')" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="display: flex;">
      <div
          style="width: 22%;display: flex;justify-content: right; align-items: center; font-size: 14px;font-weight: bold">
                <span style="color: #17d4b5">
                    进修
                </span>头条
      </div>
      <div style="flex: 1">
        <van-notice-bar
            background="#fff"
            color="#999"
            text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />
      </div>
    </div>
    <!--间隔-->
    <div style="width:100%; height: 10px; background: #f6f6f6"></div>
    <div>

      <van-grid :border="false" square>
        <van-grid-item v-for="value in menuData" :key="value.title"  :icon="value.icon" :text="value.title" @click="goUrl(value)"/>
      </van-grid>
    </div>
    <!--间隔-->
    <div style="width:100%; height: 10px; background: #f6f6f6"></div>
    <div style="display: flex;">
      <div
          style="width: 22%;display: flex;justify-content: right; align-items: center; font-size: 14px;font-weight: bold; min-height: 28px">
                <span style="color: #17d4b5">
                    最新
                </span>资讯
      </div>
    </div>
    <div>
      <van-card
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #num>
          <div style="flex: 1;">
            <span style="margin-right: 12px">20000人阅读</span> <span>2020-10-19</span>
          </div>
        </template>

      </van-card>
      <van-card
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #num>
          <div style="flex: 1;">
            <span style="margin-right: 12px">20000人阅读</span> <span>2020-10-19</span>
          </div>
        </template>

      </van-card>
      <van-card
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #num>
          <div style="flex: 1;">
            <span style="margin-right: 12px">20000人阅读</span> <span>2020-10-19</span>
          </div>
        </template>

      </van-card>
      <van-card
          title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #num>
          <div style="flex: 1;">
            <span style="margin-right: 12px">20000人阅读</span> <span>2020-10-19</span>
          </div>
        </template>

      </van-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index.vue",
        data (){
            return{
                menuData:[
                    {
                        title: '在线考试',
                        url:'/test',
                        icon: 'records'
                    },
                    {
                        title: '教学活动',
                        url:'/activities',
                        icon: 'gift-o'
                    },
                    {
                        title: '活动签到',
                        url:'/activities-sign',
                        icon: 'location-o'
                    },
                    {
                        title: '请假',
                        url:'/leave',
                        icon: 'todo-list-o'
                    },
                    {
                        title: '活动记录',
                        url:'/activities-record',
                        icon: 'send-gift-o'
                    },
                    {
                        title: '销假',
                        url:'/leave-bin',
                        icon: 'certificate'
                    },
                    {
                        title: '工作量',
                        url:'/workload',
                        icon: 'chart-trending-o'
                    }
                ]
            }
        },
        methods:{
            goUrl(data){
                this.$router.push(data.url)
            }
        }
    }
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
</style>