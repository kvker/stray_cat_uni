<template>
  <navigator :url="`/pages/detail/detail?objectId=${item.objectId}`" class="cat-card mb-20">
    <image class="cat-img" :src="item.cover_img.url" mode="aspectFill"></image>
    <view class="box flex">
      <view class="flex aic f1 title-box">
        <text class="title">花名</text>
        <text class="value ml-20">{{item.name}}</text>
      </view>
      <view class="flex aic f1 value-box">
        <text class="title">编号</text>
        <text class="value ml-20">{{item.id}}</text>
      </view>
    </view>
    <view class="box flex">
      <view class="flex aic f1 title-box">
        <text class="title">适合领养度</text>
        <text class="value ml-20">{{item.lingyang_label}}</text>
      </view>
      <view class="flex aic f1 value-box">
        <text class="title">绝育状态</text>
        <text class="value ml-20">{{item.jueyu_label}}</text>
      </view>
    </view>
    <view class="box flex">
      <view class="flex aic f1 title-box">
        <text class="title">体内驱虫</text>
        <text class="value ml-20">{{item.quchong_inner_label}}</text>
      </view>
      <view class="flex aic f1 value-box">
        <text class="title">体外驱虫</text>
        <text class="value ml-20">{{item.quchong_outer_label}}</text>
      </view>
    </view>
  </navigator>
</template>

<script>
  export default {
    props: {
      item: Object,
    },
  }
</script>

<style>
  .cat-card {
    border-radius: 24upx;
    background-color: white;
    overflow: hidden;
  }

  .cat-img {
    width: 100%;
    height: 400upx;
  }
  
  .box {
    padding: 20upx 40upx 20upx;
  }
  
  .box:last-child {
    padding: 20upx 40upx 40upx;
  }

  .title {
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: 200;
    color: rgba(148, 148, 148, 1);
    line-height: 32upx;
  }

  .value {
    font-size: 32rpx;
    font-family: PingFang SC;
    color: rgba(56, 56, 56, 1);
    line-height: 32upx;
  }
</style>
