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
      // 我的头像
      import Personal from '../views/mine/personal/Information.vue'
          //  设置头像
          import Personal1 from '../views/mine/personal/InformationSon1.vue'
          // 设置昵称
          import Personal2 from '../views/mine/personal/InformationSon2.vue'
          //  设置签名
          import Personal3 from '../views/mine/personal/InformationSon3.vue'
          //  设置性别
          import Personal4 from '../views/mine/personal/InformationSon4.vue'
          //  设置地址
          import Personal5 from '../views/mine/personal/InformationSon5.vue'
              //  添加地址
              import Personal6 from '../views/mine/personal/AddressSon.vue'

      // 我的乐享
      import Enjoyment from '../views/mine/enjoyment/Enjoyment.vue'
          // 转发乐享
          import Forward from '../views/mine/enjoyment/Forward.vue'

      // 我的关注
      import Follow from '../views/mine/follow/Follow.vue'
      // 我的粉丝
      import Fans from '../views/mine/fans/Fans.vue'
          // 粉丝或关注个人信息
          import FansSon from '../views/mine/fans/FansSon.vue'


          
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

    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/personal1',
      name: 'personal1',
      component: Personal1
    },
    {
      path: '/personal2',
      name: 'personal2',
      component: Personal2
    },
    {
      path: '/personal3',
      name: 'personal3',
      component: Personal3
    },
    {
      path: '/personal5',
      name: 'personal5',
      component: Personal5
    },
    {
      path: '/personal4',
      name: 'personal4',
      component: Personal4
    },
    {
      path: '/personal6',
      name: 'personal6',
      component: Personal6
    },
    {
      path: '/fans',
      name: 'fans',
      component: Fans
    },
    {
      path: '/fansson',
      name: 'fansson',
      component: FansSon
    },
    {
      path: '/follow',
      name: 'follow',
      component: Follow
    },
    {
      path: '/enjoyment',
      name: 'enjoyment',
      component: Enjoyment
    },
    {
      path: '/forward',
      name: 'forward',
      component: Forward
    },
    {
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
