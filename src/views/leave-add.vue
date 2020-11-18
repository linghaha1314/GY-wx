<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span @click="$router.go(-1)" style="color: #17d4b5">返回</span>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">

      <van-field
          readonly
          clickable
          required
          name="type"
          label="请假类型"
          :value="formData.typeValue"
          placeholder="选择请假类型"
          @click="showTypePicker = true"
      />
      <van-popup v-model="showTypePicker" round position="bottom">
        <van-picker
            :columns="typeColumns"
            :show-toolbar="true"
            @cancel="showTypePicker = false"
            @confirm="onTypeConfirm"
        />
      </van-popup>

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
          v-model="formData.address"
          name="address"
          label="去向"
          placeholder="填写去向"
          :rules="[{ required: true, message: '请填写去向' }]"
      />


      <div style="width:100%; height: 7px; background: #f6f6f6"></div>
      <van-field
          readonly
          clickable
          name="date"
          label="开始时间"
          :value="formData.dateValue"
          placeholder="选择开始时间"
          @click="showDatePicker = true"
      />
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

      <van-field
          v-model="formData.number"
          type="number"
          label="请假时长" />
      <van-field
          v-model="formData.endValue"
          name="endValue"
          label="结束时间"
          disabled
      />
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>


<!--      <van-field-->
<!--          v-model="formData.content"-->
<!--          name="content"-->
<!--          label="活动内容"-->
<!--          placeholder="请填写活动内容"-->
<!--          :rules="[{ required: true, message: '请填写活动内容' }]"-->
<!--      />-->
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>
      <van-field
          v-model="formData.remake"
          name="remake"
          label="理由"
          placeholder="请填写理由"
      />
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>
      <van-field name="uploader" label="附件上传">
        <template #input>
          <van-uploader v-model="formData.uploader" />
        </template>
      </van-field>
      <div style="margin: 16px;"  v-if="action===3">
        <van-button round block color="#17d4b5" native-type="submit">
          提交申请
        </van-button>
      </div>
      <div style="margin: 16px;" v-if="action===1">
        <van-button style="margin-bottom: 12px;" round block color="#17d4b5" native-type="submit">
          发布
        </van-button>
        <van-button round block type="danger">
          删除
        </van-button>
      </div>
      <div style="margin: 16px;" v-if="action===2">
        <van-button round block color="#17d4b5" native-type="submit">
          结束活动
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
                    number: 1
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