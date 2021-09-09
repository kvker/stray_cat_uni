<template>
  <view class="container pb-20">
    <template v-if="detail.id">
      <swiper style="height: 600rpx;" class="swiper" :indicator-dots="true" :autoplay="true" :duration="300">
        <swiper-item style="height: 600rpx;" v-for="(url, idx) in jsonDetail.img_urls" :key="idx"
          @click="previewImg(url, idx)">
          <view class="swiper-item uni-bg-red">
            <image class="w-100" style="height: 600rpx;" :src="url" mode="aspectFill"></image>
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
            <text class="value ml-20">{{jsonDetail.address}}</text>
          </view>
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
    <!-- #ifndef MP -->
    <navigator v-if="is_self" :url="`/pages/edit/edit?edit=true&objectId=${objectId}`" class="fab"
      style="bottom: 200upx">
      <image src="/static/img/cat.png" mode="aspectFill"></image>
    </navigator>
    <navigator v-if="is_admin" url="/pages/edit/edit" class="fab flex aic jcc btn"
      style="background-color: #394F3E;">
      +
    </navigator>
    <navigator v-else url="/pages/login/login" class="fab flex aic jcc btn" style="background-color: #394F3E;">
      +
    </navigator>
    <!-- #endif -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        objectId: '',
        detail: {},
        age_list: ['未知', '0-3个月', '3-6个月', '6-12个月', ...Array.from({
          length: 17
        }, (i, idx) => idx).map(i => `${i + 1}-${i + 2}岁`)],
        // 是否登录, 控制加号显示
        is_admin: false,
        // 是否自己, 控制编辑显示
        is_self: false,
      }
    },
    computed: {
      jsonDetail() {
        if (this.detail.id) {
          let json = this.detail.toJSON()
          json.age_label = this.age_list[json.age]
          json.sex_label = json.sex ? (json.sex === 1 ? '母' : '公') : '未知'
          json.id = json.sex ? (json.sex === 1 ? 'M' + json.id : 'G' + json.id) : 'X' + json.id
          json.quchong_outer_label = json.quchong_outer ? this.$util.formatDate(json.quchong_outer, 'YY/MM/DD') :
            '未驱虫'
          json.quchong_inner_label = json.quchong_inner ? this.$util.formatDate(json.quchong_inner, 'YY/MM/DD') :
            '未驱虫'
          json.category_label = this.$util.getCategoryLabel(json.category)
          json.lingyang_label = this.$util.getLingyangLevelLabel(json.lingyang_level)
          json.jueyu_label = json.jueyu_status ? (json.jueyu_status === 1 ? '已绝育' : '未知') : '未绝育'
          json.waiguan = json.waiguan || '暂时为空'
          json.xingge = json.xingge || '暂时为空'
          json.img_urls = [json.cover_img.url, ...json.imgs.map(i => i.url)]
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
      return {
        title: '花名: ' + this.jsonDetail.name,
        imageUrl: this.jsonDetail.cover_img.url,
      }
    },
    methods: {
      async getDetail(objectId = this.objectId) {
        let list = await this.$av.read('Cat', q => {
          q.equalTo('objectId', objectId)
          q.include(['cover_img'])
        })
        // console.log(list[0])
        let item = list[0]
        let files = await this.$av.read('_File', q => {
          q.containsAll('objectId', item.get('imgs'))
        })
        item.set('imgs', files)
        this.detail = item
        uni.setNavigationBarTitle({
          title: `${this.detail.get('name')}的档案`,
        })
        // 判断是不是自己的猫
        let current_user = this.$av.currentUser()
        if (current_user) {
          let roles = await current_user.getRoles()
          let role = roles[0]
          if (role) {
            this.is_admin = role.get('name') === 'admin'
            this.is_self = this.detail.get('owner').get('objectId') === current_user.get('objectId')
          }
        }
      },
      previewImg(url, idx) {
        uni.previewImage({
          current: idx,
          urls: this.jsonDetail.imgs,
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
    padding: 20rpx 40rpx 0;
  }

  .line-box:last-child {
    padding: 20rpx 40rpx;
  }

  .title,
  .cell {
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: 200;
    color: rgba(148, 148, 148, 1);
  }

  .value,
  .content {
    font-size: 32rpx;
    font-family: PingFang SC;
    color: rgba(56, 56, 56, 1);
  }

  .cell {
    padding: 40rpx 40rpx 20rpx;
  }

  .content {
    padding: 20rpx 40rpx 40rpx;
    border-top: 2rpx solid #eee;
  }

  .fab {
    position: fixed;
    right: 40rpx;
    bottom: 80rpx;
    width: 80rpx;
    height: 80rpx;
    font-size: 48rpx;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 0 4rpx black;
    color: white;
  }

  .fab image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
