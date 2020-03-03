import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import './styles/reset.scss'
import './styles/transition.scss'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import 'animate.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
    next()
})

router.afterEach(() => {
    window.scrollTo(0, 0)
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
