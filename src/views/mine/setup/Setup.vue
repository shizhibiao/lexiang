<template>
    <div class="setup">
        <mine-header title="设置"  mine='我'></mine-header>
        <nav class="setbox">
            <router-link class="item" to="/setupson1">账号管理</router-link>
            <router-link class="item" to="/setupson2">隐私设置</router-link>
            <router-link class="item nomargin" to="/setupson3">屏蔽设置</router-link>
            <li class="item">
                <div class="exit">退出乐享</div>
            </li>
        </nav>
        
    </div>    
</template>



<style scoped>
    .setbox{
        position: absolute;
        width: 100%;
        top: .44rem;
        left: 0;
        bottom: 0;
        z-index: 10;
        background: #efefef;
    }
    .setbox .item{
        display: block;
        margin-top: .2rem;
        height: .45rem;
        width: 100%;
        background: #fff;
        padding-left: .2rem;
        font-size: .16rem;
        line-height: .45rem;
        color: #000;
        border-top: 1px solid #DDD9D9;
        border-bottom: 1px solid #DDD9D9;
    }
    .setbox .item.nomargin{
        margin: 0
    }
    .item .exit{
        margin-left: 1.3rem;
        color: #F70808;
        font-size: .16rem;
        width: .7rem;
        text-align: center;
        font-weight: bold
    }
</style>
