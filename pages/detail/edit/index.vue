<template>
  <view class="container">
    <view class="box">
      <view class="flex jcsb aic cell">
        <view class="title">花名</view>
        <input type="text" v-model="name" placeholder="输入猫昵称" />
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">品种</view>
        <picker @change="bindPickerChange('category_idx', $event)" :value="category_idx" :range="categoryNameList">
          <view class="uni-input">{{jsonCategoryList[category_idx] && jsonCategoryList[category_idx].name}}</view>
        </picker>
        <image class="right-arrow" src="/static/img/right_arrow.png" mode="widthFix"></image>
      </view>
      <view class="flex jcsb aic cell">
        <view class="title">猫龄</view>
        <picker @change="bindPickerChange('age_idx', $event)" :value="age_idx" :range="age_list">
          <view class="uni-input">{{age_list[age_idx]}}</view>
        </picker>
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
        <picker @change="bindPickerChange('lingyang_idx', $event)" :value="lingyang_idx" :range="lingyang_list">
          <view class="uni-input">{{lingyang_list[lingyang_idx]}}</view>
        </picker>
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
        <textarea auto-height :maxlength="-1" class="mt-20" v-model="waiguan" placeholder="描述外观"></textarea>
      </view>
      <view class="card-box">
        <view class="title mt-40">性格描述</view>
        <textarea auto-height :maxlength="-1" class="mt-20" v-model="xingge" placeholder="描述猫咪大致性格"></textarea>
      </view>
      <view class="card-box mt-40 pb-20">
        <view class="title">常见活动范围描述</view>
        <textarea auto-height :maxlength="-1" class="mt-20" v-model="address" placeholder="活动范围"></textarea>
      </view>
    </view>
    <view class="box mt-20">
      <view class="card-box pt-40">
        <view class="title">上传猫封面</view>
        <view class="flex jcc aic cover-img-box mt-20" @click="clickChooseCoverImg">
          <image :src="cover_img" mode="aspectFit"></image>
        </view>
      </view>
      <view class="card-box pb-20">
        <view class="title mt-40">上传猫照片(要能看到清晰猫脸的全身照)</view>
        <view class="flex flex-wrap imgs-box mt-20">
          <view class="flex jcc aic add-icon" @click="clickChooseImgs"></view>
          <image v-for="(url, idx) in imgs" :key="idx" class="ml-20" :src="url" mode="aspectFit"></image>
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
        category_list: [],
        category_idx: 0,
        age_idx: 0,
        lingyang_list: [0, 1, 2, 3, 4].map(i => this.$util.getLingyangLevelLabel(i)),
        lingyang_idx: 0,
        age_list: ['未知', '0-3个月', '3-6个月', '6-12个月', ...Array.from({
          length: 17
        }, (i, idx) => idx).map(i => `${i + 1}-${i + 2}岁`)],
        imgs: [],
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
        if (this.quchong_inner) {
          form.quchong_inner = this.$util.dayjs(this.quchong_inner).toDate()
        }
        if (this.quchong_outer) {
          form.quchong_outer = this.$util.dayjs(this.quchong_outer).toDate()
        }
        return form
      },
      jsonCategoryList() {
        return [{
          id: 0,
          name: '其他'
        }, ...this.category_list.map(i => i.toJSON())]
      },
      categoryNameList() {
        return this.jsonCategoryList.map(i => i.name)
      },
    },
    onLoad(options) {
      this.getCategoryList()
    },
    methods: {
      /**
       * 获取分类列表
       */
      async getCategoryList() {
        let list = await this.$av.read('Category')
        this.category_list = list
      },
      /**
       * 点击所有picker事件
       * @param {Object} type
       * @param {Object} e
       */
      bindPickerChange(type, e) {
        this[type] = e.detail.value
      },
      /**
       * 点击所有radio
       * @param {Object} type
       * @param {Object} e
       */
      changeRadio(type, e) {
        this[type] = e.detail.value
      },
      /**
       * 日期 变化
       * @param {Object} type
       * @param {Object} e
       */
      bindDateChange(type, e) {
        this[type] = e.detail.value
      },
      /**
       * 提交
       */
      clickSubmit() {
        console.log(this.form)
      },
      /**
       * 点击封面图上传
       */
      clickChooseCoverImg() {
        uni.chooseImage({
          count: 1,
          sizeType: ['compressed'],
          success: async ret => {
            // console.log(ret)
            this.$showLoading('上传中...')
            let temp_path = ret.tempFilePaths[0]
            try {
              let img = await this.$av.upload(temp_path)
              console.log(img)
              this.cover_img = img.get('url')
            } catch (e) {
              //TODO handle the exception
              this.$showToast('上传失败')
            }
          },
          complete: () => {
            console.log(e)
            uni.hideLoading()
          },
        })
      },
      /**
       * 上传猫照
       */
      clickChooseImgs() {
        uni.chooseImage({
          count: 4,
          sizeType: ['compressed'],
          success: async ret => {
            // console.log(ret)
            this.$showLoading('上传中...')
            let length = ret.tempFilePaths.length
            if(length > 4) {
              this.$showToast('太多了')
              return
            }
            let imgs = []
            try {
              let i = 0
              for (let temp_path of ret.tempFilePaths) {
                this.$showToast(`进度: 0/${length}`)
                let img = await this.$av.upload(temp_path)
                this.$showToast(`进度: ${i + 1}/${length}`)
                imgs.push(img.get('url'))
                i++
              }
              this.imgs = imgs
            } catch (e) {
              console.log(e)
              this.$showToast('上传失败')
            }
          },
          complete: () => {
            uni.hideLoading()
          },
        })
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
    position: relative;
    height: 88upx;
    border-bottom: 2rpx solid #eee;
  }

  .cell picker {
    margin-right: 80upx;
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
    position: absolute;
    top: 50%;
    right: 20upx;
    transform: translateY(-50%);
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
    min-height: 164upx;
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
