<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span @click="$router.go(-1)" style="color: #17d4b5">返回</span>
      </template>
<!--      <template #right v-if="ac_list.length>1">-->
<!--        <span @click="show=true" style="color: #17d4b5">列表</span>-->
<!--      </template>-->
    </van-nav-bar>
    <div>
      <van-cell-group>
        <van-cell title="活动标题" :value="currentData.title" />
        <van-cell title="主讲人" :value="currentData.people" />
        <van-cell title="活动地址" value="活动地址" />
        <van-cell title="活动日期" value="活动日期" />

        <div style="width:100%; height: 7px; background: #f6f6f6"></div>

        <van-cell title="开始时间" value="开始时间" />
        <van-cell title="结束时间" value="结束时间" />

        <div style="width:100%; height: 7px; background: #f6f6f6"></div>

        <van-cell title="活动类型" value="活动类型" />
        <van-cell title="备注信息" value="备注信息" />

        <div style="width:100%; height: 7px; background: #f6f6f6"></div>

      </van-cell-group>
    </div>
    <van-form>
      <van-field
          v-model="formData.content"
          name="content"
          label="核心知识"
          placeholder="核心知识"
          :rules="[{ required: true, message: '请填写核心知识' }]"
      />
      <div style="margin: 16px auto;width: 200px">
        <van-button round block color="#17d4b5" @click="signFn">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {
        name: 'test',
        data(){
            return{
                content: '',
                showPicker: false,
                showTypePicker: false,
                showDatePicker: false,
                showStartTimePicker: false,
                showEndTimePicker: false,
                getNowTime: '',
                action: 3,
                currentData: {
                    title: '活动',
                    people: '某老师'
                },
                ac_list: [
                    {
                        title: '活动一',
                        people: '李老师'
                    },
                    {
                        title: '活动二',
                        people: '刘老师'
                    }
                ],
                columns: ['王老师', '李老师', '刘老师'],
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                currentTime: '12:00',
                currentEndDate: '12:00',
                formData:{
                    content: '',
                },
                option1: [
                    // 理论授课，小讲课，技能培训，教学查房，病案讨论，专题培训，读书报告，主任查房
                    { text: '教学查房', value: 'Rounds-One' },
                    { text: '病案讨论', value: 'Discussion' },
                    { text: '读书报告', value: 'Report' },
                    { text: '小讲课', value: 'lecture' },
                    { text: '理论授课', value: 'theory_teaching' },
                    { text: '技能培训', value: 'SkillTraining' },
                    { text: '专题培训', value: 'special_training' },
                    { text: '主任查房', value: 'director_round' },
                ],

            }
        },
        computed:{
            name(){
                return this.$route.name
            },
            typeColumns(){
                let arr = []
                this.option1.map(item => {
                    arr.push(item.text)
                })
                return arr;
            }
        },
        methods:{
            // onSubmit(data){
            //     localStorage.setItem('addItem',JSON.stringify(data))
            //     this.$router.go(-1)
            // },

            onConfirm(value) {
                this.formData.peopleValue = value;
                this.showPicker = false;
            },

            onTypeConfirm(value) {
                this.formData.typeValue = value;
                this.showTypePicker = false;
            },

            onDateConfirm(value) {
                this.formData.dateValue = this.getNowFormatDate(value)
                this.showDatePicker = false;
            },
            // 开始时间
            onStartDateConfirm(value){
                this.formData.startValue = value
                this.showStartTimePicker = false;
            },
            // 结束时间
            onEndDateConfirm(value){
                this.formData.endValue = value
                this.showEndTimePicker = false;
            },
            // 时间格式
            getNowFormatDate(date) {
                let seperator1 = "-";
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                return year + seperator1 + month + seperator1 + strDate;
            },
            // 动态更新时间
            nowTime(){
                setInterval(()=>{
                    let nowDate = new Date();
                    let h = nowDate.getHours()<10?"0" + nowDate.getHours():nowDate.getHours();
                    let m = nowDate.getMinutes()<10?"0" + nowDate.getMinutes():nowDate.getMinutes();
                    let s = nowDate.getSeconds()<10?"0" + nowDate.getSeconds():nowDate.getSeconds();
                    this.getNowTime = h+ ":" + m+ ":" + s;
                },1000)
            },
            // 签到
            signFn(){
                Dialog.confirm({
                    title: '温馨提示:',
                    message: '确认提交么?',
                    confirmButtonColor: '#17d4b5'
                }).then(()=>{
                    this.$router.go(-1)
                }).catch(()=>{
                    return false
                })
            },
            // 选择活动
            checkAc(data){
                this.currentData = data;
                this.show = false;
            }
        },
        mounted() {
            // 判断是否登录
            let log = localStorage.getItem('isLogin') || '';
            localStorage.setItem('scan','1')
            if(log !== '1'){
                Dialog.alert({
                    title: '温馨提示',
                    message: '请先登录后再签到!'
                }).then(()=>{
                    this.$router.replace({
                        path: '/login'
                    })
                })
            }
            let currentForm = JSON.parse(localStorage.getItem('currentData') || "{}")
            let len = Object.keys(currentForm).length
            if(len === 0){
                this.action = 3
            }else {
                this.action = currentForm.status
                this.formData = Object.assign(this.formData,currentForm)
            }
            localStorage.setItem('currentData', '')
            this.nowTime();
        }
    }
</script>