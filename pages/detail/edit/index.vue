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
      <view class="flex jcsb aic cell">
        <view class="title">是否绝育</view>
        <radio-group @change="changeRadio('jueyu_status', $event)">
          <label class="radio">
            <radio color="#394F3E" value="0" :checked="jueyu_status === '0'">未绝育</radio>
          </label>
          <label class="radio ml-20">
            <radio color="#394F3E" value="1" :checked="jueyu_status === '1'">已绝育</radio>
          </label>
        </radio-group>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">适合领养度</view>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">体内驱虫</view>
        <radio-group @change="changeRadio('quchong_inner_status', $event)">
          <label class="radio">
            <radio color="#394F3E" value="0" :checked="quchong_inner_status === '0'">未驱虫</radio>
          </label>
          <label class="radio ml-20">
            <radio color="#394F3E" value="1" :checked="quchong_inner_status === '1'">已驱虫</radio>
          </label>
        </radio-group>
        <picker v-if="quchong_inner_status === '1'" mode="date" :value="quchong_inner" @change="bindDateChange('quchong_inner', $event)">
          <view class="uni-input">{{quchong_inner || '最后驱虫日期'}}</view>
        </picker>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">体外驱虫</view>
        <radio-group @change="changeRadio('quchong_outer_status', $event)">
          <label class="radio">
            <radio color="#394F3E" value="0" :checked="quchong_outer_status === '0'">未驱虫</radio>
          </label>
          <label class="radio ml-20">
            <radio color="#394F3E" value="1" :checked="quchong_outer_status === '1'">已驱虫</radio>
          </label>
        </radio-group>
        <picker v-if="quchong_outer_status === '1'" mode="date" :value="quchong_outer" @change="bindDateChange('quchong_outer', $event)">
          <view class="uni-input">{{quchong_outer || '最后驱虫日期'}}</view>
        </picker>
      </view>
      <view class="card-box">
        <view class="title mt-40">外观描述</view>
        <textarea class="mt-20" v-model="waiguan" placeholder="描述外观"></textarea>
      </view>
      <view class="card-box">
        <view class="title mt-40">性格描述</view>
        <textarea class="mt-20" v-model="xingge" placeholder="描述猫咪大致性格"></textarea>
      </view>
      <view class="card-box mt-40 pb-20">
        <view class="title">常见活动范围描述</view>
        <textarea class="mt-20" v-model="address" placeholder="活动范围"></textarea>
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
    <view class="button" @click="clickSubmit">确认上传</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        category: '',
        jueyu_status: '0',
        quchong_inner: '',
        quchong_inner_status: '0',
        quchong_outer: '',
        quchong_outer_status: '0',
        cover_img: '',
        address: '',
        xingge: '',
        waiguan: '',
      }
    },
    computed: {
      form() {
        let form = {
          name: this.name,
          age: this.age,
          category: this.category,
          jueyu_status: this.jueyu_status,
          cover_img: this.cover_img,
          address: this.address,
          xingge: this.xingge,
          waiguan: this.waiguan,
        }
        if(this.quchong_inner) {
          form.quchong_inner = this.$util.dayjs(this.quchong_inner).toDate()
        }
        if(this.quchong_outer) {
          form.quchong_outer = this.$util.dayjs(this.quchong_outer).toDate()
        }
        return form
      }
    },
    methods: {
      changeRadio(type, e) {
        this[type] = e.detail.value
      },
      bindDateChange(type, e) {
        this[type] = e.detail.value
      },
      clickSubmit() {
        console.log(this.form)
      },
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
    font-size: 32upx;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(148, 148, 148, 1);
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

  .add-icon,
  .imgs-box image {
    position: relative;
    width: 210upx;
    height: 210upx;
  }

  .add-icon:after {
    content: '+';
    font-size: 100upx;
    font-weight: 100;
  }

  .button {
    width: 300upx;
    height: 100upx;
    margin: 40upx auto;
    border-radius: 24upx;
  }
</style>
