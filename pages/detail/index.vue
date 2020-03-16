<template>
  <view class="container">
    <template v-if="detail.id">
      <swiper style="height: 600upx;" class="swiper" :indicator-dots="true" :autoplay="true" :duration="3000">
        <swiper-item style="height: 600upx;" v-for="(url, idx) in jsonDetail.picture" :key="idx">
          <view class="swiper-item uni-bg-red">
            <image class="w-100" style="height: 600upx;" :src="url" mode="aspectFill"></image>
          </view>
        </swiper-item>
      </swiper>
      <view class="box mt-20">
        <view class="flex p-20">
          <view class="flex aic f1 title-box">
            <text class="title">花名</text>
            <text class="value ml-20">{{jsonDetail.name}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">编号</text>
            <text class="value ml-20">{{jsonDetail.id}}</text>
          </view>
        </view>
        <view class="flex p-20">
          <view class="flex aic f1 title-box">
            <text class="title">性别</text>
            <text class="value ml-20">{{jsonDetail.sex_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">品种</text>
            <text class="value ml-20">{{jsonDetail.category}}</text>
          </view>
        </view>
        <view class="flex p-20">
          <view class="flex aic f1 title-box">
            <text class="title">猫龄</text>
            <text class="value ml-20">{{jsonDetail.age_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">是否绝育</text>
            <text class="value ml-20">{{jsonDetail.jueyu_label}}</text>
          </view>
        </view>
        <view class="flex p-20">
          <view class="flex aic f1 title-box">
            <text class="title">体内驱虫</text>
            <text class="value ml-20">{{jsonDetail.quchong_inner_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">体外驱虫</text>
            <text class="value ml-20">{{jsonDetail.quchong_outer_label}}</text>
          </view>
        </view>
        <view class="flex p-20">
          <view class="flex aic f1 title-box">
            <text class="title">领养适合度</text>
            <text class="value ml-20">{{jsonDetail.lingyang_label}}</text>
          </view>
          <view class="flex aic f1 value-box"></view>
        </view>
      </view>
      <view class="box mt-20">

      </view>
      <view class="box mt-20">

      </view>
      <view class="box mt-20">

      </view>
    </template>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        objectId: '',
        detail: {},
      }
    },
    computed: {
      jsonDetail() {
        if (this.detail.id) {
          let json = this.detail.toJSON()
          json.age_label = json.age || '未知'
          json.sex_label = json.jueyu_status ? (json.jueyu_status === 1 ? '公' : '未知') : '母'
          json.quchong_outer_label = this.$util.formatDate(json.quchong_outer, 'YY/MM/DD')
          json.quchong_inner_label = this.$util.formatDate(json.quchong_inner, 'YY/MM/DD')
          json.lingyang_label = this.$util.getlingyangLevelLabel(json.lingyang_level)
          json.jueyu_label = json.jueyu_status ? (json.jueyu_status === 1 ? '已绝育' : '未知') : '未绝育'
          return json
        }
      }
    },
    onLoad(options) {
      this.objectId = options.objectId
      this.getDetail(this.objectId)
    },
    methods: {
      async getDetail(objectId = this.objectId) {
        let list = await this.$av.read('Cat', q => {
          q.equalTo('objectId', objectId)
        })
        console.log(list[0])
        this.detail = list[0]
      },
    },
  }
</script>

<style>
  page {
    background-color: #F4EFE9;
  }

  .box {
    background-color: white;
  }

  .title {
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: 200;
    color: rgba(148, 148, 148, 1);
  }

  .value {
    font-size: 32rpx;
    font-family: PingFang SC;
    color: rgba(56, 56, 56, 1);
  }
</style>
