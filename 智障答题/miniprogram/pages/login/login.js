// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    mobile: '',
    name:'',
    phone:'',
    grades:''
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      grades: options.grades,
      userName: options.name,
      mobile: options.mobile
    })
    console.log(this.data.mobile)
  },
  // userNameInput: function (e) {
  //   this.setData({
  //     userName: e.detail.value
  //   })
  // },

  // mobileInput: function (e) {
  //   this.setData({
  //     mobile: e.detail.value
  //   })
  // },
  start: function () {
    var that=this;
    var userName = this.data.userName;
    var mobile = this.data.mobile;
    console.log(mobile)
    // var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    // var name = /^[u4E00-u9FA5]+$/;
    // if (userName == '') {
    //   wx.showToast({
    //     title: '请输入用户名',
    //     icon: 'succes',
    //     duration: 1000,
    //     mask: true
    //   })
    //   return false
    // } else if (mobile == '') {
    //   wx.showToast({
    //     title: '手机号不能为空',
    //   })

    //   return false
    // }
    // else if (mobile.length != 11) {
    //   wx.showToast({
    //     title: '手机号长度有误！',
    //     icon: 'success',
    //     duration: 1500
    //   })
    //   return false;
    // }
    // var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    // if (!myreg.test(mobile)) {
    //   wx.showToast({
    //     title: '手机号有误！',
    //     icon: 'success',
    //     duration: 1500
    //   })
    //   return false;
    // }
    // that.setData({
    //   names:userName,
    //   phone:mobile
    // })
    wx: wx.request({
      url: 'https://www.nannanwj.top/php/api.php',
      data: {
        action: 'save_user',
        name: this.data.userName,
        phone: this.data.mobile,
        grades: this.data.grades
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(that.data.phone)
        console.log(that.data.name)
      },
      fail: function (resp) {
        console.log(resp)
      },
    })
  
    return true;
    
  },
  /**
   * 生命周期函数--监听页面加载
   */


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})