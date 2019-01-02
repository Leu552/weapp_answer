const app = getApp()
var i = 0;
var a = 0;
var grades = 0;
// let countDownNum = 5;
Page({
  data: {
    timer:'',
    countDownNum:20,
    // questions: '555',
    suiji:'',
    hide:false,
    ifClick:false,
    name: '',
    mobile: '',
  },
  radioChange(e) {
    var that = this;
    console.log(e.detail.value)
    that.setData({
      choice: e.detail.value
    })
    console.log(this.data.choice)
  },

  back:function(option) {
      wx.reLaunch({
        url: '../index/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  
  onLoad: function (options) {
    var that = this;
    wx: wx.request({
      url: 'https://www.nannanwj.top/php/api.php',
      data: {
        action: 'get_question',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data)
        // var num = Object.assign({}, res.data[i]);
        var num = res.data[i];
        var ans = res.data[a];
        console.log(num)
        console.log(i)
        that.setData({
          question: num,
          ans: ans,
          inum:i,
          ifClick:false,
          hide:false,
        })
        i++;
        a++;
      },
      fail: function (res) { },
      complete: function (res) {
       },
    })
    console.log(options)
    that.setData({
      name: options.name,
      mobile: options.mobile
    })
  },
  onShow: function () {
    this.countDown();

    // let countDownNum = 5;
    this.setData({
      ifClick:false
    })
  },
  countDown: function () {
    let that = this;
    // let countDownNum = 5;
    var stock = setInterval(function () {
      that.setData({
        countDownNum: that.data.countDownNum - 1
      })
      console.log(that.data.countDownNum)
      if (that.data.countDownNum === 0) {
        // clearInterval(stock);
        that.next();
        that.setData({
          countDownNum: 0,
          ifClick: true,
          // hide: true,
        })

      }
      if (that.data.countDownNum < 0) {
        // if (that.data.countDownNum === -9) {
        //   clearInterval(stock);
        // } else{
          that.setData({
            countDownNum: 20
          })
        }

      // }
    }, 1000)
  },
  // goto_logs: function () {
  //   var random = Math.floor(Math.random() * 10);
  //   this.setData({
  //     suiji: random
  //   })

  // },
  
  next:function() {
    var that = this;
    if (that.data.ifClick == true) {
      that.setData({
        countDownNum: 20,
      })
      that.onLoad();
    } else if (this.data.countDownNum != 0) {
    console.log(that.data.choice)
    // console.log(that.data.question.right_answer)
    if (that.data.choice == that.data.question.right_answer) {
      this.onLoad();
      grades++;
      console.log(grades)
      this.setData({
        countDownNum: 20,
        hide: false,
      })
    } else {
      this.setData({
        countDownNum: 20,
        hide: true,
      })
      }
    } else {
      if (that.data.choice == that.data.question.right_answer) {
        this.onLoad();
        grades++;
        console.log(grades)
        this.setData({
          countDownNum: 20,
          hide: false,
        })
      } else {
        this.setData({
          // countDownNum: 20,
          hide: true,
        })
      }
    }
    that.setData({
      ifClick:true
    })
    if (i > 9) {
      that.setData({
        countDownNum: 1
      })
      wx: wx.navigateTo({
        // url: '../login/login',
        url: '../login/login?grades=' + grades +'&name=' + that.data.name + '&mobile=' + that.data.mobile,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
      console.log(that.data.name)
    } 
    
  },
})
