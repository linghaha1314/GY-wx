<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span @click="$router.go(-1)" style="color: #17d4b5">返回</span>
      </template>
    </van-nav-bar>
    <div style="width:100%; background: #f6f6f6;padding: 10px 12px;box-sizing: border-box;">
      <div style="border-left: 3px solid #17d4b5;padding: 0 4px">
        {{formTitle[action_form]}}
      </div>
    </div>
    <van-form @submit="onSubmit" style="padding: 0 12px">
      <template v-if="action_form===0">
        <van-cell-group>
          <van-cell title="登记月份" value="2020-10" />
          <van-cell title="登记人" value="李老师" />
        </van-cell-group>
        <van-field
            name="people"
            readonly
            clickable
            label="带教老师"
            :value="formData.peopleValue"
            placeholder="选择带教老师"
            @click="showPicker = true"
        />
        <van-popup v-model="showPicker" round position="bottom">
          <van-picker
              :columns="columns"
              :show-toolbar="true"
              @cancel="showPicker = false"
              @confirm="onConfirm"
          />
        </van-popup>
        <van-field
            v-model="formData.remake"
            name="remake"
            label="备注信息"
            placeholder="请填写备注信息"
        />
      </template>
      <template v-if="action_form===1">
        <van-field
            v-model="formData.Private"
            type="number"
            required
            label="事假" />
        <van-field
            v-model="formData.Sick"
            type="number"
            required
            label="病假" />
        <van-field
            v-model="formData.absenteeism"
            type="number"
            required
            label="旷工" />
      </template>
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>

      <div style="margin: 16px;" v-if="action_form===0">
        <van-button round block color="#17d4b5" @click="action_form = 1">
          下一步
        </van-button>
      </div>
      <div style="margin: 16px;display: flex;" v-if="action_form===1">
        <van-button style="margin-bottom: 12px;" round block @click="goPre">
          上一步
        </van-button>
        <van-button round block color="#17d4b5" @click="$router.push('/workload-clinical')">
          下一步
        </van-button>
      </div>

<!--   clinical   <div style="margin: 16px;" v-if="action===2">-->
<!--        <van-button round block color="#17d4b5" native-type="submit">-->
<!--          结束活动-->
<!--        </van-button>-->
<!--      </div>-->
    </van-form>
  </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return{
                formData:{
                    title: '',
                    address: '',
                    peopleValue: '',
                    dateValue: '',
                    startValue: '',
                    endValue: '',
                    typeValue: '',
                    content: '',
                    remake: '',
                    uploader: [],
                    Private: 1,
                    Sick: 1,
                    absenteeism: 1,
                },
                formTitle: [
                    '基本信息',
                    '考勤汇总'
                ],
                showPicker: false,
                showTypePicker: false,
                showDatePicker: false,
                showStartTimePicker: false,
                showEndTimePicker: false,

                action: 0,
                action_form: 0,
                columns: ['王老师', '李老师', '刘老师'],
                minDate: new Date(2020, 0, 1),
                maxDate: new Date(2025, 10, 1),
                currentDate: new Date(),
                currentTime: '12:00',
                currentEndDate: '12:00',
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
                let nameArr = [
                    '基本信息填写',
                    '考勤汇总信息'
                ]
                return nameArr[this.action_form]
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
            onSubmit(data){
                localStorage.setItem('addItem',JSON.stringify(data))
                // this.$router.go(-1)
            },

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
            goPre(){
                localStorage.setItem('formAction', '0')
                this.action_form = 0
            }
        },
        mounted() {
            let currentForm = JSON.parse(localStorage.getItem('currentData') || "{}")
            let len = Object.keys(currentForm).length
            if(len === 0){
                this.action = 3
            }else {
                 this.action = currentForm.status
                this.formData = Object.assign(this.formData,currentForm)
            }
            localStorage.setItem('currentData', '')
            this.action_form = parseInt(localStorage.getItem('formAction') || '0');
        }
    }
</script>