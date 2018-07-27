<template>
    <div class="add-address">
        <mine-header title='新增地址' right='完成'></mine-header>
        <div class="finish" @click='finishAction()'></div>
        <mine-content>
            <div class="name">
                <input placeholder="姓名：XXX" type="text" class="input" v-model="nameVal" />
            </div>
            <div class="name">
                <input placeholder="地址：XX省XX市" type="text" class="input" v-model="addressVal"/>
            </div>
        </mine-content>
    </div>
    
</template>

<script>
export default {
    data(){
         return {
             nameVal:'',
             addressVal:''
         }
    },
    methods:{
        finishAction(){
    
            this.$store.dispatch('changeAddresslist',{
                name:this.nameVal,
                address:this.addressVal
            })
            
            this.$router.back()
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
