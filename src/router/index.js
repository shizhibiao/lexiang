import Vue from 'vue'
//引入路由
import Router from 'vue-router'
Vue.use(Router)


//主页
import Home from '../views/home/Home.vue'

//发现
import Discover from '../views/discover/Discover.vue'
import Native from '../views/discover/Native.vue'
// 我
import Mine from '../views/mine/Mine.vue'
    //  我的收藏
    import Collection from '../views/mine/collection/Collection.vue'
    // 我的消息
    import News from '../views/mine/news/News.vue'
    // 我的闲置
    import Idle from '../views/mine/idle/Idle.vue'
        // 闲置里的发布
          import IdleSon1 from '../views/mine/idle/IdleSon1.vue'
        // 闲置里的买到
          import IdleSon2 from '../views/mine/idle/IdleSon2.vue'
        // 闲置里的收藏
          import IdleSon3 from '../views/mine/idle/IdleSon3.vue'
        // 闲置里的卖出
          import IdleSon4 from '../views/mine/idle/IdleSon4.vue'

    // 我的设置
    import Setup from '../views/mine/setup/Setup.vue'
        // 设置里的账号管理
         import SetupSon1 from '../views/mine/setup/SetupSon1.vue'
        // 设置里的隐私设置
         import SetupSon2 from '../views/mine/setup/SetupSon2.vue'
        // 屏蔽设置
        import SetupSon3 from '../views/mine/setup/SetupSon3.vue'


//向外输出路由
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
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
    {
      path:'/collection',
      name:'collection',
      component:Collection
    },
    {
      path:'/news',
      name:'news',
      component:News
    },
    {
      path:'/idle',
      name:'idle',
      component:Idle
    },
    {
      path:'/release',
      name:'release',
      component:IdleSon1
    },
    {
      path:'/buy',
      name:'buy',
      component:IdleSon2
    },
    {
      path:'/collectors',
      name:'collectors',
      component:IdleSon3
    },
    {
      path:'/sellout',
      name:'sellout',
      component:IdleSon4
    },
    {
      path:'/setup',
      name:'setup',
      component:Setup
     
    },
    
      {
        path:'/setupson1',
        name:'setupson1',
        component:SetupSon1
      }
    ,
    {
      path:'/setupson2',
      name:'setupson2',
      component:SetupSon2
    }
  ,
  {
    path:'/setupson3',
    name:'setupson3',
    component:SetupSon3
  }
,
    //重定向到首页面
    {
        path: '**',
        redirect: '/home'
    }
  ]
})
