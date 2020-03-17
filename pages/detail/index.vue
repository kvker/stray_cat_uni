<template>
  <view class="container pb-20">
    <template v-if="detail.id">
      <swiper style="height: 600upx;" class="swiper" :indicator-dots="true" :autoplay="true" :duration="300">
        <swiper-item style="height: 600upx;" v-for="(url, idx) in jsonDetail.imgs" :key="idx">
          <view class="swiper-item uni-bg-red">
            <image class="w-100" style="height: 600upx;" :src="url" mode="aspectFill"></image>
          </view>
        </swiper-item>
      </swiper>
      <view class="box mt-20">
        <view class="line-box flex">
          <view class="flex aic f1 title-box">
            <text class="title">花名</text>
            <text class="value ml-20">{{jsonDetail.name}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">编号</text>
            <text class="value ml-20">{{jsonDetail.id}}</text>
          </view>
        </view>
        <view class="line-box flex">
          <view class="flex aic f1 title-box">
            <text class="title">性别</text>
            <text class="value ml-20">{{jsonDetail.sex_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">品种</text>
            <text class="value ml-20">{{jsonDetail.category_label}}</text>
          </view>
        </view>
        <view class="line-box flex">
          <view class="flex aic f1 title-box">
            <text class="title">猫龄</text>
            <text class="value ml-20">{{jsonDetail.age_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">是否绝育</text>
            <text class="value ml-20">{{jsonDetail.jueyu_label}}</text>
          </view>
        </view>
        <view class="line-box flex">
          <view class="flex aic f1 title-box">
            <text class="title">体内驱虫</text>
            <text class="value ml-20">{{jsonDetail.quchong_inner_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
            <text class="title">体外驱虫</text>
            <text class="value ml-20">{{jsonDetail.quchong_outer_label}}</text>
          </view>
        </view>
        <view class="line-box flex">
          <view class="flex aic f1 title-box">
            <text class="title">领养适合度</text>
            <text class="value ml-20">{{jsonDetail.lingyang_label}}</text>
          </view>
          <view class="flex aic f1 value-box">
          <text class="title">居住地</text>
          <text class="value ml-20">{{jsonDetail.address}}</text></view>
        </view>
      </view>
      <view class="box mt-20">
        <view class="cell">
          外观描述
        </view>
        <view class="content">
          {{jsonDetail.waiguan}}
        </view>
      </view>
      <view class="box mt-20">
        <view class="cell">
          性格描述
        </view>
        <view class="content">
          {{jsonDetail.xingge}}
        </view>
      </view>
      <!-- <view class="box mt-20">
        <view class="cell">
          常见活动范围
        </view>
        <view class="content">
          {{jsonDetail.address}}
        </view>
      </view> -->
    </template>
    <navigator v-if="is_self" :url="`/pages/detail/edit/index?edit=true&objectId=${objectId}`" class="fab" style="bottom: 120upx">
      <image src="/static/img/cat.png" mode="aspectFill"></image>
    </navigator>
    <navigator url="/pages/detail/edit/index" class="fab flex aic jcc">
      +
    </navigator>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        objectId: '',
        detail: {},
        is_self: false,
        age_list: ['未知', '0-3个月', '3-6个月', '6-12个月', ...Array.from({
          length: 17
        }, (i, idx) => idx).map(i => `${i + 1}-${i + 2}岁`)],
      }
    },
    computed: {
      jsonDetail() {
        if (this.detail.id) {
          let json = this.detail.toJSON()
          json.age_label = this.age_list[json.age]
          json.sex_label = json.sex ? (json.sex === 1 ? '母' : '公') : '未知'
          json.quchong_outer_label = json.quchong_outer ? this.$util.formatDate(json.quchong_outer, 'YY/MM/DD') : '未驱虫'
          json.quchong_inner_label = json.quchong_inner ? this.$util.formatDate(json.quchong_inner, 'YY/MM/DD') : '未驱虫'
          json.category_label = this.$util.getCategoryLabel(json.category)
          json.lingyang_label = this.$util.getLingyangLevelLabel(json.lingyang_level)
          json.jueyu_label = json.jueyu_status ? (json.jueyu_status === 1 ? '已绝育' : '未知') : '未绝育'
          return json
        }
      }
    },
    onLoad(options) {
      this.objectId = options.objectId
    },
    onShow() {
      this.getDetail(this.objectId)
    },
    onShareAppMessage() {
      
    },
    methods: {
      async getDetail(objectId = this.objectId) {
        let list = await this.$av.read('Cat', q => {
          q.equalTo('objectId', objectId)
        })
        // console.log(list[0])
        this.detail = list[0]
        // 判断是不是自己的猫
        this.is_self = this.detail.get('owner').get('objectId') === this.$av.currentUser().get('objectId')
        uni.setNavigationBarTitle({
          title: `${this.detail.get('name')}的档案`,
        })
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

  .line-box {
    padding: 20upx 40upx 0;
  }

  .line-box:last-child {
    padding: 20upx 40upx;
  }

  .title, .cell {
    font-size: 32upx;
    font-family: PingFang SC;
    font-weight: 200;
    color: rgba(148, 148, 148, 1);
  }

  .value, .content {
    font-size: 32upx;
    font-family: PingFang SC;
    color: rgba(56, 56, 56, 1);
  }

  .cell {
    padding: 40upx 40upx 20upx;
  }

  .content {
    padding: 20upx 40upx 40upx;
    border-top: 2rpx solid #eee;
  }
  
  .fab {
    position: fixed;
    right: 20upx;
    bottom: 20upx;
    width: 80upx;
    height: 80upx;
    font-size: 48upx;
    border: 2upx solid #EEEEEE;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 4upx black;
  }
  
  .fab image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
