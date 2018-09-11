
var WxParse = require('../../wxParse/wxParse.js')
var app = getApp();
Page({
  data: {
    article: ''
  },
  onLoad: function (options) {
    var that = this;
    app.api.fetApi('list', {}).then(res => {
      var article = res.data
      WxParse.wxParse('article', 'html', article, that, 5);
    })

  }
})