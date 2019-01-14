// pages/note_add/noteAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteObject: '',
    showModal: 0,
    title:'',
    content:'',
    author:'',
    password:'',
    id:0,
    message:'这是提示'
  },
  /**
   * 
   */
  setNavigationBarTitle:function(key){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(options);
    setTimeout(function(){ //这里忘记为什么要用延时了
      switch (options.isEdit) {
        case '0': wx.setNavigationBarTitle({
          title: '添加笔记'
        }); break;
        default: {
          wx.setNavigationBarTitle({
            title: '修改笔记'
          });
          var noteObject = JSON.parse(options.noteObject);
          that.setData({
            noteObject: noteObject,
            id: noteObject.id,
            title: noteObject.title,
            content: noteObject.content,
            author: noteObject.author
          });
        }; break;
      }
    },20);
    
  },

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
 
  
  /**
   * 弹窗管理（分发确认业务）
   */
  showConfirmDialog: function () {
    if( this.data.id == 0){
      this.showAddConfirmDialog();
    }else{
      this.showUpdateConfirmDialog();
    }
  },

  /**
   * 弹窗（注册密码）
   */
  showAddConfirmDialog: function () {
    this.setData({
      showModal: 1
    })
  },
  /**
   * 弹窗（修改确认密码）
   */
  showUpdateConfirmDialog: function () {
    this.setData({
      showModal: 2
    })
  },
  /**
   * 弹窗（成功提示）
   */
  showSuccessDialog: function () {
    this.setData({
      showModal: 3
    })
  },
  /**
   * 弹窗（错误提示）
   */
  showFailDialog: function () {
    this.setData({
      showModal: 4
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: 0
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    var that = this;
    var showModal = this.data.showModal;
    this.hideModal();
    that.confirm(showModal);
  },
  confirmRigister:function(){
    var that = this;
    console.log("注册确认");
    if (that.data.title == '' ||
     that.data.content == ''||
     that.data.author == ''){
      that.showMessage(4, '有内容为空，请检查');
     }else{
       wx.request({
         url: 'https://www.oathtomylove.top/japan/note/add',
         data:{
           title: that.data.title,
           content: that.data.content,
           author: that.data.author,
           password: that.data.password
          },
         header: {
           "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;"
         },
         method: 'post',
         success: function (res) {
           console.log(res);
           that.setData({
             id: res.data[0].id
           });
           if (res.statusCode == 200) {
             that.showMessage(3,'添加成功，确认后跳转到笔记详情页');
           }
         },
         fail: function () {
           console.log("[register] fail");
           that.showMessage(4, '添加失败');
         },
         complete: function () {
           console.log("[register] complete");
         }
       })
     }
    
  },
  confirmEdit: function () {
    var that = this;
    console.log("修改确认");
    if (that.data.title == '' ||
      that.data.content == '' ||
      that.data.author == '') {
      that.showMessage(4, '有内容为空，请检查');
    } else {
      wx.request({
        url: 'https://www.oathtomylove.top/japan/note/check',
        data: {
          id: that.data.id,
          password: that.data.password
        },
        header: {
          "Content-Type": "charset=utf-8;"
        },
        method: 'get',
        success: function (res) {
          console.log(res);
          if (res.statusCode == 200 && res.data == 1) {
            wx.request({
              url: 'https://www.oathtomylove.top/japan/note/update',
              data: {
                id: that.data.id,
                title: that.data.title,
                content: that.data.content,
                author: that.data.author,
              },
              header: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;"
              },
              method: 'post',
              success: function (res) {
                console.log(res);
                if (res.statusCode == 200) {
                  that.showMessage(3, '修改成功');
                }
              },
              fail: function () {
                console.log("[update] fail");
                that.showMessage(4, '修改时出错了');
              },
              complete: function () {
                console.log("[update] complete");
              }
            })
          }else{
            that.showMessage(4, '密码错误');
          }
        },
        fail: function () {
          console.log("[update] fail");
          that.showMessage(4, '密码检验时出错了');
        },
        complete: function () {
          console.log("[update] complete");
        }
      })
    }
  },
  confirmSuccess: function () {
    var that = this;
    console.log("成功提示确认");
    var jump = {
      id: that.data.id,
      title: that.data.title,
      content: that.data.content,
      author: that.data.author
    }
    var noteObject = JSON.stringify(jump);
    wx.redirectTo({
      url: '/pages/note_detail/noteDetail?noteObject=' + noteObject,
    })
  },
  confirmError: function () {
    console.log("错误提示确认");
  },
  showMessage:function(key,message){
    this.setData({
      showModal: key,
      message: message
    });
  },

  confirm: function (showModal) {
    var that = this;
    switch (showModal) {
      case 1: that.confirmRigister(); break;
      case 2: that.confirmEdit(); break;
      case 3: that.confirmSuccess(); break;
      case 4: that.confirmError(); break;
      default: break;
    }
  },

  //----------- 刷新数据
  /**
   * 刷新密码
   */
  getPwd:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  /**
   * 刷新标题
   */
  getTitle:function(e){
    this.setData({
      title: e.detail.value
    })
  },
  /**
   * 刷新内容
   */
  getContent:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  /**
   * 刷新署名
   */
  getAuthor:function(e){
    this.setData({
      author: e.detail.value
    })
  }


})