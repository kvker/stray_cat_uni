<template>
  <view class="container">
    <view class="box">
      <view class="flex jcsb aic cell">
        <view class="title">花名</view>
        <input type="text" v-model="name" placeholder="输入猫昵称" />
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">品种</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">猫龄</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
  .box {
    padding: 0 40upx;
  }

  .cell {
    padding: 40upx 0;
    border-bottom: 2rpx solid #eee;
  }

  input {
    text-align: right;
    border: 0;
  }
  
  .right-arrow {
    width: 18rpx;
  }
</style>
