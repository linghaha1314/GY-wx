<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span @click="$router.go(-1)" style="color: #17d4b5">返回</span>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>
      <van-field
          readonly
          clickable
          name="date"
          label="实际请假开始时间"
          :value="formData.dateValue"
          placeholder="选择开始时间"
          @click="showDatePicker = true"
      />
      <van-field
          readonly
          clickable
          name="dateEnd"
          label="实际请假结束时间"
          :value="formData.dateEnd"
          placeholder="选择开始时间"
          @click="showDatePicker = true"
      />

      <van-field name="isLeave" label="是否已休假">
        <template #input>
          <van-radio-group v-model="formData.isLeave" direction="horizontal">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>

      <van-popup v-model="showDatePicker" round position="bottom">
        <van-datetime-picker
            v-model="formData.currentDate"
            type="date"
            title="选择年月日"
            @cancel="showDatePicker = false"
            @confirm="onDateConfirm"
            :min-date="minDate"
            :max-date="maxDate"
        />
      </van-popup>
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>

      <van-cell-group>
        <van-cell title="请假类型" value="事件" />
        <van-cell title="请假天数" value="3天" />
        <van-cell title="申请详情" value="内容" />
        <div style="display: flex;justify-content: space-between;width: 100%;padding: 0 12px 10px;box-sizing: border-box;font-size: 12px">
          <div style="color: #B0B0B0">
            申请时间:
          </div>
          <div style="color: #3E3E3E">
            2020-10-08 15:34:41
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 100%;padding: 0 12px 10px;box-sizing: border-box;font-size: 12px">
          <div style="color: #B0B0B0">
            带教老师:
          </div>
          <div style="color: #3E3E3E">
            李老师
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 100%;padding: 0 12px 10px;box-sizing: border-box;font-size: 12px">
          <div style="color: #B0B0B0">
            请假事由:
          </div>
          <div style="color: #3E3E3E">
            事假
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 100%;padding: 0 12px 10px;box-sizing: border-box;font-size: 12px">
          <div style="color: #B0B0B0">
            开始时间:
          </div>
          <div style="color: #3E3E3E">
            2020-10-08 15:34:41
          </div>
        </div>
        <div style="display: flex;justify-content: space-between;width: 100%;padding: 0 12px 10px;box-sizing: border-box;font-size: 12px">
          <div style="color: #B0B0B0">
            结束时间:
          </div>
          <div style="color: #3E3E3E">
            2020-10-08 15:34:41
          </div>
        </div>
      </van-cell-group>

      <div style="margin: 16px;">
        <van-button round block color="#17d4b5" native-type="submit">
          提交申请
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
    export default {
        name: 'test',
        data(){
            return{
                formData:{
                    address: '',
                    peopleValue: '',
                    dateValue: '',
                    startValue: '',
                    endValue: '',
                    typeValue: '',
                    content: '',
                    remake: '',
                    uploader: [],
                    number: 1,
                    dateEnd: '',
                    isLeave: '1'
                },

                showPicker: false,
                showTypePicker: false,
                showDatePicker: false,
                showStartTimePicker: false,
                showEndTimePicker: false,

                action: 3,
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
            onSubmit(data){
                localStorage.setItem('addItem',JSON.stringify(data))
                this.$router.go(-1)
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
        }
    }
</script>