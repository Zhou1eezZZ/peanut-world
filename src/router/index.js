import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/Home.vue'], resolve)
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['@/components/Article.vue'], resolve)
    },
    {
      path: '/poetry',
      name: 'poetry',
      component: resolve => require(['@/components/Poetry.vue'], resolve)
    },
    {
      path: '/joke',
      name: 'joke',
      component: resolve => require(['@/components/Joke.vue'], resolve)
    }
  ]
})
