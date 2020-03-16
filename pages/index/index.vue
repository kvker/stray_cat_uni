<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {
      this.checkLogin()
      // this.$av.read('Cat').then(ret => {
      //   console.log(ret)
      // })
    },
    methods: {
      checkLogin() {
        if (!this.$av.currentUser()) {
          uni.reLaunch({
            url: '/pages/login/index'
          })
        }
      }
    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
