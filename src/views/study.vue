<template>
    <div>
        <div>
            <van-search
                v-model="value"
                shape="round"
                placeholder="搜索课程或者老师"
            />
        </div>
        <div>
            <van-tabs color="#17d4b5">
                <van-tab v-for="index in 8" :title="'标签 ' + index">
                </van-tab>
            </van-tabs>
        </div>
        <div style="border-left: 4px solid #17d4b5; font-size: 14px; font-weight: bold; margin: 20px 12px; text-align: left; padding-left: 4px">
            全部课程
        </div>
        <div>
            <van-card
                title="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
                <template #num>
                    <div style="flex: 1;width: 100%;">
                        <span style="margin-right: 32vw;">
                            <img style="width: 14px; height: 14px; border-radius: 50%;" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像">
                            XX老师
                        </span> <span>2020-10-19</span>
                    </div>
                </template>

            </van-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "study.vue",
        data () {
            return{
                value: ''
            }
        }
    }
</script>

<style scoped>

</style>