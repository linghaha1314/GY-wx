<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.back(-1)">返回</span>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return{
                value: '',
            }
        },
        computed:{
            name(){
                return this.$route.name
            }
        }
    }
</script>