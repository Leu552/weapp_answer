Page({
  data: {
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  onLoad: function () {
    var that = this;
    wx: wx.request({
      url: 'https://www.nannanwj.top/php/api.php',
      data: {
        action: 'joiner_num',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.joiner_num)
        that.setData({
          joiner_num: (res.data.joiner_num)
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


})

