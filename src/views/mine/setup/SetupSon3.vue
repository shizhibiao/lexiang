<template>
    <div class="Privacy">
        <mine-header title="屏蔽设置"></mine-header>
        <mine-content>
           <nav class="nav">
                <li class="item">
                <div class="head-portrait add">
                <i class="icon-lexiangshouyetuijianx iconfont"></i>
                </div>
                <div class="nickname">添加屏蔽用户</div>
            </li>
            <li class="seeme">已屏蔽用户</li>
            <li class="item">
                 <img src="https://i04piccdn.sogoucdn.com/1d86e60977348f56" class="head-portrait"/>
                 <div class="nickname">德莱文</div>
            </li>
             <li class="item">
                 <img src="https://i03piccdn.sogoucdn.com/8ea8dcb356dcd9f9" class="head-portrait"/>
                 <div class="nickname">小鱼人</div>
            </li>
             <li class="item">
                 <img src="https://i04piccdn.sogoucdn.com/1d86e60977348f56" class="head-portrait"/>
                 <div class="nickname">诺克</div>
            </li>
           
        </nav>
        </mine-content>
    </div>
</template>



<style scoped>
     .nav .item{
        background-color: #fff;
        height:.3rem;
        border-top: .02rem solid #efefef;
       
        font-size: .16rem;
        line-height: .3rem;
        color: #000;
        padding: .12rem 0 .12rem .2rem
    }
    .nav .item .nickname{
         margin-left: .12rem;
     
      height: .3rem;
      width: 2.5rem;
      float: left;
      color: #000
    }
     .head-portrait{
       display: block;
      height: .3rem;
      width: .3rem;
      float: left;
      border-radius: .05rem
    }
    .add{
        text-align: center;
        line-height: .3rem;
        background: #ddd;
        border-radius: 50%
    }
    .add .iconfont{
        color: #bcbcbc;
        font-size: .12rem
    }
     .seeme{
        height:.17rem;
        padding: .1rem 0 .1rem .2rem;
        color: #cacaca;
        font-size: .12rem;
        line-height: .17rem;

    }
</style>
