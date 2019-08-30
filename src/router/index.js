import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/Home.vue'], resolve)
    },
    {
      path: '/article',
      name: 'article',
      component: resolve => require(['@/components/Article.vue'], resolve)
    },
    {
      path: '/article/:id',
      name: 'articleDetail',
      component: resolve => require(['@/components/ArticleDetail.vue'], resolve)
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
    },
    {
      path: '/color',
      name: 'color',
      component: resolve => require(['@/components/Color.vue'], resolve)
    },
    {
      path: '/music',
      name: 'music',
      component: resolve => require(['@/components/Music.vue'], resolve)
    },
    {
      path: '/lab',
      name: 'lab',
      component: resolve => require(['@/components/Lab.vue'], resolve)
    }
  ]
})
