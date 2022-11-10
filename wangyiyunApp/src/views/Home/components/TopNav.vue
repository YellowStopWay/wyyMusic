<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
    <div class="topMid">
      <span>我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang="less" scoped>
.topNav{
  width: 100%;
  height: .8rem;
  margin-top: .2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topLeft{
    padding-left: .2rem;
  }
  .topRight{
    padding-right: .2rem;
  }
  .topMid{
    padding-left: .5rem;
    display: flex;
    width: 65%;
    justify-content: space-around;
    align-items: center;
    font-size: .36rem;
    span{
      flex:1
    }
  }
}
.active {
  font-weight: 900;
}
</style>