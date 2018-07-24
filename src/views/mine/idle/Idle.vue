<template>
<div class="myidle">
    <mine-header title='我的闲置'  mine='我'></mine-header>
    <mine-content>
        <div v-for='(item,index) in dataArr' :key='index' :class='item.path' @click='jumpAction(item.path)'>{{item.title}}</div>
    </mine-content>
    
</div>
    
</template>

<script>
export default {
    data(){
    return {
      dataArr:[
        {title:'我发布的',path:'release'},
        {title:'我买到的',path:'buy'},
        {title:'我收藏的',path:'collectors'},
        {title:'我卖出的',path:'sellout'}
      ]
    }
  },
  methods:{
      jumpAction(path){
        this.$router.push(path)
      }
  }
}
</script>


<style scoped>
    .release,.buy,.collectors,.sellout{
       
    height: .45rem;
    width: 100%;
    background: #fff;
    padding-left: .2rem;
    font-size: .16rem;
    line-height: .45rem;
    color: #000;
    border-bottom: 1px solid #DDD9D9
    }
    .release{
          margin-top: .2rem;
    }
</style>
