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
        var getInfo = document.getElementById("getinfo");
        getInfo.addEventListener("click",app.getGlobalization, false);
        
    },

    //获取全局设置信息
    getGlobalization:function(){
        console.log("click");
        navigator.globalization.getPreferredLanguage(
            function(language){
                console.log("当前语音是:" + language.value);
            },
            function(error){
                console.log(
                    "错误代码:" +error.code +
                    "错误信息:" +error.message
                );
            }
        
        );
        //获取用户当前设备的区域格式
        navigator.globalization.getLocaleName(
            function(locale){
                console.log("当前区域是:" + locale.value);
            },
            function(error){
                console.log(
                    "错误代码:" +error.code +
                    "错误信息:" +error.message
                );
            }
        
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