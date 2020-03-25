import dayjs from 'dayjs'

// 功能函数临时储存器
let doLastTimeout, doLastOperates = []
// 超时时间
const timeout = 500

export default {
  dayjs,
  /**
   * 队列执行的多个操作，只执行最后一个操作，比如输入内容检索
   * @param {function} operate 传入的操作
   * @param {number} idx (可选)执行特性索引号的操作，一般不会用到
   */
  doAsyncLast(operate, time = timeout, idx) {
    if (typeof operate !== 'function') {
      throw '执行doLast函数报错：需要传入函数！'
    }
    clearTimeout(doLastTimeout)
    doLastTimeout = setTimeout(() => {
      const lastOperate = doLastOperates[doLastOperates.length - 1]
      lastOperate()
      doLastOperates = []
      clearTimeout(doLastTimeout)
      doLastTimeout = null
    }, time)
    doLastOperates.push(operate)
  },
  /**
   * 某瞬间同时执行的多个操作，只执行最后一个操作，比如同时多个网络请求返回然后提示消息
   * @param {function} operate 传入的操作
   * @param {number} idx (可选)执行特性索引号的操作，一般不会用到
   */
  doSyncLast(operate, time = timeout, idx) {
    if (typeof operate !== 'function') {
      throw '执行doLast函数报错：需要传入函数！'
    }
    if (!doLastTimeout) {
      doLastTimeout = setTimeout(() => {
        const lastOperate = doLastOperates[doLastOperates.length - 1]
        lastOperate()
        doLastOperates = []
        clearTimeout(doLastTimeout)
        doLastTimeout = null
      }, time)
    }
    doLastOperates.push(operate)
  },
  /**
   * 数字整数部分保持一定长度，不足用0补充，比如时间
   * @params {number} num 传入的数字
   * @params {number} length 数字左侧留着的长度，默认2是作为常用倒计时
   */
  pointLeftNumberLength(num, length = 2) {
    if(typeof(num) === 'number') {
      let numStr = String(num)
      const leftLength = numStr.split('.')[0].length
      if(length > leftLength) {
        const lengthCut = length - leftLength
        let zeroStr = Array.from({length: lengthCut}, () => '0').join('')
        numStr = zeroStr + numStr
      }
      return numStr
    } else {
      throw '传数字类型!'
    }
  },
  /**
   * 使用dayjs格式化日期
   * @param {any} time 时间
   * @param {string} format 定制格式
   */
  formatDate(time, format) {
    return dayjs(time).format(format || 'YYYY-MM-DD')
  },
  /**
   * 对比今天是明天今天昨天前天等
   * @param {any} time 时间
   */
  formatDateDayByDay(time) {
    const cur = dayjs()
    const diff = dayjs(time).diff(cur, 'day')
    // console.log(diff)
    if (Math.abs(diff) > 2) {
      return dayjs(time).format('YYYY-MM-DD')
    } else {
      let res
      switch (diff) {
        case 2:
          res = '后天'
          break
        case 1:
          res = '明天'
          break
        case 0:
          res = '今天'
          break
        case -1:
          res = '昨天'
          break
        case -2:
          res = '前天'
          break
      }
      return res
    }
  },
  /**
   * 正则替换字符为星号
   * @param start {number} 开始位置
   * @param length {number} 长度
   */
  replaceStar(str, start, length) {
    const regexp = new RegExp(`^(.{${start}}).{${length}}(.*)$`, 'g')
    return str.replace(regexp, `$1${Array.from({length}, () => '*').join('')}$2`)
  },
  /**
   * 获取当前页面
   */
  getCurrentPageUrl() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = `/${currentPage.route}`
    return url
  },
  /**
   * 获取当前页面路径与参数
   */
  getCurrentPageUrlWithArgs() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = currentPage.route
    const options = currentPage.options
    let urlWithArgs = `/${url}?`
    for (let key in options) {
      const value = options[key]
      urlWithArgs += `${key}=${value}&`
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1)
    return urlWithArgs
  },
  /**
   * 从链接获取参数
   * @param {string} path 解析的链接
   */
  getPathParams(path) {
    const search = path.split('?')[1]
    if (search) {
      const key_value_list = search.split('&')
      const obj = {}
      key_value_list.forEach(key_value => {
        let temp_arr = key_value.split('=')
        obj[temp_arr[0]] = temp_arr[1]
      })
      return obj
    } else {
      return {}
    }
  },
  /**
   * 等级数字转文字
   * @param {number} level传入的等级
   */
  getLingyangLevelLabel(level) {
    let label
    switch(level) {
      case 0: label = '超不适合'
      break
      case 1: label = '较不适合'
      break
      case 2: label = '一般'
      break
      case 3: label = '较适合'
      break
      case 4: label = '超适合'
      break
      default: label = '其他'
    }
    return label
  },
  /**
   * 猫品种转换
   */
  getCategoryLabel(number) {
    const categorys = ['其他', '奶牛', '橘猫', '三花', '狸花', '玳瑁', '白猫', '玄猫', '狸花白']
    return categorys[number] || '其他'
  },
}