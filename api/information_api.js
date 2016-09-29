function get_classes(){
    wx.request({
        url: '',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            console.log(res.data)
        }
    });
}


module.exports = {
    get_classes: get_classes,
}