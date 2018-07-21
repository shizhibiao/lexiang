<template>
    <div class="content" ref="content">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        //创建滚动视图
        let scroll = new IScroll(this.$refs.content, {
            //滚轮可以滚动
            mouseWheel: true,
            scrollbars: true,
            //弹簧效果
            bounce: false,
            //滚动条淡入淡出
            fadeScrollbars: true,
            //在滚动视图中支持点击事件
            click: true,
            //移动端的点击事件
            tap: true,
            //可以拖动滚动条
            interactiveScrollbars: true,
            //g滚动事件的监听方式
            probeType: 3
        })
    }
}
</script>
<style scoped>
    .content{
        width: 100%;
        position: absolute;
        left: 0;
        top: .44rem;
        bottom: .49rem;
        overflow: hidden;
        font-family: 'Mircosoft YaHei';
        background:#F5F5F5
    }
</style>
