// components/buy/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    partData:{
      type:Object
    },
    hideBuy:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
  
    buyView(e){
      this.triggerEvent("popView",true)
    },
    myevent(e) {
      this.triggerEvent("onGetCount",e.detail)
    },
    aaa(){
      this.triggerEvent("popView",true)
    }
  }
})
