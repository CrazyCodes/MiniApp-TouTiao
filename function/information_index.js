var redirect_url = '/pages/information/detail/detail?';

function redirectTo_index(event){
    wx.navigateTo({
        url: redirect_url+'id='+event.currentTarget.id
    });
}



module.exports = {
  redirectTo_index: redirectTo_index,

}