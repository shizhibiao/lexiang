<template>
    <div class="head">
        <div class="back-mine" @click='backAction()'>
            <i class="iconfont icon-zuojiantou" v-show='!show'></i>
            <span class="back">{{mine}}</span>
        </div>
        <h3>{{title}}</h3>
        <div class="right">
            <span class="right-word">{{right}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        mine:String,
        right:String,
        show:String
    },
    methods:{
        backAction(){
            this.$router.back()
        }
    }
}
</script>


<style lang='scss' scoped>
    .back-mine{
        height: .44rem;
        width: .5rem;
        line-height: .44rem;
        float: left;
        padding-left:.2rem;
        padding-right: .8rem;
        .back{
            font-size: .16rem;
            color: #000
        }
        .icon-zuojiantou{
            font-size: .14rem;
            color: #000
        }
       
    }
     h3{
            display: block;
            float: left;
            line-height: .44rem;
            font-size: .17rem;
            width: .7rem;
            text-align: center
        }
    .right{
      float: right;
      height: .44rem;
      width: .5rem;
      padding-right: .1rem;
      line-height: .44rem;
      text-align: center;
      font-size: .16rem;
      color: #000;
    }
</style>

