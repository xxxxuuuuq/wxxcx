// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers:[{
      "image":"/image/jd1.jpg"
    },{
      "image":"/image/jd2.jpg"
    },{
      "image":"/image/jd3.jpg"
    },{
      "image":"/image/jd4.jpg"
    },{
      "image":"/image/jd5.jpg"
    }],
    logos: [{
      "image": "/image/logo1.png",
      "title": "京东超市"
    }, {
      "image": "/image/logo2.png",
      "title": "全球购"
    }, {
      "image": "/image/logo3.png",
      "title": "服装城"
    }, {
      "image": "/image/logo4.png",
      "title": "京东生鲜"
    }, {
      "image": "/image/logo5.png",
      "title": "京东到家"
    }, {
      "image": "/image/logo6.png",
      "title": "充值中心"
    }, {
      "image": "/image/logo7.png",
      "title": "京东金融"
    }, {
      "image": "/image/logo8.png",
      "title": "物流查询"
    }, {
      "image": "/image/logo9.png",
      "title": "领券"
    }, {
      "image": "/image/logo10.png",
      "title": "我的关注"
    }],
    quicks: [{
      "image": "/image/quick1.jpg",
      "price": "￥123"
    }, {
      "image": "/image/quick2.jpg",
      "price": "￥124"
    }, {
      "image": "/image/quick3.jpg",
      "price": "￥125"
    }, {
      "image": "/image/quick4.jpg",
      "price": "￥126"
    }, {
      "image": "/image/quick5.jpg",
      "price": "￥127"
    }, {
      "image": "/image/quick6.jpg",
      "price": "￥128"
    }],
    pageRow: [["/image/ad-0.jpg","/image/ad-big.jpg","/image/ad-1.jpg"],["/image/ad-left.jpg","/image/ad-right.jpg"]],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500
  },
  // scanCode(){
  //   wx.scanCode({
  //     success(res){
  //       console.log(res);
  //     }
  //   })
  // },
// input(e){
//   console.log(e);
// },
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