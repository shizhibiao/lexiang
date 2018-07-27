<template>
  <div class="mine">
     <div class="head">
       <h1 class="title">{{fans[1]}}</h1>
        <i class="iconfont icon-zuojiantou" @click='backAction()'></i>
     </div>
     <app-content>
       <div class="nicknamebox">
         
          <img :src="fans[0]" class="head-portrait" />
          <div class="nickname-content">
            <p class="nickname">{{fans[1]}}</p>
            <p class="autograph">签名：{{fans[2]}}</p>
          </div>
     </div>
     
     <nav class="lgf">
       <li class="item">
         <span>54</span>
         <p>乐享</p>
       </li>
       <li class="item">
         <span>50</span>
         <p>关注</p>
       </li>
       <li class="item">
         <span>81</span>
         <p>粉丝</p>
       </li>
     </nav>
     <div v-for='(item,index) in dataArr' :key='index' :class='item.path'>{{item.title}}</div>
     
     </app-content>
  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
  data(){
    return {
      dataArr:[
        {title:'他的收藏',path:'collection'},
        {title:'他的闲置',path:'idle'},
        
      ]
    }
  },
  computed:Vuex.mapState({
      fans:'fans'
  }),
  methods:{
     
      
      backAction(){
          this.$router.back()
      }
  },
  components: {
    
  }
}
</script>


<style lang="scss" scoped>
  .nicknamebox{
    width: 100%;
    height: .6rem;
    padding: .2rem 0 .2rem .3rem;
    background: #fff;
    margin-top: .2rem;
    border-bottom: 1px solid #DDD9D9;
    
   
    .nickname-content{
      margin-left: .2rem;
     
      height: .6rem;
      width: 2.5rem;
      float: left;
      .nickname{
        line-height: .3rem;
        font-size: .16rem;
        height: .3rem;
        color: #000;
        i{
          font-size: .14rem
        }
      }
      .autograph{
        line-height: .3rem;
        height: .3rem;
        font-size: .14rem;
        color: #9B9B9B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
     .head-portrait{
       display: block;
      height: .6rem;
      width: .6rem;
      float: left;
      border-radius: .05rem
    }
  }
  .lgf{
    width: 100%;
    height: .37rem;
    padding: .14rem 0;
    background: #fff;
    display: flex;
    justify-content: space-around;
    .item{
      width: .24rem;
      height: .37rem;
     
      p{
        font-size: .12rem;
        color: #333;
        line-height: .2rem;
        text-align: center
      };
      span{
        display: block;
        font-size: .14rem;
        color: #000;
        line-height: .17rem;
        text-align: center
      }
    }
  }
  .collection,.idle,.news,.setup{
    
    margin-top: .2rem;
    height: .45rem;
    width: 100%;
    background: #fff;
    padding-left: .2rem;
    font-size: .16rem;
    line-height: .45rem;
    color: #000
  }
  .head{
      position: relative;
  }
  .iconfont{
      position: absolute;
      top: .1rem;
      left: .2rem;
      font-size: .14rem
  }
</style>
