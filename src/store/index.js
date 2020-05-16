/*
 * @Author: your name
 * @Date: 2020-05-11 14:20:03
 * @LastEditTime: 2020-05-16 16:27:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue\my-vue\src\store\index.js
 */ 
import Vue from 'vue'
// import Vuex from 'vuex'//三方库
//手写
import Vuex from './vuex'
Vue.use(Vuex)//自定义插件 install ()
//存储数据以及提供数据访问接口
export default new Vuex.Store({
  //数据
  state: {
    num:1 
  },
  getters:{
    getMyNum:function(state){
        return state.num
    }
  },
  //同步突变事件
  mutations: {
    syncIncre(state,payload){
      state.num +=payload
    },
    syncMinus(state,payload){
      if(state.num) {
         return state.num -=payload;
         } else { if(state.num < 0) {
            alert("不能为负数！"); 
          } else { 
            alert("必须为数字！");
           } 
           return false; }
      // state.num -=payload
    }
  },
  //异步
  actions: {
    asyncIncre({commit,dispatch}, payload){
        setTimeout(()=>{
         commit("syncIncre",payload) 
        },1000)
      }
  },
  modules: {
  }
})
