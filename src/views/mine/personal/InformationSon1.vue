<template>
    <div class="head-portrait">
        <mine-header title='头像' right='完成' mine='返回'></mine-header>
         <div class="finish" @click='finishAction()'></div>

        <mine-content>
            <div class="img">
                <img src="https://i03piccdn.sogoucdn.com/9488141a00b4a44b" ref="imgsrc" @click='isShowAction()'/>
            </div>
            <transition name="slide">
                <div class="slide-up" v-show='isShow'>
                    <nav class="list">
                        <li class="item">拍照</li>
                        <li class="item">从手机相册选择</li>
                    </nav>
                    <div class="cancel" @click='isShowAction()'>取消</div>
                </div>
            </transition>
        </mine-content>
    </div>
</template>
 
 <script>
 export default {
     data(){
         return {
             isShow:false
         }
     },
     methods:{
         finishAction(){
         var src = this.$refs.imgsrc.src;
         this.$store.dispatch('changeHeadportrait',src);
         this.$router.back()
        },
        isShowAction(){
            this.isShow = !this.isShow
        }   
     }
 }
 </script>
 

<style scoped>
.slide-up{
    position: absolute;
    width: 100%
}
     .finish{
    width: .6rem;
    height: .44rem;
    position: absolute;
   
    right: 0;
    top: 0;

}
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
        /* position: absolute;
        left: 0;
        bottom: 0; */
        margin-top: .4rem;
        background: #fff
    }
    @keyframes sildeIn {
        0%{transform:translateY(100%)}
         100%{transform:translateY(0%)}
    }
    @keyframes sildeOut {
        0%{transform:translateY(0%)}
         100%{transform:translateY(100%)}
    }
    .slide-enter-active{
        animation: sildeIn 500ms;
    }
     .slide-leave-active{
        animation: sildeOut 300ms;
    }
</style>
