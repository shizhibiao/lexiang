<template>
 <div class="nativePage">
            <div class="head">
            <span class="leftArrow" @click="gobackAction()"><i class="iconfont icon-zuojiantou"></i></span>
            <h1 class="native">本地</h1>
            </div>
        
        <app-content>
            <img class="native-img" src='http://via.placeholder.com/375x150'>
        </app-content>  
 </div> 
</template>

<script>
export default {
    methods:{
        gobackAction(){
            
            this.$router.back();
        }
    }
}
</script>



<style scoped>
.head{
       width:100%;
       position:absolute;
       left:0;
       top:0;
       height:.44rem;
       background:#fff;
}
.leftArrow{
    display:block;
    position:absolute;
    left:0;
    top:0;
    width:.5rem;
    height:.44rem;
    line-height:.44rem;
    text-align:center;
    z-index:2
}
.native{
       width:100%;
       position:absolute;
       left:0;
       top:0;
       height:.44rem;
    
       text-align:center;
       line-height:.44rem;
   }

.native-img{
    width:100%;
    height:1.50rem;
    margin:.15rem 0;
}
</style>
