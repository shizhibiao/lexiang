<template>
    <div class="head-portrait">
        <mine-header title='昵称' right='完成' mine='取消' show='1'></mine-header>
         <div class="finish" @click='finishAction()'></div>
        <mine-content>
            <div class="prompt" v-if='isPrompt'>昵称不能为空！</div>
            <div class="nick-name">
                <input type="text" class="input" ref='nick'/><span class="cancel iconfont icon-lexiangshouyetuijianx" @click='cancelAcion()'></span>
            </div>
        </mine-content>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isPrompt:false
        }
    },
    methods:{
        cancelAcion(){
            this.$refs.nick.value = ''
        },
        finishAction(){
        
         if(this.$refs.nick.value){
             this.$store.dispatch('changeNickname',this.$refs.nick.value);
             this.$router.back()            
         }else{
             this.isPrompt = true
         }
        }
    }
}
</script>

<style scoped>
    .finish{
    width: .6rem;
    height: .44rem;
    position: absolute;
   
    right: 0;
    top: 0;

}
    .prompt{
        margin-top: .1rem;
        margin-left: .2rem;
        color: red;
        font-size: .14rem
    }
    .nick-name{
        margin-top: .1rem;
        width: 100%;
        height: .45rem;
        background: #fff;
         border-bottom: 1px solid #A6A2A2;
        border-top: 1px solid #A6A2A2
    }
    .nick-name .input{
        display: inline-block;
        height: .44rem;
        border: none;
        outline: none;
        width: 3rem;
        font-size: .16rem;
        color: #000;
        line-height: .44rem;
        margin-left: .2rem
    }
    .nick-name .cancel{
        display: inline-block;
        height: .2rem;
        width: .2rem;
        background: #9B9B9B;
        border-radius: 50%;
        transform: rotate(-315deg);
        color: #ccc;
        line-height: .2rem;
        text-align: center
       
    }
    .nick-name .iconfont{
        font-size: .12rem;
        font-weight: normal
    }
</style>
