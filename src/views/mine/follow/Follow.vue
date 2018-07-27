<template>
    <div class="follow">
        <mine-header title="关注" mine="我"></mine-header>
        <mine-content>
            <nav class="follow-list">
                <li class="follow-item" v-for='(item,index) in followList' :key='index'>
                    <img :src="item.head" class="head-portrait"  @click='followInformation(index)'/>
                    <div class="nickname-content">
                        <p class="nickname">{{item.nickname}}</p>
                        <p class="autograph">签名：{{item.autograph}}</p>
                    </div>
                    <div class="focus-on" @click='focusAction(index)'>
                        <i class="iconfont icon-gouxuan" v-show='item.isFollow'>已关注</i>
                        <span  v-show='!item.isFollow'>点击关注</span> 
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
            followList:[
                {
                    head:'https://goss.veer.com/creative/vcg/veer/612/veer-132289397.jpg',
                    nickname:'卡牌大师',
                    autograph:'不签',
                    isFollow:true
                },
                 {
                    head:'https://i03piccdn.sogoucdn.com/9488141a00b4a44b',
                    nickname:'崔斯特',
                    autograph:'签不签',
                    isFollow:true
                },
                 {
                    head:'https://i03piccdn.sogoucdn.com/8ea8dcb356dcd9f9',
                    nickname:'黑暗之女',
                    autograph:'就不签',
                    isFollow:true
                },
                 {
                    head:'https://i04piccdn.sogoucdn.com/1d86e60977348f56',
                    nickname:'安妮',
                    autograph:'不签算了',
                    isFollow:true
                },
            ]
        }
    },
    methods:{
        focusAction(index){
            this.followList[index].isFollow = !this.followList[index].isFollow
        },
        followInformation(index){
            var arr = [this.followList[index].head,this.followList[index].nickname,this.followList[index].autograph]
               
            this.$store.dispatch('addFans',arr)
            this.$router.push('/fansson')
        }
    }
}
</script>


<style scoped lang='scss'>
    .follow-list{
        margin-top: .1rem
    }
    .follow-item{
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
        border: 1px solid #979797;
        border-radius: 2px;
        top:.4rem;
        right: .5rem;
        line-height: .22rem;
        font-size: .14rem;
        color:#EFC81F;
        text-align: center;

        .iconfont{
            font-size: .14rem;
            color: palegreen
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
