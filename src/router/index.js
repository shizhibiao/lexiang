import Vue from 'vue'
//引入路由
import Router from 'vue-router'
Vue.use(Router)


//主页
import Home from '../views/home/Home.vue'
//推荐
import Recommend from '@/views/home/Recommend.vue'
//关注
import Attention from '@/views/home/Attention.vue'
// 动态
import Dynamic from '@/views/home/Dynamic.vue'
// 文章
import Article from '@/views/home/Article.vue'
// 有趣
import Amusing from '@/views/home/Amusing.vue'
// 闲置
import Unused from '@/views/home/Unused.vue'



//发现
import Discover from '../views/discover/Discover.vue'
import Native from '../views/discover/Native.vue'
// 我
import Mine from '../views/mine/Mine.vue'


//向外输出路由
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: { path: '/home/recommend' },
      children: [
        {
          path: 'recommend',
          name: 'recommend',
          component: Recommend
        },{
          path: 'attention',
          name: 'attention',
          component: Attention
        },{
          path: 'dynamic',
          name: 'dynamic',
          component: Dynamic
        },{
          path: 'article',
          name: 'article',
          component: Article
        },{
          path: 'amusing',
          name: 'amusing',
          component: Amusing
        },{
          path: 'unused',
          name: 'unused',
          component: Unused
        }
      ]
    },{
      path: '/discover',
      name: 'discover',
      component: Discover,
      children:[
            {
              name:'native',
              path:'native',
              component:Native
            }
      ]

    },{
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    //重定向到首页面
    {
        path: '**',
        redirect: '/home/recommend'
    }
  ]
})
