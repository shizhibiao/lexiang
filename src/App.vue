<template>
  <div id="app">

    <router-view/>

    <!-- 底部tab -->
    <footer class="foot">
      <li class="f-flex" v-for="(item, index) in footList" :key="index"
       :class="{active: footActive==index}" @click="changeActive(index)">
        {{item.title}}
      </li>
    </footer>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      footActive: 0,
      footList: [
        {title: '乐享', path: '/home'},
        {title: '发现', path: '/discover'},
        {title: '我', path: '/mine'}
      ]
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
      line-height: .49rem;
      font-size: .1rem;
      color: #8E8E93;
    }
    .active{
      color: #EFC81F;
    }
  }
</style>
