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
        app.getDeviceInfo();
        
    },
    //获取设备信息
    getDeviceInfo:function(){
        deviceInfo = document.getElementById("deviceinfo");  
        deviceInfo.innerHTML = 
            "设备平台:" + device.model + "<br/>" +
            "运行平台:" + device.platform +"<br/>" +
            "平台版本:" + device.version + "<br/>" +
            "UUID:"    + device.uuid + "<br/>" +
            "Cordove:" +device.cordova + "<br/>" ;
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