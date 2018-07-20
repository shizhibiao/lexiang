<template>
<div>
  <div class="head">
    <h1 class="title">乐享</h1>
    
  </div>
  <app-content>
    <div class="nav">
      <router-link to='/home/recommend'>推荐</router-link>
      <router-link to='/home/attention'>关注</router-link>
      <router-link to='/home/dynamic'>动态</router-link>
      <router-link to='/home/article'>文章</router-link>
      <router-link to='/home/amusing'>有趣</router-link>
      <router-link to='/home/unused'>闲置</router-link>
    </div>
    <router-view></router-view>
  </app-content>
</div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>
<style scoped>
  .nav{
    height: .59rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #efefef;
  }
  .nav a{
    color: #A6A2A1;
    font-size: .16rem;
    position: relative;
  }
  .nav a.router-link-active{
    color: #1A1A1A;
  }
  .nav a.router-link-active::after{
    content: '';
    display: inline-block;
    height: .02rem;
    width: 90%;
    position: absolute;
    bottom: -.06rem;
    left: 2px;
    background: #EDC71B;
    border-radius: 2px;
  }
</style>

