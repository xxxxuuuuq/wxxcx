// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prolist: [{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"},{"cover":"/image/classify/phone.png","title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待","price":"1499.00","comment":"3万","rate":"99%","id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9"},{"id":"4a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/miphone.png","title":"黑莓（BlackBerry）KEY2标准版 6GB+64GB双卡双待 4G全网通手机 黑色 移动联通电信手机","price":"3388.00","comment":"6239","rate":"99%"},{"id":"5a4c8b8e4d8c22a97a94b46f58c1f3b9","cover":"/image/classify/huawei.png","title":"HUAWEI P20 Pro 全面屏徕卡三摄游戏手机 6GB+128GB 亮黑色 全网通移动联通电信4G手机 双卡双待","price":"4499.00","comment":"27万","rate":"99%"}],
    page: 1, // 当前请求的page
    size: 5, // 请求数据的size
    noData: false // 是否有更多数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title:options.title,
    })
  },
  switchProlistDetail(e){
    let id=e.currentTarget.dataset.id
    wx.navigateTo({
      url:'/pages/detail/index?id='+id,
    })
  },
  loaData(){
    // wx.showLoading({
    //   title: '加载中...',
    // })
    // wx.request({
    //   url: 'url',
    //   success(){
    //     wx.hideLoading()
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // wx.showToast({
    //   title: '成功',
    //   icon:'success',
    //   duration:2000
    // })
    this.loaData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("到底了");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})