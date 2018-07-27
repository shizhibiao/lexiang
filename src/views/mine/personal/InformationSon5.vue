<template>
    <div class="head-portrait">
        <mine-header title='我的地址' ></mine-header>
        <mine-content>
            <nav class="list">
                <li class="item" v-for='(item,index) in addressList' :key='index'>
                    <p class="name">{{item.name}}</p>
                    <p class="address">{{item.address}}</p>
                    <span class="i">!</span>
                </li>
            </nav>
            <div class="add-address" @click="addressAction()">
                <span class="cancel iconfont icon-lexiangshouyetuijianx"></span>
                新增地址
            </div>
        </mine-content>
    </div>
</template>


<script>
import Vuex from 'vuex';
export default {
    data(){
        return {
            
        }
    },
    methods:{
        addressAction(){
            this.$router.push('/personal6')
        }
    },
   computed:Vuex.mapState({
    
      addressList:'addressList'
  })
}
</script>


<style scoped>
    .list{
        margin-top: .15rem;
        padding: 0 .2rem;
        background: #fff
    }
    .list .item{
        height: .36rem;
    
        padding: .1rem 0;
        position: relative;
       
    }
    .item .name{
        font-size: .15rem;
        color: #000;
        line-height: .22rem
    }
    .item .address{
        font-size: .13rem;
        color: #9B9B9B ;
        line-height: .18rem
    }
    .i{
         display: inline-block;
        height: .2rem;
        width: .2rem;
       transform: rotate(-360deg);
         background: #D8D8D8;
        border-radius: 50%;
        position: absolute;
        top: .2rem;
        right: .1rem;
        color: #000;
        line-height: .2rem;
        text-align: center
    }
    .add-address{
        background: #fff;
         height: .36rem;
        margin-top: .1rem;
        padding: .1rem 0 .1rem .2rem;
        line-height: .36rem;
        font-size: .16rem;
        color: #000

    }
      .add-address .cancel{
        display: inline-block;
        height: .2rem;
        width: .2rem;
        background: #9B9B9B;
        border-radius: 50%;

        color: #ccc;
        line-height: .2rem;
        text-align: center
       
    }
     .add-address .iconfont{
        font-size: .12rem;
        font-weight: normal
    }
</style>
