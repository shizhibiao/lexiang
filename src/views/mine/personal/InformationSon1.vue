<template>
    <div class="head-portrait">
        <mine-header title='头像' right='...' mine='返回'></mine-header>
        <mine-content>
            <div class="img">
                <img src="https://goss.veer.com/creative/vcg/veer/612/veer-132289397.jpg"/>
            </div>
            <nav class="list">
                <li class="item">拍照</li>
                <li class="item">从手机相册选择</li>
            </nav>
            <div class="cancel">取消</div>
        </mine-content>
    </div>
</template>


<style scoped>
    .img{
        width: 100%;
        height: 3.75rem;
        margin-top: .4rem
    }
    .img img{
        width: 100%;
        height: 100%;
    }
    .list{
        margin-top: .2rem;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #A6A2A2;
        border-top: 1px solid #A6A2A2
    }
    .list .item{
        height: .44rem;
        widows: 100%;
        line-height: .44rem;
        text-align: center;
        font-size: .17rem;
        color: #000;
        
    }
    .list li:first-child{
         border-bottom: 1px solid #A6A2A2;
    }
    .cancel{
        height: .6rem;
        width: 100%;
        line-height: .6rem;
        text-align: center;
        font-size: .2rem;
        color: #000;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #fff
    }
</style>
