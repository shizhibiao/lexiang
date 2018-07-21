<template>
    <div class="accountmanagement">
        <mine-header title="账号管理"></mine-header>
        <nav class="nav">
            <li class="item">
                 <img src="http://via.placeholder.com/120x120" class="head-portrait"/>
                 <div class="nickname">昵称就是我的名字</div>
            </li>
            <li class="item">
                <div class="head-portrait add">
                <i class="icon-lexiangshouyetuijianx iconfont"></i>
                </div>
                <div class="nickname">添加账号</div>
            </li>
             <li class="exit-item">
                <div class="exit">退出当前账号</div>
            </li>
        </nav>
    </div>
    
</template>


<style scoped>
    .nav{
        position: absolute;
        top: .44rem;
        margin:  .2rem 0;
        width: 100%
    }
    .nav .item{
        background-color: #fff;
        height:.46rem;
        border-top: .02rem solid #efefef;
         padding-left: .2rem;
        font-size: .16rem;
        line-height: .46rem;
        color: #000;
        padding: .12rem 0 .12rem .2rem
    }
    .nav .item .nickname{
         margin-left: .12rem;
     
      height: .46rem;
      width: 2.5rem;
      float: left;
      color: #000
    }
    .accountmanagement{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #efefef;
        z-index: 1; 
    }
     .head-portrait{
       display: block;
      height: .46rem;
      width: .46rem;
      float: left;
      border-radius: .05rem
    }
    .add{
        text-align: center;
        line-height: .46rem;
        background: #ddd
    }
    .add .iconfont{
        color: #bcbcbc
    }
    .exit-item{
        background-color: #fff;
        height:.46rem;
        border-top: .02rem solid #efefef;
        margin-top: .2rem;
       
        font-size: .16rem;
        line-height: .46rem;
        color: #000;
      
    }
      .exit-item .exit{
      
        color: #F70808;
        font-size: .16rem;
        margin: 0;
        text-align: center;
        font-weight: bold
    }
</style>
