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
        // 添加 pause 事件监听器
        document.addEventListener('pause', app.onPause, false);
        // 添加 resume 事件监听器
        document.addEventListener('resume', app.onResume, false);
        app.receivedEvent('deviceready');
    },
    // 当发生 pause 事件以后要做的事
    onPause:function() {
        console.log('应用被暂停了');
    },
   // 当发生 resume 事件以后要做的事
    onResume:function() {
        console.log('应用已经恢复');
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
