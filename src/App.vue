<template>
  <div id="app">

    <router-view/>

    <!-- 底部tab -->
    <footer class="foot">
      <router-link to="/home" class="f-flex" @click="changeActive()">
        <i class="iconfont icon-yuzhouxingqiu-21"></i>
        乐享
      </router-link>
      <router-link to="/discover" class="f-flex" @click="changeActive()">
        <i class="iconfont icon-find"></i>
        发现
      </router-link>
      <router-link to="/mine" class="f-flex" @click="changeActive()">
        <i class="iconfont icon-wo"></i>
        我
      </router-link>
    </footer>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      footActive: 0
    }
  },
  methods: {
    changeActive(index){
      //设置选中状态
      this.footActive = index;
      // 进入选中页面
      this.$router.push(this.footList[index].path)
    }
  }
}
</script>

<style lang='scss' scpoed>
  .foot{
    width: 100%;
    height: .49rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid #8E8E93;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.30);
    background: #fff;
    .f-flex{
      flex: 1;
      text-align: center;
      font-size: .12rem;
      color: #8E8E93;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .router-link-active{
      color: #EFC81F;
    }
  }
</style>
