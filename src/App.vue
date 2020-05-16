<!--
 * @Author: your name
 * @Date: 2020-05-11 14:20:03
 * @LastEditTime: 2020-05-16 16:05:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 *{/**num:{{this.$store.state.num}} getters:{{this.$store.getters.getMyNum}} **/} @FilePath: \vue\my-vue\src\App.vue
--> 
<template>
  <div id="app">
  num:{{this.$store.state.num}}
   getters:{{this.$store.getters.getMyNum}}
   <button @click="syncIncre">同步增加</button>
    <button @click="syncMinus">同步减少</button>
    <button @click="asyncIncre">异步增加</button>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    syncIncre(){
      this.$store.commit("syncIncre",1)
    },
   syncMinus(){
      this.$store.commit("syncMinus",1)
    }, 
    asyncIncre(){
       this.$store.dispatch("asyncIncre",2)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
