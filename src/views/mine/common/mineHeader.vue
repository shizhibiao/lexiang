<template>
    <div class="head">
        <div class="back-mine" @click='backAction()'>
            <i class="iconfont icon-zuojiantou"></i>
            <span class="back">{{mine}}</span>
        </div>
        <h3>{{title}}</h3>
    </div>
</template>


<script>
export default {
    props:{
        title:String,
        mine:String
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
</style>

