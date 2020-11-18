<template>
  <div>
    <van-nav-bar :title="name" left-arrow>
      <template #left>
        <span style="color: #17d4b5" @click="$router.back(-1)">返回</span>
      </template>
      <template #title>
        <div style="color: #17d4b5; display: flex; align-items: center;">{{name}}
          <van-count-down :time="time" format="mm:ss"/>
        </div>
      </template>
    </van-nav-bar>
    <div class="p12" style="padding: 15px 12px;font-size: 14px">
      <span>
        {{ thisQuestion.type==='Single'? '单选选择题' : '多项选择题' }}
      </span>
      <span>
        （{{qIndex+1}}/{{questions.length}}）
      </span>
    </div>
    <!--间隔-->
    <div style="width:100%; height: 7px; background: #f6f6f6"></div>
    <div style="padding: 13px 26px;">
      <div style="margin-bottom: 20px;">
        {{qIndex+1+'.'+(thisQuestion.title || '一级护理适用于（ ）？')}}
      </div>
      <div v-if="thisQuestion.type === 'Single'">
        <van-radio-group v-model="thisQuestion.answer" @change="checkChange(thisQuestion)">
          <van-radio :name="option.content" checked-color="#17d4b5"
            v-for="option in thisQuestion.options" :key="option.content"
          >{{option.content}}</van-radio>
        </van-radio-group>
      </div>
      <div v-if="thisQuestion.type !== 'Single'">
        <van-checkbox-group v-model="thisQuestion.answer" @change="checkChange(thisQuestion)">
          <van-checkbox :name="option.content" checked-color="#17d4b5" v-for="option in thisQuestion.options" :key="option.content">{{option.content}}</van-checkbox>
        </van-checkbox-group>
      </div>
    </div>


    <div style="position: fixed;left: 0;bottom: 0;display: flex;width: 100%">
      <van-button style="flex: 1" type="default" @click="show=true">
        <van-icon name="orders-o"/>
        答题卡
      </van-button>
      <van-button style="width: 110px" type="default" @click="upQuestion" :disabled="qIndex === 0">上一题</van-button>
      <van-button style="width: 110px" type="default" :disabled="qIndex === questions.length-1"
                  @click="nextQuestion">下一题</van-button>
    </div>
    <van-popup
        v-model="show"
        round
        position="bottom"
        style="height: 70%"
    >
      <div style="padding: 34px 15px;">
        <div style="display: flex;justify-content: space-between; align-items: center;">
          <div style="display: flex;align-items: center;">
            <van-icon color="#17d4b5" name="orders-o" size="16px"/>
            答题卡
          </div>
          <div class="cc">
            <div class="cc">
              <div style="background:#ccc;width: 14px;height: 14px;margin-right: 12px;"></div>
              未答
            </div>
            <div class="cc">
              <div style="background:#17d4b5;width: 14px;height: 14px;margin: 0 12px;"></div>
              已答
            </div>
          </div>
        </div>
        <van-divider/>

        <div style="display: flex; flex-wrap: wrap; height: 200px; overflow: auto;">
          <div class="checkItem" :class="item.done?'done':''" v-for="(item, index) in questions" :key="index"
          @click="checkQuestion(item,index)">
            <div v-if="qIndex === index" class="ac">
              {{index+1}}
            </div>
            <div v-if="qIndex !== index">
              {{index+1}}
            </div>
          </div>
        </div>
        <div style="margin: 12px 18px; display: flex;justify-content: space-between;">
          <van-button style="width: 120px; height: 34px;font-size: 16px" size="small" @click="show=false">取消</van-button>
          <van-button style="width: 120px; height: 34px;font-size: 16px" color="#17d4b5" type="primary" size="small" @click="submitPaper">提交</van-button>
        </div>
      </div>
    </van-popup>

    <div v-if="isDone" class="p12" style="background:#efefef;
min-height: 100px;padding-top: 12px">
      正确答案:
    </div>
  </div>
</template>
<script>
    import { Dialog } from 'vant';
    export default {
        name: 'test',
        data() {
            return {
                activeNames: ['1'],
                time: 2 * 60 * 60 * 1000,
                radio: '',
                show: false,
                result: [],
                className: '',
                qIndex: 0,
                isDone: false,
                questions: [
                    {
                        title: '单选题1',
                        options:[
                            {
                                content: '选项1',
                            },
                            {
                                content: '选项2',
                            },
                            {
                                content: '选项3',
                            },
                            {
                                content: '选项4',
                            }
                        ],
                        done: true,
                        type: 'Single'
                    },
                    {
                        title: '多选题1',
                        options:[
                            {
                                content: '选项1',
                            },
                            {
                                content: '选项2',
                            },
                            {
                                content: '选项3',
                            },
                            {
                                content: '选项4',
                            }
                        ],
                        type: 'Multiple'
                    },
                    {
                        title: '单选题2',
                        options:[
                            {
                                content: '选项1',
                            },
                            {
                                content: '选项2',
                            },
                            {
                                content: '选项3',
                            },
                            {
                                content: '选项4',
                            }
                        ],
                        type: 'Single'
                    }
                ]
            }
        },
        computed: {
            name() {
                return this.$route.name
            },
            thisQuestion(){
                return this.questions[this.qIndex]
            }
        },
        mounted() {
            this.current = this.questions[0];
        },
        methods: {
            // 答题卡点击题目
            checkQuestion(data,index){
                this.current = data
                this.current.index = index+1
                this.qIndex = index;
                this.show = false
            },
            // 上一题
            upQuestion(){
                if(this.qIndex>0){
                    this.qIndex--
                    this.current = this.questions[this.qIndex]
                }
            },
            // 下一题点击
            nextQuestion(){
                if(this.qIndex<this.questions.length-1){
                    this.qIndex++
                    this.current = this.questions[this.qIndex]
                }
            },
            // 提交试卷
            submitPaper(){
                Dialog.confirm({
                    title: '温馨提示:',
                    message: '确认提交试卷么??',
                    confirmButtonColor: '#17d4b5'
                }).then(()=>{
                    this.$router.replace({
                        path: '/test-submit'
                    })
                }).catch(()=>{
                    return false
                })
            },
            // 做题时切换状态
            checkChange(data){
                if(data.answer){
                    data.done = data.answer.length!==0
                }else {
                    data.done = false
                }
            }
        }
    }
</script>
<style lang="less">
  .p12 {
    padding: 0 12px;
  }

  .van-radio {
    margin-bottom: 12px;
  }

  .van-checkbox{
    margin-bottom: 12px;
  }

  .checkItem {
    font-size: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    text-align: center;
    line-height: 36px;
    margin: 4px;
  }
  .done{
    background: #ccc;
  }
  .ac{
    background: #17d4b5;
    color: #fff;
    font-size: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    text-align: center;
    line-height: 36px;
  }
</style>