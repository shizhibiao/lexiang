<template>
<div>
    <div class="about">
        <div class="head">
          <h1 class="title">发现</h1>
        </div>
        <app-content>
          <div  class="discover-search">
              <input type="text" class="text">
              <input type="submit" value="" class="submit">
              <i class="iconfont icon-magnifier"></i>
          </div>
          <ul class="discover-title">
            <li class="discover-title-tabs" @click="goNativeAction()"><div class="back-color"><i class="iconfont icon-icon-test"></i></div><span class="font">本地</span></li>
            <li class="discover-title-tabs"><img src="../../../public/images/Group 5.png" class="makeup"><span class="font">美妆</span></li>
            <li class="discover-title-tabs"><img src="../../../public/images/Group 2.png" class="foods"><span class="font">美食</span></li>
            <li class="discover-title-tabs"><img src="../../../public/images/Group 3.png" class="find"><span class="font">找人</span></li>
          </ul>

          <ul class="discover-dynamic">

             <li class="discover-info">
                  <div class="discover-person">
                      <div class="header-img">
                        <img src="http://via.placeholder.com/120x120" class="person-img">
                      </div>
                      <div class="person-content">
                          <p class="person-name">乱撞的小母猪</p>
                          <span class="person-date">6-28&nbsp;</span><em class="person-source">来自360安全浏览器</em>
                          <p class="content-words">这里的人个个都是人才，说话又好听，我超喜欢这里的。小心你楼下的电瓶车</p>
                      </div>
                      
                  </div>
                  <div class="discover-snap">
                      <li class="snap-left"><i class="iconfont icon-31zhuanfa"></i><span class="transNum">999</span></li>
                      <li class="snap-right"><i class="iconfont icon-dianzan"></i><span class="snapNum">999</span></li>
                  </div>
               
             </li>

             <li class="discover-info">
                  <div class="discover-person">
                      <div class="header-img">
                        <img src="http://via.placeholder.com/120x120" class="person-img">
                      </div>
                      <div class="person-content">
                          <p class="person-name">乱撞的小母猪</p>
                          <span class="person-date">6-28&nbsp;</span><em class="person-source">来自360安全浏览器</em>
                          <p class="content-words">这里的人个个都是人才，说话又好听，我超喜欢这里的。小心你楼下的电瓶车</p>
                      </div>
                      
                  </div>
                  <div class="discover-snap">
                      <li class="snap-left"><i class="iconfont icon-31zhuanfa"></i><span class="transNum">999</span></li>
                      <li class="snap-right"><i class="iconfont icon-dianzan"></i><span class="snapNum">999</span></li>
                  </div>
               
             </li>

             <li class="discover-info">
                  <div class="discover-person">
                      <div class="header-img">
                        <img src="http://via.placeholder.com/120x120" class="person-img">
                      </div>
                      <div class="person-content">
                          <p class="person-name">乱撞的小母猪</p>
                          <span class="person-date">6-28&nbsp;</span><em class="person-source">来自360安全浏览器</em>
                          <p class="content-words">这里的人个个都是人才，说话又好听，我超喜欢这里的。小心你楼下的电瓶车</p>
                      </div>
                      
                  </div>
                  <div class="discover-snap">
                      <li class="snap-left"><i class="iconfont icon-31zhuanfa"></i><span class="transNum">999</span></li>
                      <li class="snap-right"><i class="iconfont icon-dianzan"></i><span class="snapNum">999</span></li>
                  </div>
               
             </li>
          </ul>
        </app-content>
    </div>

    <router-view />

  </div>
</template>

<script>
export default {
   data(){

     return{

     }
   },
   methods:{
     goNativeAction(){
        
        this.$router.push({
             name:'native'
        })
     }
   }
}
</script>


<style scoped>
  .discover-search{
    width:3.55rem;
    height:.36rem;
    margin: .15rem .1rem;
    display:flex;
  }
  .text{
    width:3.23rem;
    height:.36rem;
    border:none;
    outline:none;
    border-radius:.04rem 0 0 .04rem;
  }
  .submit{
    width:.32rem;
    height:.36rem;
    border:none;
    outline:none;
    background:#fff;
    border-radius:0 .04rem .04rem 0
    
  }
  .discover-search .iconfont{
    position:absolute;
    left:3.39rem;
    top:0.065rem;
  }
  .discover-title{
    width:100%;
    height:1.08rem;
    display:flex;
    justify-content: space-around;
    background:#fff;
   
  
  }
  .back-color{
    width:.4rem;
    height:.4rem;
    background:#37C6C0;
    border-radius:50%;
    line-height:.4rem;
    text-align:center;
    
  }
  .discover-title .back-color .iconfont{
    font-size:.3rem;
    color:#fff;
    
  }
  .makeup,.foods,.find{
    width:.4rem;
    height:.4rem;
    
  }
  .font{
    font-family:'PingFangSC-Regular';
    font-size:.14rem;
    color:#333;
    margin-top:.1rem;
  }
  .discover-title-tabs{
     display:flex;
     flex-direction: column;
     text-align: center;
     padding-top:.19rem;
    
  }

  .discover-dynamic{
  
  }
   .discover-info{
     width:100%;
     height:1.87rem;
     background:#fff;
     margin:.1rem 0;
     overflow:hidden

     

  }
  .discover-person{
     margin:.14rem 0 0 .2rem;
 
     display:flex;
     border-bottom: 1px solid #DDD9D9;
  }
  .person-content{
     flex:1;
     margin-left:.1rem;
  }
  .person-img{
     width:.6rem;
     height:.6rem;
  }
  .person-name{
    font-size:.16rem;
    color:#000;
    font-weight:bold;
    line-height:.22rem;
    margin:.07rem 0
  }
  .person-date,.person-source{
    font-size: .12rem;
    color: #9B9B9B;
    line-height:.17rem;
    
  }
  .person-source{

  }
  .content-words{
    margin-top:.2rem;
    width:2.66rem;
    font-size: .14rem;
    color: #4A4A4A;
    line-height:.2rem;
    margin-bottom:.15rem;
  }
  .discover-snap{
    display:flex;
    justify-content: space-between
  }
  .snap-left{
    line-height:.42rem;
    margin-left:.2rem;
  }
  .snap-right{
     line-height:.42rem;
    margin-right:.2rem;
  }
  .discover-snap .snap-left .iconfont{
     font-size:.18rem;
     color: #9B9B9B;
  }
  .discover-snap .snap-left .transNum{
    font-size: .14rem;
    color: #A6A2A1;
    text-align: center;
    line-height:.42rem;
    padding-left:.05rem
  }
  .discover-snap .snap-right .iconfont{
      font-size:.18rem;
      color: #EDC71B;
      padding-right:.03rem;
  }
  .discover-snap .snap-right .snapNum{
    font-size: .14rem;
    color: #A6A2A1;   
   }
</style>
