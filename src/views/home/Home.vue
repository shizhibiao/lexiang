<template>
<div class="page">
  <div class="head">
    <h1 class="title">乐享</h1>
    <i class="iconfont icon-lexiangshouyetuijianx"></i>
  </div>
  <div class="nav">
    <li class="nav-item" v-for="(item, index) in navList" 
      :key="index" :class="{active: selectIndex == index}"
      @click="changeActiveNav(index)" 
    >
      {{item}}
    </li>
  </div>
  <div class="swiper-container hearContent" ref="content">
    <div class="swiper-wrapper">
        <content-item class="swiper-slide"
           v-for="(item, index) in navList" :key="index"
           > 
        	{{item}}
        </content-item>
    </div>
	</div>
</div>
</template>
<script>
import contentItem from '../../common/homeIScroll.vue'
export default {
  components: {
    contentItem
  },
  data(){
    return {
      navList: ['推荐', '关注', '动态', '文章', '有趣', '闲置'],
      selectIndex: 0
    }
  },
  methods: {
    changeActiveNav(index){
      //点击切换页面
      this.newSwiper.slideTo(index, 0);
      //nav头部切换
      this.selectIndex = index;
    }
  },
  mounted(){
    //创建轮播视图
    this.newSwiper = new Swiper(this.$refs.content, {
      onSlideChangeEnd: (swiper)=>{
        //翻页成功设置头部选中
        this.selectIndex = swiper.activeIndex;
      }
    })
  }
}
</script>
<style scoped>
  .page{
    position: absolute;
    left: 0;;
    top: 0;
    bottom: .50rem;
    width: 100%;
    padding-top: 1.03rem;
  }
  .nav{
    position: absolute;
    top: .44rem;
    left: 0;
    height: .59rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #efefef;
  }
  .nav .nav-item{
    color: #A6A2A1;
    font-size: .16rem;
    position: relative;
  }
  .page .nav .nav-item.active{
    color: #EFC81F;
  }
  .hearContent{
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .head .icon-lexiangshouyetuijianx{
    position: absolute;
    right: .2rem;
    top: .14rem;
    color: #9B9B9B;
    font-size: .18rem;
  }
</style>

