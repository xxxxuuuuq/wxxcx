// components/iou/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    baitiao:{
      type:Array
    },
    hideBaitiao:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectIndex:0//选中角标
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hideBaitiaoView(){
      this.triggerEvent("popView",true)
    },
    selectItem(e){
      let index=e.currentTarget.dataset.index
      this.triggerEvent("updateBaitiao",index)
      this.setData({
        selectIndex:index
      })
    },
    maceBaitiao(){
      this.triggerEvent("popView",true)
      // console.log(this.data);
      // console.log(this.data.selectIndex);
      const selecItem=this.data.baitiao[this.data.selectIndex];
      // console.log(selecItem);
      this.triggerEvent("undateSelect",selecItem)
    }
  }
})
