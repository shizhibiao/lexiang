<template>
    <div class="add-address">
        <mine-header title='修改地址' right='完成'></mine-header>
        <div class="finish" @click='finishAction()'></div>
        <mine-content>
            <div class="name">
                <input placeholder="姓名" type="text" class="input" ref="username" />
            </div>
            <div class="name">
                <input placeholder="地址" type="text" class="input" ref="password" />
            </div>
        </mine-content>
    </div>
    
</template>

<script>
export default {
    data(){
         return {
             
         }
    },
    methods:{
        finishAction(){
    
            
            this.$pubsub.$emit('add-address',{
               name: this.$refs.username.value,
               address:this.$refs.password.value
            })

            // this.addressVal = '';
            // this.nameVal = '';

            this.$router.go(-1);

            console.log('触发了');
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
     .name{
        margin-top: .15rem;
        width: 100%;
        height: .45rem;
        background: #fff;
         border-bottom: 1px solid #A6A2A2;
        border-top: 1px solid #A6A2A2
    }
     .name .input{
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
     
</style>
