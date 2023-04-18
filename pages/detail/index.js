// pages/detail/index.js
// 引入接口配置文件urlconfig
// const interfaces = require('../../utils/urlconfig.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    partData:{
      "id":"3a4c8b8e4d8c22a97a94b46f58c1f3b9",
      "loopImgUrl":[
          "/image/classify/phone.png",
          "/image/classify/miphone.png",
          "/image/classify/huawei.png"
      ],
      "title":"荣耀8X Max 7.12英寸90%屏占比珍珠屏 4GB+64GB 魅海蓝 移动联通电信4G全面屏手机 双卡双待",
      "price":"1499.00",
      "count":1,
  },
    baitiao: [
      {
          "desc":"不分期",
          "tip":"先用后付，0服务费",
          "select":true
      },
      {
          "desc":"3期 x 1522.16元起",
          "tip":"含手续费，每期22.50元起，费率0.5%起",
          "select":false
      },
      {
          "desc":"6期 x 772.35元起",
          "tip":"含手续费，每期22.50元起，费率0.5%起",
          "select":false
      },
      {
          "desc":"12期 x 397.38元起",
          "tip":"含手续费，每期22.50元起，费率0.5%起",
          "select":false
      },
      {
          "desc":"24期 x 209.92元起",
          "tip":"含手续费，每期22.50元起，费率0.5%起",
          "select":false
      }
  ],
  baitiaoSelectItem: {
      desc: "【白条支付】首单享立减优惠"
    },
    hideBaitiao:true, // 是否隐藏白条的遮罩
    hideBuy:true, // 是否购买的遮罩
    badgeCount: 0,
  },
  popbuyView(e){
    this.setData({
      hideBuy:e.detail
    })
  },
  popBaitiaoView(e){
    // console.log(e);
    this.setData({
      hideBaitiao:e.detail
    })
  },
  updateBaitiao(e){
    let baitiao=this.data.baitiao
    // console.log(baitiao);
    for(let i=0;i<baitiao.length;i++){
      baitiao[i].select=false
    }
    baitiao[e.detail].select=!baitiao[e.detail].select
    this.setData({
      baitiao
    })
  },
  undateSelectItem(e){
    // console.log(e.detail);
    this.setData({
      baitiaoSelectItem:e.detail
    })
  },
  onGetCount(e){
    var partData=this.data.partData
    partData.count=e.detail.val
    this.setData({
      partData
    })
    console.log(this.data.partData.count);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})