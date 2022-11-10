<template>
   <div class="musicList">
      <div class="musicTop">
         <div class="title">发现好歌单</div>
         <div class="more">查看更多</div>
      </div>
      <div class="musicContent">
         <van-swipe class="myswiper" :loop="false" :width="170" :show-indicators="false">
            <van-swipe-item class="swiperItem" v-for="item in musicList" :key="item.id">
               <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                  <img :src="item.picUrl" alt="">
                  <span class="playCount">
                     <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-24gl-play"></use>
                     </svg>
                     {{ formattPlayCount(item.playCount as number) }}
                  </span>
                  <span class="name">
                     {{ item.name }}
                  </span>
               </router-link>
            </van-swipe-item>
         </van-swipe>
      </div>
   </div>
</template>

<script setup lang='ts'>
import { onMounted, reactive, toRefs } from 'vue';
import { homeMusicListApi } from '../../utils/request/api'
const state = reactive<{ musicList: { id?: number; picUrl?: string; playCount?: number; name?: string }[] }>({
   musicList: []
})
const { musicList } = toRefs(state)
onMounted(async () => {
   const res = await homeMusicListApi()
   console.log(res);
   if (res.result) {
      musicList.value = res.result;
   }
   console.log(musicList.value);

})
const formattPlayCount = (count: number) => {
   if (count >= 10000000) {
      return (count / 10000000).toFixed(1) + '亿';
   } else if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
   } else return '无'
}

</script>

<style lang="less" scoped>
.musicList {
   width: 100%;
   height: 5rem;

   .musicTop {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;

      .title {
         font-size: 0.4rem;
         font-weight: 900;
         padding-left: 0.2rem;
      }

      .more {
         border: 1px solid;
         text-align: center;
         line-height: 0.6rem;
         padding: 0 0.2rem;
         border-radius: 0.4rem;
         margin-top: -0.05rem;
         margin-right: 0.2rem;
      }
   }
}

.musicContent {
   height: 4rem;
   width: 100%;
   margin-top: 0.2rem;

   .myswiper {

      .swiperItem {
         position: relative;
         width: 100%;
         box-sizing: border-box;
         padding-right: .3rem;

         img {
            width: 100%;
            height: 100%;
            border-radius: .2rem;
         }

         .playCount {
            position: absolute;
            top: 0;
            right: 0.4rem;
            color: #ddd;

            .icon {
               width: 0.3rem;
               height: 0.3rem;
            }
         }

         .name {
            bottom: 0;
         }
      }

   }
}
</style>