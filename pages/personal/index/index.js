"use strict";
var app = getApp();
var root_path = "../../../";
var index_obj = require(root_path+'function/personal_index.js')

Page({
  data:{
    userInfo: {}
    // text:"这是一个页面"
  },
  onLoad:function(options){
    var that = this;
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },
  onReady:function(){
        index_obj.set_title();
  },
  onShow:function(){
        index_obj.set_title();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})