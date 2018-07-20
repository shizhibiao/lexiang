import Vue from 'vue'
//引入vuex,插件需要use
import Vuex from 'vuex'
Vue.use(Vuex)

//全局状态（全局数据）
const state = {
  
}

//操作状态的事件
const actions = {
 
}

//创建store实例
const store = new Vuex.Store({
  state,
  actions
})

//向外输出store
export default store;

// console.log(store)