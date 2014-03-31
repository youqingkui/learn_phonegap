/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor 应用构造器
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener('pause', app.onPause, false);
        document.addEventListener('resume', app.onResume, false);
        document.addEventListener("online", app.onOnline, false);
        document.addEventListener("offline", app.onOffline, false);
        app.receivedEvent('deviceready');
        app.showConfirm();
    },

    //在线onOnline要做的事情
    onOnline:function(){
        console.log("链接到网络了");
    },
    //添加onOffline要做的事情
    onOffline:function(){
        console.log("没有网络链接");
    },
    //添加pause事件要做的事情
    onPause:function(){
        console.log("应用暂停了");
    },
    //添加resume事件要做的事情 
    onResume:function(){
        console.log("应用恢复了");
        app.checkConnection();
        navigator.notification.alert(
            "应用恢复了", //对话框内容
            app.alertDismissed, //按下对话框要做的事情
            "应用状态提醒",   //对话框标题
            "知道了"     //对话框按钮
        
        );
    },
    alertDismissed:function(){
        console.log("已经关掉了对话框");  
    },
    //检查网络链接类型
    checkConnection:function(){
       console.log('网络连接类型是：' + navigator.connection.type);   
    },
    //使用confirm
    showConfirm:function(){
        navigator.notification.confirm(
            "软件有新版本了",
            app.onConfirm,
            "软件更新",
            ["以后再说","立即下载"]
        );   
    },
    //点击不同按钮做的事情
    onConfirm:function(buttonindex){
        if(buttonindex ===1){
            console.log("点击了以后再说");
        }
        else{
            console.log("点击了立即下载");   
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
