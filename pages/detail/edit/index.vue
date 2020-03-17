<template>
  <view class="container">
    <view class="box">
      <view class="flex jcsb aic cell">
        <view class="title">花名</view>
        <input type="text" v-model="name" placeholder="输入猫昵称" />
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">品种</view>
        <input type="text" v-model="name" placeholder="输入猫品种" />
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">猫龄</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">是否绝育</view>
        <view>
          <label class="radio">
            <radio color="#394F3E" v-model="jueyu" checked="true" />未绝育</label>
          <label class="radio ml-20">
            <radio color="#394F3E" v-model="jueyu" />已绝育</label>
        </view>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">适合领养度</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">体内驱虫</view>
        <view>
          <label class="radio">
            <radio color="#394F3E" v-model="quchong_inner" checked="true" />未驱虫</label>
          <label class="radio ml-20">
            <radio color="#394F3E" v-model="quchong_inner" />已驱虫</label>
        </view>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">体外驱虫</view>
        <view>
          <label class="radio">
            <radio color="#394F3E" v-model="quchong_outer" checked="true" />未驱虫</label>
          <label class="radio ml-20">
            <radio color="#394F3E" v-model="quchong_outer" />已驱虫</label>
        </view>
      </view>
      <view class="card-box">
        <view class="title mt-40">外观描述</view>
        <textarea class="mt-20" v-model="waiguan" placeholder="描述外观" />
        </view>
      <view class="card-box">
        <view class="title mt-40">性格描述</view>
        <textarea class="mt-20" v-model="xingge" placeholder="描述猫咪大致性格" />
      </view>
      <view class="card-box mt-40 pb-20">
        <view class="title">常见活动范围描述</view>
        <textarea class="mt-20" v-model="address" placeholder="活动范围" />
      </view>
    </view>
    <view class="box mt-20">
      <view class="card-box pt-40">
        <view class="title">上传猫封面</view>
        <view class="flex jcc aic cover-img-box mt-20">
          <image :src="cover_img" mode="aspectFit"></image>
        </view>
      </view>
      <view class="card-box pb-20">
        <view class="title mt-40">上传猫照片(要能看到清晰猫脸的全身照)</view>
        <view class="flex flex-wrap imgs-box mt-20">
          <view class="flex jcc aic add-icon"></view>
          <image class="ml-20" :src="cover_img" mode="aspectFit"></image>
        </view>
      </view>
    </view>
    <view class="box">
      <view class="flex jcsb aic cell mt-20">
        <view class="title">小区</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        category: '',
        jueyu: false,
      }
    },
    methods: {

    }
  }
</script>

<style>
  page {
    background-color: #F4EFE9;
  }
  
  .box {
    background-color: white;
    padding: 0 40upx;
  }

  .cell {
    height: 88upx;
    border-bottom: 2rpx solid #eee;
  }

  input {
    text-align: right;
    border: 0;
    font-size: 32upx;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(148, 148, 148, 1);
  }
  
  .right-arrow {
    width: 18rpx;
  }
  
  .title {
    font-size:32upx;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(148,148,148,1);
  }
  
  textarea {
    width: 100%;
    height: 164upx;
    border: 2rpx solid #F4EFE9;
    margin-bottom: 40upx;
  }
  
  .cover-img-box {
    position: relative;
    height: 400upx;
    border: 2rpx solid #F4EFE9;
  }
  
  .cover-img-box:after {
    content: '+';
    font-size: 280upx;
    font-weight: 100;
  }
  
  .cover-img-box image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .imgs-box {
    position: relative;
  }
  
  .add-icon {
    border: 2rpx dashed #F4EFE9;
  }
  
  .add-icon, .imgs-box image {
    position: relative;
    width: 210upx;
    height: 210upx;
  }
  
  .add-icon:after {
    content: '+';
    font-size: 100upx;
    font-weight: 100;
  }
</style>
