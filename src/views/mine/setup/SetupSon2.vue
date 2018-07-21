<template>
    <div class="Privacy">
        <mine-header title="隐私设置"></mine-header>
        <app-content>
            <div class="seeme">哪些人可以看到我的乐享</div>
            <div class="people">所有人<i class="icon-gouxuan iconfont" v-if="isChecked == 'people'"></i></div>
            <div class="my-follow">我关注的人<i class="icon-gouxuan iconfont"  v-if="isChecked == 'my-follow'"></i></div>
            <div class="fans">我的粉丝<i class="icon-gouxuan iconfont" v-if="isChecked == 'fans'"></i></div>
            <div class="seeme">我可以收到哪些人的私信</div>
            <div class="people">所有人<i class="icon-gouxuan iconfont" v-if="isChecked == 'people'"></i></div>
            <div class="my-follow">我关注的人<i class="icon-gouxuan iconfont" v-if="isChecked == 'my-follow'"></i></div>
        </app-content>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isChecked:"people"
        }
    }
}
</script>

<style scoped>
    .seeme{
        height:.17rem;
        padding: .1rem 0 .1rem .2rem;
        color: #cacaca;
        font-size: .12rem;
        line-height: .17rem;

    }
    .people,.my-follow,.fans{
          
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
