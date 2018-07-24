<template>
    <div class="head-portrait">
        <mine-header title='性别' right='完成' mine='返回'></mine-header>
        <mine-content>
            <div class="sex nan" @click="sexAction('男')">男<i class="icon-gouxuan iconfont" v-if="isChecked == '男'"></i></div>
            <div class="sex nv" @click="sexAction('女')">女<i class="icon-gouxuan iconfont"  v-if="isChecked == '女'"></i></div>
        </mine-content>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isChecked:'男'
        }
    },
    methods:{
        sexAction(data){
            this.isChecked = data
        }
    }
}
</script>



<style scoped>
    .sex{
          height: .45rem;
            width: 100%;
            background: #fff;
            padding-left: .2rem;
            font-size: .16rem;
            line-height: .45rem;
            color: #000;
            border-top: 1px solid #DDD9D9;
            border-bottom: 1px solid #DDD9D9;
            position: relative;
    }
    .iconfont{
        position: absolute;
        right: .6rem;
        font-size: .16rem
    }
</style>
