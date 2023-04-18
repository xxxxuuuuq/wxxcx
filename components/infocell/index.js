// components/infocell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String
      },
      desc:{
        type:String
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
    popView(){
      this.triggerEvent("popView",false)
    }
  }
})
