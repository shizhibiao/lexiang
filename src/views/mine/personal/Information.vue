<template>
    <div class="personal">
        <mine-header title="个人信息"  mine='返回'></mine-header>
        <mine-content>
            <nav class="information-list">
                <router-link class="item-head" to='/personal1'><span>头像</span> <img src="http://via.placeholder.com/90x90" class="head-portrait"/><i class="iconfont icon-zuojiantou"></i></router-link>
                <router-link class="item" to='/personal2'>昵称<i class="iconfont icon-zuojiantou"></i></router-link>
                <router-link class="item" to='/personal3'>签名<i class="iconfont icon-zuojiantou"></i></router-link>
                <router-link class="item" to='/personal4'>性别<i class="iconfont icon-zuojiantou"></i></router-link>
                <router-link class="item" to='/personal5'>我的地址<i class="iconfont icon-zuojiantou"></i></router-link>
            </nav>
        </mine-content>
    </div>
</template>


<style scoped>

    .information-list{
        margin-top: .15rem;
      
        width: 100%
    }

    .information-list .item{
         display: block;    
        height: .45rem;
        line-height: .45rem;
        background: #fff;
        padding-left: .2rem;
        padding-right: .2rem;
        font-size: .16rem;
        
        color: #000;
        border-bottom: 1px solid #DDD9D9;
        border-top: 1px solid #DDD9D9;

    }
    .information-list .item-head{
        display: block;
        height: .78rem;
        line-height: .78rem;
         background: #fff;
        padding-left: .2rem;
        padding-right: .2rem;
        font-size: .16rem;
        
        color: #000;
        border-bottom: 1px solid #DDD9D9;
        border-top: 1px solid #DDD9D9;
    }
    .item-head span{
        margin: 0;
        display: inline-block;
        height: .78rem;
        line-height: .78rem;
        float: left;
    }
   
    .iconfont{
        float: right;
        font-size: .14rem;
        transform: rotate(180deg);
        color:#9B9B9B;
    }
     .item-head .head-portrait{
       padding-top: .17rem;
       margin-left: 2rem;
       height: .45rem;
       width: .45rem;
       float: left;
    }
</style>
