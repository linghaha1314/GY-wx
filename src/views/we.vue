<template>
    <div>
        <div style="display: flex;justify-content: space-between; padding: 20px">
            <div style="width: 130px;display: flex; align-items: center; justify-content: space-between;">
                <van-image
                    round
                    width="54px"
                    height="54px"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <div>
                    <div style="font-size: 14px;margin-bottom: 6px">这是名字</div>
                    <div><van-tag color="#17d4b5" size="medium">部门管理员</van-tag></div>
                </div>
            </div>
            <div>
                <van-icon name="setting-o" size="20"/>
            </div>
        </div>

        <!--间隔-->
<!--        <div style="width:100%; height: 7px; background: #f6f6f6"></div>-->

<!--        <div>-->
<!--            <div style="display: flex; justify-content: space-between;align-items: center; padding: 12px 20px">-->
<!--                <h3>-->
<!--                   工具箱-->
<!--                </h3>-->
<!--                <div style="color: #ccc; font-size: 10px">-->
<!--                    查看全部工具-->
<!--                    <van-icon name="arrow" />-->
<!--                </div>-->
<!--            </div>-->
<!--            <van-grid :border="false">-->
<!--                <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字"/>-->
<!--            </van-grid>-->
<!--        </div>-->

        <!--间隔-->
<!--        <div style="width:100%; height: 7px; background: #f6f6f6"></div>-->

        <div>
            <van-cell title="修改密码" icon="edit" is-link />
<!--            <van-cell title="切换身份" icon="friends-o" is-link />-->
            <van-cell title="关于我们" icon="warning-o" is-link />
        </div>
    </div>
</template>

<script>
    export default {
        name: "we.vue"
    }
</script>

<style scoped>

</style>