Ext.define("Messenger", {
    statics : {
        chatHub: null,
        Register: function(config){
            var connection = $.hubConnection("http://localhost:8484/signalr", { useDefaultPath: false });
            var chatHub = connection.createHubProxy("chathub");
            Messenger.chatHub = chatHub;
            chatHub.on("userConnected", config.onUserConnected);
            chatHub.on("userDisconnected", config.onUserDisconnected);
            chatHub.on("sendPrivateMessage", config.onSendPrivateMessage);
            chatHub.on("sendMessage", config.onSendMessage);
            var server = $.connection.chatHub;
            var result = new Ext.Promise(function(resolve, reject) {
                connection.start().done(function(){
                    Messenger.chatHub.invoke("register", config.nickName)
                        .then(function(){
                            Messenger.chatHub.invoke("getUsersOnline")
                                .done(function(userNames){
                                    resolve(userNames);
                                });
                        }, function(){
                            reject();
                        });
                });
            });
            return result;
        },
        SendPublicMessage: function(message){
            if(Messenger.chatHub == null) {
                throw "You need to register before sending a message";
            }
            return new Ext.Promise(function(resolve, reject){
                Messenger.chatHub.invoke("sendPublicMessage", message).then(function(){
                    resolve();
                });
            });
        },
        SendPrivateMessage: function(to, message){
            if(Messenger.chatHub == null) {
                throw "You need to register before sending a message";
            }
             return new Ext.Promise(function(resolve, reject){
                Messenger.chatHub.invoke("sendPrivateMessage", to, message).then(function(){
                    resolve();
                });
            });
        }
    }
});