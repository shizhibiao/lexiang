<template>
    <div class="mycollection">
        <mine-header title="我的收藏"  mine='我'></mine-header>
        <mine-content>
            <nav class="collection-list">
                 <li class="nicknamebox">
                     <div class="nick">
                            <img src="https://i03piccdn.sogoucdn.com/8ea8dcb356dcd9f9" class="head-portrait"/>
                            <div class="nickname-content">
                                <p class="nickname">昵称就是我的名字</p>
                                <p class="autograph"><span class="date">6-28</span><span class="browser">来自360安全浏览器</span></p>
                            </div>
                    </div>
                    <div class="collection-content">
                       打工是不可能打工的，这辈子不可能打工的。只有偷车才可以维持的了生活这样子。
                    </div>   
                    <div class="f-f">
                        <span class="forward"><i class="iconfont icon-31zhuanfa"></i>999</span>
                        <span class="fabulous"><i class="iconfont icon-dianzan"></i>999</span>
                    </div>
                </li>
                <li class="nicknamebox">
                     <div class="nick">
                            <img src="https://i03piccdn.sogoucdn.com/8ea8dcb356dcd9f9" class="head-portrait"/>
                            <div class="nickname-content">
                                <p class="nickname">昵称就是我的名字</p>
                                <p class="autograph"><span class="date">6-28</span><span class="browser">来自360安全浏览器</span></p>
                            </div>
                    </div>
                    <div class="collection-content">
                       打工是不可能打工的，这辈子不可能打工的。只有偷车才可以维持的了生活这样子。
                    </div>   
                    <div class="f-f">
                        <span class="forward"><i class="iconfont icon-31zhuanfa"></i>999</span>
                        <span class="fabulous"><i class="iconfont icon-dianzan"></i>999</span>
                    </div>
                </li>
                
            </nav>
        </mine-content>
    </div>
</template>


<style scoped lang='scss'>
    .iconfont{
        font-size: .18rem;
        margin-right: .1rem
    }
    .nicknamebox{
        width: 100%;
        background: #fff;
       .collection-content{
           padding-left: 1.1rem;
           padding-bottom: .1rem;
           border-bottom: 1px solid #DDD9D9;
           width: 70%;
           font-size: .14rem;
           line-height: .22rem
       }
        .f-f{
            height: .42rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .forward{
                margin-left: .2rem;
                font-size: .16rem;
                line-height: .22rem
            }
            .fabulous{
                 margin-right: .2rem;
                 font-size: .16rem;
                line-height: .22rem
            }

        }
    }
    .nick{
    width: 100%;
    height: .6rem;
    padding: .2rem 0 .2rem .3rem;
    background: #fff;
    margin-top: .2rem;
   
    
   
    .nickname-content{
      margin-left: .2rem;
     
      height: .6rem;
      width: 2.5rem;
      float: left;
      .nickname{
        line-height: .3rem;
        font-size: .16rem;
        height: .3rem;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        
      }
      .autograph{
        line-height: .3rem;
        height: .3rem;
        font-size: .14rem;
        color: #9B9B9B;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .date{
            display: inline-block;
            margin-right: .15rem
        }
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
