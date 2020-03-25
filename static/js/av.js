import AV from '../lib/av-weapp-min.js'

if(!(AV.applicationId && (AV.applicationKey || AV.masterKey))) {
  let lc = {
    appId: 'm2VENdxPXTCjBuHzmPgHYq9k-9Nh9j0Va',
    appKey: 'TnzJQhcWuQzOSExIoB3CDHu0',
    serverURL: 'https://m2vendxp.lc-cn-e1-shared.com',
  }
  AV.init(lc)
}

export default {
  /**
   * 批量创建
   * @param {array} objects
   */
  createAll(objects) {
    return AV.Object.saveAll(objects)
  },
  /**
   * 批量删除
   * @param {array} objects
   */
  deleteAll(objects) {
    return AV.Object.destroyAll(objects)
  },
  /**
   * 批量更新
   * @param {array} objects
   */
  updateAll(objects) {
    return AV.Object.fetchAll(objects)
  },
  /**
   * 批量保存
   * @param {array} objects
   */
  saveAll(objects) {
    try {
      return AV.Object.saveAll(objects)
    } catch(err) {
      wx.showToast({
        title: err.message,
      })
    }
  },
  /**
   * av新增对象
   * @param {string} classs 新增对象的类
   * @param {object} params 新增参数
   */
  create(classs, params) {
    try {
      return (new (AV.Object.extend(classs))).set(params).save()
    } catch(err) {
      wx.showToast({
        title: err.message,
      })
    }
  },
  /**
   * av基础获取
   * @param {string} classs 搜索类名
   * @param {function} cbForQuery 设置查询条件的中介函数
   */
  read(classs, cbForQuery) {
    let query = new AV.Query(classs)
    // 如果需要额外设置条件，则通过传入这个函数处理
    if(cbForQuery) {
      // 如果是组合搜索，替换处理
      let temp_q = cbForQuery(query)
      if(temp_q) {
        query = temp_q
      }
    }
    return query.find()
  },
  /**
   * av更新对象
   * @param {string} classs 更新对象的类
   * @param {string} id 更新对象的objectId
   * @param {object} params 更新内容
   */
  update(classs, id, params) {
    let obj = AV.Object.createWithoutData(classs, id)
    // 设置属性
    for(const key in params) {
      if(params.hasOwnProperty(key)) {
        const element = params[key]
        obj.set(key, element)
      }
    }
    return obj.save()
  },
  /**
   * av删除对象
   * @param {string} classs 删除对象的类
   * @param {string} id 删除对象的objectId
   */
  delete(classs, id) {
    let obj = AV.Object.createWithoutData(classs, id)
    return obj.destroy()
  },
  /**
   * 上传资源文件
   * @param {string} pat 文件路径
   */
  upload(path) {
    return new AV.File(path, {
      blob: {
        uri: path,
      },
    }).save()
  },
  /**
   * av基础获取数量
   * @param {string} classs 搜索类名
   * @param {function} cbForQuery 设置查询条件的中介函数
   */
  count(classs, cbForQuery) {
    let query = new AV.Query(classs)
    // 如果需要额外设置条件，则通过传入这个函数处理
    if(cbForQuery) {
      cbForQuery(query)
    }
    return query.count()
  },
  /**
   * 登录
   */
  login(username, password) {
    return AV.User.logIn(username, password)
  },
  /**
   * 邮箱登录
   * @param {string} email 邮箱
   * @param {string} password 密码
   */
  loginWithEmail(email, password) {
    return AV.User.loginWithEmail(email, password)
  },
  /**
   * 注册
   */
  regist(username, password) {
    // 创建实例
    const user = new AV.User();

    // 等同于 user.set('username', 'Tom')
    user.setUsername(username);
    user.setPassword(password);
    return user.signUp()
  },
  /**
   * 邮箱注册
   */
  registWithEmail(email, password) {
    // 创建实例
    const user = new AV.User()
  
    // 等同于 user.set('username', 'Tom')
    user.setUsername(email)
    user.setPassword(password)
    
    // 可选
    user.setEmail(email)
    
    return user.signUp()
  },
  /**
   * 获取当前用户
   */
  currentUser() {
    return AV.User.current()
  },
}