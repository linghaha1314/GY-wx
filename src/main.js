import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button,Icon, Form, Field, Tabbar, TabbarItem, Toast, NavBar, Swipe, SwipeItem, NoticeBar, Grid, GridItem, Card, Search, Tab, Tabs, Image as VanImage, Tag, Cell, CellGroup, Divider
} from 'vant';
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

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
Vue.use(Tag)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Divider)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
