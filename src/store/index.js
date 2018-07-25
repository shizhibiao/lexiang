import Vue from 'vue'
//引入vuex,插件需要use
import Vuex from 'vuex'
Vue.use(Vuex)

//全局状态（全局数据）
const state = {
  nickName:'昵称就是我的名字',
  autoGraph:"个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名个性签名",
  headPortrait:'http://via.placeholder.com/120x120',
  addressList:[{
    name:'凯',
    address:'深圳市宝安区深圳西部硅谷b座a606'
  }]
}

//操作状态的事件
const actions = {
    changeNickname(context,params){
      this.state.nickName = params
    },
    changeAutograph(context,params){
      this.state.autoGraph = params
    },
    changeHeadportrait(context,params){
      this.state.headPortrait = params
    },
    changeAddresslist(context,params){
      this.state.addressList.push({...params})
    }
}

//创建store实例
const store = new Vuex.Store({
  state,
  actions
})

//向外输出store
export default store;

// console.log(store)