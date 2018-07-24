<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<style>
    .content{
        width: 100%;
        position: absolute;
        left: 0;
        top: .44rem;
        bottom:0;
        overflow: hidden;
        font-family: 'Mircosoft YaHei';
        background:#F5F5F5;
        z-index: 1;
    }
</style>
