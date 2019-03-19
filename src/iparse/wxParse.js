import wxparse from './wxparse/wxParse.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: String,
      value: '',
      observer: function () {
        this.render();
      }
    },
    type: {
      type: String,
      value: 'html',
      observer: function () {
        this.render();
      }
    },
    padding: {
      type: Number,
      value: 0,
      observer: function () {
        this.render();
      }
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
    render: function () {
      wxparse.wxParse('article', this.properties.type, this.properties.data, this, this.properties.padding);
    },
    /**
     * 处理链接点击事件
     */
    wxParseTagATap: function (e) {
      wx.setClipboardData({ data: e.currentTarget.dataset.src });
    }
  }
})
