<template>
    <div class="fans">
        <mine-header title="粉丝" mine="我"></mine-header>
        <mine-content>
            <nav class="fans-list">
                <li class="fans-item" v-for='(item,index) in fansList' :key='index'>
                    <img :src="item.head" class="head-portrait"  @click='followInformation(index)'/>
                    <div class="nickname-content">
                        <p class="nickname">{{item.nickname}}</p>
                        <p class="autograph">签名：{{item.autograph}}</p>
                    </div>
                    <div class="focus-on" @click='focusAction(index)'>
                        <i class="iconfont icon-lexiangshouyetuijianx" v-show='item.isFans'>关注</i>
                        <span  v-show='!item.isFans'>取消关注</span> 
                    </div>
                    

                </li>
            </nav>
        </mine-content>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fansList:[
                {
                    head:'https://goss.veer.com/creative/vcg/veer/612/veer-132289397.jpg',
                    nickname:'李青',
                    autograph:'不签',
                    isFans:true
                },
                 {
                    head:'https://i03piccdn.sogoucdn.com/9488141a00b4a44b',
                    nickname:'LEESIN',
                    autograph:'签不签',
                    isFans:true
                },
                 {
                    head:'https://i03piccdn.sogoucdn.com/8ea8dcb356dcd9f9',
                    nickname:'至高之拳',
                    autograph:'就不签',
                    isFans:true
                },
                 {
                    head:'https://i04piccdn.sogoucdn.com/1d86e60977348f56',
                    nickname:'龙的传人',
                    autograph:'不签算了',
                    isFans:true
                },
            ]
        }
    },
    methods:{
        focusAction(index){
            this.fansList[index].isFans = !this.fansList[index].isFans
        },
        followInformation(index){
            var arr = [this.fansList[index].head,this.fansList[index].nickname,this.fansList[index].autograph]
               
            this.$store.dispatch('addFans',arr)
            this.$router.push('/fansson')
        }
    }
}
</script>


<style scoped lang='scss'>
    .fans-list{
        margin-top: .1rem
    }
    .fans-item{
    width: 100%;
    height: .6rem;
    padding: .2rem 0 .2rem .3rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #DDD9D9;
    
    .focus-on{
        position: absolute;
        width: .6rem;
        height: .22rem;
        border: 1px solid #EFC81F;
        border-radius: 2px;
        top:.4rem;
        right: .5rem;
        line-height: .22rem;
        font-size: .14rem;
       color:#EFC81F;
        text-align: center;
        .iconfont{
            font-size: .14rem;
            color:#EFC81F;
        }
    }
    .nickname-content{
      margin-left: .2rem;
    
      height: .6rem;
      width: 1.5rem;
      float: left;
      .nickname{
        line-height: .3rem;
        font-size: .16rem;
        height: .3rem;
        color: #000;
        i{
          font-size: .14rem
        }
      }
      .autograph{
        line-height: .3rem;
        height: .3rem;
        font-size: .14rem;
        color: #9B9B9B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
     .head-portrait{
       display: block;
      height: .6rem;
      width: .6rem;
      float: left;
      border-radius: .05rem
    }
  }
</style>
