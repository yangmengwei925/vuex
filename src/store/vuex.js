/*
 * @Author: your name
 * @Date: 2020-05-16 09:23:03
 * @LastEditTime: 2020-05-16 16:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\my-vue\src\store\vuex.js
 */ 
let Vue;
//手写自定义  es6
class Store{
 constructor(options){  
     this.vm =new Vue({
         data:{
             state:options.state
         }
     })
     //getters
     let getters =options.getters;
     this.getters ={}
     Object.keys(getters).forEach(getterName=>{
         Object.defineProperty(this.getters,getterName,{
             get:()=>{
                 return getters[getterName](this.state)
             }
         })
     })
    //  actions异步·
     let actions =options.actions;
     this.actions ={}
     Object.keys(actions).forEach(actionName=>{
       this.actions[actionName] =(payload)=>{
           actions[actionName](this,payload)
       }
    })
    //mutaions
    let mutations = options. mutations
    this. mutations = {}
    Object.keys( mutations).forEach(mutationName=>{
        this.mutations[mutationName] =(payload)=>{
            //调外面方法
             mutations[mutationName](this.state,payload)
        }
    })

 }
 //异步增加
 dispatch( type,payload){
     console.log(this)
     //调用
  this.actions[type](payload)
 }
 //关于this指向问题
//  commit(type,payload){
//     // console.log(this)
//     this.mutations[type](payload)
//  }
  commit=(type,payload)=>{
    // console.log(this)
    this.mutations[type](payload)
 }
    get state(){
        return this.vm.state;
    }
}
// const install =function(){

// }
//需要在所以的组件中添加$store对象
//让所有的组件中可以使用this.$store.commit
const install =(v)=>{
    Vue = v;
    Vue.mixin({
        beforeCreate(){
              //组件名字
         console.log(this.$options.name)
            if(this.$options&&this.$options.store){
                //root根节点
                this.$store= this.$options.store;

            }else{
                //child
                this.$store=this.$parent && this.$parent.$store
            }
        }
      
    })
}

export default {install,Store}