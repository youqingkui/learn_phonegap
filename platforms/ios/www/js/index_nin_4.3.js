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
        // 添加 online 事件监听器
        document.addEventListener('online', app.onOnline, false);
        // 添加 offline 事件监听器
        document.addEventListener('offline', app.onOffline, false);
        // 添加 pause 事件监听器
        document.addEventListener('pause', app.onPause, false);
        // 添加 resume 事件监听器
        document.addEventListener('resume', app.onResume, false);
        app.receivedEvent('deviceready');
    },
    // 检查网络连接
    checkConnection:function() {
        console.log('网络连接类型是：' + navigator.connection.type);
    },
    
    // 当发生 online 事件以后要做的事
    onOnline:function() {
        console.log('已经连接到互联网');
    },
    // 当发生 offline 事件以后要做的事
    onOffline:function() {
        console.log('掉线了！');
    },
    // 当发生 pause 事件以后要做的事
    onPause:function() {
        console.log('应用被暂停了');
    },
    // 当发生 resume 事件以后要做的事
    onResume:function() {
        console.log('应用已经恢复');
        app.checkConnection();
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
