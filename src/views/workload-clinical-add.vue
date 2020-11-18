<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span @click="$router.go(-1)" style="color: #17d4b5">返回</span>
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
          v-model="formData.number"
          name="number"
          label="住院号"
          placeholder="请填写住院号"
          :rules="[{ required: true, message: '请填写住院号' }]"
      />
      <van-field
          v-model="formData.name"
          name="name"
          label="病人姓名"
          placeholder="请填写病人姓名"
          :rules="[{ required: true, message: '请填写病人姓名' }]"
      />

      <van-field
          v-model="formData.bedId"
          type="number"
          label="床位号" />

      <van-field
          name="people"
          readonly
          clickable
          label="诊断"
          :value="formData.peopleValue"
          placeholder="选择诊断"
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
          readonly
          clickable
          name="date"
          label="入院日期"
          :value="formData.dateValue"
          placeholder="选择入院日期"
          @click="showDatePicker = true"
      />
      <van-popup v-model="showDatePicker" round position="bottom">
        <van-datetime-picker
            v-model="formData.currentDate"
            type="date"
            title="入院日期"
            @cancel="showDatePicker = false"
            @confirm="onDateConfirm"
            :min-date="minDate"
            :max-date="maxDate"
        />
      </van-popup>
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>
      <van-field
          readonly
          clickable
          name="type"
          label="科室"
          :value="formData.typeValue"
          placeholder="选择科室"
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
          readonly
          clickable
          name="type"
          label="病种"
          :value="formData.typeValue"
          placeholder="选择病种"
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
          readonly
          clickable
          name="type"
          label="工作内容"
          :value="formData.typeValue"
          placeholder="选择工作内容"
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
      <div style="width:100%; height: 7px; background: #f6f6f6"></div>


      <div style="margin: 16px;"  v-if="action===3">
        <van-button round block color="#17d4b5" native-type="submit">
          提交
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
                    number: '',
                    name: '',
                    address: '',
                    bedId: 1,
                    peopleValue: '',
                    dateValue: '',
                    startValue: '',
                    endValue: '',
                    typeValue: '',
                    content: '',
                    remake: '',
                    uploader: []
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