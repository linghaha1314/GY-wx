<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.back(-1)">返回</span>
      </template>
    </van-nav-bar>
    <div style="display: flex;justify-content: space-between;align-items: center; padding: 0 12px;">
      <van-search
          v-model="value"
          shape="round"
          style="width: 80%"
          placeholder="搜索活动名字"
      />
      <div style="display: flex; flex-direction: column;align-items: center; color: #17d4b5"
        @click="isEdit=!isEdit"
      >
        <van-icon name="setting-o" size="22"/>
        <span style="font-size: 10px">编辑</span>
      </div>
    </div>
    <div style="background: #f6f6f6; padding: 12px;">
      <div style="background: #ffffff; padding: 10px 20px; border-radius: 4px; position: relative;margin-bottom: 12px"
           v-for="data in testData" :key="data.title"
      >
        <div style="font-size: 14px;">
          <van-checkbox v-model="data.checked" shape="square" checked-color="#17d4b5">{{data.date}}</van-checkbox>
        </div>
        <van-divider />
        <div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">住院号：</div>
            <div>{{data.startTime}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">病人姓名：</div>
            <div>{{data.peopleValue}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">床位号：</div>
            <div>{{data.peopleValue}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">年月:</div>
            <div>{{data.startTime}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">诊断:</div>
            <div>{{data.peopleValue}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">入院时间:</div>
            <div>{{data.startTime}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">病种:</div>
            <div>{{data.peopleValue}}</div>
          </div>
          <div style="margin-bottom: 10px;display: flex;align-items: center;">
            <div style="color: #cccccc;margin-right: 4px;width: 22vw;">工作内容:</div>
            <div>{{data.address}}</div>
          </div>
        </div>
      </div>
      <div style="position: fixed;right: 26px;bottom: 70px">
        <router-link to="/workload-clinical-add">
          <van-icon color="#17d4b5" name="add" size="40"/>
        </router-link>
      </div>
    </div>
    <div style="position: fixed;left: 0;bottom: 0;width: 100vw;">
      <van-button style="width: 33%" @click="backTo">上一步</van-button>
      <van-button style="width: 33%" type="danger" @click="deleteFn">删除</van-button>
      <van-button style="width: 34%" color="#17d4b5" @click="goDetail">提交</van-button>
    </div>
  </div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {
        name: 'test',
        data(){
            return{
                value: '',
                isEdit: false,
                option2: [
                    { text: '未发布', value: 'c' },
                    { text: '开展中', value: 'a' },
                    { text: '已完成', value: 'b' },
                ],
                testData: [
                    {
                        title: '2020楚科活动11',
                        startTime: '09:00 - 11:00',
                        content: '2020-2021 口腔专业理论活动11',
                        isPass: true,
                        score: 89,
                        peopleValue: '凌老师',
                        address: '教学楼7楼403室',
                        status: 1,
                        date: '2020-10-20'
                    },
                    {
                        title: '2020楚科活动1001',
                        startTime: '10:00 - 21:00',
                        content: '2020-2021 口腔专业理论活动1001',
                        isPass: false,
                        score: 60,
                        peopleValue: '刘老师',
                        address: '教学楼7楼403室',
                        status: 2,
                        date: '2020-10-22'
                    }
                ]
            }
        },
        computed:{
            name(){
                return this.$route.name
            }
        },
        mounted() {
            let newData = JSON.parse(localStorage.getItem('addItem')||'{}')
            let len = Object.keys(newData).length
            if(len !== 0){
                newData.status = 2
                this.testData.unshift(newData);
                localStorage.setItem('addItem','')
            }
        },
        methods:{
            goDetail(){
                Dialog.confirm({
                    title: '温馨提示:',
                    message: '确认提交么?',
                    confirmButtonColor: '#17d4b5'
                }).then(()=>{
                    this.$toast.success('提交成功!')
                })
            },
            deleteFn(){
                Dialog.confirm({
                    title: '温馨提示:',
                    message: '确认删除么?',
                    confirmButtonColor: '#17d4b5'
                }).then(()=>{
                    this.$toast.success('删除成功!')
                })
            },
            backTo(){
                localStorage.setItem('formAction', '1')
                this.$router.replace({
                    path: '/workload-add'
                })
            }
        }
    }
</script>