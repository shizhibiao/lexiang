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
    }
</style>
