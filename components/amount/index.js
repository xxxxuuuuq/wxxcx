// components/amount/index.js
Component({

  /**
   * 组件的属性列表
   */

  properties: {
    count:{
      type:Number,
      value:1
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
    inputChangeHandle(e) {
      var val=e.detail.value
      this.setData({
        count:val
      })
      var myEventDetail={
        val:val
      }
      this.triggerEvent('myevent',myEventDetail)
    },
    subtract(){
      var count = this.data.count;
      count>1?count--:1
      this.setData({
        count:count
      })
      var myEventDetail = {
        val:count
      }
      this.triggerEvent("myevent",myEventDetail)
      // this.triggerEvent('subevent')
    },

    add(){
      var count = this.data.count
      count++
      this.setData({
        count:count
      })
      var myEventDetail = {
        val:count
      }
      this.triggerEvent("myevent",myEventDetail)
    }
  }
})
