<template>
  <view class="container" @touchstart="touchStart" @touchend="touchEnd">
    <CatCard v-for="(item, idx) in jsonList" :key="item.objectId" :item="item"></CatCard>
  </view>
</template>

<script>
  import CatCard from '@/components/card/cat/index.vue'

  export default {
    components: {
      CatCard,
    },
    data() {
      return {
        list: [],
        page: 0,
        size: 10,
        // 记录触控时间
        time_length: 0,
        // 去登录页的时长
        login_time_length: this.$is_dev ? 1 : 5,
        // 触控时间计时器
        time_interval: null,
      }
    },
    computed: {
      jsonList() {
        return this.list.map(i => {
          let json = i.toJSON()
          json.id = json.sex ? (json.sex === 1 ? 'M' + json.id : 'G' + json.id) : 'X' + json.id
          json.quchong_outer_label = json.quchong_outer ? this.$util.formatDate(json.quchong_outer, 'YY/MM/DD') :
            '未驱虫'
          json.quchong_inner_label = json.quchong_inner ? this.$util.formatDate(json.quchong_inner, 'YY/MM/DD') :
            '未驱虫'
          json.lingyang_label = this.$util.getLingyangLevelLabel(json.lingyang_level)
          json.jueyu_label = json.jueyu_status ? (json.jueyu_status === 1 ? '已绝育' : '未知') : '未绝育'
          return json
        })
      }
    },
    onLoad() {},
    onShow() {
      this.page = 0
      this.list = []
      this.getList()
    },
    onPullDownRefresh() {
      this.page = 0
      this.list = []
      this.getList()
    },
    onReachBottom() {
      this.page = this.page + 1
      this.getList()
    },
    onShareAppMessage() {

    },
    methods: {
      /**
       * 获取列表数据
       */
      async getList(page = this.page) {
        let list = await this.$av.read('Cat', q => {
          q.limit(10)
          q.skip(page * 10)
        })
        uni.stopPullDownRefresh()
        this.list = [...this.list, ...list]
      },
      touchStart() {
        this.time_length = 0
        this.time_interval = setInterval(() => {
          this.time_length++
          if (this.time_length >= this.login_time_length) {
            uni.navigateTo({
              url: '/pages/login/index'
            })
            this.touchEnd()
          }
        }, 1000)
      },
      touchEnd() {
        this.time_length = 0
        clearInterval(this.time_interval)
      },
    }
  }
</script>

<style>
  page {
    padding: 20rpx;
    background-color: #F4EFE9;
  }

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
