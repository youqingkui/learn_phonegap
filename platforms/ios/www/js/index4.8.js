/*
 * PhoneGap Essential Training by ninghao.net
 */

var app = {
    // 应用构造器
    initialize: function() {
        this.bindEvents();
    },
    // 绑定事件监听器
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready 事件处理
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.getPosition();
    },
    //获取用户位置
    getPosition:function(){
        navigator.geolocation.getCurrentPosition(app.geolocationSuccess,app.geolocationError);
    },
    
    //成功获取的地址
    geolocationSuccess:function(position){
        console.log("纬度：" + ' ' + position.coords.latitude + '\n' +
                    "经度：" + ' ' + position.coords.longitude + '\n'
                   );
    },
    //获取出现错误
    geolocationError:function(positionError){
          console.log(
              "错误代号:" + positionError.code + "错误描述:" + positionError.message
                
          );
    },
    
    
    
    
    
    
    
  
    // 接收到事件以后更新 DOM
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
