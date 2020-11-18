import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/page'
import {
    Button,Icon, Form, Field, Tabbar, TabbarItem, Toast, NavBar, Swipe, SwipeItem, NoticeBar, Grid, GridItem, Card, Search, Tab, Tabs, Image as VanImage, Tag, Cell, CellGroup, Divider, Collapse, CollapseItem, CountDown, RadioGroup, Radio, Popup, Checkbox, CheckboxGroup, DropdownMenu, DropdownItem, Picker, DatetimePicker, Uploader
} from 'vant';
import 'lib-flexible/flexible.js'

// step1：引入 axios
import Axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs

// step3：使每次请求都会带一个 /api 前缀
Axios.defaults.baseURL = '/api'


Vue.use(Button)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Toast)
Vue.use(NavBar)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Card)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Divider)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(CountDown)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Popup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Picker)
Vue.use(DatetimePicker)
Vue.use(Uploader)

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')
